export declare const app: {
    id: string;
    name: string;
    domain: string;
    showBigLogo: boolean;
    showToolbarLogo: boolean;
    showAvatar: boolean;
    logoBlack: string;
    logoWhite: string;
    logoIcon: string;
    assetsLocation: string;
    imgBlankState: string;
    loadingImage: string;
    errorImage: string;
    smallLoader: string;
    defaultObjectWidth: number;
    defaultObjectHeight: number;
    adminIds: string[] | undefined;
    helpUrl: string;
    upgradeLink: string;
    showShoppingCarts: boolean;
    showBoltPay: boolean;
    showProviderStep: boolean;
    defaultProvider: boolean;
    cloudfrontDistribution: string | undefined;
    cloudfrontDomain: string;
    loadIntercom: boolean;
    ecommerce: boolean;
    salesfunnel: {
        name: string;
        logoIcon: string;
        logoBlack: string;
        logoWhite: string;
        helpUrl: string;
        loadIntercom: boolean;
    };
    drizzio: {
        name: string;
        logoIcon: string;
        logoBlack: string;
        logoWhite: string;
        helpUrl: string;
        domain: string;
        cloudfrontDistribution: string;
        colors: {
            darkColor: string;
        };
        loadIntercom: boolean;
    };
    launchOS: {
        name: string;
        logoIcon: string;
        logoBlack: string;
        logoWhite: string;
        loadIntercom: boolean;
    };
};
declare const _default: {
    app: {
        id: string;
        name: string;
        domain: string;
        showBigLogo: boolean;
        showToolbarLogo: boolean;
        showAvatar: boolean;
        logoBlack: string;
        logoWhite: string;
        logoIcon: string;
        assetsLocation: string;
        imgBlankState: string;
        loadingImage: string;
        errorImage: string;
        smallLoader: string;
        defaultObjectWidth: number;
        defaultObjectHeight: number;
        adminIds: string[] | undefined;
        helpUrl: string;
        upgradeLink: string;
        showShoppingCarts: boolean;
        showBoltPay: boolean;
        showProviderStep: boolean;
        defaultProvider: boolean;
        cloudfrontDistribution: string | undefined;
        cloudfrontDomain: string;
        loadIntercom: boolean;
        ecommerce: boolean;
        salesfunnel: {
            name: string;
            logoIcon: string;
            logoBlack: string;
            logoWhite: string;
            helpUrl: string;
            loadIntercom: boolean;
        };
        drizzio: {
            name: string;
            logoIcon: string;
            logoBlack: string;
            logoWhite: string;
            helpUrl: string;
            domain: string;
            cloudfrontDistribution: string;
            colors: {
                darkColor: string;
            };
            loadIntercom: boolean;
        };
        launchOS: {
            name: string;
            logoIcon: string;
            logoBlack: string;
            logoWhite: string;
            loadIntercom: boolean;
        };
    };
    state: string;
    user: {
        adminId: string | undefined;
    };
    database: {
        id: string | undefined;
        websocketId: string;
    };
    campaigns: {
        allPages: {
            id: number;
            name: string;
            screenshot: string;
        }[];
    };
    pages: {
        blankPage: {
            parent: boolean;
            state: string;
            id: number;
            properties: {
                height: string;
            };
            type: string;
            canHaveChildren: boolean;
        }[];
    };
    testItem: {
        type: string;
        id: number;
        className: boolean;
        html: string;
        parent: number;
        properties: boolean;
    };
    defaultCampaignItem: {
        type: string;
        connectTo: null;
    };
    sampleCampaignContent: ({
        id: string;
        name: string;
        screenshot: string;
        type: string;
        connectTo: string;
        x: number;
        y: number;
        settings?: undefined;
    } | {
        id: string;
        name: string;
        screenshot: string;
        type: string;
        connectTo: string;
        x: number;
        y: number;
        settings: {
            templateType: string;
            pageId: number;
        };
    })[];
    mandatorySettings: number;
    simpleApi: string | undefined;
    websocketUrl: string | undefined;
    fileApi: string | undefined;
};
export default _default;
