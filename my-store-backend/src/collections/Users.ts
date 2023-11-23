import { CollectionConfig } from 'payload/types';
import {
    isAdmin,
    isAdminFieldLevel,
    isAdminOrSelf,
    isPublic,
    checkRole,
    ensureFirstUserisAdmin,
    loginAfterCreate
} from '../auth';

export const Users: CollectionConfig = {
    slug: 'users',
    auth: true,
    admin: {
        useAsTitle: 'email',
    },
    access: {
        create: isPublic,
        read: isAdminOrSelf,
        update: isAdminOrSelf,
        delete: isAdmin,
        admin: ({ req: { user } }) => checkRole(user)
    },
    hooks: {
        //beforeChange: [createStripeCustomer],
        afterChange: [loginAfterCreate]
    },
    fields: [
        {
            type: "row",
            fields: [
                {
                    name: "firstName",
                    type: "text",
                    saveToJWT: true,
                    required: true
                },
                {
                    name: "lastName",
                    type: "text",
                    saveToJWT: true,
                    required: true
                },
            ]
        },
        {
            name: 'purchases',
            label: 'Purchases',
            type: 'relationship',
            relationTo: 'products',
            hasMany: true
        },
        {
            label: 'Cart',
            name: 'cart',
            type: 'group',
            fields: [
                {
                    name: 'items',
                    label: 'Items',
                    type: 'array',
                    fields: [
                        {
                            name: 'product',
                            type: 'relationship',
                            relationTo: 'products',
                        },
                        {
                            name: 'quantity',
                            type: 'number',
                            min: 1,
                            admin: {
                                step: 1,
                            },
                        },
                    ],
                }
            ],
        },
        {
            name: 'roles',
            saveToJWT: true,
            type: 'select',
            required: true,
            access: {
                update: isAdminFieldLevel
            },
            hooks: {
                beforeChange: [ensureFirstUserisAdmin]
            },
            defaultValue: 'public',
            options: [
                {
                    label: 'Admin',
                    value: 'admin',
                },
                {
                    label: 'User',
                    value: 'user',
                }
            ]
          },
    ],
    timestamps: true
};