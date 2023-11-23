import { Access } from "payload/config";
import { User } from "payload/generated-types";

export const isAdminOrSelf: Access<any, User> = ({ req: { user } }) => {
    if(!user) return false;

    if (user.roles?.includes('admin')) {
      return true;
    }

    return {
      id: {
        equals: user.id,
      }
    }
}