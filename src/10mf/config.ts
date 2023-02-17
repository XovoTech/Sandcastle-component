import _ from "lodash";

let wnd = { location: { hostname: "" } }
const isBrowser = typeof window !== "undefined"
if (isBrowser) wnd = window;

// const state = "local";
// const state = "staging";
const state: string = "production";
// const state = "testing";

// let whitelabelId = "10mf";
// let whitelabelId = "drizzio"
let whitelabelId = "launchOS"

// if (state === "production") whitelabelId = "10mf";
// if (window.location.hostname === "members.10minutefunnels.com")
//   whitelabelId = "10mf";
// if (state === "testing") whitelabelId = "10mf";
// if (state === "staging") whitelabelId = "10mf";

if (wnd.location.hostname === "app.tenminutefunnels.com") whitelabelId = "10mf";
if (wnd.location.hostname === "app.salesfunnel.com") whitelabelId = "salesfunnel";
if (wnd.location.hostname === "tmf.drizzio.com") whitelabelId = "drizzio";

let adminId,
  adminIds,
  databaseId,
  simpleApi,
  websocketUrl,
  fileApi,
  cloudfrontDistribution;
if (state === "local") {
  adminId = "cjj7nq5ss02io01169z22tnwg";
  adminIds = ["cjyuon38x00fa0792wzw2v1lu"];
  databaseId = "cjp3yh54p0006015804un5vec";
  simpleApi = `http://${wnd.location.hostname}:60000/simple/v1`;
  websocketUrl = `ws://${wnd.location.hostname}:60000/subscriptions/v1`;
  cloudfrontDistribution = "E3SM2W9RZFSO5L";
} else if (state === "staging") {
  adminIds = [
    "cjyuon38x00fa0792wzw2v1lu"
  ];
  databaseId = "cjm6l9voj2tys0173b91a94ib";
  // databaseId = 'cjn14vhwc5pce0129kz7elmp5';
  simpleApi = "https://api.graph.cool/simple/v1";
  websocketUrl = "wss://subscriptions.us-west-2.graph.cool/v1";
  fileApi = "https://api.graph.cool/file/v1";
  cloudfrontDistribution = "E3SM2W9RZFSO5L";
} else if (state === "testing") {
  adminId = "cjk2ip4ji0yuv0163gz9rr0l9";
  adminIds = ["cjmc5a05700420123j5y6zgnh", "cjk2japmt11oh0105fbyq7o8u"];
  databaseId = "cjlicgih61m630187gczcs51t";
  simpleApi = "https://api.graph.cool/simple/v1";
  websocketUrl = "wss://subscriptions.us-west-2.graph.cool/v1";
  fileApi = "https://api.graph.cool/file/v1";
  cloudfrontDistribution = "E31QPSUQXMU2CW";
} else if (state === "production") {
  adminId = "cjk2ip4ji0yuv0163gz9rr0l9";
  adminIds = ["cjyuon38x00fa0792wzw2v1lu"];
  // databaseId = 'cjliam6df617z01194tbpgonu';
  databaseId = "cjlicgih61m630187gczcs51t";
  simpleApi = "https://api.graph.cool/simple/v1";
  websocketUrl = "wss://subscriptions.us-west-2.graph.cool/v1";
  fileApi = "https://api.graph.cool/file/v1";
  cloudfrontDistribution = "E31QPSUQXMU2CW";
}

const settings = {
  state,
  user: {
    adminId
  },
  database: {
    id: databaseId,
    websocketId: "cjjyd80ud3f0r0196p6fivbw9" // live
    // websocketId: 'cjj70yoiq0fbb0112n3jw902u', // laptop
  },
  app: {
    name: "10 Minute Funnels",
    domain: "tenminutefunnels.com",
    showBigLogo: true,
    showToolbarLogo: true,
    showAvatar: true,
    logoBlack:
      "https://medialibdata.s3.amazonaws.com/457/10MinuteFunnels_Logo_RGB.png",
    logoWhite: "https://medialibdata.s3.amazonaws.com/2/tmflogo_footer.png",
    logoIcon: "https://s3.amazonaws.com/sandcastleassets/images/logo_icon.png",
    assetsLocation: "https://s3.amazonaws.com/sandcastleassets",
    imgBlankState:
      "https://s3.amazonaws.com/sandcastleassets/images/dashboardBlankState.png",
    loadingImage:
      "https://s-media-cache-ak0.pinimg.com/originals/dd/67/4f/dd674f89d713bb2645a32925" +
      "10219998.gif",
    errorImage:
      "https://cdn.dribbble.com/users/1078347/screenshots/3066592/nointernetconnection_" +
      "emptystate_2.gif",
    smallLoader: "https://s3.amazonaws.com/sandcastleassets/images/loading.png",
    defaultObjectWidth: 200,
    defaultObjectHeight: 150,
    adminIds,
    helpUrl: "http://support.tenminutefunnels.com/",
    upgradeLink: "https://10minutefunnels.com/pricing",
    showShoppingCarts: false,
    showBoltPay: false,
    showProviderStep: true,
    defaultProvider: false,
    cloudfrontDistribution,
    cloudfrontDomain:
      state === "staging"
        ? "target-01-staging.funnels.cc"
        : "api.funnels.cc",
    loadIntercom: true,
    ecommerce: true,
    // limelight: {
    //   name: "Limelight CRM",
    //   cloudfrontDistribution: "E1BDJMDV7HGZKI",
    //   // cloudfrontDistribution: "E3SM2W9RZFSO5L",
    //   cloudfrontDomain: "d2evnjcb6hr3y4.cloudfront.net",
    //   logoIcon:
    //     "https://media.licdn.com/dms/image/C4D0BAQHWL04ZgkFK3w/company-logo_200_200/0?e=2" +
    //     "159024400&v=beta&t=lHwYev6qmcGlasZWJ8VSTX4ICH5ai6ibZ79bv8olcpw",
    //   logoWhite:
    //     "https://20b8pz3v80t1vsso914r7sdy-wpengine.netdna-ssl.com/wp-content/uploads/2017" +
    //     "/10/lime-logo.png",
    //   logoBlack:
    //     "https://20b8pz3v80t1vsso914r7sdy-wpengine.netdna-ssl.com/wp-content/uploads/2017" +
    //     "/04/footer_logo.png",
    //   showBigLogo: false,
    //   showToolbarLogo: false,
    //   showAvatar: false,
    //   helpUrl: "https://help.limelightcrm.com/",
    //   showShoppingCarts: false,
    //   showBoltPay: true,
    //   showProviderStep: false,
    //   defaultProvider: "limelight",
    //   loadIntercom: false,
    //   ecommerce: state === "staging" ? true : false
    // },
    salesfunnel: {
      name: "Sales Funnel",
      logoIcon: "http://ambid-backups.s3.amazonaws.com/screenshots/salesfunnel/SalesFunnel_Logo_Big.png",
      logoBlack: "http://ambid-backups.s3.amazonaws.com/screenshots/salesfunnel/SalesFunnel_Logo.png",
      logoWhite: "http://ambid-backups.s3.amazonaws.com/screenshots/salesfunnel/SalesFunnel_Logo_black.png",
      helpUrl: "http://support.salesfunnel.com",
      loadIntercom: false,
    },
    drizzio: {
      name: "Drizzio",
      logoIcon: "https://sandcastleassets.s3.amazonaws.com/Drizzio_Symbol_Dark.png",
      logoBlack: "https://sandcastleassets.s3.amazonaws.com/Drizzio_Logo_Dark.png",
      logoWhite: "https://sandcastleassets.s3.amazonaws.com/Drizzio_Logo_Light.png",
      helpUrl: "http://support.drizzio.com",
      domain: "sites.drizzio.com",
      cloudfrontDistribution: "E9TNV61G7FHRR",
      colors: {
        darkColor: "#151614",
      },
      loadIntercom: false,
    },
    launchOS: {
      name: "Launch OS",
      // logoIcon: "https://t3.ftcdn.net/jpg/03/22/38/32/240_F_322383277_xcXz1I9vOFtdk7plhsRQyjODj08iNSwB.jpg",
      // logoBlack: "https://sandcastleassets.s3.amazonaws.com/Drizzio_Logo_Dark.png",
      // logoWhite: "https://sandcastleassets.s3.amazonaws.com/Drizzio_Logo_Light.png",
      logoIcon: "https://sandcastleassets.s3.amazonaws.com/Launch+OS+Logo+(SM+-+black).png",
      logoBlack: "https://sandcastleassets.s3.amazonaws.com/Launch+OS+Logo+(black).png",
      logoWhite: "https://sandcastleassets.s3.amazonaws.com/Launch+OS+Logo+(white).png",
      // helpUrl: "http://support.smartcopy.co",
      // domain: "sites.drizzio.com",
      // cloudfrontDistribution: "E9TNV61G7FHRR",
      // colors: {
      //   darkColor: "#151614",
      // },
      loadIntercom: false,
    },
  },
  campaigns: {
    allPages: [
      {
        id: 1,
        name: "Name #1",
        screenshot:
          "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e3067d59309437.5a1d8f1753" +
          "ddc.png"
      },
      {
        id: 2,
        name: "Name #2",
        screenshot:
          "https://mir-s3-cdn-cf.behance.net/project_modules/1400/97102f58235685.59f47b5489" +
          "43e.jpg"
      }
    ]
  },
  pages: {
    blankPage: [
      {
        parent: false,
        state: "normal",
        id: 2540,
        properties: {
          height: "100%"
        },
        type: "Body",
        canHaveChildren: true
      }
    ]
  },
  testItem: {
    type: "Paragraph",
    id: 2518,
    className: false,
    html: "This is a test object!!!",
    parent: 22541,
    properties: false
  },
  defaultCampaignItem: {
    type: "PageComponent",
    connectTo: null
  },
  sampleCampaignContent: [
    {
      id: "node203843902834",
      name: "My Squeeze Page",
      screenshot: "assets/images/icons/pages/squeeze.jpg",
      type: "PageComponent",
      connectTo: "node203843902836",
      x: 497,
      y: 133
    },
    {
      id: "node203843902836",
      name: "Thank You Page",
      screenshot: "assets/images/icons/pages/PT_squeeze_webinar.jpg",
      type: "PageComponent",
      connectTo: "",
      x: 836,
      y: 135,
      settings: {
        templateType: "thankYouPage",
        pageId: 0
      }
    },
    {
      id: "node203843902838",
      name: "My Squeeze Page",
      screenshot: "assets/images/icons/pages/thankyou.jpg",
      type: "TrafficSourceComponent",
      connectTo: "node203843902836",
      x: 460,
      y: 341,
      settings: {
        templateType: "webinarPage",
        pageId: 0
      }
    }
  ],
  mandatorySettings: 3,
  simpleApi,
  websocketUrl,
  fileApi
};

export const app = {
  ...settings.app,
  ..._.get(settings.app, whitelabelId, settings.app),
  id: whitelabelId,
};

export default { ...settings, app };
