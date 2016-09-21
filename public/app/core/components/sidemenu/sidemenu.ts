///<reference path="../../../headers/common.d.ts" />

import config from 'app/core/config';
import _ from 'lodash';
import $ from 'jquery';
import coreModule from '../../core_module';

export class SideMenuCtrl {
  isSignedIn: boolean;
  showSignout: boolean;
  user: any;
  mainLinks: any;
  orgMenu: any;
  appSubUrl: string;
  loginUrl: string;

  /** @ngInject */
  constructor(private $scope, private $location, private contextSrv, private backendSrv, private $element) {
    this.isSignedIn = contextSrv.isSignedIn;
    this.user = contextSrv.user;
    this.appSubUrl = config.appSubUrl;
    this.showSignout = this.contextSrv.isSignedIn && !config['authProxyEnabled'];

    this.mainLinks = config.bootData.mainNavLinks;
    this.openUserDropdown();
    this.loginUrl = 'login?redirect=' + encodeURIComponent(this.$location.path());

    this.$scope.$on('$routeChangeSuccess', () => {
      if (!this.contextSrv.pinned) {
        this.contextSrv.sidemenu = false;
      }
      this.loginUrl = 'login?redirect=' + encodeURIComponent(this.$location.path());
    });
  }

 getUrl(url) {
   return config.appSubUrl + url;
 }

 openUserDropdown() {
   this.orgMenu = [
     {section: 'You', cssClass: 'dropdown-menu-title'},
     {text: 'Profile', url: this.getUrl('/profile')},
   ];

   if (this.isSignedIn) {
     this.orgMenu.push({text: "Sign out", url: this.getUrl("/logout"), target: "_self"});
   }

   if (this.contextSrv.hasRole('Admin')) {
     this.orgMenu.push({section: this.user.orgName, cssClass: 'dropdown-menu-title'});
     this.orgMenu.push({
       text: "Preferences",
       url: this.getUrl("/org"),
     });
     this.orgMenu.push({
       text: "Users",
       url: this.getUrl("/org/users"),
     });
     this.orgMenu.push({
       text: "API Keys",
       url: this.getUrl("/org/apikeys"),
     });
   }

   this.orgMenu.push({cssClass: "divider"});

   this.backendSrv.get('/api/user/orgs').then(orgs => {
     orgs.forEach(org => {
       if (org.orgId === this.contextSrv.user.orgId) {
         return;
       }

       this.orgMenu.push({
         text: "Switch to " + org.name,
         icon: "fa fa-fw fa-random",
         url: this.getUrl('/profile/switch-org/' + org.orgId),
         target: '_self'
       });
     });

     if (config.allowOrgCreate) {
       this.orgMenu.push({text: "New organization", icon: "fa fa-fw fa-plus", url: this.getUrl('/org/new')});
     }
   });
 }
}

export function sideMenuDirective() {
  return {
    restrict: 'E',
    templateUrl: 'public/app/core/components/sidemenu/sidemenu.html',
    controller: SideMenuCtrl,
    bindToController: true,
    controllerAs: 'ctrl',
    scope: {},
    link: function(scope, elem) {
      // hack to hide dropdown menu
      elem.on('click.dropdown', '.dropdown-menu a', function(evt) {
        var menu = $(evt.target).parents('.dropdown-menu');
        var parent = menu.parent();
        menu.detach();

        setTimeout(function() {
          parent.append(menu);
        }, 100);
      });

      scope.$on("$destory", function() {
        elem.off('click.dropdown');
      });
    }
  };
}

coreModule.directive('sidemenu', sideMenuDirective);
