export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    rating: number;
    reviewCount: number;
    href: string;
    imageSrc: string[];
    imageAlt: string;
    colors: Array<{ name: string; class: string; }>;
    sizes: Array<{ name: string; inStock: boolean }>;
}