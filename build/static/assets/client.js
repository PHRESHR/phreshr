webpackJsonp([5],{

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(285);
const WebFont = __webpack_require__(543);
const React = __webpack_require__(2);
const react_router_dom_1 = __webpack_require__(35);
const react_apollo_1 = __webpack_require__(111);
const react_dom_1 = __webpack_require__(156);
const App_1 = __webpack_require__(228);
const configureApolloClient_1 = __webpack_require__(240);
const isPROD = "development" === 'production';
WebFont.load({ google: { families: ['Lato:300,400,700,900', 'Poppins:300,400,500,600,700'] } });
const client = configureApolloClient_1.default({
    initialState: window.__APOLLO_STATE__,
    ssrForceFetchDelay: 100,
    connectToDevTools: typeof window !== 'undefined' && !isPROD,
});
let app = (React.createElement(react_apollo_1.ApolloProvider, { client: client },
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(App_1.default, null))));
if (!isPROD) {
    const { AppContainer } = __webpack_require__(486);
    app = React.createElement(AppContainer, null, app);
}
react_dom_1.render(app, document.getElementById('root'));
if (true) {
    module.hot.accept();
}


/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
const utils_1 = __webpack_require__(49);
const Container = styled_components_1.default.div `
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justify};
  flex-wrap: wrap;
  width: 100%;
  max-width: ${props => props.maxWidth};
  margin: 0 auto;
  padding: ${props => props.padding ? props.padding : '.375rem'};

  ${utils_1.media.sm `
    padding: ${props => props.padding ? props.padding : '.5rem'};
  `}

  ${utils_1.media.md `
    flex-direction: ${props => props.column ? 'column' : 'row'};
    flex-wrap: ${props => props.wrap && 'wrap'};
    padding: ${props => props.padding ? props.padding : '2.5rem'};
  `}

  ${utils_1.media.lg `
    flex-direction: ${props => props.column ? 'column' : 'row'};
    padding: ${props => props.padding ? props.padding : '2.5rem 5rem'};
  `}

  .header {
    flex: 0 0 100%;
  }

  .item {
    margin-right: ${props => props.itemMargin};
    &:last-child {
      margin-right: 0;
    }
  }
`;
exports.default = Container;


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const AsyncComponent = (getComponent) => { return _a = class Async extends React.Component {
        constructor() {
            super(...arguments);
            this.state = { Component: Async.Component };
        }
        componentDidMount() {
            if (this.state.Component) {
                return;
            }
            getComponent().then(Component => {
                Async.Component = Component;
                this.setState({ Component });
            });
        }
        render() {
            const { Component } = this.state;
            if (Component) {
                return React.createElement(Component, Object.assign({}, this.props));
            }
            return null;
        }
    },
    _a.Component = null,
    _a; var _a; };
exports.default = AsyncComponent;


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const Logo_1 = __webpack_require__(218);
const Nav_1 = __webpack_require__(221);
const styles_1 = __webpack_require__(216);
function Header() {
    return (React.createElement(styles_1.default, null,
        React.createElement(Logo_1.default, null),
        React.createElement(Nav_1.default, null)));
}
exports.default = Header;


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Header_1 = __webpack_require__(214);
exports.default = Header_1.default;


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
const utils_1 = __webpack_require__(49);
const variables_1 = __webpack_require__(78);
const { color, } = variables_1.variables;
const Toolbar = styled_components_1.default.header `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background-image: linear-gradient(to bottom,${color.transDark} 1%,${color.transLight});
  width: 100%;
  height: 3.75rem;
  padding: 0.3125rem;
  z-index: 999;
  ${utils_1.media.md `
    height: 5rem;
  `}
`;
exports.default = Toolbar;


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const react_router_dom_1 = __webpack_require__(35);
const styles_1 = __webpack_require__(219);
const logo = __webpack_require__(541);
function Logo() {
    return (React.createElement(styles_1.default, { className: "branding" },
        React.createElement(react_router_dom_1.Link, { to: "/" },
            React.createElement("img", { src: `${logo}`, alt: "React logo" }))));
}
exports.default = Logo;


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Logo_1 = __webpack_require__(217);
exports.default = Logo_1.default;


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
const utils_1 = __webpack_require__(49);
const Branding = styled_components_1.default.div `
  width: 250px;
  ${utils_1.media.md `
    width: 300px;
  `}
`;
exports.default = Branding;


/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const react_router_dom_1 = __webpack_require__(35);
const styles_1 = __webpack_require__(222);
function Nav() {
    return (React.createElement(styles_1.default, null,
        React.createElement(react_router_dom_1.NavLink, { exact: true, to: "/", activeClassName: "active" }, "Home"),
        React.createElement(react_router_dom_1.NavLink, { to: "/shows", activeClassName: "active" }, "Shows")));
}
exports.default = Nav;


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Nav_1 = __webpack_require__(220);
exports.default = Nav_1.default;


/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
const utils_1 = __webpack_require__(49);
const variables_1 = __webpack_require__(78);
const { color, } = variables_1.variables;
const Navigation = styled_components_1.default.nav `
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 5px;
  ${utils_1.media.md `padding: 0 10px;`}
  ${utils_1.media.xl `padding: 0 20px;`}

  a {
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    padding: .625rem;

    &.active {
      background-color: ${color.phreshrYellow};
      color: #111;
      text-decoration: none;
    }

    &:hover {
      text-decoration: none;
    }
  }
`;
exports.default = Navigation;


/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const react_router_dom_1 = __webpack_require__(35);
const Home_1 = __webpack_require__(233);
const About_1 = __webpack_require__(232);
const Shows_1 = __webpack_require__(237);
const Show_1 = __webpack_require__(236);
const Watch_1 = __webpack_require__(238);
const NotFound_1 = __webpack_require__(235);
function Routes(props) {
    return (React.createElement(react_router_dom_1.Switch, null,
        React.createElement(react_router_dom_1.Route, { path: "/", exact: true, component: Home_1.default }),
        React.createElement(react_router_dom_1.Route, { path: "/about", component: About_1.default }),
        React.createElement(react_router_dom_1.Route, { path: "/shows", component: Shows_1.default }),
        React.createElement(react_router_dom_1.Route, { path: "/watch/:id/:uid", component: Watch_1.default }),
        React.createElement(react_router_dom_1.Route, { path: "/show/:id/:uid", component: Show_1.default }),
        React.createElement(react_router_dom_1.Route, { component: NotFound_1.default })));
}
exports.default = Routes;


/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Routes_1 = __webpack_require__(223);
exports.default = Routes_1.default;


/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const react_router_dom_1 = __webpack_require__(35);
function Status(props) {
    const { code, children } = props;
    const status = ({ staticContext }) => {
        if (staticContext) {
            staticContext.status = code;
        }
        return children || null;
    };
    return (React.createElement(react_router_dom_1.Route, { render: status }));
}
exports.default = Status;


/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Status_1 = __webpack_require__(225);
exports.default = Status_1.default;


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const recompose_1 = __webpack_require__(70);
const withHead_1 = __webpack_require__(231);
const withAnalytics_1 = __webpack_require__(230);
const styles_1 = __webpack_require__(229);
const Header_1 = __webpack_require__(215);
const Routes_1 = __webpack_require__(224);
function App() {
    return (React.createElement(styles_1.default, null,
        React.createElement(Header_1.default, null),
        React.createElement(Routes_1.default, null)));
}
exports.default = recompose_1.compose(withHead_1.default, withAnalytics_1.default)(App);


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __webpack_require__(227);
exports.default = App_1.default;


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
const Container_1 = __webpack_require__(195);
const Canvas = styled_components_1.default(Container_1.default) `
  flex-direction: column;
  height: 100%;
  padding: 5rem 0;
`;
exports.default = Canvas;


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const recompose_1 = __webpack_require__(70);
const configureAnalytics_1 = __webpack_require__(239);
configureAnalytics_1.configureAnalytics();
const enhance = recompose_1.compose(recompose_1.lifecycle({
    componentDidMount() {
        configureAnalytics_1.pageView();
    },
}));
exports.default = Comp => enhance(props => {
    return React.createElement(Comp, Object.assign({}, props));
});


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const recompose_1 = __webpack_require__(70);
const react_helmet_1 = __webpack_require__(196);
const enhance = recompose_1.compose(recompose_1.lifecycle({
    componentDidMount() {
    },
}));
exports.default = Comp => enhance(props => {
    return (React.createElement("div", null,
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
            React.createElement("meta", { name: "description", content: "React starter for building universal apps with Typescript, Webpack 2, Apollo" }),
            React.createElement("meta", { property: "og:title", content: "React Starter Typescript" }),
            React.createElement("meta", { property: "og:description", content: "React starter fo building universal apps with Typescript, Webpack 2, Apollo" }),
            React.createElement("meta", { property: "og:url", content: "https://example.com" }),
            React.createElement("meta", { property: "og:type", content: "website" }),
            React.createElement("meta", { property: "og:site_name", content: "React Starter Typescript" }),
            React.createElement("meta", { property: "og:image", content: "" }),
            React.createElement("meta", { property: "og:image:type", content: "image/jpeg" }),
            React.createElement("meta", { property: "og:image:width", content: "1280" }),
            React.createElement("meta", { property: "og:image:height", content: "720" }),
            React.createElement("meta", { property: "og:locale", content: "en_US" }),
            React.createElement("meta", { property: "twitter:title", content: "React Starter Typescript" }),
            React.createElement("meta", { property: "twitter:description", content: "React starter for building universal apps with Typescript, Webpack 2, Apollo" }),
            React.createElement("meta", { property: "twitter:url", content: "https://example.com" }),
            React.createElement("meta", { property: "twitter:card", content: "summary" }),
            React.createElement("meta", { property: "twitter:site", content: "React Starter Typescript" }),
            React.createElement("meta", { property: "twitter:image", content: "" }),
            React.createElement("meta", { property: "twitter:creator", content: "@ReactStarterTypescript" }),
            React.createElement("meta", { name: "apple-mobile-web-app-title", content: "React Starter Typescript" }),
            React.createElement("meta", { name: "application-name", content: "React Starter Typescript" }),
            React.createElement("meta", { name: "theme-color", content: "#2980b9" }),
            React.createElement("link", { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-touch-icon-60x60.png" }),
            React.createElement("link", { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-touch-icon-72x72.png" }),
            React.createElement("link", { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-touch-icon-120x120.png" }),
            React.createElement("link", { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-touch-icon-152x152.png" }),
            React.createElement("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon-180x180.png" }),
            React.createElement("link", { rel: "icon", sizes: "32x32", type: "image/png", href: "/favicon-icon-32x32.png" }),
            React.createElement("link", { rel: "icon", sizes: "16x16", type: "image/png", href: "/favicon-icon-16x16.png" }),
            React.createElement("link", { rel: "manifest", href: "/manifest.json" }),
            React.createElement("link", { rel: "mask-icon", href: "/safari-pinned-tab.svg" })),
        React.createElement(Comp, Object.assign({}, props))));
});


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AsyncComponent_1 = __webpack_require__(39);
const About = AsyncComponent_1.default(() => __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 547)).then(module => module.default));
exports.default = About;


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AsyncComponent_1 = __webpack_require__(39);
const Home = AsyncComponent_1.default(() => __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 548)).then(module => module.default));
exports.default = Home;


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const Status_1 = __webpack_require__(226);
function NotFound() {
    return (React.createElement(Status_1.default, { code: 404 },
        React.createElement("div", null,
            React.createElement("h1", null, "Sorry, can\u2019t find that."))));
}
exports.default = NotFound;


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NotFound_1 = __webpack_require__(234);
exports.default = NotFound_1.default;


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AsyncComponent_1 = __webpack_require__(39);
const Show = AsyncComponent_1.default(() => __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 549)).then(module => module.default));
exports.default = Show;


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AsyncComponent_1 = __webpack_require__(39);
const Shows = AsyncComponent_1.default(() => __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 550)).then(module => module.default));
exports.default = Shows;


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AsyncComponent_1 = __webpack_require__(39);
const Watch = AsyncComponent_1.default(() => __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 551)).then(module => module.default));
exports.default = Watch;


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const IS_BROWSER = typeof window !== 'undefined';
let ReactGA;
if (IS_BROWSER) {
    ReactGA = __webpack_require__(479);
}
function configureAnalytics() {
    if (IS_BROWSER) {
        ReactGA.initialize("UA-40660556-1");
    }
}
exports.configureAnalytics = configureAnalytics;
function pageView() {
    if (IS_BROWSER) {
        const page = window.location.pathname;
        ReactGA.set({ page });
        ReactGA.pageview(page);
    }
}
exports.pageView = pageView;


/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_apollo_1 = __webpack_require__(111);
const networkInterface = react_apollo_1.createNetworkInterface({
    uri: "https://api.graph.cool/simple/v1/cixm67lmh1yjd0177j5cwt47t",
});
networkInterface.use([{
        applyMiddleware(req, next) {
            if (!req.options.headers) {
                req.options.headers = {};
            }
            next();
        },
    }]);
function configureApolloClient(options) {
    return new react_apollo_1.ApolloClient(Object.assign({}, {
        networkInterface,
        dataIdFromObject: ({ id }) => id || null,
    }, options));
}
exports.default = configureApolloClient;


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AsyncComponent_1 = __webpack_require__(213);
exports.default = AsyncComponent_1.default;


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
const variables_1 = __webpack_require__(78);
const { breakpoints, color, font, headings, transition } = variables_1.variables;
exports.media = Object.keys(breakpoints).reduce((accumulator, label) => {
    const emSize = breakpoints[label] / 16;
    accumulator[label] = (...args) => styled_components_1.css `
    @media only screen and (min-width: ${emSize}rem) {
      ${styled_components_1.css(...args)}
    }
  `;
    return accumulator;
}, {});
function aspectRatio(width, height) {
    function ratio() {
        return (height / width);
    }
    return `
    width: 100%;
    position: relative;
    padding-bottom: calc(${ratio()} * 100%);

    > :first-child {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
    }
  `;
}
exports.aspectRatio = aspectRatio;
exports.Collapsable = styled_components_1.default.section `
  opacity: 1;
  display: flex;
  flex-direction: column;
  ${props => props.animate && `
    transition: 
      transform 300ms linear,
      opacity 300ms ease-in,
      width 200ms ease-in,
      max-height 200ms ease-in 200ms;
    max-height: 9999px;
    transform: scale(1);
    transform-origin: 100% 100%;

    ${props.collapsed && `
      transform: scale(0);
      transition: 
        transform 300ms ease-out,
        opacity 300ms ease-out,
        width 300ms ease-out 600ms;
    `}
  `}

  ${props => props.collapsed && `
    opacity: 0;
    max-height: 0;
  `}
`;


/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MTAiIGhlaWdodD0iNzQuNiIgdmlld0JveD0iNDUgNS44IDQxMCA3NC42Ij4KICA8c3R5bGU+CiAgICAuc3Qwe2ZpbGw6I2ZmZn0KICA8L3N0eWxlPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03OC4zOCA1NS4zM0g1Ny43MTV2MjAuMDJINzguMzhWNTUuMzN6bTE0LjU3Mi00NC41NjNINTcuNzE0djE5LjY5OGgzNS4yMzhjLjY0NiAwIDEuMjEgMS4xMyAxLjIxIDEuNzc2IDAgLjY5LS41MjMgMS43OC0xLjIxIDEuNzhINDkuOTY0VjUyLjFoNDIuOTg4YzExLjc0NiAwIDIxLjM1My04LjkyIDIxLjM1My0yMC42NjZzLTkuNTY2LTIwLjY2Ny0yMS4zNTMtMjAuNjY3TTE5NC42MyA1NS4zM2gtMjAuNjY2djIwLjAyaDIwLjY2NlY1NS4zM3oiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjEwLjAxIDc1LjM1aDIwLjE0bC0xMS40Mi0yNS40M2M2LjkwMi0zLjM1IDExLjY2NS0xMC4yMSAxMS42NjUtMTguNDg2IDAtMTEuNzg2LTkuNTY2LTIwLjY2Ny0yMS4zNTItMjAuNjY3aC0zNS4wNzZ2MTkuNjk4aDM1LjA3N2MuNjg3IDAgMS4yMSAxLjA5IDEuMjEgMS43NzYgMCAuNjUtLjUyMyAxLjc4LTEuMjEgMS43OGgtMzcuNjZWMTAuNzdoLTE5LjY5N3YyMy4yNUgxMzcuOFYxMC43N2gtMjAuNjd2MjMuMjVoLTIuNTgzVjUyLjFoMi41ODR2MjMuMjVoMjAuNjdWNTIuMWgxMy44ODd2MjMuMjVoMTkuNjk4VjUyLjFoMjguMTc1bDEwLjQ1MyAyMy4yNXptMjMuMzcgMGg0OC40MzhWNTUuMzNIMjMzLjM4djIwLjAyem0wLTIzLjI1aDQ4LjQzOFYzNC4wMThIMjMzLjM4VjUyLjF6bTAtMjEuNjM1aDQ4LjQzOFYxMC43NjdIMjMzLjM4djE5LjY5OHptMTAwLjY3IDI0LjIyYzAtMTEuNzQ3LTkuNTI3LTIwLjYyNy0yMS4yMzItMjAuNjY4aC02LjE3NmMtLjY0NiAwLTEuMjEtMS4wOS0xLjIxLTEuNzc2cy41NjQtMS43NzIgMS4yMS0xLjc3MmgyNy42MWwtLjA0LTE5LjY5OGgtMjcuNTdjLTExLjc0NiAwLTIxLjM1MyA4Ljg4LTIxLjM1MyAyMC42NjZzOS41NjIgMjAuNjY3IDIxLjM1IDIwLjY2N2g2LjA1M2MuNjg3IDAgMS4yMS45MyAxLjIxIDEuNjE1IDAgLjY4Ni0uNTIzIDEuNjE1LTEuMjEgMS42MTVIMjg0LjR2MjAuMDJoMjguMjk2YzExLjc4NyAwIDIxLjM1My04Ljg4IDIxLjM1My0yMC42NjYiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzcxLjI2NSA1Mi4xdjIzLjI1aDE5LjY5OFY1Mi4xaDI3LjQwOGwxMC40NTggMjMuMjVoMjAuOTFMNDM4LjMxIDQ5LjkyYzYuOTAzLTMuMzUgMTEuNjY2LTEwLjIxIDExLjY2Ni0xOC40ODYgMC0xMS43ODYtOS41NjYtMjAuNjY3LTIxLjM1My0yMC42NjdoLTM1LjA3N3YxOS42OThoMzQuMzFjLjY4NiAwIDEuMjEgMS4wOSAxLjIxIDEuNzc2IDAgLjY1LS41MjQgMS43OC0xLjIxIDEuNzhoLTM2Ljg5M1YxMC43N2gtMTkuN3YyMy4yNUgzNTcuMzhWMTAuNzdoLTIwLjY2OHYyMy4yNWgtMi41ODJWNTIuMWgyLjU4M3YyMy4yNWgyMC42NjdWNTIuMWgxMy44ODV6Ii8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTQxNC4yMTMgNTUuMzNoLTIwLjY2N3YyMC4wMmgyMC42NjdWNTUuMzN6Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(193);
__webpack_require__(194);
module.exports = __webpack_require__(192);


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.variables = {
    color: {
        primary: '#47C51D',
        secondary: '#53C1DE',
        phreshrYellow: '#FDE74C',
        phreshrBlue: '#2980B9',
        phreshrBlueAlt: '#009AFF;',
        white: '#FFF',
        black: '#111',
        base: 'rgba(0,0,0,0.4)',
        link: '#FDE74C',
        transLight: 'rgba(0, 0, 0, .1)',
        transMid: 'rgba(0, 0, 0, .55)',
        transDark: 'rgba(0, 0, 0, .85)',
        transNone: 'rgba(0, 0, 0, 0)',
    },
    font: {
        family: `Lato, Helvetica Neue, Helvetica, Arial, sans-serif`,
        base: '1rem',
    },
    headings: {
        family: 'Lato',
    },
    transition: '300ms ease-in-out',
    breakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
    },
};
exports.default = exports.variables;


/***/ })

},[546]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3VpL3N0eWxlcy9Db250YWluZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9Bc3luY0NvbXBvbmVudC9Bc3luY0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0hlYWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0hlYWRlci9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9Mb2dvL0xvZ28udHN4Iiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvTG9nby9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0xvZ28vc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvTmF2L05hdi50c3giLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9OYXYvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9OYXYvc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvUm91dGVzL1JvdXRlcy50c3giLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9Sb3V0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9TdGF0dXMvU3RhdHVzLnRzeCIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL1N0YXR1cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi91aS9jb250YWluZXJzL0FwcC9BcHAudHN4Iiwid2VicGFjazovLy8uL3VpL2NvbnRhaW5lcnMvQXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3VpL2NvbnRhaW5lcnMvQXBwL3N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi91aS9ob2NzL3dpdGhBbmFseXRpY3MudHN4Iiwid2VicGFjazovLy8uL3VpL2hvY3Mvd2l0aEhlYWQudHN4Iiwid2VicGFjazovLy8uL3VpL3BhZ2VzL0Fib3V0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3VpL3BhZ2VzL0hvbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvcGFnZXMvTm90Rm91bmQvTm90Rm91bmQudHN4Iiwid2VicGFjazovLy8uL3VpL3BhZ2VzL05vdEZvdW5kL2luZGV4LnRzIiwid2VicGFjazovLy8uL3VpL3BhZ2VzL1Nob3cvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvcGFnZXMvU2hvd3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvcGFnZXMvV2F0Y2gvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvdXRpbHMvY29uZmlndXJlQW5hbHl0aWNzLnRzIiwid2VicGFjazovLy8uL3VpL3V0aWxzL2NvbmZpZ3VyZUFwb2xsb0NsaWVudC50cyIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0FzeW5jQ29tcG9uZW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3VpL3N0eWxlcy91dGlscy50cyIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0xvZ28vaW1hZ2VzL2xvZ28uc3ZnIiwid2VicGFjazovLy8uL3VpL3N0eWxlcy92YXJpYWJsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx5QkFBMEI7QUFDMUIseUNBQXlDO0FBQ3pDLHFDQUErQjtBQUMvQixtREFBMkQ7QUFDM0QsZ0RBQThDO0FBQzlDLDZDQUFtQztBQUVuQyx1Q0FBb0M7QUFDcEMseURBQW1FO0FBRW5FLE1BQU0sTUFBTSxHQUFHLGFBQW9CLEtBQUssWUFBWSxDQUFDO0FBRXJELE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSw2QkFBNkIsQ0FBQyxFQUFDLEVBQUMsQ0FBQyxDQUFDO0FBRTVGLE1BQU0sTUFBTSxHQUFHLCtCQUFxQixD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Q0FBQztBQUVGLGtCQUFlLGlCQUFTLENBQUMiLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCAqIGFzIFdlYkZvbnQgZnJvbSAnd2ViZm9udGxvYWRlcic7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEFwcCBmcm9tICd1aS9jb250YWluZXJzL0FwcCc7XG5pbXBvcnQgY29uZmlndXJlQXBvbGxvQ2xpZW50IGZyb20gJ3VpL3V0aWxzL2NvbmZpZ3VyZUFwb2xsb0NsaWVudCc7XG5cbmNvbnN0IGlzUFJPRCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbldlYkZvbnQubG9hZCh7Z29vZ2xlOiB7ZmFtaWxpZXM6IFsnTGF0bzozMDAsNDAwLDcwMCw5MDAnLCAnUG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwJ119fSk7XG5cbmNvbnN0IGNsaWVudCA9IGNvbmZpZ3VyZUFwb2xsb0NsaWVudCh7XG4gIGluaXRpYWxTdGF0ZTogd2luZG93Ll9fQVBPTExPX1NUQVRFX18sXG4gIHNzckZvcmNlRmV0Y2hEZWxheTogMTAwLFxuICBjb25uZWN0VG9EZXZUb29sczogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIWlzUFJPRCxcbn0pO1xuXG5sZXQgYXBwID0gKFxuICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgIDxSb3V0ZXI+XG4gICAgICA8QXBwIC8+XG4gICAgPC9Sb3V0ZXI+XG4gIDwvQXBvbGxvUHJvdmlkZXI+XG4pO1xuXG5pZiAoICFpc1BST0QgKSB7XG4gIGNvbnN0IHtBcHBDb250YWluZXJ9ID0gcmVxdWlyZSAoICdyZWFjdC1ob3QtbG9hZGVyJyApO1xuICBhcHAgPSA8QXBwQ29udGFpbmVyPnthcHB9PC9BcHBDb250YWluZXI+O1xufVxuXG5yZW5kZXIoYXBwLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi9jbGllbnQvaW5kZXgudHN4IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtZWRpYSB9IGZyb20gJ3VpL3N0eWxlcy91dGlscyc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogJHtwcm9wcyA9PiBwcm9wcy5qdXN0aWZ5fTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLm1heFdpZHRofTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMucGFkZGluZyA/IHByb3BzLnBhZGRpbmcgOiAgJy4zNzVyZW0nfTtcblxuICAke21lZGlhLnNtYFxuICAgIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMucGFkZGluZyA/IHByb3BzLnBhZGRpbmcgOiAgJy41cmVtJ307XG4gIGB9XG5cbiAgJHttZWRpYS5tZGBcbiAgICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcyA9PiBwcm9wcy5jb2x1bW4gPyAnY29sdW1uJyA6ICdyb3cnfTtcbiAgICBmbGV4LXdyYXA6ICR7cHJvcHMgPT4gcHJvcHMud3JhcCAmJiAnd3JhcCd9O1xuICAgIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMucGFkZGluZyA/IHByb3BzLnBhZGRpbmcgOiAgJzIuNXJlbSd9O1xuICBgfVxuXG4gICR7bWVkaWEubGdgXG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMgPT4gcHJvcHMuY29sdW1uID8gJ2NvbHVtbicgOiAncm93J307XG4gICAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy5wYWRkaW5nID8gcHJvcHMucGFkZGluZyA6ICAnMi41cmVtIDVyZW0nfTtcbiAgYH1cblxuICAuaGVhZGVyIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgfVxuXG4gIC5pdGVtIHtcbiAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaXRlbU1hcmdpbn07XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9zdHlsZXMvQ29udGFpbmVyLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vLyBSZW5kZXJpbmcgYXN5bmMgY29tcG9uZW50IGZvciBSZWFjdC1Sb3V0ZXIgZHluYW1pYyByb3V0ZXNcbmNvbnN0IEFzeW5jQ29tcG9uZW50ID0gKGdldENvbXBvbmVudDogKCkgPT4gUHJvbWlzZTxhbnk+KSA9PlxuICBjbGFzcyBBc3luYyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xuICAgIHB1YmxpYyBzdGF0aWMgQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgc3RhdGUgPSB7IENvbXBvbmVudDogQXN5bmMuQ29tcG9uZW50IH07XG5cbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5Db21wb25lbnQpIHsgcmV0dXJuOyB9XG5cbiAgICAgIGdldENvbXBvbmVudCgpLnRoZW4oQ29tcG9uZW50ID0+IHtcbiAgICAgICAgQXN5bmMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgQ29tcG9uZW50IH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICBpZiAoQ29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG5leHBvcnQgZGVmYXVsdCBBc3luY0NvbXBvbmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL0FzeW5jQ29tcG9uZW50L0FzeW5jQ29tcG9uZW50LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2dvIGZyb20gJ3VpL2NvbXBvbmVudHMvTG9nbyc7XG5pbXBvcnQgTmF2IGZyb20gJ3VpL2NvbXBvbmVudHMvTmF2JztcbmltcG9ydCBUb29sYmFyIGZyb20gJy4vc3R5bGVzJztcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxUb29sYmFyPlxuICAgICAgPExvZ28vPlxuICAgICAgPE5hdiAvPlxuICAgIDwvVG9vbGJhcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci50c3giLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB0cmFuc3BhcmVudGl6ZSB9IGZyb20gJ3BvbGlzaGVkJztcbmltcG9ydCB7IG1lZGlhIH0gZnJvbSAndWkvc3R5bGVzL3V0aWxzJztcbmltcG9ydCB7IHZhcmlhYmxlcyB9IGZyb20gJ3VpL3N0eWxlcy92YXJpYWJsZXMnO1xuXG5jb25zdCB7XG4gIGNvbG9yLFxufSA9IHZhcmlhYmxlcztcblxuY29uc3QgVG9vbGJhciA9IHN0eWxlZC5oZWFkZXJgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sJHtjb2xvci50cmFuc0Rhcmt9IDElLCR7Y29sb3IudHJhbnNMaWdodH0pO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzLjc1cmVtO1xuICBwYWRkaW5nOiAwLjMxMjVyZW07XG4gIHotaW5kZXg6IDk5OTtcbiAgJHttZWRpYS5tZGBcbiAgICBoZWlnaHQ6IDVyZW07XG4gIGB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlcy50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBCcmFuZGluZyBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgKiBhcyBsb2dvIGZyb20gJy4vaW1hZ2VzL2xvZ28uc3ZnJztcblxuZnVuY3Rpb24gTG9nbygpIHtcbiAgcmV0dXJuIChcbiAgICA8QnJhbmRpbmcgY2xhc3NOYW1lPVwiYnJhbmRpbmdcIj5cbiAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICA8aW1nIHNyYz17YCR7bG9nb31gfSBhbHQ9XCJSZWFjdCBsb2dvXCIvPlxuICAgICAgPC9MaW5rPlxuICAgIDwvQnJhbmRpbmc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ287XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9Mb2dvL0xvZ28udHN4IiwiaW1wb3J0IExvZ28gZnJvbSAnLi9Mb2dvJztcblxuZXhwb3J0IGRlZmF1bHQgTG9nbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL0xvZ28vaW5kZXgudHMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lZGlhIH0gZnJvbSAndWkvc3R5bGVzL3V0aWxzJztcblxuY29uc3QgQnJhbmRpbmcgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMjUwcHg7XG4gICR7bWVkaWEubWRgXG4gICAgd2lkdGg6IDMwMHB4O1xuICBgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQnJhbmRpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9Mb2dvL3N0eWxlcy50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vc3R5bGVzJztcblxuZnVuY3Rpb24gTmF2KCkge1xuICByZXR1cm4gKFxuICAgIDxOYXZpZ2F0aW9uPlxuICAgICAgPE5hdkxpbmsgZXhhY3QgdG89XCIvXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+SG9tZTwvTmF2TGluaz5cbiAgICAgIDxOYXZMaW5rIHRvPVwiL3Nob3dzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+U2hvd3M8L05hdkxpbms+XG4gICAgPC9OYXZpZ2F0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9OYXYvTmF2LnRzeCIsImltcG9ydCBOYXYgZnJvbSAnLi9OYXYnO1xuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9OYXYvaW5kZXgudHMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lZGlhIH0gZnJvbSAndWkvc3R5bGVzL3V0aWxzJztcbmltcG9ydCB7IHZhcmlhYmxlcyB9IGZyb20gJ3VpL3N0eWxlcy92YXJpYWJsZXMnO1xuXG5jb25zdCB7XG4gIGNvbG9yLFxufSA9IHZhcmlhYmxlcztcblxuY29uc3QgTmF2aWdhdGlvbiA9IHN0eWxlZC5uYXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogNXB4O1xuICAke21lZGlhLm1kYHBhZGRpbmc6IDAgMTBweDtgfVxuICAke21lZGlhLnhsYHBhZGRpbmc6IDAgMjBweDtgfVxuXG4gIGEge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogLjYyNXJlbTtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IucGhyZXNoclllbGxvd307XG4gICAgICBjb2xvcjogIzExMTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9OYXYvc3R5bGVzLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIFJlZGlyZWN0LCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IEhvbWUgZnJvbSAndWkvcGFnZXMvSG9tZSc7XG5pbXBvcnQgQWJvdXQgZnJvbSAndWkvcGFnZXMvQWJvdXQnO1xuaW1wb3J0IFNob3dzIGZyb20gJ3VpL3BhZ2VzL1Nob3dzJztcbmltcG9ydCBTaG93IGZyb20gJ3VpL3BhZ2VzL1Nob3cnO1xuaW1wb3J0IFdhdGNoIGZyb20gJ3VpL3BhZ2VzL1dhdGNoJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICd1aS9wYWdlcy9Ob3RGb3VuZCc7XG5cbmZ1bmN0aW9uIFJvdXRlcyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxTd2l0Y2g+XG4gICAgICA8Um91dGUgcGF0aD1cIi9cIiBleGFjdCBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9hYm91dFwiIGNvbXBvbmVudD17QWJvdXR9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9zaG93c1wiIGNvbXBvbmVudD17U2hvd3N9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi93YXRjaC86aWQvOnVpZFwiIGNvbXBvbmVudD17V2F0Y2h9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIi9zaG93LzppZC86dWlkXCIgY29tcG9uZW50PXtTaG93fSAvPlxuICAgICAgPFJvdXRlIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gICAgPC9Td2l0Y2g+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL1JvdXRlcy9Sb3V0ZXMudHN4IiwiaW1wb3J0IFJvdXRlcyBmcm9tICcuL1JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL1JvdXRlcy9pbmRleC50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvZGU6IG51bWJlcjtcbiAgY2hpbGRyZW4/OiBhbnk7XG59XG5cbmZ1bmN0aW9uIFN0YXR1cyhwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBjb2RlLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gIGNvbnN0IHN0YXR1cyA9ICh7IHN0YXRpY0NvbnRleHQgfSkgPT4ge1xuICAgIGlmIChzdGF0aWNDb250ZXh0KSB7XG4gICAgICBzdGF0aWNDb250ZXh0LnN0YXR1cyA9IGNvZGU7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbiB8fCBudWxsO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJvdXRlIHJlbmRlcj17c3RhdHVzfSAvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0dXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9TdGF0dXMvU3RhdHVzLnRzeCIsImltcG9ydCBTdGF0dXMgZnJvbSAnLi9TdGF0dXMnO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0dXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9TdGF0dXMvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmltcG9ydCB3aXRoSGVhZCBmcm9tICd1aS9ob2NzL3dpdGhIZWFkJztcbmltcG9ydCB3aXRoQW5hbHl0aWNzIGZyb20gJ3VpL2hvY3Mvd2l0aEFuYWx5dGljcyc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAndWkvY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFJvdXRlcyBmcm9tICd1aS9jb21wb25lbnRzL1JvdXRlcyc7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Q2FudmFzPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPFJvdXRlcyAvPlxuICAgIDwvQ2FudmFzPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoSGVhZCxcbiAgd2l0aEFuYWx5dGljcyxcbikoQXBwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb250YWluZXJzL0FwcC9BcHAudHN4IiwiaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb250YWluZXJzL0FwcC9pbmRleC50cyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICd1aS9zdHlsZXMvQ29udGFpbmVyJztcbmltcG9ydCB7IG1lZGlhIH0gZnJvbSAndWkvc3R5bGVzL3V0aWxzJztcblxuY29uc3QgQ2FudmFzID0gc3R5bGVkKENvbnRhaW5lcilgXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNXJlbSAwO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbnRhaW5lcnMvQXBwL3N0eWxlcy50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvc2UsIGxpZmVjeWNsZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBjb25maWd1cmVBbmFseXRpY3MsIHBhZ2VWaWV3IH0gZnJvbSAnLi4vdXRpbHMvY29uZmlndXJlQW5hbHl0aWNzJztcblxuY29uZmlndXJlQW5hbHl0aWNzKCk7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICBsaWZlY3ljbGUoe1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgcGFnZVZpZXcoKTtcbiAgICB9LFxuICB9KSxcbik7XG5cbi8vIFRPRE86IGZpZ3VyZSBvdXQgdHlwZSBjaGVja2luZ1xuZXhwb3J0IGRlZmF1bHQgQ29tcCA9PiBlbmhhbmNlKHByb3BzID0+IHtcbiAgcmV0dXJuIDxDb21wIHsuLi5wcm9wc30gLz47XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9ob2NzL3dpdGhBbmFseXRpY3MudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSwgbGlmZWN5Y2xlLCBzZXRTdGF0aWMgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIGxpZmVjeWNsZSh7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnSGVhZCBEaWQgTW91bnQnKTtcbiAgICB9LFxuICB9KSxcbik7XG5cbi8vIFRPRE86IGZpZ3VyZSBvdXQgdHlwZSBjaGVja2luZ1xuZXhwb3J0IGRlZmF1bHQgQ29tcCA9PiBlbmhhbmNlKHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlbG1ldD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJSZWFjdCBzdGFydGVyIGZvciBidWlsZGluZyB1bml2ZXJzYWwgYXBwcyB3aXRoIFR5cGVzY3JpcHQsIFdlYnBhY2sgMiwgQXBvbGxvXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJSZWFjdCBTdGFydGVyIFR5cGVzY3JpcHRcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJSZWFjdCBzdGFydGVyIGZvIGJ1aWxkaW5nIHVuaXZlcnNhbCBhcHBzIHdpdGggVHlwZXNjcmlwdCwgV2VicGFjayAyLCBBcG9sbG9cIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2V4YW1wbGUuY29tXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJSZWFjdCBTdGFydGVyIFR5cGVzY3JpcHRcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cIlwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6dHlwZVwiIGNvbnRlbnQ9XCJpbWFnZS9qcGVnXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCIxMjgwXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiNzIwXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiUmVhY3QgU3RhcnRlciBUeXBlc2NyaXB0XCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJSZWFjdCBzdGFydGVyIGZvciBidWlsZGluZyB1bml2ZXJzYWwgYXBwcyB3aXRoIFR5cGVzY3JpcHQsIFdlYnBhY2sgMiwgQXBvbGxvXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2V4YW1wbGUuY29tXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIlJlYWN0IFN0YXJ0ZXIgVHlwZXNjcmlwdFwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9XCJcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJAUmVhY3RTdGFydGVyVHlwZXNjcmlwdFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZVwiIGNvbnRlbnQ9XCJSZWFjdCBTdGFydGVyIFR5cGVzY3JpcHRcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGljYXRpb24tbmFtZVwiIGNvbnRlbnQ9XCJSZWFjdCBTdGFydGVyIFR5cGVzY3JpcHRcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzI5ODBiOVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjYweDYwXCIgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLTYweDYwLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjcyeDcyXCIgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLTcyeDcyLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjEyMHgxMjBcIiBocmVmPVwiL2FwcGxlLXRvdWNoLWljb24tMTIweDEyMC5wbmdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLTE1MngxNTIucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvYXBwbGUtdG91Y2gtaWNvbi0xODB4MTgwLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBzaXplcz1cIjMyeDMyXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvZmF2aWNvbi1pY29uLTMyeDMyLnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBzaXplcz1cIjE2eDE2XCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvZmF2aWNvbi1pY29uLTE2eDE2LnBuZ1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9tYW5pZmVzdC5qc29uXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cIi9zYWZhcmktcGlubmVkLXRhYi5zdmdcIiAvPlxuICAgICAgPC9IZWxtZXQ+XG4gICAgICA8Q29tcCB7Li4ucHJvcHN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9ob2NzL3dpdGhIZWFkLnRzeCIsImltcG9ydCBBc3luY0NvbXBvbmVudCBmcm9tICd1aS9jb21wb25lbnRzL0FzeW5jQ29tcG9uZW50JztcblxuY29uc3QgQWJvdXQgPSBBc3luY0NvbXBvbmVudCgoKSA9PlxuICBTeXN0ZW0uaW1wb3J0KCcuL0Fib3V0JykudGhlbihtb2R1bGUgPT4gbW9kdWxlLmRlZmF1bHQpLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvcGFnZXMvQWJvdXQvaW5kZXgudHMiLCJpbXBvcnQgQXN5bmNDb21wb25lbnQgZnJvbSAndWkvY29tcG9uZW50cy9Bc3luY0NvbXBvbmVudCc7XG5cbmNvbnN0IEhvbWUgPSBBc3luY0NvbXBvbmVudCgoKSA9PlxuICBTeXN0ZW0uaW1wb3J0KCcuL0hvbWUnKS50aGVuKG1vZHVsZSA9PiBtb2R1bGUuZGVmYXVsdCksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL3BhZ2VzL0hvbWUvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG5pbXBvcnQgU3RhdHVzIGZyb20gJ3VpL2NvbXBvbmVudHMvU3RhdHVzJztcblxuZnVuY3Rpb24gTm90Rm91bmQoKSB7XG4gIHJldHVybiAoXG4gICAgPFN0YXR1cyBjb2RlPXs0MDR9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPlNvcnJ5LCBjYW7igJl0IGZpbmQgdGhhdC48L2gxPlxuICAgICAgPC9kaXY+XG4gICAgPC9TdGF0dXM+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL3BhZ2VzL05vdEZvdW5kL05vdEZvdW5kLnRzeCIsImltcG9ydCBOb3RGb3VuZCBmcm9tICcuL05vdEZvdW5kJztcblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvcGFnZXMvTm90Rm91bmQvaW5kZXgudHMiLCJpbXBvcnQgQXN5bmNDb21wb25lbnQgZnJvbSAndWkvY29tcG9uZW50cy9Bc3luY0NvbXBvbmVudCc7XG5cbmNvbnN0IFNob3cgPSBBc3luY0NvbXBvbmVudCgoKSA9PlxuICBTeXN0ZW0uaW1wb3J0KCcuL1Nob3cnKS50aGVuKG1vZHVsZSA9PiBtb2R1bGUuZGVmYXVsdCksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTaG93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL3BhZ2VzL1Nob3cvaW5kZXgudHMiLCJpbXBvcnQgQXN5bmNDb21wb25lbnQgZnJvbSAndWkvY29tcG9uZW50cy9Bc3luY0NvbXBvbmVudCc7XG5cbmNvbnN0IFNob3dzID0gQXN5bmNDb21wb25lbnQoKCkgPT5cbiAgU3lzdGVtLmltcG9ydCgnLi9TaG93cycpLnRoZW4obW9kdWxlID0+IG1vZHVsZS5kZWZhdWx0KSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL3BhZ2VzL1Nob3dzL2luZGV4LnRzIiwiaW1wb3J0IEFzeW5jQ29tcG9uZW50IGZyb20gJ3VpL2NvbXBvbmVudHMvQXN5bmNDb21wb25lbnQnO1xuXG5jb25zdCBXYXRjaCA9IEFzeW5jQ29tcG9uZW50KCgpID0+XG4gIFN5c3RlbS5pbXBvcnQoJy4vV2F0Y2gnKS50aGVuKG1vZHVsZSA9PiBtb2R1bGUuZGVmYXVsdCksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBXYXRjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9wYWdlcy9XYXRjaC9pbmRleC50cyIsImNvbnN0IElTX0JST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcblxubGV0IFJlYWN0R0E7XG5pZiAoSVNfQlJPV1NFUikge1xuICBSZWFjdEdBID0gcmVxdWlyZSgncmVhY3QtZ2EnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZUFuYWx5dGljcygpIHtcbiAgaWYgKElTX0JST1dTRVIpIHtcbiAgICBSZWFjdEdBLmluaXRpYWxpemUocHJvY2Vzcy5lbnYuR0FfVFJBQ0tJTkdfSUQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWdlVmlldygpIHtcbiAgaWYgKElTX0JST1dTRVIpIHtcbiAgICBjb25zdCBwYWdlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIFJlYWN0R0Euc2V0KHsgcGFnZSB9KTtcbiAgICBSZWFjdEdBLnBhZ2V2aWV3KHBhZ2UpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvdXRpbHMvY29uZmlndXJlQW5hbHl0aWNzLnRzIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBjcmVhdGVOZXR3b3JrSW50ZXJmYWNlIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcblxuY29uc3QgbmV0d29ya0ludGVyZmFjZSA9IGNyZWF0ZU5ldHdvcmtJbnRlcmZhY2Uoe1xuICB1cmk6IHByb2Nlc3MuZW52LkdSQVBIUUxfRU5EUE9JTlQsXG59KTtcblxubmV0d29ya0ludGVyZmFjZS51c2UoW3tcbiAgYXBwbHlNaWRkbGV3YXJlKHJlcSwgbmV4dCkge1xuICAgIGlmICghcmVxLm9wdGlvbnMuaGVhZGVycykge1xuICAgICAgcmVxLm9wdGlvbnMuaGVhZGVycyA9IHt9O1xuICAgIH1cbiAgICBuZXh0KCk7XG4gIH0sXG59XSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZUFwb2xsb0NsaWVudChvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICBuZXR3b3JrSW50ZXJmYWNlLFxuICAgIGRhdGFJZEZyb21PYmplY3Q6ICh7IGlkIH0pID0+IGlkIHx8IG51bGwsXG4gIH0sIG9wdGlvbnMpKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS91dGlscy9jb25maWd1cmVBcG9sbG9DbGllbnQudHMiLCJpbXBvcnQgQXN5bmNDb21wb25lbnQgZnJvbSAnLi9Bc3luY0NvbXBvbmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IEFzeW5jQ29tcG9uZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvQXN5bmNDb21wb25lbnQvaW5kZXgudHMiLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgdmFyaWFibGVzIH0gZnJvbSAndWkvc3R5bGVzL3ZhcmlhYmxlcyc7XG5cbmNvbnN0IHtcbiAgYnJlYWtwb2ludHMsXG4gIGNvbG9yLFxuICBmb250LFxuICBoZWFkaW5ncyxcbiAgdHJhbnNpdGlvblxufSA9IHZhcmlhYmxlcztcblxuZXhwb3J0IGNvbnN0IG1lZGlhOiBhbnkgPSBPYmplY3Qua2V5cyhicmVha3BvaW50cykucmVkdWNlKChhY2N1bXVsYXRvciwgbGFiZWwpID0+IHtcbiAgLy8gdXNlIGVtIGluIGJyZWFrcG9pbnRzIHRvIHdvcmsgcHJvcGVybHkgY3Jvc3MtYnJvd3NlciBhbmQgc3VwcG9ydCB1c2Vyc1xuICAvLyBjaGFuZ2luZyB0aGVpciBicm93c2VycyBmb250LXNpemU6IGh0dHBzOi8vemVsbHdrLmNvbS9ibG9nL21lZGlhLXF1ZXJ5LXVuaXRzL1xuICBjb25zdCBlbVNpemUgPSBicmVha3BvaW50c1tsYWJlbF0gLyAxNjtcbiAgYWNjdW11bGF0b3JbbGFiZWxdID0gKC4uLmFyZ3MpID0+IGNzc2BcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7ZW1TaXplfXJlbSkge1xuICAgICAgJHtjc3MoLi4uYXJncyl9XG4gICAgfVxuICBgO1xuICByZXR1cm4gYWNjdW11bGF0b3I7XG59LCB7fSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3BlY3RSYXRpbyh3aWR0aCwgaGVpZ2h0KSB7XG4gIGZ1bmN0aW9uIHJhdGlvKCkge1xuICAgIHJldHVybiAoaGVpZ2h0IC8gd2lkdGgpO1xuICB9XG4gIHJldHVybiBgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKCR7cmF0aW8oKX0gKiAxMDAlKTtcblxuICAgID4gOmZpcnN0LWNoaWxkIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICBgO1xufVxuXG4vLyBQYXR0ZXJuc1xuZXhwb3J0IGNvbnN0IENvbGxhcHNhYmxlID0gc3R5bGVkLnNlY3Rpb25gXG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICR7cHJvcHMgPT4gcHJvcHMuYW5pbWF0ZSAmJiBgXG4gICAgdHJhbnNpdGlvbjogXG4gICAgICB0cmFuc2Zvcm0gMzAwbXMgbGluZWFyLFxuICAgICAgb3BhY2l0eSAzMDBtcyBlYXNlLWluLFxuICAgICAgd2lkdGggMjAwbXMgZWFzZS1pbixcbiAgICAgIG1heC1oZWlnaHQgMjAwbXMgZWFzZS1pbiAyMDBtcztcbiAgICBtYXgtaGVpZ2h0OiA5OTk5cHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG5cbiAgICAke3Byb3BzLmNvbGxhcHNlZCAmJiBgXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgdHJhbnNpdGlvbjogXG4gICAgICAgIHRyYW5zZm9ybSAzMDBtcyBlYXNlLW91dCxcbiAgICAgICAgb3BhY2l0eSAzMDBtcyBlYXNlLW91dCxcbiAgICAgICAgd2lkdGggMzAwbXMgZWFzZS1vdXQgNjAwbXM7XG4gICAgYH1cbiAgYH1cblxuICAke3Byb3BzID0+IHByb3BzLmNvbGxhcHNlZCAmJiBgXG4gICAgb3BhY2l0eTogMDtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuICBgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9zdHlsZXMvdXRpbHMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0kwTVRBaUlHaGxhV2RvZEQwaU56UXVOaUlnZG1sbGQwSnZlRDBpTkRVZ05TNDRJRFF4TUNBM05DNDJJajRLSUNBOGMzUjViR1UrQ2lBZ0lDQXVjM1F3ZTJacGJHdzZJMlptWm4wS0lDQThMM04wZVd4bFBnb2dJRHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWswM09DNHpPQ0ExTlM0ek0wZzFOeTQzTVRWMk1qQXVNREpJTnpndU16aFdOVFV1TXpONmJURTBMalUzTWkwME5DNDFOak5JTlRjdU56RTBkakU1TGpZNU9HZ3pOUzR5TXpoakxqWTBOaUF3SURFdU1qRWdNUzR4TXlBeExqSXhJREV1TnpjMklEQWdMalk1TFM0MU1qTWdNUzQzT0MweExqSXhJREV1TnpoSU5Ea3VPVFkwVmpVeUxqRm9OREl1T1RnNFl6RXhMamMwTmlBd0lESXhMak0xTXkwNExqa3lJREl4TGpNMU15MHlNQzQyTmpaekxUa3VOVFkyTFRJd0xqWTJOeTB5TVM0ek5UTXRNakF1TmpZM1RURTVOQzQyTXlBMU5TNHpNMmd0TWpBdU5qWTJkakl3TGpBeWFESXdMalkyTmxZMU5TNHpNM29pTHo0S0lDQThjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpFd0xqQXhJRGMxTGpNMWFESXdMakUwYkMweE1TNDBNaTB5TlM0ME0yTTJMamt3TWkwekxqTTFJREV4TGpZMk5TMHhNQzR5TVNBeE1TNDJOalV0TVRndU5EZzJJREF0TVRFdU56ZzJMVGt1TlRZMkxUSXdMalkyTnkweU1TNHpOVEl0TWpBdU5qWTNhQzB6TlM0d056WjJNVGt1TmprNGFETTFMakEzTjJNdU5qZzNJREFnTVM0eU1TQXhMakE1SURFdU1qRWdNUzQzTnpZZ01DQXVOalV0TGpVeU15QXhMamM0TFRFdU1qRWdNUzQzT0dndE16Y3VOalpXTVRBdU56ZG9MVEU1TGpZNU4zWXlNeTR5TlVneE16Y3VPRll4TUM0M04yZ3RNakF1TmpkMk1qTXVNalZvTFRJdU5UZ3pWalV5TGpGb01pNDFPRFIyTWpNdU1qVm9NakF1TmpkV05USXVNV2d4TXk0NE9EZDJNak11TWpWb01Ua3VOams0VmpVeUxqRm9Namd1TVRjMWJERXdMalExTXlBeU15NHlOWHB0TWpNdU16Y2dNR2cwT0M0ME16aFdOVFV1TXpOSU1qTXpMak00ZGpJd0xqQXllbTB3TFRJekxqSTFhRFE0TGpRek9GWXpOQzR3TVRoSU1qTXpMak00VmpVeUxqRjZiVEF0TWpFdU5qTTFhRFE0TGpRek9GWXhNQzQzTmpkSU1qTXpMak00ZGpFNUxqWTVPSHB0TVRBd0xqWTNJREkwTGpJeVl6QXRNVEV1TnpRM0xUa3VOVEkzTFRJd0xqWXlOeTB5TVM0eU16SXRNakF1TmpZNGFDMDJMakUzTm1NdExqWTBOaUF3TFRFdU1qRXRNUzR3T1MweExqSXhMVEV1TnpjMmN5NDFOalF0TVM0M056SWdNUzR5TVMweExqYzNNbWd5Tnk0Mk1Xd3RMakEwTFRFNUxqWTVPR2d0TWpjdU5UZGpMVEV4TGpjME5pQXdMVEl4TGpNMU15QTRMamc0TFRJeExqTTFNeUF5TUM0Mk5qWnpPUzQxTmpJZ01qQXVOalkzSURJeExqTTFJREl3TGpZMk4yZzJMakExTTJNdU5qZzNJREFnTVM0eU1TNDVNeUF4TGpJeElERXVOakUxSURBZ0xqWTROaTB1TlRJeklERXVOakUxTFRFdU1qRWdNUzQyTVRWSU1qZzBMalIyTWpBdU1ESm9Namd1TWprMll6RXhMamM0TnlBd0lESXhMak0xTXkwNExqZzRJREl4TGpNMU15MHlNQzQyTmpZaUx6NEtJQ0E4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk16Y3hMakkyTlNBMU1pNHhkakl6TGpJMWFERTVMalk1T0ZZMU1pNHhhREkzTGpRd09Hd3hNQzQwTlRnZ01qTXVNalZvTWpBdU9URk1ORE00TGpNeElEUTVMamt5WXpZdU9UQXpMVE11TXpVZ01URXVOalkyTFRFd0xqSXhJREV4TGpZMk5pMHhPQzQwT0RZZ01DMHhNUzQzT0RZdE9TNDFOall0TWpBdU5qWTNMVEl4TGpNMU15MHlNQzQyTmpkb0xUTTFMakEzTjNZeE9TNDJPVGhvTXpRdU16RmpMalk0TmlBd0lERXVNakVnTVM0d09TQXhMakl4SURFdU56YzJJREFnTGpZMUxTNDFNalFnTVM0M09DMHhMakl4SURFdU56aG9MVE0yTGpnNU0xWXhNQzQzTjJndE1Ua3VOM1l5TXk0eU5VZ3pOVGN1TXpoV01UQXVOemRvTFRJd0xqWTJPSFl5TXk0eU5XZ3RNaTQxT0RKV05USXVNV2d5TGpVNE0zWXlNeTR5TldneU1DNDJOamRXTlRJdU1XZ3hNeTQ0T0RWNklpOCtDaUFnUEhCaGRHZ2dZMnhoYzNNOUluTjBNQ0lnWkQwaVRUUXhOQzR5TVRNZ05UVXVNek5vTFRJd0xqWTJOM1l5TUM0d01tZ3lNQzQyTmpkV05UVXVNek42SWk4K0Nqd3ZjM1puUGdvPVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi91aS9jb21wb25lbnRzL0xvZ28vaW1hZ2VzL2xvZ28uc3ZnXG4vLyBtb2R1bGUgaWQgPSA1NDFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZXhwb3J0IGNvbnN0IHZhcmlhYmxlczogYW55ID0ge1xuICBjb2xvcjoge1xuICAgIHByaW1hcnk6ICcjNDdDNTFEJyxcbiAgICBzZWNvbmRhcnk6ICcjNTNDMURFJyxcbiAgICBwaHJlc2hyWWVsbG93OiAnI0ZERTc0QycsXG4gICAgcGhyZXNockJsdWU6ICcjMjk4MEI5JyxcbiAgICBwaHJlc2hyQmx1ZUFsdDogJyMwMDlBRkY7JyxcbiAgICB3aGl0ZTogJyNGRkYnLFxuICAgIGJsYWNrOiAnIzExMScsXG4gICAgYmFzZTogJ3JnYmEoMCwwLDAsMC40KScsXG4gICAgbGluazogJyNGREU3NEMnLFxuICAgIHRyYW5zTGlnaHQ6ICdyZ2JhKDAsIDAsIDAsIC4xKScsXG4gICAgdHJhbnNNaWQ6ICdyZ2JhKDAsIDAsIDAsIC41NSknLFxuICAgIHRyYW5zRGFyazogJ3JnYmEoMCwgMCwgMCwgLjg1KScsXG4gICAgdHJhbnNOb25lOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gIH0sXG4gIGZvbnQ6IHtcbiAgICBmYW1pbHk6IGBMYXRvLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZmAsXG4gICAgYmFzZTogJzFyZW0nLFxuICB9LFxuICBoZWFkaW5nczoge1xuICAgIGZhbWlseTogJ0xhdG8nLFxuICB9LFxuICB0cmFuc2l0aW9uOiAnMzAwbXMgZWFzZS1pbi1vdXQnLFxuICBicmVha3BvaW50czoge1xuICAgIHhzOiAwLFxuICAgIHNtOiA1NzYsXG4gICAgbWQ6IDc2OCxcbiAgICBsZzogOTkyLFxuICAgIHhsOiAxMjAwLFxuICAgIHh4bDogMTQwMCxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZhcmlhYmxlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9zdHlsZXMvdmFyaWFibGVzLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==