import { GlobalConfig } from "payload/types";
import { isAdmin } from "../../auth";

export const Homepage: GlobalConfig = {
    slug: "homepage",
    access: {
        read: () => true,
        update: isAdmin
    },
    fields: [
        {
            name: "header",
            type: "group",
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true
                },
                {
                    name: "title2",
                    type: "text"
                },
                {
                    name: "paragraph",
                    type: "text"
                },
                {
                    name: "anchor1",
                    type: "text",
                    required: true
                },
                {
                    name: "anchor2",
                    type: "text",
                    required: true 
                },
                {
                    name: "image",
                    type: "group",
                    fields: [
                        {
                            name: "src",
                            type: "text"
                        },
                        {
                            name: "alt",
                            type: "text"
                        }
                    ]
                }
            ]
        },
        {
            name: "inlineProducts",
            type: "group",
            fields: [
                {
                    name: "title",
                    type: "text"
                },
                {
                    name: "products",
                    type: "relationship",
                    relationTo: "products",
                    hasMany: true
                }
            ]
        },
        {
            name: "brands",
            type: "group",
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true,
                },
                {
                    name: "brands",
                    type: "array",
                    labels: {
                        singular: "brand",
                        plural: "brands"
                    },
                    minRows: 2,
                    maxRows: 5,
                    fields: [
                        {
                            name: "src",
                            type: "text"
                        },
                        {
                            name: "alt",
                            type: "text"
                        }
                    ]
                }
            ]
        },
        {
            name: "newArrivals",
            type: "group",
            fields: [
                {
                    name: "title",
                    type: "text"
                },
                {
                    name: "products",
                    type: "relationship",
                    relationTo: "products",
                    hasMany: true
                }
            ]
        },
        {
            name: "newsLetter",
            type: "group",
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true,
                },
                {
                    name: "shortTitle",
                    type: "text",
                    required: true,
                },
                {
                    name: "emailInput",
                    type: "group",
                    fields: [
                        {
                            name: "label",
                            type: "text"
                        },
                        {
                            name: "placeholder",
                            type: "text"
                        },
                        {
                            name: "inputHelper",
                            type: "text"
                        }
                    ]
                },
                {
                    name: "buttonLabel",
                    type: "text"
                }
            ]
        }
    ]
}