///<reference path="../../headers/common.d.ts" />

import coreModule from '../core_module';

coreModule.directive('giveFocus', function() {
  return function(scope, element, attrs) {
    element.click(function(e) {
      e.stopPropagation();
    });

    scope.$watch(attrs.giveFocus, function (newValue) {
      if (!newValue) {
        return;
      }
      setTimeout(function() {
        element.focus();
        var domEl = element[0];
        if (domEl.setSelectionRange) {
          var pos = element.val().length * 2;
          domEl.setSelectionRange(pos, pos);
        }
      }, 200);
    }, true);
  };
});

export default {};
