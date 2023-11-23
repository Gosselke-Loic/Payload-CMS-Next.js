type externalModel = {
    globals: {
        homepage: string;
        register: string;
        login: string;
    }
    datas: {
        products: string
    }
}
type localEndponitsModel = {
    products: string;
    research: string;
    global: string;
}

export interface EndpointsModel {
    external: externalModel;
    local: localEndponitsModel;
}