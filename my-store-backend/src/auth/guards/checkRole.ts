import { User } from 'payload/generated-types';

export const checkRole = (user?: User): boolean => {
    if(!user) return false;
    if (user.roles.includes("admin")) return true;
    return false;
}