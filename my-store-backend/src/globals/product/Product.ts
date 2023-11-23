import { GlobalConfig } from "payload/types";
import { isAdmin } from "../../auth";

export const ProductPage: GlobalConfig = {
    slug: "productPage",
    access: {
        read: () => true,
        update: isAdmin
    },
    fields: [
        {
            name: "information",
            label: "section of details",
            type: "text"
        },
        {
            name: "date",
            label: "date of parution",
            type: "text"
        },
        {
           name: "button",
           label: "button text",
           type: "text" 
        }
    ]
}