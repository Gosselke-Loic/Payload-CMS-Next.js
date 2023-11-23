import { EndpointsModel } from "@/shared"

export const endpoints: EndpointsModel = {
    external: {
        globals: {
            homepage: "/globals/homepage",
            register: "/globals/register",
            login: "/globals/login"
        },
        datas: {
            products: "/products"
        },
    },
    local: {
        products: "http://localhost:3001/api/products",
        research: "http://localhost:3001/api/search",
        global: "http://localhost:3001/api/global"
    }
}