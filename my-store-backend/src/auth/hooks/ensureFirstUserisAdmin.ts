import type { FieldHook } from "payload/types";
import { User } from "payload/generated-types";

export const ensureFirstUserisAdmin: FieldHook<User> = async ({ req, operation, value }) => {
    if(operation !== "create") return value;

    const users = await req.payload.find({ collection: "users", limit: 0, depth: 0 });
    if(users.totalDocs === 0) {
        if(!(value || []).includes("admin")) {
            return [...(value || []), "admin"];
        }
    }
}