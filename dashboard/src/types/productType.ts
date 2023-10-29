export type Product = {
    id: string;
    name: string;
    description: string;
    price: string;
    rating: number;
    reviewCount: number;
    href: string;
    imageSrc: string;
    imageAlt: string;
    colors: {
        name: string;
        class: string;
        selectedClass: string;
    }[];
    sizes: {
        name: string;
        inStock: boolean;
    }[];

}