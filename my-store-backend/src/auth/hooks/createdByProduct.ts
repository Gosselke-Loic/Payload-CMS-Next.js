import type { BeforeChangeHook } from "payload/dist/collections/config/types";

export const createdByProduct: BeforeChangeHook = async ({ req, operation, data }) => {
    if (operation === 'create') {
        if (req.user) {
            data.createdBy = req.user.id;
            return data;
        }
    }
}