import { GlobalConfig } from "payload/types";
import { isAdmin } from "../../auth";

export const Navbar: GlobalConfig = {
    slug: "navbar",
    access: {
        read: () => true,
        update: isAdmin
    },
    fields: [
        {
            name: "categories",
            type: "array",
            minRows: 2,
            maxRows: 7,
            fields: [
                {
                    name: "id",
                    type: "text"
                },
                {
                    name: "name",
                    type: "text"
                },
                {
                    name: "featured",
                    type: "array",
                    minRows: 1,
                    maxRows: 2,
                    fields: [
                        {
                            name: "name",
                            type: "text"
                        },
                        {
                            name: "href",
                            type: "text"
                        },
                        {
                            name: "src",
                            type: "text"
                        },
                        {
                            name: "alt",
                            type: "text"
                        }
                    ]
                },
                {
                    name: "sections",
                    type: "array",
                    fields: [
                        {
                           name: "id",
                           type: "text" 
                        },
                        {
                            name: "name",
                            type: "text"
                        },
                        {
                            name: "items",
                            type: "array",
                            minRows: 2,
                            maxRows: 10,
                            fields: [
                                {
                                    name: "name",
                                    type: "text"  
                                },
                                {
                                    name: "href",
                                    type: "text"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "pages",
            type: "array",
            fields: [
                {
                    name: "name",
                    type: "text"
                },
                {
                    name: "href",
                    type: "text"
                }
            ]
        }
    ]
}