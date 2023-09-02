
export interface Product {
    id: string;
    name: string;
    images: Array<string>;
    categories: string;
    tags: Array<string>;
    info?: string;
    description?: string;
    specifications?: string;
    badges?: Array<string>;
};

export interface ProductCard {
    id: string;
    img: string;
    name: string;
    categories: string;
    tags: Array<string>;
    badges: Array<string>;
}