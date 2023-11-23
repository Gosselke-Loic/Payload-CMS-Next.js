import { CollectionConfig, Block } from 'payload/types';
import { createdByProduct, deleteProductFromCarts, isAdmin, isPublic } from '../auth';

const Details: Block = {
    slug: "information",
    fields: [   
        {
            name: "name",
            type: "text"
        },
        {
            name: "value",
            type: "text"
        }
    ]
}

export const Products: CollectionConfig = {
    slug: "products",
    access: {
        create: isAdmin,
        update: isAdmin,
        read: isPublic,
        delete: isAdmin
    },
    admin: {
        useAsTitle: "name",
    },
    hooks: {
        beforeChange: [createdByProduct],
        afterDelete: [deleteProductFromCarts]
    },
    versions: {
        drafts: true
    },
    fields: [
        {
            name: "name",
            type: "text",
            required: true
        },
        {
            name: 'createdBy',
            type: 'relationship',
            relationTo: 'users',
            access: {
                update: () => false,
            },
            admin: {
                readOnly: true,
                position: 'sidebar',
                condition: data => Boolean(data?.createdBy)
            },
        },
        {
            name: "stock",
            type: "number",
            required: true
        },
        {
            name: "price",
            type: "number"
        },
        {
            name: "date",
            required: true,
            label: "date of parution",
            type: "date",
            admin: {
                description: "DD/MM/YYYY"
            }
        },
        {
            name: "description",
            type: "text",
            required: true,
            minLength: 20,
            maxLength: 160
        },
        {
            name: "slider",
            type: "array",
            label: "image slider",
            minRows: 1,
            maxRows: 10,
            labels: {
                singular: 'Slide',
                plural: 'Slides'
            },
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
        },
        {
            name: "breadcrumbs",
            type: "array",
            minRows: 1,
            maxRows: 10,
            fields: [
                {
                    name: "name",
                    type: "text"
                }
            ]
        },
        {
            name: "details",
            label: "more informations",
            type: "blocks",
            blocks: [
                Details
            ]
        },
        {
            name: "tags",
            type: "array",
            minRows: 1,
            maxRows: 10,
            labels: {
                singular: 'Tag',
                plural: 'Tags'
            },
            fields: [
                {
                    name: "id",
                    type: "number"
                },
                {
                    name: "name",
                    type: "text"
                }
            ]
        },
        {
            name: "reviews",
            type: "array",
            labels: {
                singular: "review",
                plural: "reviews"
            },
            fields: [ 
                {
                    name: "review",
                    type: "group",
                    fields: [
                        {
                            name: "user",
                            type: "relationship",
                            relationTo: "users",
                            hasMany: false
                        },    
                        {
                            name: "opinion",
                            type: "text"
                        },
                        {
                            name: "average",
                            type: "number",
                            min: 0,
                            max: 5
                        }
                    ]
                }
            ]
        }
    ],
   
}