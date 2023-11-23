import path from 'path';
import { buildConfig } from 'payload/config';

import {
    Users,
    Products,
} from './collections';
import {
    Navbar,
    Footer,
    Register,
    Login,
    ProductPage,
    Homepage
} from './globals';


export default buildConfig({
    serverURL: 'http://localhost:3000',
    admin: {
        user: Users.slug,
    },
    collections: [
        Users,
        Products,
    ],
    globals: [
        Navbar,
        Footer,
        Login,
        Register,
        ProductPage,
        Homepage
    ],
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
    localization: {
        locales: [
            "FR",
            "DE",
            "IT"
        ],
        defaultLocale: "FR",
        fallback: true
    }
});