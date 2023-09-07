export interface SideMenuItem {
    id: any;
    name: any;
    group: string;
    groupName: string;
}
export interface CsItem {
    id: any;
    datetime: string;
    name: any;
    tags: Array<string>;
    content: string;
    thumbnailContent: string;
    thumbnailImage?: string;
    icons?: Array<string>;
    images?: Array<string>;
}
export interface CsCard {
    id: any;
    datetime: string;
    name: any;
    tags: Array<string>;
    thumbnailContent: string;
    thumbnailImage?: string;
    icons?: Array<string>;
}