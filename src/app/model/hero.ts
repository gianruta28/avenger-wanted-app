export interface Thumbnail{
    path: string;
    extension: string;
}


export interface Hero {
    id: number;
    name: string;
    thumbnail: Thumbnail;
    description: string;
}