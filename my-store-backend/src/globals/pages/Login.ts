import { GlobalConfig } from "payload/types";
import { isAdmin } from "../../auth";

export const Login: GlobalConfig = {
    slug: "login",
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
            name: "titleSubmit",
            required: true,
            type: "text"
        }
    ]
}