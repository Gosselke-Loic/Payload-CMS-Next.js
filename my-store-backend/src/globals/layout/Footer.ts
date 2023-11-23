import { GlobalConfig } from "payload/types";
import { isAdmin } from "../../auth";

export const Footer: GlobalConfig = {
    slug: "footer",
    access: {
        read: () => true,
        update: isAdmin
    },
    fields: [
        {
            name: "fixedContent",
            type: "group",
            fields: [
                {
                    name: "text",
                    type: "text"
                }, 
                {
                    name: "socialLinks",
                    type: "array",
                    minRows: 1,
                    maxRows: 6,
                    fields: [
                        {
                            name: "href",
                            type: "text"
                        }
                    ]
                }
            ]
        },
        {
            name: "Colunms",
            type: "array",
            minRows: 1,
            maxRows: 5,
            labels: {
                singular: 'Colunm',
                plural: 'Columns'
            },
            fields: [
                {
                    name: "title",
                    type: "text"
                },
                {
                    name: "content",
                    type: "array",
                    minRows: 1,
                    fields: [
                        {
                            name: "title",
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
}