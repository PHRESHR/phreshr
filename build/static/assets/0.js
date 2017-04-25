webpackJsonp([0],{

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const react_helmet_1 = __webpack_require__(196);
const Featured_1 = __webpack_require__(578);
const EpisodeList_1 = __webpack_require__(576);
const ShowList_1 = __webpack_require__(565);
const Collapse_1 = __webpack_require__(570);
const styles_1 = __webpack_require__(589);
function Home() {
    return (React.createElement(styles_1.HomeContainer, null,
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "Home")),
        React.createElement(Featured_1.default, null),
        React.createElement(Collapse_1.default, null,
            React.createElement(EpisodeList_1.default, null)),
        React.createElement(ShowList_1.default, null)));
}
exports.default = Home;


/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Loading_1 = __webpack_require__(556);
exports.default = Loading_1.default;


/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
const utils_1 = __webpack_require__(49);
exports.AspectRatio16x9 = styled_components_1.default.div `
  ${utils_1.aspectRatio(16, 9)}
`;
exports.AspectRatio5x2 = styled_components_1.default.div `
  ${utils_1.aspectRatio(4, 3)}
  ${utils_1.media.md `
    ${utils_1.aspectRatio(5, 2)}
  `}
`;
exports.AspectRatio4x3 = styled_components_1.default.div `
  ${utils_1.aspectRatio(4, 3)}
`;
exports.AspectRatio2x3 = styled_components_1.default.div `
  ${utils_1.aspectRatio(2, 3)}
`;


/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
const utils_1 = __webpack_require__(49);
const GridItem = styled_components_1.default.article `
  flex: 0 0 100%;
  padding-bottom: 1rem;
  margin-right: ${props => props.itemMargin};

  ${utils_1.media.md `
    flex: 0 0 calc(100% / 2 - 0.25);
  `}

  ${utils_1.media.lg `
    flex: 0 0 calc(100% / 3 - 0.5rem);
  `}

  ${utils_1.media.xl `
    flex: 0 0 calc(100% / 4 - 0.5rem);
  `}

  h1 {
    font-size: 1.2rem;
    ${utils_1.media.md `
      font-size: 1.5rem;
    `}
  }
`;
exports.default = GridItem;


/***/ }),

/***/ 555:
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShowInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Show"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"uid"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"title"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"description"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"posterImageUrl"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"featureImageUrl"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShowEpisodes"},"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShowEpisodes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Show"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"episodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_not"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"uid"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"title"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"description"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"thumbImageUrl"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"imagePublicId"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":268}};

module.exports = doc;

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const recompose_1 = __webpack_require__(70);
const styles_1 = __webpack_require__(557);
function Loading() {
    return (React.createElement(styles_1.Spinner, null,
        React.createElement("div", { className: "sk-cube-grid" },
            React.createElement("div", { className: "sk-cube sk-cube1" }),
            React.createElement("div", { className: "sk-cube sk-cube2" }),
            React.createElement("div", { className: "sk-cube sk-cube3" }),
            React.createElement("div", { className: "sk-cube sk-cube4" }),
            React.createElement("div", { className: "sk-cube sk-cube5" }),
            React.createElement("div", { className: "sk-cube sk-cube6" }),
            React.createElement("div", { className: "sk-cube sk-cube7" }),
            React.createElement("div", { className: "sk-cube sk-cube8" }),
            React.createElement("div", { className: "sk-cube sk-cube9" }))));
}
const displayLoadingState = recompose_1.branch(props => props.data.loading, recompose_1.renderComponent(Loading));
exports.default = displayLoadingState;


/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
exports.Spinner = styled_components_1.default.div `
  .sk-cube-grid {
    width: 40px;
    height: 40px;
    margin: 100px auto;
  }

  .sk-cube-grid .sk-cube {
    width: 33%;
    height: 33%;
    background-color: #E3D63F;
    float: left;
    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
  }
  .sk-cube-grid .sk-cube1 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .sk-cube-grid .sk-cube2 {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .sk-cube-grid .sk-cube3 {
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s; }
  .sk-cube-grid .sk-cube4 {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
  .sk-cube-grid .sk-cube5 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .sk-cube-grid .sk-cube6 {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .sk-cube-grid .sk-cube7 {
    -webkit-animation-delay: 0s;
            animation-delay: 0s; }
  .sk-cube-grid .sk-cube8 {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
  .sk-cube-grid .sk-cube9 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }

  @-webkit-keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
    } 35% {
      -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1); 
    }
  }

  @keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
    } 35% {
      -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
    }
  }
`;


/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const react_router_dom_1 = __webpack_require__(35);
const styles_1 = __webpack_require__(560);
const AspectRatios_1 = __webpack_require__(553);
function Episode(props) {
    const { episode, detail } = props;
    if (detail) {
        return (React.createElement(styles_1.CardInfo, { className: "episode-info" },
            React.createElement("header", null,
                React.createElement("h3", null, episode.show.title),
                React.createElement("h1", null, episode.title)),
            React.createElement("div", { className: "episode-details" },
                React.createElement("div", { className: "inner" },
                    React.createElement("div", { className: "episode-description" },
                        React.createElement("h4", null, "Description"),
                        React.createElement("p", null, episode.description)),
                    React.createElement("div", { className: "episode-topics" },
                        React.createElement("h4", null, "Tags"),
                        episode.topics.map(topic => React.createElement("div", { key: topic.id }, topic.name)))))));
    }
    else {
        return (React.createElement(styles_1.CardEntry, { className: "item episode-item" },
            React.createElement(react_router_dom_1.Link, { to: `/watch/${episode.id}/${episode.uid}` },
                React.createElement(AspectRatios_1.AspectRatio16x9, null,
                    React.createElement("div", null,
                        React.createElement("img", { src: episode.thumbImageUrl, alt: episode.title }))),
                episode.show && React.createElement("h3", null, episode.show.title),
                React.createElement("h1", null, episode.title),
                React.createElement("p", null, episode.description),
                episode.topics && episode.topics.map(topic => React.createElement("div", { key: topic.id }, topic.name)))));
    }
}
exports.default = Episode;


/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EpisodeCard_1 = __webpack_require__(558);
exports.default = EpisodeCard_1.default;


/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
const utils_1 = __webpack_require__(49);
const GridItem_1 = __webpack_require__(554);
exports.CardInfo = styled_components_1.default.section `
  header {
    padding-top: .5rem;
    padding-bottom: .5rem;
  }
  .episode-details {
    background-color: #111;
    padding: 2.5rem 0;
    position: relative;
  }
  header,
  .episode-details .inner {
    padding: ${props => props.padding ? props.padding : '0 .375rem'};
    ${utils_1.media.sm `
      padding: ${props => props.padding ? props.padding : '0 .5rem'};
    `}
    ${utils_1.media.md `
      padding: ${props => props.padding ? props.padding : '0 2.5rem'};
    `}
    ${utils_1.media.xl `
      padding: ${props => props.padding ? props.padding : '0 5rem'};
    `}
  }
  ${utils_1.media.md `
  `}
`;
exports.CardEntry = styled_components_1.default(GridItem_1.default) `
  ${utils_1.media.md `
  `}

  ${utils_1.media.lg `
  `}

  ${utils_1.media.xl `
  `}
`;
exports.default = exports.CardEntry;


/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const react_router_dom_1 = __webpack_require__(35);
const styles_1 = __webpack_require__(563);
const AspectRatios_1 = __webpack_require__(553);
function ShowCard(props) {
    const { show, detail } = props;
    if (detail) {
        return (React.createElement(styles_1.CardInfo, { className: "show-view" },
            React.createElement("section", { className: "show-marquee" },
                React.createElement("div", { className: "media" },
                    React.createElement(AspectRatios_1.AspectRatio16x9, null,
                        React.createElement("div", { className: "show-image" },
                            React.createElement("img", { src: show.featureImageUrl, alt: show.title })))),
                React.createElement("div", { className: "show-info" },
                    React.createElement("h1", null, show.title),
                    React.createElement("p", null, show.description)))));
    }
    else {
        return (React.createElement(styles_1.ShowEntry, { className: "item show-item" },
            React.createElement(react_router_dom_1.Link, { to: `/show/${show.id}/${show.uid}` },
                React.createElement("img", { src: show.posterImageUrl, alt: show.title }),
                React.createElement("h1", null, show.title),
                React.createElement("p", null, show.description))));
    }
}
exports.default = ShowCard;


/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ShowCard_1 = __webpack_require__(561);
exports.default = ShowCard_1.default;


/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
const utils_1 = __webpack_require__(49);
const GridItem_1 = __webpack_require__(554);
exports.CardInfo = styled_components_1.default.div `
  width: 100%;

  .show-marquee {
    display: flex;
    flex-direction: column;
    ${utils_1.media.md `
      flex-direction: row;
    `}
    .media {
      display: flex;
      flex: 0 0  100%;
      ${utils_1.media.md `
        flex: 0 0  60%;
      `}
    }
  }
  .show-image {
    display: flex;
  }

  .show-info {
    padding: 0 0.5rem;
    ${utils_1.media.md `
      padding: 0 2rem;
    `}

    h1 {
      font-size: 1.5rem;
      ${utils_1.media.md `
        font-size: 3.5rem;
      `}
    }
  }
`;
exports.ShowEntry = styled_components_1.default(GridItem_1.default) `
  flex: 0 0 calc(100% / 2 - 4px);
  width: calc(100% / 2 - 4px);

  ${utils_1.media.md `
    flex: 0 0 calc(100% / 2 - 4px);
  `}

  ${utils_1.media.lg `
    flex: 0 0 calc(100% / 3 - 8px);
  `}

  ${utils_1.media.xl `
    flex: 0 0 calc(100% / 4 - 8px);
  `}
`;
exports.default = exports.ShowEntry;


/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const react_apollo_1 = __webpack_require__(111);
const recompose_1 = __webpack_require__(70);
const Loading_1 = __webpack_require__(552);
const styles_1 = __webpack_require__(566);
const ShowCard_1 = __webpack_require__(562);
const SHOWS_QUERY = __webpack_require__(567);
function ShowList(props) {
    const { allShows } = props;
    return (React.createElement(styles_1.default, { wrap: true, justify: "space-between", className: "show-container" },
        React.createElement("div", { className: "header" },
            React.createElement("h2", null, "Shows")),
        allShows.map(show => React.createElement(ShowCard_1.default, { key: show.id, show: show }))));
}
exports.default = recompose_1.compose(react_apollo_1.graphql(SHOWS_QUERY), Loading_1.default, recompose_1.flattenProp('data'), recompose_1.pure)(ShowList);


/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ShowList_1 = __webpack_require__(564);
exports.default = ShowList_1.default;


/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
const Container_1 = __webpack_require__(195);
const utils_1 = __webpack_require__(49);
const ShowContainer = styled_components_1.default(Container_1.default) `
  flex-direction: row;
  flex-wrap: wrap;
  ${utils_1.media.md `
  `}
`;
exports.default = ShowContainer;


/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllShows"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"allShows"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShowInfo"},"directives":[]}]}}]}}],"loc":{"start":0,"end":95}};
doc.definitions = doc.definitions.concat(__webpack_require__(555).definitions);

module.exports = doc;

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EpisodeInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Episode"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"uid"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"title"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"description"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"thumbImageUrl"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"imagePublicId"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"videoUrl"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"season"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"topics"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"name"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":164}};

module.exports = doc;

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const recompose_1 = __webpack_require__(70);
const styles_1 = __webpack_require__(571);
function Collapse(props) {
    const { children, toggleCollapsed, collapsed } = props;
    return (React.createElement(styles_1.default, null,
        React.createElement("button", { onClick: toggleCollapsed }, !collapsed
            ? React.createElement("svg", { className: "icon icon--cross" },
                React.createElement("use", { xlinkHref: "#icon-cross" }))
            : React.createElement("svg", { className: "icon icon--menu" },
                React.createElement("use", { xlinkHref: "#icon-menu" }))),
        !collapsed ?
            (React.createElement("div", { className: "collapse-inner" }, children)) : null));
}
const propTypes = {
    children: React.PropTypes.node.isRequired,
};
exports.default = recompose_1.compose(recompose_1.withState('collapsed', 'setCollapsed', true), recompose_1.withHandlers({
    toggleCollapsed: ({ setCollapsed }) => e => {
        e.preventDefault();
        setCollapsed(v => !v);
    },
}), recompose_1.setPropTypes(propTypes), recompose_1.pure)(Collapse);


/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Collapse_1 = __webpack_require__(569);
exports.default = Collapse_1.default;


/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
const utils_1 = __webpack_require__(49);
const CollapseContainer = styled_components_1.default.div `
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  width: 100%;
  z-index: 1;

  button {
    position: absolute;
    right: 5rem;
    bottom: 5rem;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  .icon {
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 auto;
    fill: #fff;
  }
  .collapse-inner {
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.75);
  }
  ${utils_1.media.md ``}
`;
exports.default = CollapseContainer;


/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const react_apollo_1 = __webpack_require__(111);
const recompose_1 = __webpack_require__(70);
const Container_1 = __webpack_require__(195);
const Loading_1 = __webpack_require__(552);
const EpisodeCard_1 = __webpack_require__(559);
const EPISODES_QUERY = __webpack_require__(590);
function EpisodeList(props) {
    const { allEpisodes } = props;
    return (React.createElement(Container_1.default, { wrap: true, justify: "space-between", className: "episodes-container" },
        React.createElement("div", { className: "header" },
            React.createElement("h2", null, "Episodes")),
        allEpisodes.map(episode => React.createElement(EpisodeCard_1.default, { key: episode.id, episode: episode }))));
}
exports.default = recompose_1.compose(react_apollo_1.graphql(EPISODES_QUERY), Loading_1.default, recompose_1.flattenProp('data'), recompose_1.pure)(EpisodeList);


/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EpisodeList_1 = __webpack_require__(575);
exports.default = EpisodeList_1.default;


/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const react_router_dom_1 = __webpack_require__(35);
const react_apollo_1 = __webpack_require__(111);
const recompose_1 = __webpack_require__(70);
const Loading_1 = __webpack_require__(552);
const styles_1 = __webpack_require__(579);
const FEATUREDS_QUERY = __webpack_require__(591);
function Featured(props) {
    const { Featured, allFeatureds } = props;
    const imagesList = allFeatureds.map(featured => featured.episode.featureImageUrl);
    const featured = allFeatureds[0];
    const inlineStyle = {
        backgroundImage: `url(${featured.episode.featureImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: '100%',
        height: '100%',
    };
    return (React.createElement(styles_1.default, null,
        React.createElement("div", { className: "preview", style: inlineStyle }),
        React.createElement("div", { className: "featured-info" },
            React.createElement("h3", null,
                featured.episode.show.title,
                " | ",
                React.createElement("span", null,
                    "Season.",
                    featured.episode.season)),
            React.createElement(react_router_dom_1.Link, { to: `/watch/${featured.episode.id}/${featured.episode.uid}` },
                React.createElement("h1", null, featured.episode.title)))));
}
exports.default = recompose_1.compose(react_apollo_1.graphql(FEATUREDS_QUERY), Loading_1.default, recompose_1.flattenProp('data'), recompose_1.pure)(Featured);


/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Featured_1 = __webpack_require__(577);
exports.default = Featured_1.default;


/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
const utils_1 = __webpack_require__(49);
const FeaturedContainer = styled_components_1.default.div `
  position: relative;
  width: 100%;
  height: 100vh;

  .featured-info {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 95%;
    padding: 2rem;

    ${utils_1.media.lg `
      width: 90%;
      max-width: 1200px;
    `}
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    line-height: 0.85;
    word-spacing: -0.85rem;
    text-transform: capitalize;

    ${utils_1.media.md `
      font-size: 6rem;
    `}
  }

  h3 {
    span {
      font-size: 1rem;
    }
  }
`;
exports.default = FeaturedContainer;


/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
exports.HomeContainer = styled_components_1.default.div `
  margin-top: -5rem;
`;
exports.CollapsedContainer = styled_components_1.default.section `
  position: absolute;
  bottom: 5rem;
  z-index: 1;
`;


/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllEpisodes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"allEpisodes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EpisodeInfo"},"directives":[]},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"show"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShowInfo"},"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":176}};
doc.definitions = doc.definitions.concat(__webpack_require__(568).definitions);
doc.definitions = doc.definitions.concat(__webpack_require__(555).definitions);

module.exports = doc;

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllFeatureds"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"allFeatureds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"createdAt_DESC"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FeaturedInfo"},"directives":[]}]}}]}}],"loc":{"start":0,"end":126}};
doc.definitions = doc.definitions.concat(__webpack_require__(593).definitions);

module.exports = doc;

/***/ }),

/***/ 593:
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FeaturedInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Featured"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"episode"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"uid"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"title"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"description"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"featureImageUrl"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"imagePublicId"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"season"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"show"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"title"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}]}}],"loc":{"start":0,"end":178}};

module.exports = doc;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9wYWdlcy9Ib21lL0hvbWUudHN4Iiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvTG9hZGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi91aS9zdHlsZXMvQXNwZWN0UmF0aW9zLnRzIiwid2VicGFjazovLy8uL3VpL3N0eWxlcy9HcmlkSXRlbS50cyIsIndlYnBhY2s6Ly8vLi91aS9ncmFwaHFsL1Nob3dGcmFnbWVudHMuZ3JhcGhxbCIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9Mb2FkaW5nL3N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0VwaXNvZGVDYXJkL0VwaXNvZGVDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0VwaXNvZGVDYXJkL2luZGV4LnRzIiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvRXBpc29kZUNhcmQvc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvU2hvd0NhcmQvU2hvd0NhcmQudHN4Iiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvU2hvd0NhcmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9TaG93Q2FyZC9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9TaG93TGlzdC9TaG93TGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9TaG93TGlzdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL1Nob3dMaXN0L3N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi91aS9ncmFwaHFsL0FsbFNob3dzUXVlcnkuZ3JhcGhxbCIsIndlYnBhY2s6Ly8vLi91aS9ncmFwaHFsL0VwaXNvZGVGcmFnbWVudHMuZ3JhcGhxbCIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0NvbGxhcHNlL0NvbGxhcHNlLnRzeCIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0NvbGxhcHNlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvQ29sbGFwc2Uvc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvRXBpc29kZUxpc3QvRXBpc29kZUxpc3QudHN4Iiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvRXBpc29kZUxpc3QvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9GZWF0dXJlZC9GZWF0dXJlZC50c3giLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9GZWF0dXJlZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0ZlYXR1cmVkL3N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi91aS9wYWdlcy9Ib21lL3N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi91aS9ncmFwaHFsL0FsbEVwaXNvZGVzUXVlcnkuZ3JhcGhxbCIsIndlYnBhY2s6Ly8vLi91aS9ncmFwaHFsL0FsbEZlYXR1cmVkc1F1ZXJ5LmdyYXBocWwiLCJ3ZWJwYWNrOi8vLy4vdWkvZ3JhcGhxbC9GZWF0dXJlZEZyYWdtZW50cy5ncmFwaHFsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEscUNBQStCO0FBQy9CLGdEQUFzQztBQUV0Qyw0Q0FBOEM7QUFDOUMsK0NBQW9EO0FBQ3BELDRDQUE4QztBQUM5Qyw0Q0FBOEM7QUFDOUMsMENBQXlDO0FBRXpDO0lBQ0UsTUFBTSxDQUFDLENBQ0wsb0JBQUMsc0JBQWE7UUFDWixvQkFBQyxxQkFBTTtZQUNMLDBDQUFtQixDQUNaO1FBQ1Qsb0JBQUMsa0JBQVEsT0FBRztRQUNaLG9CQUFDLGtCQUFRO1lBQ1Asb0JBQUMscUJBQVcsT0FBRyxDQUNOO1FBQ1gsb0JBQUMsa0JBQVEsT0FBRyxDQUNFLENBQ2pCLENBQUM7QUFDSixDQUFDO0FBRUQsa0JBQWUsSUFBSSxDQUFD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O0FDSEEsV0FBVyxrQ0FBa0Msb0NBQW9DLHFDQUFxQyxrQkFBa0IsMkJBQTJCLGtDQUFrQyxpQ0FBaUMscUNBQXFDLG9DQUFvQywyQkFBMkIsb0RBQW9ELEVBQUUsb0NBQW9DLGdDQUFnQyxnREFBZ0QscUNBQXFDLG9DQUFvQywyQkFBMkIsb0RBQW9ELEVBQUUsb0NBQW9DLDRCQUE0QixvREFBb0QsRUFBRSxvQ0FBb0MsOEJBQThCLG9EQUFvRCxFQUFFLG9DQUFvQyxvQ0FBb0Msb0RBQW9ELEVBQUUsb0NBQW9DLHdDQUF3QyxvREFBb0QsRUFBRSxvQ0FBb0Msc0NBQXNDLG9EQUFvRCxFQUFFLG9DQUFvQywrQkFBK0Isb0RBQW9ELEVBQUUsb0NBQW9DLDZCQUE2QixnREFBZ0QscUNBQXFDLG9DQUFvQyw4QkFBOEIsb0RBQW9ELEdBQUcsR0FBRyxHQUFHLFNBQVM7O0FBRW5wRCxxQiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcblxuaW1wb3J0IEZlYXR1cmVkIGZyb20gJ3VpL2NvbXBvbmVudHMvRmVhdHVyZWQnO1xuaW1wb3J0IEVwaXNvZGVMaXN0IGZyb20gJ3VpL2NvbXBvbmVudHMvRXBpc29kZUxpc3QnO1xuaW1wb3J0IFNob3dMaXN0IGZyb20gJ3VpL2NvbXBvbmVudHMvU2hvd0xpc3QnO1xuaW1wb3J0IENvbGxhcHNlIGZyb20gJ3VpL2NvbXBvbmVudHMvQ29sbGFwc2UnO1xuaW1wb3J0IHsgSG9tZUNvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJztcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8SG9tZUNvbnRhaW5lcj5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICAgIDwvSGVsbWV0PlxuICAgICAgPEZlYXR1cmVkIC8+XG4gICAgICA8Q29sbGFwc2U+XG4gICAgICAgIDxFcGlzb2RlTGlzdCAvPlxuICAgICAgPC9Db2xsYXBzZT5cbiAgICAgIDxTaG93TGlzdCAvPlxuICAgIDwvSG9tZUNvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9wYWdlcy9Ib21lL0hvbWUudHN4IiwiaW1wb3J0IExvYWRpbmcgZnJvbSAnLi9Mb2FkaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL0xvYWRpbmcvaW5kZXgudHMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGFzcGVjdFJhdGlvLCBtZWRpYSB9IGZyb20gJ3VpL3N0eWxlcy91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBBc3BlY3RSYXRpbzE2eDkgPSBzdHlsZWQuZGl2YFxuICAkeyBhc3BlY3RSYXRpbygxNiwgOSkgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFzcGVjdFJhdGlvNXgyID0gc3R5bGVkLmRpdmBcbiAgJHsgYXNwZWN0UmF0aW8oNCwgMykgfVxuICAke21lZGlhLm1kYFxuICAgICR7IGFzcGVjdFJhdGlvKDUsIDIpIH1cbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBBc3BlY3RSYXRpbzR4MyA9IHN0eWxlZC5kaXZgXG4gICR7IGFzcGVjdFJhdGlvKDQsIDMpIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBBc3BlY3RSYXRpbzJ4MyA9IHN0eWxlZC5kaXZgXG4gICR7IGFzcGVjdFJhdGlvKDIsIDMpIH1cbmA7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9zdHlsZXMvQXNwZWN0UmF0aW9zLnRzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtZWRpYSB9IGZyb20gJ3VpL3N0eWxlcy91dGlscyc7XG5cbmNvbnN0IEdyaWRJdGVtID0gc3R5bGVkLmFydGljbGVgXG4gIGZsZXg6IDAgMCAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IHByb3BzLml0ZW1NYXJnaW59O1xuXG4gICR7bWVkaWEubWRgXG4gICAgZmxleDogMCAwIGNhbGMoMTAwJSAvIDIgLSAwLjI1KTtcbiAgYH1cblxuICAke21lZGlhLmxnYFxuICAgIGZsZXg6IDAgMCBjYWxjKDEwMCUgLyAzIC0gMC41cmVtKTtcbiAgYH1cblxuICAke21lZGlhLnhsYFxuICAgIGZsZXg6IDAgMCBjYWxjKDEwMCUgLyA0IC0gMC41cmVtKTtcbiAgYH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgJHttZWRpYS5tZGBcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRJdGVtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL3N0eWxlcy9HcmlkSXRlbS50cyIsInZhciBkb2MgPSB7XCJraW5kXCI6XCJEb2N1bWVudFwiLFwiZGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiRnJhZ21lbnREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNob3dJbmZvXCJ9LFwidHlwZUNvbmRpdGlvblwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTaG93XCJ9fSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidWlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aXRsZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGVzY3JpcHRpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInBvc3RlckltYWdlVXJsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJmZWF0dXJlSW1hZ2VVcmxcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZyYWdtZW50U3ByZWFkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNob3dFcGlzb2Rlc1wifSxcImRpcmVjdGl2ZXNcIjpbXX1dfX0se1wia2luZFwiOlwiRnJhZ21lbnREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNob3dFcGlzb2Rlc1wifSxcInR5cGVDb25kaXRpb25cIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2hvd1wifX0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZXBpc29kZXNcIn0sXCJhcmd1bWVudHNcIjpbe1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZmlsdGVyXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJPYmplY3RWYWx1ZVwiLFwiZmllbGRzXCI6W3tcImtpbmRcIjpcIk9iamVjdEZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkX25vdFwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn19fV19fV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGl0bGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImRlc2NyaXB0aW9uXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aHVtYkltYWdlVXJsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpbWFnZVB1YmxpY0lkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfV19fV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjoyNjh9fTtcblxubW9kdWxlLmV4cG9ydHMgPSBkb2M7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi91aS9ncmFwaHFsL1Nob3dGcmFnbWVudHMuZ3JhcGhxbFxuLy8gbW9kdWxlIGlkID0gNTU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJyYW5jaCwgcmVuZGVyQ29tcG9uZW50IH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gIHJldHVybiAoXG4gICAgPFNwaW5uZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWN1YmUtZ3JpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWN1YmUgc2stY3ViZTFcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWN1YmUgc2stY3ViZTJcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWN1YmUgc2stY3ViZTNcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWN1YmUgc2stY3ViZTRcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWN1YmUgc2stY3ViZTVcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWN1YmUgc2stY3ViZTZcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWN1YmUgc2stY3ViZTdcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWN1YmUgc2stY3ViZThcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWN1YmUgc2stY3ViZTlcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9TcGlubmVyPlxuICApO1xufVxuXG5jb25zdCBkaXNwbGF5TG9hZGluZ1N0YXRlID0gYnJhbmNoKFxuICBwcm9wcyA9PiBwcm9wcy5kYXRhLmxvYWRpbmcsXG4gIHJlbmRlckNvbXBvbmVudChMb2FkaW5nKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlMb2FkaW5nU3RhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcudHN4IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtZWRpYSB9IGZyb20gJ3VpL3N0eWxlcy91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdmBcbiAgLnNrLWN1YmUtZ3JpZCB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMTAwcHggYXV0bztcbiAgfVxuXG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgaGVpZ2h0OiAzMyU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRDYzRjtcbiAgICBmbG9hdDogbGVmdDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY3ViZUdyaWRTY2FsZURlbGF5IDEuM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICBhbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICB9XG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUxIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlMiB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7IH1cbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTMge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzOyB9XG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU0IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xczsgfVxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTYge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9XG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU3IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDBzOyB9XG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU4IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xczsgfVxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlOSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcbiAgICAwJSwgNzAlLCAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XG4gICAgfSAzNSUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTsgXG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBzay1jdWJlR3JpZFNjYWxlRGVsYXkge1xuICAgIDAlLCA3MCUsIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcbiAgICB9IDM1JSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xuICAgIH1cbiAgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL0xvYWRpbmcvc3R5bGVzLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdjbG91ZGluYXJ5LXJlYWN0JztcbmltcG9ydCB7IENhcmRJbmZvLCBDYXJkRW50cnkgfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyBBc3BlY3RSYXRpbzE2eDkgfSBmcm9tICd1aS9zdHlsZXMvQXNwZWN0UmF0aW9zJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZXBpc29kZToge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgdWlkOiBzdHJpbmcsXG4gICAgc2hvdzoge1xuICAgICAgdGl0bGU6IHN0cmluZztcbiAgICB9LFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICB0aHVtYkltYWdlVXJsOiBzdHJpbmcsXG4gICAgdG9waWNzOiBbe2lkLCBuYW1lfV0sXG4gIH07XG4gIGRldGFpbD86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIEVwaXNvZGUocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgZXBpc29kZSwgZGV0YWlsIH0gPSBwcm9wcztcbiAgaWYgKGRldGFpbCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZEluZm8gY2xhc3NOYW1lPVwiZXBpc29kZS1pbmZvXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPGgzPntlcGlzb2RlLnNob3cudGl0bGV9PC9oMz5cbiAgICAgICAgICA8aDE+e2VwaXNvZGUudGl0bGV9PC9oMT5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXBpc29kZS1kZXRhaWxzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcGlzb2RlLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIDxoND5EZXNjcmlwdGlvbjwvaDQ+XG4gICAgICAgICAgICAgIDxwPntlcGlzb2RlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcGlzb2RlLXRvcGljc1wiPlxuICAgICAgICAgICAgICA8aDQ+VGFnczwvaDQ+XG4gICAgICAgICAgICAgIHtlcGlzb2RlLnRvcGljcy5tYXAodG9waWMgPT5cbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17dG9waWMuaWR9Pnt0b3BpYy5uYW1lfTwvZGl2PixcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZEluZm8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRFbnRyeSBjbGFzc05hbWU9XCJpdGVtIGVwaXNvZGUtaXRlbVwiPlxuICAgICAgICA8TGluayB0bz17YC93YXRjaC8ke2VwaXNvZGUuaWR9LyR7ZXBpc29kZS51aWR9YH0+XG4gICAgICAgICAgPEFzcGVjdFJhdGlvMTZ4OT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHsvKjxJbWFnZSBjbG91ZE5hbWU9XCJwaHJlc2hyLW1lZGlhXCIgcHVibGljSWQ9e2VwaXNvZGUudGh1bWJJbWFnZVVybH0gd2lkdGg9XCI2MDBcIiBjcm9wPVwic2NhbGVcIiB0eXBlPVwiZmV0Y2hcIiAvPiovfVxuICAgICAgICAgICAgICA8aW1nIHNyYz17ZXBpc29kZS50aHVtYkltYWdlVXJsfSBhbHQ9e2VwaXNvZGUudGl0bGV9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQXNwZWN0UmF0aW8xNng5PlxuICAgICAgICAgIHtlcGlzb2RlLnNob3cgJiYgPGgzPntlcGlzb2RlLnNob3cudGl0bGV9PC9oMz59XG4gICAgICAgICAgPGgxPntlcGlzb2RlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHA+e2VwaXNvZGUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIHtlcGlzb2RlLnRvcGljcyAmJiBlcGlzb2RlLnRvcGljcy5tYXAodG9waWMgPT5cbiAgICAgICAgICAgIDxkaXYga2V5PXt0b3BpYy5pZH0+e3RvcGljLm5hbWV9PC9kaXY+LFxuICAgICAgICAgICl9XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvQ2FyZEVudHJ5PlxuICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVwaXNvZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9FcGlzb2RlQ2FyZC9FcGlzb2RlQ2FyZC50c3giLCJpbXBvcnQgRXBpc29kZUNhcmQgZnJvbSAnLi9FcGlzb2RlQ2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IEVwaXNvZGVDYXJkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvRXBpc29kZUNhcmQvaW5kZXgudHMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lZGlhIH0gZnJvbSAndWkvc3R5bGVzL3V0aWxzJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAndWkvc3R5bGVzL0NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAndWkvc3R5bGVzL0dyaWRJdGVtJztcblxuZXhwb3J0IGNvbnN0IENhcmRJbmZvID0gc3R5bGVkLnNlY3Rpb25gXG4gIGhlYWRlciB7XG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgfVxuICAuZXBpc29kZS1kZXRhaWxzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xuICAgIHBhZGRpbmc6IDIuNXJlbSAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBoZWFkZXIsXG4gIC5lcGlzb2RlLWRldGFpbHMgLmlubmVyIHtcbiAgICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmcgPyBwcm9wcy5wYWRkaW5nIDogICcwIC4zNzVyZW0nfTtcbiAgICAke21lZGlhLnNtYFxuICAgICAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy5wYWRkaW5nID8gcHJvcHMucGFkZGluZyA6ICAnMCAuNXJlbSd9O1xuICAgIGB9XG4gICAgJHttZWRpYS5tZGBcbiAgICAgIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMucGFkZGluZyA/IHByb3BzLnBhZGRpbmcgOiAgJzAgMi41cmVtJ307XG4gICAgYH1cbiAgICAke21lZGlhLnhsYFxuICAgICAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy5wYWRkaW5nID8gcHJvcHMucGFkZGluZyA6ICAnMCA1cmVtJ307XG4gICAgYH1cbiAgfVxuICAke21lZGlhLm1kYFxuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENhcmRFbnRyeSA9IHN0eWxlZChHcmlkSXRlbSlgXG4gICR7bWVkaWEubWRgXG4gIGB9XG5cbiAgJHttZWRpYS5sZ2BcbiAgYH1cblxuICAke21lZGlhLnhsYFxuICBgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZEVudHJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvRXBpc29kZUNhcmQvc3R5bGVzLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgQ2FyZEluZm8sIFNob3dFbnRyeSB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IEFzcGVjdFJhdGlvMTZ4OSB9IGZyb20gJ3VpL3N0eWxlcy9Bc3BlY3RSYXRpb3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzaG93OiB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICB1aWQ6IHN0cmluZyxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgcG9zdGVySW1hZ2VVcmw6IHN0cmluZyxcbiAgICBmZWF0dXJlSW1hZ2VVcmw6IHN0cmluZyxcblxuICB9O1xuICBkZXRhaWw/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBTaG93Q2FyZChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBzaG93LCBkZXRhaWwgfSA9IHByb3BzO1xuICBpZiAoZGV0YWlsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkSW5mbyBjbGFzc05hbWU9XCJzaG93LXZpZXdcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2hvdy1tYXJxdWVlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgPEFzcGVjdFJhdGlvMTZ4OT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Nob3cuZmVhdHVyZUltYWdlVXJsfSBhbHQ9e3Nob3cudGl0bGV9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0FzcGVjdFJhdGlvMTZ4OT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctaW5mb1wiPlxuICAgICAgICAgICAgPGgxPntzaG93LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8cD57c2hvdy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvQ2FyZEluZm8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNob3dFbnRyeSBjbGFzc05hbWU9XCJpdGVtIHNob3ctaXRlbVwiPlxuICAgICAgICA8TGluayB0bz17YC9zaG93LyR7c2hvdy5pZH0vJHtzaG93LnVpZH1gfT5cbiAgICAgICAgICA8aW1nIHNyYz17c2hvdy5wb3N0ZXJJbWFnZVVybH0gYWx0PXtzaG93LnRpdGxlfS8+XG4gICAgICAgICAgPGgxPntzaG93LnRpdGxlfTwvaDE+XG4gICAgICAgICAgPHA+e3Nob3cuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1Nob3dFbnRyeT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dDYXJkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvU2hvd0NhcmQvU2hvd0NhcmQudHN4IiwiaW1wb3J0IFNob3dDYXJkIGZyb20gJy4vU2hvd0NhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBTaG93Q2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL1Nob3dDYXJkL2luZGV4LnRzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtZWRpYSB9IGZyb20gJ3VpL3N0eWxlcy91dGlscyc7XG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAndWkvc3R5bGVzL0dyaWRJdGVtJztcblxuZXhwb3J0IGNvbnN0IENhcmRJbmZvID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLnNob3ctbWFycXVlZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICR7bWVkaWEubWRgXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGB9XG4gICAgLm1lZGlhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4OiAwIDAgIDEwMCU7XG4gICAgICAke21lZGlhLm1kYFxuICAgICAgICBmbGV4OiAwIDAgIDYwJTtcbiAgICAgIGB9XG4gICAgfVxuICB9XG4gIC5zaG93LWltYWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLnNob3ctaW5mbyB7XG4gICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgJHttZWRpYS5tZGBcbiAgICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICBgfVxuXG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAke21lZGlhLm1kYFxuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgIGB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2hvd0VudHJ5ID0gc3R5bGVkKEdyaWRJdGVtKWBcbiAgZmxleDogMCAwIGNhbGMoMTAwJSAvIDIgLSA0cHgpO1xuICB3aWR0aDogY2FsYygxMDAlIC8gMiAtIDRweCk7XG5cbiAgJHttZWRpYS5tZGBcbiAgICBmbGV4OiAwIDAgY2FsYygxMDAlIC8gMiAtIDRweCk7XG4gIGB9XG5cbiAgJHttZWRpYS5sZ2BcbiAgICBmbGV4OiAwIDAgY2FsYygxMDAlIC8gMyAtIDhweCk7XG4gIGB9XG5cbiAgJHttZWRpYS54bGBcbiAgICBmbGV4OiAwIDAgY2FsYygxMDAlIC8gNCAtIDhweCk7XG4gIGB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTaG93RW50cnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9TaG93Q2FyZC9zdHlsZXMudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7IGNvbXBvc2UsIGZsYXR0ZW5Qcm9wLCBwdXJlIH0gZnJvbSAncmVjb21wb3NlJztcblxuaW1wb3J0IGRpc3BsYXlMb2FkaW5nU3RhdGUgZnJvbSAndWkvY29tcG9uZW50cy9Mb2FkaW5nJztcbmltcG9ydCBTaG93Q29udGFpbmVyIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBTaG93Q2FyZCBmcm9tICd1aS9jb21wb25lbnRzL1Nob3dDYXJkJztcbmltcG9ydCAqIGFzIFNIT1dTX1FVRVJZIGZyb20gJ3VpL2dyYXBocWwvQWxsU2hvd3NRdWVyeS5ncmFwaHFsJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYWxsU2hvd3M7XG59XG5cbmZ1bmN0aW9uIFNob3dMaXN0KHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGFsbFNob3dzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8U2hvd0NvbnRhaW5lciB3cmFwIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgY2xhc3NOYW1lPVwic2hvdy1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxoMj5TaG93czwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIHthbGxTaG93cy5tYXAoc2hvdyA9PlxuICAgICAgICA8U2hvd0NhcmQga2V5PXtzaG93LmlkfSBzaG93PXtzaG93fS8+LFxuICAgICAgKX1cbiAgICA8L1Nob3dDb250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIGdyYXBocWwoU0hPV1NfUVVFUlkpLFxuICBkaXNwbGF5TG9hZGluZ1N0YXRlLFxuICBmbGF0dGVuUHJvcCgnZGF0YScpLFxuICBwdXJlLFxuKShTaG93TGlzdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9TaG93TGlzdC9TaG93TGlzdC50c3giLCJpbXBvcnQgU2hvd0xpc3QgZnJvbSAnLi9TaG93TGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dMaXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvU2hvd0xpc3QvaW5kZXgudHMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAndWkvc3R5bGVzL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBtZWRpYSB9IGZyb20gJ3VpL3N0eWxlcy91dGlscyc7XG5cbmNvbnN0IFNob3dDb250YWluZXIgPSBzdHlsZWQoQ29udGFpbmVyKWBcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICAke21lZGlhLm1kYFxuICBgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd0NvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL1Nob3dMaXN0L3N0eWxlcy50cyIsInZhciBkb2MgPSB7XCJraW5kXCI6XCJEb2N1bWVudFwiLFwiZGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiT3BlcmF0aW9uRGVmaW5pdGlvblwiLFwib3BlcmF0aW9uXCI6XCJxdWVyeVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJBbGxTaG93c1wifSxcInZhcmlhYmxlRGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiVmFyaWFibGVEZWZpbml0aW9uXCIsXCJ2YXJpYWJsZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9fSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSURcIn19LFwiZGVmYXVsdFZhbHVlXCI6bnVsbH1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImFsbFNob3dzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRnJhZ21lbnRTcHJlYWRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2hvd0luZm9cIn0sXCJkaXJlY3RpdmVzXCI6W119XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjk1fX07XG5kb2MuZGVmaW5pdGlvbnMgPSBkb2MuZGVmaW5pdGlvbnMuY29uY2F0KHJlcXVpcmUoXCIuL1Nob3dGcmFnbWVudHMuZ3JhcGhxbFwiKS5kZWZpbml0aW9ucyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZG9jO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdWkvZ3JhcGhxbC9BbGxTaG93c1F1ZXJ5LmdyYXBocWxcbi8vIG1vZHVsZSBpZCA9IDU2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyIsInZhciBkb2MgPSB7XCJraW5kXCI6XCJEb2N1bWVudFwiLFwiZGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiRnJhZ21lbnREZWZpbml0aW9uXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkVwaXNvZGVJbmZvXCJ9LFwidHlwZUNvbmRpdGlvblwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJFcGlzb2RlXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidWlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aXRsZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGVzY3JpcHRpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRodW1iSW1hZ2VVcmxcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImltYWdlUHVibGljSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInZpZGVvVXJsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzZWFzb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImNyZWF0ZWRBdFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidG9waWNzXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIm5hbWVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjE2NH19O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvYztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3VpL2dyYXBocWwvRXBpc29kZUZyYWdtZW50cy5ncmFwaHFsXG4vLyBtb2R1bGUgaWQgPSA1Njhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlLCBwdXJlLCBzZXRQcm9wVHlwZXMsIHdpdGhIYW5kbGVycywgd2l0aFN0YXRlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCBDb2xsYXBzZUNvbnRhaW5lciBmcm9tICcuL3N0eWxlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRpdGxlO1xuICBjaGlsZHJlbjtcbiAgdG9nZ2xlQ29sbGFwc2VkO1xuICBjb2xsYXBzZWQ7XG59XG5cbmZ1bmN0aW9uIENvbGxhcHNlKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCB0b2dnbGVDb2xsYXBzZWQsIGNvbGxhcHNlZCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPENvbGxhcHNlQ29udGFpbmVyPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVDb2xsYXBzZWR9PlxuICAgICAgICB7ICFjb2xsYXBzZWRcbiAgICAgICAgICA/IDxzdmcgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS1jcm9zc1wiPjx1c2UgeGxpbmtIcmVmPVwiI2ljb24tY3Jvc3NcIiAvPjwvc3ZnPlxuICAgICAgICAgIDogPHN2ZyBjbGFzc05hbWU9XCJpY29uIGljb24tLW1lbnVcIj48dXNlIHhsaW5rSHJlZj1cIiNpY29uLW1lbnVcIiAvPjwvc3ZnPiB9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHsgIWNvbGxhcHNlZCA/XG4gICAgICAgIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlLWlubmVyXCI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsXG4gICAgICB9XG4gICAgPC9Db2xsYXBzZUNvbnRhaW5lcj5cbiAgKTtcbn1cblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhTdGF0ZSgnY29sbGFwc2VkJywgJ3NldENvbGxhcHNlZCcsIHRydWUpLFxuICB3aXRoSGFuZGxlcnMoe1xuICAgIHRvZ2dsZUNvbGxhcHNlZDogKHsgc2V0Q29sbGFwc2VkIH0pID0+IGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0Q29sbGFwc2VkKHYgPT4gIXYpO1xuICAgIH0sXG4gIH0pLFxuICBzZXRQcm9wVHlwZXMocHJvcFR5cGVzKSxcbiAgcHVyZSxcbikoQ29sbGFwc2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvQ29sbGFwc2UvQ29sbGFwc2UudHN4IiwiaW1wb3J0IENvbGxhcHNlIGZyb20gJy4vQ29sbGFwc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBDb2xsYXBzZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL0NvbGxhcHNlL2luZGV4LnRzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtZWRpYSB9IGZyb20gJ3VpL3N0eWxlcy91dGlscyc7XG5cbmNvbnN0IENvbGxhcHNlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG5cbiAgYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVyZW07XG4gICAgYm90dG9tOiA1cmVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmaWxsOiAjZmZmO1xuICB9XG4gIC5jb2xsYXBzZS1pbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC43NSk7XG4gIH1cbiAgJHttZWRpYS5tZGBgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9Db2xsYXBzZS9zdHlsZXMudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7IGNvbXBvc2UsIGZsYXR0ZW5Qcm9wLCBwdXJlIH0gZnJvbSAncmVjb21wb3NlJztcblxuaW1wb3J0IEVwaXNvZGVDb250YWluZXIgZnJvbSAndWkvc3R5bGVzL0NvbnRhaW5lcic7XG5pbXBvcnQgZGlzcGxheUxvYWRpbmdTdGF0ZSBmcm9tICd1aS9jb21wb25lbnRzL0xvYWRpbmcnO1xuaW1wb3J0IEVwaXNvZGVDYXJkIGZyb20gJ3VpL2NvbXBvbmVudHMvRXBpc29kZUNhcmQnO1xuaW1wb3J0ICogYXMgRVBJU09ERVNfUVVFUlkgZnJvbSAndWkvZ3JhcGhxbC9BbGxFcGlzb2Rlc1F1ZXJ5LmdyYXBocWwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhbGxFcGlzb2Rlcztcbn1cblxuZnVuY3Rpb24gRXBpc29kZUxpc3QocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgYWxsRXBpc29kZXMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxFcGlzb2RlQ29udGFpbmVyIHdyYXAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBjbGFzc05hbWU9XCJlcGlzb2Rlcy1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxoMj5FcGlzb2RlczwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIHthbGxFcGlzb2Rlcy5tYXAoZXBpc29kZSA9PiA8RXBpc29kZUNhcmQga2V5PXtlcGlzb2RlLmlkfSBlcGlzb2RlPXtlcGlzb2RlfS8+LFxuICAgICAgKX1cbiAgICA8L0VwaXNvZGVDb250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIGdyYXBocWwoRVBJU09ERVNfUVVFUlkpLFxuICBkaXNwbGF5TG9hZGluZ1N0YXRlLFxuICBmbGF0dGVuUHJvcCgnZGF0YScpLFxuICBwdXJlLFxuKShFcGlzb2RlTGlzdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9FcGlzb2RlTGlzdC9FcGlzb2RlTGlzdC50c3giLCJpbXBvcnQgRXBpc29kZUxpc3QgZnJvbSAnLi9FcGlzb2RlTGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IEVwaXNvZGVMaXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvRXBpc29kZUxpc3QvaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7IGNvbXBvc2UsIGZsYXR0ZW5Qcm9wLCBwdXJlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IEltYWdlLCBUcmFuc2Zvcm1hdGlvbiB9IGZyb20gJ2Nsb3VkaW5hcnktcmVhY3QnO1xuXG5pbXBvcnQgZGlzcGxheUxvYWRpbmdTdGF0ZSBmcm9tICd1aS9jb21wb25lbnRzL0xvYWRpbmcnO1xuaW1wb3J0IHsgQXNwZWN0UmF0aW81eDIgfSBmcm9tICd1aS9zdHlsZXMvQXNwZWN0UmF0aW9zJztcbmltcG9ydCBGZWF0dXJlZENvbnRhaW5lciBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgKiBhcyBGRUFUVVJFRFNfUVVFUlkgZnJvbSAndWkvZ3JhcGhxbC9BbGxGZWF0dXJlZHNRdWVyeS5ncmFwaHFsJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYWxsRmVhdHVyZWRzO1xuICBGZWF0dXJlZDtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgaW1hZ2VzOiBzdHJpbmdbXTtcbn1cblxuZnVuY3Rpb24gRmVhdHVyZWQocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgRmVhdHVyZWQsIGFsbEZlYXR1cmVkcyB9ID0gcHJvcHM7XG4gIGNvbnN0IGltYWdlc0xpc3QgPSBhbGxGZWF0dXJlZHMubWFwKGZlYXR1cmVkID0+IGZlYXR1cmVkLmVwaXNvZGUuZmVhdHVyZUltYWdlVXJsKTtcbiAgY29uc3QgZmVhdHVyZWQgPSBhbGxGZWF0dXJlZHNbMF07XG5cbiAgY29uc3QgaW5saW5lU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZmVhdHVyZWQuZXBpc29kZS5mZWF0dXJlSW1hZ2VVcmx9KWAsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgfTtcbiAgLy8gY29uc3Qgc3RhdGU6IFN0YXRlID0ge1xuICAvLyAgIGltYWdlczogWy4uLmltYWdlc0xpc3RdLFxuICAvLyB9O1xuICAvLyBzdGF0ZS5pbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gIC8vICAgY29uc3QgcHJlbG9hZCA9IG5ldyBJbWFnZSgpO1xuICAvLyAgIHByZWxvYWQuc3JjID0gaW1hZ2U7XG4gIC8vIH0pO1xuICAvLyBjb25zdCB7aW1hZ2VzfSA9IHN0YXRlO1xuICAvLyBjb25zb2xlLmxvZyhpbWFnZXMpO1xuICAvLyBjb25zdCBmZWF0dXJlZEltYWdlID0gaW1hZ2VzLm1hcChpbWFnZSA9PiB7XG4gIC8vICAgcmV0dXJuIHtcbiAgLy8gICAgIGNvbnRlbnQ6IDxpbWcgc3JjPXtpbWFnZX0vPixcbiAgLy8gICAgIHByZXZpZXc6IDxpbWcgc3JjPXtpbWFnZX0vPixcbiAgLy8gICB9O1xuICAvLyB9KTtcbiAgLy8gY29uc29sZS5sb2coZmVhdHVyZWRJbWFnZSk7XG4gIHJldHVybiAoXG4gICAgPEZlYXR1cmVkQ29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3XCIgc3R5bGU9e2lubGluZVN0eWxlfSAvPlxuICAgICAgey8qPEltYWdlIGNsb3VkTmFtZT1cInBocmVzaHItbWVkaWFcIiBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX1cbiAgICAgICAgcHVibGljSWQ9e2ZlYXR1cmVkLmVwaXNvZGUuaW1hZ2VQdWJsaWNJZH1cbiAgICAgICAgYXNwZWN0X3JhdGlvPVwiMTY6OVwiXG4gICAgICAgIGhlaWdodD1cIjE0NDBcIlxuICAgICAgICBkcHI9XCJhdXRvXCJcbiAgICAgICAgcXVhbGl0eT1cImF1dG9cIlxuICAgICAgICB3aWR0aD1cIjI1NjBcIlxuICAgICAgICBjcm9wPVwic2NhbGVcIlxuICAgICAgICBncmF2aXR5PVwiY2VudGVyXCJcbiAgICAgICAgZm9ybWF0PVwid2VicFwiPlxuICAgICAgICA8VHJhbnNmb3JtYXRpb24gaGVpZ2h0PVwiMTQ0MFwiIGRwcj1cIjI1NjBcIiBxdWFsaXR5PVwiYXV0b1wiIHdpZHRoPVwiYXV0b1wiIHNpemVzPVwiMTAwdndcIiByZXNwb25zaXZlIC8+XG4gICAgICA8L0ltYWdlPiovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlZC1pbmZvXCI+XG4gICAgICAgIDxoMz57ZmVhdHVyZWQuZXBpc29kZS5zaG93LnRpdGxlfSB8IDxzcGFuPlNlYXNvbi57ZmVhdHVyZWQuZXBpc29kZS5zZWFzb259PC9zcGFuPjwvaDM+XG4gICAgICAgIDxMaW5rIHRvPXtgL3dhdGNoLyR7ZmVhdHVyZWQuZXBpc29kZS5pZH0vJHtmZWF0dXJlZC5lcGlzb2RlLnVpZH1gfT5cbiAgICAgICAgICA8aDE+e2ZlYXR1cmVkLmVwaXNvZGUudGl0bGV9PC9oMT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9GZWF0dXJlZENvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgZ3JhcGhxbChGRUFUVVJFRFNfUVVFUlkpLFxuICBkaXNwbGF5TG9hZGluZ1N0YXRlLFxuICBmbGF0dGVuUHJvcCgnZGF0YScpLFxuICBwdXJlLFxuKShGZWF0dXJlZCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9GZWF0dXJlZC9GZWF0dXJlZC50c3giLCJpbXBvcnQgRmVhdHVyZWQgZnJvbSAnLi9GZWF0dXJlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvRmVhdHVyZWQvaW5kZXgudHMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lZGlhIH0gZnJvbSAndWkvc3R5bGVzL3V0aWxzJztcblxuY29uc3QgRmVhdHVyZWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gIC5mZWF0dXJlZC1pbmZvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBwYWRkaW5nOiAycmVtO1xuXG4gICAgJHttZWRpYS5sZ2BcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBgfVxuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjg1O1xuICAgIHdvcmQtc3BhY2luZzogLTAuODVyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cbiAgICAke21lZGlhLm1kYFxuICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgIGB9XG4gIH1cblxuICBoMyB7XG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZENvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL0ZlYXR1cmVkL3N0eWxlcy50cyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWVkaWEgfSBmcm9tICd1aS9zdHlsZXMvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgSG9tZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IC01cmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbGxhcHNlZENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXJlbTtcbiAgei1pbmRleDogMTtcbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvcGFnZXMvSG9tZS9zdHlsZXMudHMiLCJ2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIk9wZXJhdGlvbkRlZmluaXRpb25cIixcIm9wZXJhdGlvblwiOlwicXVlcnlcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiQWxsRXBpc29kZXNcIn0sXCJ2YXJpYWJsZURlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwidmFyaWFibGVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIklEXCJ9fSxcImRlZmF1bHRWYWx1ZVwiOm51bGx9XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJhbGxFcGlzb2Rlc1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZyYWdtZW50U3ByZWFkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkVwaXNvZGVJbmZvXCJ9LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzaG93XCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRnJhZ21lbnRTcHJlYWRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2hvd0luZm9cIn0sXCJkaXJlY3RpdmVzXCI6W119XX19XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjE3Nn19O1xuZG9jLmRlZmluaXRpb25zID0gZG9jLmRlZmluaXRpb25zLmNvbmNhdChyZXF1aXJlKFwiLi9FcGlzb2RlRnJhZ21lbnRzLmdyYXBocWxcIikuZGVmaW5pdGlvbnMpO1xuZG9jLmRlZmluaXRpb25zID0gZG9jLmRlZmluaXRpb25zLmNvbmNhdChyZXF1aXJlKFwiLi9TaG93RnJhZ21lbnRzLmdyYXBocWxcIikuZGVmaW5pdGlvbnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvYztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3VpL2dyYXBocWwvQWxsRXBpc29kZXNRdWVyeS5ncmFwaHFsXG4vLyBtb2R1bGUgaWQgPSA1OTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkFsbEZlYXR1cmVkc1wifSxcInZhcmlhYmxlRGVmaW5pdGlvbnNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJhbGxGZWF0dXJlZHNcIn0sXCJhcmd1bWVudHNcIjpbe1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwib3JkZXJCeVwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiRW51bVZhbHVlXCIsXCJ2YWx1ZVwiOlwiY3JlYXRlZEF0X0RFU0NcIn19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGcmFnbWVudFNwcmVhZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJGZWF0dXJlZEluZm9cIn0sXCJkaXJlY3RpdmVzXCI6W119XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjEyNn19O1xuZG9jLmRlZmluaXRpb25zID0gZG9jLmRlZmluaXRpb25zLmNvbmNhdChyZXF1aXJlKFwiLi9GZWF0dXJlZEZyYWdtZW50cy5ncmFwaHFsXCIpLmRlZmluaXRpb25zKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkb2M7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi91aS9ncmFwaHFsL0FsbEZlYXR1cmVkc1F1ZXJ5LmdyYXBocWxcbi8vIG1vZHVsZSBpZCA9IDU5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIkZyYWdtZW50RGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJGZWF0dXJlZEluZm9cIn0sXCJ0eXBlQ29uZGl0aW9uXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkZlYXR1cmVkXCJ9fSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZXBpc29kZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1aWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRpdGxlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJkZXNjcmlwdGlvblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZmVhdHVyZUltYWdlVXJsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpbWFnZVB1YmxpY0lkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJzZWFzb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInNob3dcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aXRsZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH1dfX1dfX1dfX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MTc4fX07XG5cbm1vZHVsZS5leHBvcnRzID0gZG9jO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdWkvZ3JhcGhxbC9GZWF0dXJlZEZyYWdtZW50cy5ncmFwaHFsXG4vLyBtb2R1bGUgaWQgPSA1OTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==