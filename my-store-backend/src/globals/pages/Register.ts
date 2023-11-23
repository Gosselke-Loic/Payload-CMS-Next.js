import { GlobalConfig } from "payload/types";
import { isAdmin } from "../../auth";

export const Register: GlobalConfig = {
    slug: "register",
    access: {
        read: () => true,
        update: isAdmin
    },
    fields: [
        {
            name: "title",
            required: true,
            type: "text"
        },
        {
            name: "nameInput",
            type: "group",
            fields: [
                {
                    name: "label",
                    required: true,
                    type: "text"
                },
                {
                    name: "placeholder",
                    required: true,
                    type: "text"
                },
                {
                    name: "error",
                    type: "text",
                    required: true
                }
            ]
        },
        {
            name: "lastnameInput",
            type: "group",
            fields: [
                {
                    name: "label",
                    required: true,
                    type: "text"
                },
                {
                    name: "placeholder",
                    required: true,
                    type: "text"
                },
                {
                    name: "error",
                    type: "text",
                    required: true
                }
            ]
        },
        {
            name: "emailInput",
            type: "group",
            fields: [
                {
                    name: "label",
                    required: true,
                    type: "text"
                },
                {
                    name: "placeholder",
                    required: true,
                    type: "text"
                },
                {
                    name: "error",
                    type: "text",
                    required: true
                }
            ]
        },
        {
            name: "passwordInput",
            type: "group",
            fields: [
                {
                    name: "label",
                    required: true,
                    type: "text"
                },
                {
                    name: "placeholder",
                    required: true,
                    type: "text"
                },
                {
                    name: "error",
                    type: "text",
                    required: true
                }
            ]
        },
        {
            name: "passwordConfirmInput",
            type: "group",
            fields: [
                {
                    name: "label",
                    required: true,
                    type: "text"
                },
                {
                    name: "placeholder",
                    required: true,
                    type: "text"
                },
                {
                    name: "error",
                    type: "text",
                    required: true
                }
            ]
        },
        {
            name: "checkboxes",
            type: "array",
            minRows: 2,
            labels: {
                singular: "checkbox",
                plural: "checkboxes"
            },
            fields: [
                {
                    name: "label",
                    type: "text"
                }
            ]
        },
        {
            name: "titleSubmit",
            required: true,
            type: "text"
        }
    ]
}