/// <reference path="../../../../public/app/headers/common.d.ts" />
export declare class ProfileCtrl {
    private backendSrv;
    private contextSrv;
    private $location;
    user: any;
    old_theme: any;
    orgs: any;
    userForm: any;
    /** @ngInject **/
    constructor(backendSrv: any, contextSrv: any, $location: any);
    getUser(): void;
    getUserOrgs(): void;
    setUsingOrg(org: any): void;
    update(): void;
}
