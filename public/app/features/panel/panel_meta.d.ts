declare class PanelMeta {
    description: any;
    fullscreen: any;
    editIcon: any;
    panelName: any;
    menu: any;
    editorTabs: any;
    extendedMenu: any;
    constructor(options: any);
    addMenuItem(text: any, icon: any, click: any, role?: any): void;
    addExtendedMenuItem(text: any, icon: any, click: any, role?: any): void;
    addEditorTab(title: any, src: any): void;
}
export = PanelMeta;
