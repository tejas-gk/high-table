import xlsx, { IJsonSheet } from "json-as-xlsx";
import { data } from "@/config/products";

export function downloadToExcel() {
    let columns: IJsonSheet[] = [
        {
            sheet: "Product",
            columns: [
                { label: "Product ID", value: "id" },
                { label: "Name", value: "name" },
                { label: "Price", value: "price" },
                { label: "rating", value: "rating" },
            ],
            // @ts-ignore
            content: data,
        },
    ];

    let settings = {
        fileName: "Products Excel",
    };

    xlsx(columns, settings);
}