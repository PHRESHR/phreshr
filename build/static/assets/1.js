webpackJsonp([1],{

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const EpisodeDetail_1 = __webpack_require__(573);
function Watch(props) {
    const { match } = props;
    return (React.createElement(EpisodeDetail_1.default, { id: match.params.id }));
}
exports.default = Watch;


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

/***/ 568:
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EpisodeInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Episode"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"uid"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"title"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"description"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"thumbImageUrl"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"imagePublicId"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"videoUrl"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"season"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"topics"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"name"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":164}};

module.exports = doc;

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const react_apollo_1 = __webpack_require__(111);
const recompose_1 = __webpack_require__(70);
const react_helmet_1 = __webpack_require__(196);
const Loading_1 = __webpack_require__(552);
const EpisodeCard_1 = __webpack_require__(559);
const WatchArea_1 = __webpack_require__(587);
const styles_1 = __webpack_require__(574);
const EPISODE_QUERY = __webpack_require__(592);
function EpisodeDetail(props) {
    const { Episode } = props;
    const episode = Episode;
    return (React.createElement("div", { className: "episode-detail" },
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, `${episode.show.title}: ${episode.title}`),
            React.createElement("meta", { name: "description", content: episode.description }),
            React.createElement("meta", { property: "og:title", content: `${episode.show.title}: ${episode.title}` }),
            React.createElement("meta", { property: "og:description", content: episode.description }),
            React.createElement("meta", { property: "og:url", content: `https://phreshr.com/watch/${episode.id}/${episode.uid}` }),
            React.createElement("meta", { property: "og:type", content: "article" }),
            React.createElement("meta", { property: "og:image", content: episode.thumbImageUrl }),
            React.createElement("meta", { property: "twitter:title", content: `${episode.show.title}: ${episode.title}` }),
            React.createElement("meta", { property: "twitter:description", content: episode.description }),
            React.createElement("meta", { property: "twitter:url", content: `https://phreshr.com/watch/${episode.id}/${episode.uid}` }),
            React.createElement("meta", { property: "twitter:card", content: "summary" }),
            React.createElement("meta", { property: "twitter:image", content: episode.thumbImageUrl }),
            React.createElement("link", { rel: "stylesheet", href: "https://vjs.zencdn.net/6.0.0/video-js.css" }),
            React.createElement("script", { src: "https://vjs.zencdn.net/6.0.0/video.min.js" })),
        React.createElement(styles_1.PlayerHub, { className: "player-hub" },
            React.createElement(WatchArea_1.default, { episode: episode }),
            React.createElement(EpisodeCard_1.default, { key: episode.id, episode: episode, detail: true }),
            React.createElement(styles_1.DetailContainer, { className: "more-episodes", column: true },
                React.createElement("h2", null,
                    "More ",
                    episode.show.title,
                    " Episodes:"),
                episode.show.episodes.length < 3
                    ? (React.createElement(styles_1.DetailContainer, { wrap: true, padding: "0", itemMargin: "0.5rem" }, episode.show.episodes.map(ep => (React.createElement(EpisodeCard_1.default, { key: ep.id, episode: ep })))))
                    : (React.createElement(styles_1.DetailContainer, { wrap: true, justify: "space-between", padding: "0" }, episode.show.episodes.map(ep => (React.createElement(EpisodeCard_1.default, { key: ep.id, episode: ep })))))))));
}
exports.default = recompose_1.compose(react_apollo_1.graphql(EPISODE_QUERY, {
    options: params => ({
        variables: {
            id: params.id,
        },
    }),
}), Loading_1.default, recompose_1.flattenProp('data'), recompose_1.pure)(EpisodeDetail);


/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EpisodeDetail_1 = __webpack_require__(572);
exports.default = EpisodeDetail_1.default;


/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
const Container_1 = __webpack_require__(195);
const utils_1 = __webpack_require__(49);
exports.PlayerHub = styled_components_1.default.div `

  .maintain-ratio:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 56.25%;
  }

  #player {
    width: 100%;
    height: 100%;
  }
`;
exports.DetailContainer = styled_components_1.default(Container_1.default) `
  .episode-item {
    margin-right: 0;

    ${utils_1.media.md `
      margin-right: ${props => props.itemMargin};
    `}
  }
`;


/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const recompose_1 = __webpack_require__(70);
const styles_1 = __webpack_require__(582);
let videoNode;
function VideoPlayer() {
    return (React.createElement(styles_1.PlayerContainer, { className: "player-container" },
        React.createElement("div", { id: "player" },
            React.createElement(styles_1.VideoJs, { className: "episode-player" },
                React.createElement("div", { "data-vjs-player": true },
                    React.createElement("video", { id: "videoPlayer", ref: node => videoNode = node, className: "video-js vjs-default-skin" }))))));
}
const componentLifecycle = recompose_1.lifecycle({
    componentDidMount() {
        this.player = videojs(videoNode, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this);
            this.addClass('vjs-custom');
        });
    },
    componentWillUnMount() {
        if (this.player()) {
            this.player().dispose();
        }
    },
});
exports.default = recompose_1.compose(componentLifecycle, recompose_1.toClass)(VideoPlayer);


/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __webpack_require__(580);
exports.default = Player_1.default;


/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
const Container_1 = __webpack_require__(195);
const utils_1 = __webpack_require__(49);
exports.PlayerContainer = styled_components_1.default(Container_1.default) `
  padding: 0;
  ${utils_1.media.lg `
    padding: ${props => props.padding ? props.padding : '0 2.5rem'};
  `}
  ${utils_1.media.xl `
    padding: ${props => props.padding ? props.padding : '0 5rem'};
  `}
`;
exports.VideoJs = styled_components_1.default.div `
  #player {
    width: 100%;
    height: 100%;
  }

  .vjs-custom.video-js {
    display: flex;
    color: #fff;
  }

  .vjs-custom .vjs-big-play-button {
    display: none;
    background-color: rgba(0,0,0,0.35);
    font-size: 4.5rem;
    line-height: 2.9rem;
    height: 3rem;
    width: 3rem;
    top: 50%;
    left: 50%;
    margin-top: -1rem;
    margin-left: -1rem;
    border-radius: 50%;
    border-width: 3px;
  }

  .vjs-custom .vjs-control-bar {
    display: flex;
    align-items: flex-end;
    height: 4rem;
    background-color: rgba(17,17,17,.7);

    ${utils_1.media.md `
       height: 6rem;
    `}
  }

  .vjs-custom .vjs-control {
    height: 50%;
  }

  .vjs-custom .vjs-button {
    padding: 0;
    margin: 0;
    ${utils_1.media.md `
       margin: 0 .5rem;
    `}
  }

  .vjs-custom .vjs-progress-control {
    position: absolute;
    left: 0;
    right: 0;
    width: 70%;
    margin: 0 auto;
    height: .5rem;
    top: 1rem;
    padding: 0 5%;
    /*background-color: rgba(17,17,17,.7);*/
    ${utils_1.media.sm `
      width: 80%;
    `}
    ${utils_1.media.md `
      width: 90%;
    `}
  }

  .vjs-custom .vjs-slider {
    background: rgba(35,35,35,.5);
    align-self: center;
  }

  .vjs-custom .vjs-load-progress div {
    background: rgba(68,68,68,.75);
  }

  .vjs-custom .vjs-progress-control .vjs-progress-holder {
    margin: 0;
  }

  .vjs-custom .vjs-play-progress:before {
    font-size: .9rem;
    position: absolute;
    right: -0.9rem;
    top: -.333333333333333em;
    z-index: 1;
  }

  .vjs-custom .vjs-control {
    display: flex;
    &:before {
      font-size: 1.2rem;
      position: relative;
      width: 40px;
      height: 40px;
      align-self: center;

      ${utils_1.media.md `
        font-size: 1.5rem;
      `}
    }
  }

  .vjs-custom .vjs-current-time,
  .vjs-custom .vjs-duration {
    position: absolute;
    top: .4rem;
    height: auto;
    z-index: 2;
  }

  .vjs-custom .vjs-current-time {
    left: 1rem;
  }

  .vjs-custom .vjs-current-time-display,
  .vjs-custom .vjs-duration-display {
    color: rgba(68,68,68,1);
    font-size: .875rem;
    ${utils_1.media.md `
      font-size: 1.25rem;
    `}
  }

  .vjs-custom .vjs-duration { 
    right: 1rem;
  }

  .vjs-custom .vjs-remaining-time {
    display: none;
  }

  .vjs-custom .vjs-mute-control {
    height: 100%;
  }

  .vjs-custom .vjs-volume-menu-button.vjs-menu-button-inline .vjs-menu-content {
    display: flex;
  }

  .vjs-custom .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {
    transition: visibility 1s,opacity 1s;
  }
  .vjs-custom .vjs-volume-panel .vjs-mute-control:hover~.vjs-volume-control {
    transition: visibility 1s,opacity 1s;
  }
  .vjs-custom .vjs-volume-control.vjs-volume-horizontal {
    align-self: center;
    transition: visibility 1s,opacity 1s;
  }

  .vjs-custom .vjs-volume-bar {
    display: flex;
    margin: 0;
  }

  .vjs-custom .vjs-slider-horizontal {
    
  }

  .vjs-custom .vjs-volume-level {
    position: relative;
  }

  .vjs-custom .vjs-slider-horizontal .vjs-volume-level:before {
    top: -.3em;
    right: -.5em;
  }

  .vjs-custom .vjs-menu-button-inline .vjs-menu {
    display: flex;
    align-items: center
  }

  .vjs-menu-button-inline:hover .vjs-menu, .vjs-menu-button-inline:focus .vjs-menu, .vjs-menu-button-inline.vjs-slider-active .vjs-menu {
    display: flex;
    opacity: 1;
    align-items: center;
}

  .vjs-custom .vjs-spacer, .vjs-custom {
    display: flex;
    flex: 1 1 auto;
  }

  .vjs-custom .vjs-control .vjs-icon-placeholder:before {
    font-size: 1.8rem;
    line-height: 1.67;
  }

  .vjs-custom .vjs-control:focus, 
  .vjs-custom .vjs-control:focus:before, 
  .vjs-custom .vjs-control:hover:before {
    text-shadow: none;
    outline: none;
  }

  /* VideoJs Dock styles */
  .vjs-custom .vjs-dock-info, .vjs-custom .vjs-dock-shelf {
    font-family: Lato, Helvetica Neue, Helvetica, Arial, sans-serif;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: opacity 0.1s;
  }
  .vjs-custom .vjs-dock-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: rgba(17,17,17,.7);
    width: 100%;
    height: 90px;
    padding: 0 1rem;
    margin: 0;
  }

  .vjs-custom .vjs-dock-preview {
    display: flex;
    width: 80px;
    height: 80px;
    margin-right: 0.825rem;
  }

  .vjs-custom .vjs-dock-description {
    display: flex;
    flex-direction: column;
  }

  .vjs-custom .vjs-dock-meta, .vjs-custom .vjs-dock-title {
    font-weight: 400;
    margin: 0;
  }
  .vjs-custom .vjs-dock-meta {
    font-size: .825rem;
  }

  .vjs-custom .vjs-dock-title {
    font-size: 1.5rem;
    letter-spacing: 0.0625rem
  }

  .episode-player {
    position: relative;
    width: 100%;
    flex: 0 0 100%;
    order: 1;
    overflow: hidden;
  }

  /* Video.js Playlist UI */
  .vjs-playlist {
    color: #fff;
    transition: all .2s ease;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 350px;
    flex: 0 0 350px;
    overflow: hidden;
    border-left: 1px solid #252525;
  }

  @media only screen and (min-width: 40.625em) {
    padding:  0;
  }

  @media only screen and (min-width: 68.75em) {
    .watch-area {
      padding: 1.875rem 3.75rem;
    }
  }

  @media only screen and (min-width: 95em) {
    .watch-area {
      padding-left: 0;
      padding-right: 0;
    }
  }  
`;


/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const Player_1 = __webpack_require__(581);
const styles_1 = __webpack_require__(588);
function WatchArea(props) {
    const { episode, match } = props;
    const vjsOptions = {
        autoplay: false,
        controls: true,
        aspectRatio: '16:9',
        sources: [{
                src: `${episode.videoUrl}`,
                type: 'video/mp4',
            }],
        plugins: {},
    };
    return (React.createElement(styles_1.WatchContainer, { className: "watch-area" },
        React.createElement(Player_1.default, Object.assign({}, vjsOptions))));
}
exports.default = WatchArea;


/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WatchArea_1 = __webpack_require__(586);
exports.default = WatchArea_1.default;


/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
const utils_1 = __webpack_require__(49);
exports.WatchContainer = styled_components_1.default.section `
  .player-container {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
  }
  ${utils_1.media.md `
  `}
`;
exports.WatchArea = styled_components_1.default.section `
  .player-container {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
  }
  ${utils_1.media.md `
  `}
`;


/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Episode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"Episode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EpisodeInfo"},"directives":[]},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"show"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShowInfo"},"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":178}};
doc.definitions = doc.definitions.concat(__webpack_require__(568).definitions);
doc.definitions = doc.definitions.concat(__webpack_require__(555).definitions);

module.exports = doc;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9wYWdlcy9XYXRjaC9XYXRjaC50c3giLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LnRzP2JmZTMiLCJ3ZWJwYWNrOi8vLy4vdWkvc3R5bGVzL0FzcGVjdFJhdGlvcy50cz83M2RjIiwid2VicGFjazovLy8uL3VpL3N0eWxlcy9HcmlkSXRlbS50cz9hNzliIiwid2VicGFjazovLy8uL3VpL2dyYXBocWwvU2hvd0ZyYWdtZW50cy5ncmFwaHFsPzk3NDMiLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcudHN4P2EwMWUiLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9Mb2FkaW5nL3N0eWxlcy50cz81ZDRmIiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvRXBpc29kZUNhcmQvRXBpc29kZUNhcmQudHN4PzI0NTAiLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9FcGlzb2RlQ2FyZC9pbmRleC50cz9kODE0Iiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvRXBpc29kZUNhcmQvc3R5bGVzLnRzPzE5ZjciLCJ3ZWJwYWNrOi8vLy4vdWkvZ3JhcGhxbC9FcGlzb2RlRnJhZ21lbnRzLmdyYXBocWw/YTZjZCIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0VwaXNvZGVEZXRhaWwvRXBpc29kZURldGFpbC50c3giLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9FcGlzb2RlRGV0YWlsL2luZGV4LnRzIiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvRXBpc29kZURldGFpbC9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyLnRzeCIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL1BsYXllci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL1BsYXllci9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9XYXRjaEFyZWEvV2F0Y2hBcmVhLnRzeCIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL1dhdGNoQXJlYS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL1dhdGNoQXJlYS9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vdWkvZ3JhcGhxbC9FcGlzb2RlUXVlcnkuZ3JhcGhxbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHFDQUErQjtBQUMvQixpREFBd0Q7QUFVeEQsZUFBZSxLQUFZO0lBQ3pCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDeEIsTUFBTSxDQUFDLENBQ0wsb0JBQUMsdUJBQWEsSUFBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUksQ0FDdkMsQ0FBQztBQUNKLENBQUM7QUFFRCxrQkFBZSxLQUFLLENBQUM7Ozs7Ozs7Ozs7O0FDbEJyQiwyQ0FBZ0M7QUFFaEMsa0JBQWUsaUJBQU8sQ0FBQzs7Ozs7Ozs7Ozs7QUNGdkIsb0RBQXVDO0FBQ3ZDLHdDQUFxRDtBQUV4Qyx1QkFBZSxHQUFHLDJCQUFNLENBQUMsR0FBRztJQUNwQyxtQkFBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUU7Q0FDdkIsQ0FBQztBQUVXLHNCQUFjLEdBQUcsMkJBQU0sQ0FBQyxHQUFHO0lBQ25DLG1CQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRTtJQUNuQixhQUFLLENBQUMsRUFBRTtNQUNMLG1CQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRTtHQUN0QjtDQUNGLENBQUM7QUFFVyxzQkFBYyxHQUFHLDJCQUFNLENBQUMsR0FBRztJQUNuQyxtQkFBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUU7Q0FDdEIsQ0FBQztBQUVXLHNCQUFjLEdBQUcsMkJBQU0sQ0FBQyxHQUFHO0lBQ25DLG1CQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRTtDQUN0QixDQUFDOzs7Ozs7Ozs7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STtRQUNkLFdBQVcsRUFBRSxNQUFNO1FBQ25CLE9BQU8sRUFBRSxDQUFDO2dCQUNSLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUU7Z0JBQzFCLElBQUksRUFBRSxXQUFXO2FBQ2xCLENBQUM7UUFDRixPQUFPLEVBQUUsRUFNUjtLQUNGLENBQUM7SUFFRixNQUFNLENBQUMsQ0FDTCxvQkFBQyx1QkFBYyxJQUFDLFNBQVMsRUFBQyxZQUFZO1FBQ3BDLG9CQUFDLGdCQUFNLG9CQUFLLFVBQVUsRUFBSSxDQUNYLENBQ2xCLENBQUM7QUFDSixDQUFDO0FBRUQsa0JBQWUsU0FBUyxDQUFDOzs7Ozs7Ozs7OztBQ3hDekIsNkNBQW9DO0FBRXBDLGtCQUFlLG1CQUFTLENBQUM7Ozs7Ozs7Ozs7O0FDRnpCLG9EQUF1QztBQUV2Qyx3Q0FBd0M7QUFFM0Isc0JBQWMsR0FBRywyQkFBTSxDQUFDLE9BQU87Ozs7Ozs7SUFPeEMsYUFBSyxDQUFDLEVBQUU7R0FDVDtDQUNGLENBQUM7QUFFVyxpQkFBUyxHQUFHLDJCQUFNLENBQUMsT0FBTzs7Ozs7OztJQU9uQyxhQUFLLENBQUMsRUFBRTtHQUNUO0NBQ0YsQ0FBQzs7Ozs7Ozs7QUN4QkYsV0FBVyxrQ0FBa0MseURBQXlELGdDQUFnQyx5QkFBeUIsd0NBQXdDLDBCQUEwQiw0QkFBNEIsU0FBUywyQkFBMkIsNEJBQTRCLHFCQUFxQixrQ0FBa0MscUNBQXFDLG9DQUFvQyxnQ0FBZ0MsZUFBZSwwQkFBMEIsMkJBQTJCLFVBQVUsMEJBQTBCLDZCQUE2QixrQ0FBa0MscUNBQXFDLGdDQUFnQyxvQ0FBb0MsaUJBQWlCLEVBQUUsb0NBQW9DLDZCQUE2QixnREFBZ0QscUNBQXFDLGdDQUFnQyxpQ0FBaUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLFNBQVM7QUFDMS9CO0FBQ0E7O0FBRUEscUIiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFcGlzb2RlRGV0YWlsIGZyb20gJ3VpL2NvbXBvbmVudHMvRXBpc29kZURldGFpbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG1hdGNoOiB7XG4gICAgcGFyYW1zOiB7XG4gICAgICBpZDogc3RyaW5nLFxuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIFdhdGNoKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IG1hdGNoIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8RXBpc29kZURldGFpbCBpZD17bWF0Y2gucGFyYW1zLmlkfSAvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXYXRjaDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9wYWdlcy9XYXRjaC9XYXRjaC50c3giLCJpbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvTG9hZGluZy9pbmRleC50cyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgYXNwZWN0UmF0aW8sIG1lZGlhIH0gZnJvbSAndWkvc3R5bGVzL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IEFzcGVjdFJhdGlvMTZ4OSA9IHN0eWxlZC5kaXZgXG4gICR7IGFzcGVjdFJhdGlvKDE2LCA5KSB9XG5gO1xuXG5leHBvcnQgY29uc3QgQXNwZWN0UmF0aW81eDIgPSBzdHlsZWQuZGl2YFxuICAkeyBhc3BlY3RSYXRpbyg0LCAzKSB9XG4gICR7bWVkaWEubWRgXG4gICAgJHsgYXNwZWN0UmF0aW8oNSwgMikgfVxuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFzcGVjdFJhdGlvNHgzID0gc3R5bGVkLmRpdmBcbiAgJHsgYXNwZWN0UmF0aW8oNCwgMykgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFzcGVjdFJhdGlvMngzID0gc3R5bGVkLmRpdmBcbiAgJHsgYXNwZWN0UmF0aW8oMiwgMykgfVxuYDtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL3N0eWxlcy9Bc3BlY3RSYXRpb3MudHMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lZGlhIH0gZnJvbSAndWkvc3R5bGVzL3V0aWxzJztcblxuY29uc3QgR3JpZEl0ZW0gPSBzdHlsZWQuYXJ0aWNsZWBcbiAgZmxleDogMCAwIDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaXRlbU1hcmdpbn07XG5cbiAgJHttZWRpYS5tZGBcbiAgICBmbGV4OiAwIDAgY2FsYygxMDAlIC8gMiAtIDAuMjUpO1xuICBgfVxuXG4gICR7bWVkaWEubGdgXG4gICAgZmxleDogMCAwIGNhbGMoMTAwJSAvIDMgLSAwLjVyZW0pO1xuICBgfVxuXG4gICR7bWVkaWEueGxgXG4gICAgZmxleDogMCAwIGNhbGMoMTAwJSAvIDQgLSAwLjVyZW0pO1xuICBgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAke21lZGlhLm1kYFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZEl0ZW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvc3R5bGVzL0dyaWRJdGVtLnRzIiwidmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJGcmFnbWVudERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2hvd0luZm9cIn0sXCJ0eXBlQ29uZGl0aW9uXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNob3dcIn19LFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1aWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRpdGxlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJkZXNjcmlwdGlvblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicG9zdGVySW1hZ2VVcmxcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImZlYXR1cmVJbWFnZVVybFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRnJhZ21lbnRTcHJlYWRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2hvd0VwaXNvZGVzXCJ9LFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGcmFnbWVudERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2hvd0VwaXNvZGVzXCJ9LFwidHlwZUNvbmRpdGlvblwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTaG93XCJ9fSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJlcGlzb2Rlc1wifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJmaWx0ZXJcIn0sXCJ2YWx1ZVwiOntcImtpbmRcIjpcIk9iamVjdFZhbHVlXCIsXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiT2JqZWN0RmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRfbm90XCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifX19XX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidWlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aXRsZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGVzY3JpcHRpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRodW1iSW1hZ2VVcmxcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImltYWdlUHVibGljSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjI2OH19O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvYztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3VpL2dyYXBocWwvU2hvd0ZyYWdtZW50cy5ncmFwaHFsXG4vLyBtb2R1bGUgaWQgPSA1NTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYnJhbmNoLCByZW5kZXJDb21wb25lbnQgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4vc3R5bGVzJztcblxuZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8U3Bpbm5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZS1ncmlkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlMVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlMlwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlM1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlNFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlNVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlNlwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlN1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlOFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlOVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1NwaW5uZXI+XG4gICk7XG59XG5cbmNvbnN0IGRpc3BsYXlMb2FkaW5nU3RhdGUgPSBicmFuY2goXG4gIHByb3BzID0+IHByb3BzLmRhdGEubG9hZGluZyxcbiAgcmVuZGVyQ29tcG9uZW50KExvYWRpbmcpLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUxvYWRpbmdTdGF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy50c3giLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lZGlhIH0gZnJvbSAndWkvc3R5bGVzL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2YFxuICAuc2stY3ViZS1ncmlkIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICB9XG5cbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZSB7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBoZWlnaHQ6IDMzJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNENjNGO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jdWJlR3JpZFNjYWxlRGVsYXkgMS4zcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2stY3ViZUdyaWRTY2FsZURlbGF5IDEuM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTEge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzOyB9XG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4zczsgfVxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlMyB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7IH1cbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzOyB9XG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU1IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNiB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7IH1cbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTcge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMHM7IH1cbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTgge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzOyB9XG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU5IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzay1jdWJlR3JpZFNjYWxlRGVsYXkge1xuICAgIDAlLCA3MCUsIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcbiAgICB9IDM1JSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpOyBcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNrLWN1YmVHcmlkU2NhbGVEZWxheSB7XG4gICAgMCUsIDcwJSwgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xuICAgIH0gMzUlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XG4gICAgfVxuICB9XG5gO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvTG9hZGluZy9zdHlsZXMudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2Nsb3VkaW5hcnktcmVhY3QnO1xuaW1wb3J0IHsgQ2FyZEluZm8sIENhcmRFbnRyeSB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IEFzcGVjdFJhdGlvMTZ4OSB9IGZyb20gJ3VpL3N0eWxlcy9Bc3BlY3RSYXRpb3MnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBlcGlzb2RlOiB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICB1aWQ6IHN0cmluZyxcbiAgICBzaG93OiB7XG4gICAgICB0aXRsZTogc3RyaW5nO1xuICAgIH0sXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgIHRodW1iSW1hZ2VVcmw6IHN0cmluZyxcbiAgICB0b3BpY3M6IFt7aWQsIG5hbWV9XSxcbiAgfTtcbiAgZGV0YWlsPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gRXBpc29kZShwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBlcGlzb2RlLCBkZXRhaWwgfSA9IHByb3BzO1xuICBpZiAoZGV0YWlsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkSW5mbyBjbGFzc05hbWU9XCJlcGlzb2RlLWluZm9cIj5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8aDM+e2VwaXNvZGUuc2hvdy50aXRsZX08L2gzPlxuICAgICAgICAgIDxoMT57ZXBpc29kZS50aXRsZX08L2gxPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcGlzb2RlLWRldGFpbHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVwaXNvZGUtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgPGg0PkRlc2NyaXB0aW9uPC9oND5cbiAgICAgICAgICAgICAgPHA+e2VwaXNvZGUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVwaXNvZGUtdG9waWNzXCI+XG4gICAgICAgICAgICAgIDxoND5UYWdzPC9oND5cbiAgICAgICAgICAgICAge2VwaXNvZGUudG9waWNzLm1hcCh0b3BpYyA9PlxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt0b3BpYy5pZH0+e3RvcGljLm5hbWV9PC9kaXY+LFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkSW5mbz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZEVudHJ5IGNsYXNzTmFtZT1cIml0ZW0gZXBpc29kZS1pdGVtXCI+XG4gICAgICAgIDxMaW5rIHRvPXtgL3dhdGNoLyR7ZXBpc29kZS5pZH0vJHtlcGlzb2RlLnVpZH1gfT5cbiAgICAgICAgICA8QXNwZWN0UmF0aW8xNng5PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgey8qPEltYWdlIGNsb3VkTmFtZT1cInBocmVzaHItbWVkaWFcIiBwdWJsaWNJZD17ZXBpc29kZS50aHVtYkltYWdlVXJsfSB3aWR0aD1cIjYwMFwiIGNyb3A9XCJzY2FsZVwiIHR5cGU9XCJmZXRjaFwiIC8+Ki99XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtlcGlzb2RlLnRodW1iSW1hZ2VVcmx9IGFsdD17ZXBpc29kZS50aXRsZX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Bc3BlY3RSYXRpbzE2eDk+XG4gICAgICAgICAge2VwaXNvZGUuc2hvdyAmJiA8aDM+e2VwaXNvZGUuc2hvdy50aXRsZX08L2gzPn1cbiAgICAgICAgICA8aDE+e2VwaXNvZGUudGl0bGV9PC9oMT5cbiAgICAgICAgICA8cD57ZXBpc29kZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAge2VwaXNvZGUudG9waWNzICYmIGVwaXNvZGUudG9waWNzLm1hcCh0b3BpYyA9PlxuICAgICAgICAgICAgPGRpdiBrZXk9e3RvcGljLmlkfT57dG9waWMubmFtZX08L2Rpdj4sXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9DYXJkRW50cnk+XG4gICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXBpc29kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL0VwaXNvZGVDYXJkL0VwaXNvZGVDYXJkLnRzeCIsImltcG9ydCBFcGlzb2RlQ2FyZCBmcm9tICcuL0VwaXNvZGVDYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgRXBpc29kZUNhcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9FcGlzb2RlQ2FyZC9pbmRleC50cyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWVkaWEgfSBmcm9tICd1aS9zdHlsZXMvdXRpbHMnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICd1aS9zdHlsZXMvQ29udGFpbmVyJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICd1aS9zdHlsZXMvR3JpZEl0ZW0nO1xuXG5leHBvcnQgY29uc3QgQ2FyZEluZm8gPSBzdHlsZWQuc2VjdGlvbmBcbiAgaGVhZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xuICB9XG4gIC5lcGlzb2RlLWRldGFpbHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gICAgcGFkZGluZzogMi41cmVtIDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIGhlYWRlcixcbiAgLmVwaXNvZGUtZGV0YWlscyAuaW5uZXIge1xuICAgIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMucGFkZGluZyA/IHByb3BzLnBhZGRpbmcgOiAgJzAgLjM3NXJlbSd9O1xuICAgICR7bWVkaWEuc21gXG4gICAgICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmcgPyBwcm9wcy5wYWRkaW5nIDogICcwIC41cmVtJ307XG4gICAgYH1cbiAgICAke21lZGlhLm1kYFxuICAgICAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy5wYWRkaW5nID8gcHJvcHMucGFkZGluZyA6ICAnMCAyLjVyZW0nfTtcbiAgICBgfVxuICAgICR7bWVkaWEueGxgXG4gICAgICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmcgPyBwcm9wcy5wYWRkaW5nIDogICcwIDVyZW0nfTtcbiAgICBgfVxuICB9XG4gICR7bWVkaWEubWRgXG4gIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2FyZEVudHJ5ID0gc3R5bGVkKEdyaWRJdGVtKWBcbiAgJHttZWRpYS5tZGBcbiAgYH1cblxuICAke21lZGlhLmxnYFxuICBgfVxuXG4gICR7bWVkaWEueGxgXG4gIGB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkRW50cnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9FcGlzb2RlQ2FyZC9zdHlsZXMudHMiLCJ2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIkZyYWdtZW50RGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJFcGlzb2RlSW5mb1wifSxcInR5cGVDb25kaXRpb25cIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiRXBpc29kZVwifX0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGl0bGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImRlc2NyaXB0aW9uXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aHVtYkltYWdlVXJsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpbWFnZVB1YmxpY0lkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ2aWRlb1VybFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic2Vhc29uXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJjcmVhdGVkQXRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRvcGljc1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJuYW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfV19fV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjoxNjR9fTtcblxubW9kdWxlLmV4cG9ydHMgPSBkb2M7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi91aS9ncmFwaHFsL0VwaXNvZGVGcmFnbWVudHMuZ3JhcGhxbFxuLy8gbW9kdWxlIGlkID0gNTY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBjb21wb3NlLCBmbGF0dGVuUHJvcCwgcHVyZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG5pbXBvcnQgZGlzcGxheUxvYWRpbmdTdGF0ZSBmcm9tICd1aS9jb21wb25lbnRzL0xvYWRpbmcnO1xuaW1wb3J0IEVwaXNvZGVDYXJkIGZyb20gJ3VpL2NvbXBvbmVudHMvRXBpc29kZUNhcmQnO1xuaW1wb3J0IFdhdGNoQXJlYSBmcm9tICd1aS9jb21wb25lbnRzL1dhdGNoQXJlYSc7XG5pbXBvcnQge0RldGFpbENvbnRhaW5lciwgUGxheWVySHVifSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgKiBhcyBFUElTT0RFX1FVRVJZIGZyb20gJ3VpL2dyYXBocWwvRXBpc29kZVF1ZXJ5LmdyYXBocWwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBFcGlzb2RlO1xufVxuXG5mdW5jdGlvbiBFcGlzb2RlRGV0YWlsKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IEVwaXNvZGUgfSA9IHByb3BzO1xuICBjb25zdCBlcGlzb2RlID0gRXBpc29kZTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVwaXNvZGUtZGV0YWlsXCI+XG4gICAgICA8SGVsbWV0PlxuICAgICAgICA8dGl0bGU+e2Ake2VwaXNvZGUuc2hvdy50aXRsZX06ICR7ZXBpc29kZS50aXRsZX1gfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2VwaXNvZGUuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgJHtlcGlzb2RlLnNob3cudGl0bGV9OiAke2VwaXNvZGUudGl0bGV9YH0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2VwaXNvZGUuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17YGh0dHBzOi8vcGhyZXNoci5jb20vd2F0Y2gvJHtlcGlzb2RlLmlkfS8ke2VwaXNvZGUudWlkfWB9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJhcnRpY2xlXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2VwaXNvZGUudGh1bWJJbWFnZVVybH0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17YCR7ZXBpc29kZS5zaG93LnRpdGxlfTogJHtlcGlzb2RlLnRpdGxlfWB9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2VwaXNvZGUuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp1cmxcIiBjb250ZW50PXtgaHR0cHM6Ly9waHJlc2hyLmNvbS93YXRjaC8ke2VwaXNvZGUuaWR9LyR7ZXBpc29kZS51aWR9YH0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9e2VwaXNvZGUudGh1bWJJbWFnZVVybH0gLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3Zqcy56ZW5jZG4ubmV0LzYuMC4wL3ZpZGVvLWpzLmNzc1wiIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly92anMuemVuY2RuLm5ldC82LjAuMC92aWRlby5taW4uanNcIiAvPlxuICAgICAgPC9IZWxtZXQ+XG4gICAgICA8UGxheWVySHViIGNsYXNzTmFtZT1cInBsYXllci1odWJcIj5cbiAgICAgICAgPFdhdGNoQXJlYSBlcGlzb2RlPXtlcGlzb2RlfSAvPlxuICAgICAgICA8RXBpc29kZUNhcmQga2V5PXtlcGlzb2RlLmlkfSBlcGlzb2RlPXtlcGlzb2RlfSBkZXRhaWw9e3RydWV9Lz5cbiAgICAgICAgPERldGFpbENvbnRhaW5lciBjbGFzc05hbWU9XCJtb3JlLWVwaXNvZGVzXCIgY29sdW1uPlxuICAgICAgICAgIDxoMj5Nb3JlIHtlcGlzb2RlLnNob3cudGl0bGV9IEVwaXNvZGVzOjwvaDI+XG4gICAgICAgICAge2VwaXNvZGUuc2hvdy5lcGlzb2Rlcy5sZW5ndGggPCAzXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPERldGFpbENvbnRhaW5lciB3cmFwIHBhZGRpbmc9XCIwXCIgaXRlbU1hcmdpbj1cIjAuNXJlbVwiPlxuICAgICAgICAgICAgICAgIHtlcGlzb2RlLnNob3cuZXBpc29kZXMubWFwKGVwID0+IChcbiAgICAgICAgICAgICAgICAgIDxFcGlzb2RlQ2FyZCBrZXk9e2VwLmlkfSBlcGlzb2RlPXtlcH0vPlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0RldGFpbENvbnRhaW5lcj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgIDxEZXRhaWxDb250YWluZXIgd3JhcCBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIHBhZGRpbmc9XCIwXCI+XG4gICAgICAgICAgICAgICAgICB7ZXBpc29kZS5zaG93LmVwaXNvZGVzLm1hcChlcCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxFcGlzb2RlQ2FyZCBrZXk9e2VwLmlkfSBlcGlzb2RlPXtlcH0vPlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0RldGFpbENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9EZXRhaWxDb250YWluZXI+XG4gICAgICA8L1BsYXllckh1Yj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgZ3JhcGhxbChFUElTT0RFX1FVRVJZLCB7XG4gICAgb3B0aW9uczogcGFyYW1zID0+ICh7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgaWQ6IHBhcmFtcy5pZCxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0pLFxuICBkaXNwbGF5TG9hZGluZ1N0YXRlLFxuICBmbGF0dGVuUHJvcCgnZGF0YScpLFxuICBwdXJlLFxuKShFcGlzb2RlRGV0YWlsKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL0VwaXNvZGVEZXRhaWwvRXBpc29kZURldGFpbC50c3giLCJpbXBvcnQgRXBpc29kZURldGFpbCBmcm9tICcuL0VwaXNvZGVEZXRhaWwnO1xuXG5leHBvcnQgZGVmYXVsdCBFcGlzb2RlRGV0YWlsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvRXBpc29kZURldGFpbC9pbmRleC50cyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICd1aS9zdHlsZXMvQ29udGFpbmVyJztcbmltcG9ydCB7IG1lZGlhIH0gZnJvbSAndWkvc3R5bGVzL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IFBsYXllckh1YiA9IHN0eWxlZC5kaXZgXG5cbiAgLm1haW50YWluLXJhdGlvOmJlZm9yZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogNTYuMjUlO1xuICB9XG5cbiAgI3BsYXllciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRGV0YWlsQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXG4gIC5lcGlzb2RlLWl0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgICR7bWVkaWEubWRgXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaXRlbU1hcmdpbn07XG4gICAgYH1cbiAgfVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL0VwaXNvZGVEZXRhaWwvc3R5bGVzLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSwgbGlmZWN5Y2xlLCB0b0NsYXNzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IFBsYXllckNvbnRhaW5lciwgVmlkZW9KcyB9IGZyb20gJy4vc3R5bGVzJztcblxubGV0IHZpZGVvTm9kZTogSFRNTFZpZGVvRWxlbWVudDtcbmZ1bmN0aW9uIFZpZGVvUGxheWVyKCkge1xuICByZXR1cm4gKFxuICAgIDxQbGF5ZXJDb250YWluZXIgY2xhc3NOYW1lPVwicGxheWVyLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBpZD1cInBsYXllclwiPlxuICAgICAgICA8VmlkZW9KcyBjbGFzc05hbWU9XCJlcGlzb2RlLXBsYXllclwiPlxuICAgICAgICAgIDxkaXYgZGF0YS12anMtcGxheWVyPlxuICAgICAgICAgICAgPHZpZGVvIGlkPVwidmlkZW9QbGF5ZXJcIiByZWY9eyBub2RlID0+IHZpZGVvTm9kZSA9IG5vZGUgfSBjbGFzc05hbWU9XCJ2aWRlby1qcyB2anMtZGVmYXVsdC1za2luXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9WaWRlb0pzPlxuICAgICAgPC9kaXY+XG4gICAgPC9QbGF5ZXJDb250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IGNvbXBvbmVudExpZmVjeWNsZSA9IGxpZmVjeWNsZSh7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGluc3RhbnRpYXRlIHZpZGVvLmpzXG4gICAgdGhpcy5wbGF5ZXIgPSB2aWRlb2pzKHZpZGVvTm9kZSwgdGhpcy5wcm9wcywgZnVuY3Rpb24gb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGxheWVyKCkpO1xuICAgICAgY29uc29sZS5sb2coJ29uUGxheWVyUmVhZHknLCB0aGlzKTtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoJ3Zqcy1jdXN0b20nKTtcbiAgICB9KTtcbiAgfSxcbiAgLy8gZGVzdHJveSBwbGF5ZXIgb24gdW5tb3VudFxuICBjb21wb25lbnRXaWxsVW5Nb3VudCgpIHtcbiAgICBpZiAodGhpcy5wbGF5ZXIoKSkge1xuICAgICAgdGhpcy5wbGF5ZXIoKS5kaXNwb3NlKCk7XG4gICAgfVxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIGNvbXBvbmVudExpZmVjeWNsZSxcbiAgdG9DbGFzcyxcbikoVmlkZW9QbGF5ZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvUGxheWVyL1BsYXllci50c3giLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3VpL3N0eWxlcy9Db250YWluZXInO1xuaW1wb3J0IHsgbWVkaWEgfSBmcm9tICd1aS9zdHlsZXMvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgUGxheWVyQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXG4gIHBhZGRpbmc6IDA7XG4gICR7bWVkaWEubGdgXG4gICAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy5wYWRkaW5nID8gcHJvcHMucGFkZGluZyA6ICAnMCAyLjVyZW0nfTtcbiAgYH1cbiAgJHttZWRpYS54bGBcbiAgICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmcgPyBwcm9wcy5wYWRkaW5nIDogICcwIDVyZW0nfTtcbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBWaWRlb0pzID0gc3R5bGVkLmRpdmBcbiAgI3BsYXllciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnZqcy1jdXN0b20udmlkZW8tanMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAudmpzLWN1c3RvbSAudmpzLWJpZy1wbGF5LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMzUpO1xuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjlyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiAtMXJlbTtcbiAgICBtYXJnaW4tbGVmdDogLTFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci13aWR0aDogM3B4O1xuICB9XG5cbiAgLnZqcy1jdXN0b20gLnZqcy1jb250cm9sLWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcsMTcsMTcsLjcpO1xuXG4gICAgJHttZWRpYS5tZGBcbiAgICAgICBoZWlnaHQ6IDZyZW07XG4gICAgYH1cbiAgfVxuXG4gIC52anMtY3VzdG9tIC52anMtY29udHJvbCB7XG4gICAgaGVpZ2h0OiA1MCU7XG4gIH1cblxuICAudmpzLWN1c3RvbSAudmpzLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgJHttZWRpYS5tZGBcbiAgICAgICBtYXJnaW46IDAgLjVyZW07XG4gICAgYH1cbiAgfVxuXG4gIC52anMtY3VzdG9tIC52anMtcHJvZ3Jlc3MtY29udHJvbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoZWlnaHQ6IC41cmVtO1xuICAgIHRvcDogMXJlbTtcbiAgICBwYWRkaW5nOiAwIDUlO1xuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNywxNywxNywuNyk7Ki9cbiAgICAke21lZGlhLnNtYFxuICAgICAgd2lkdGg6IDgwJTtcbiAgICBgfVxuICAgICR7bWVkaWEubWRgXG4gICAgICB3aWR0aDogOTAlO1xuICAgIGB9XG4gIH1cblxuICAudmpzLWN1c3RvbSAudmpzLXNsaWRlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgzNSwzNSwzNSwuNSk7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG5cbiAgLnZqcy1jdXN0b20gLnZqcy1sb2FkLXByb2dyZXNzIGRpdiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSg2OCw2OCw2OCwuNzUpO1xuICB9XG5cbiAgLnZqcy1jdXN0b20gLnZqcy1wcm9ncmVzcy1jb250cm9sIC52anMtcHJvZ3Jlc3MtaG9sZGVyIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAudmpzLWN1c3RvbSAudmpzLXBsYXktcHJvZ3Jlc3M6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IC45cmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTAuOXJlbTtcbiAgICB0b3A6IC0uMzMzMzMzMzMzMzMzMzMzZW07XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIC52anMtY3VzdG9tIC52anMtY29udHJvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gICAgICAke21lZGlhLm1kYFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGB9XG4gICAgfVxuICB9XG5cbiAgLnZqcy1jdXN0b20gLnZqcy1jdXJyZW50LXRpbWUsXG4gIC52anMtY3VzdG9tIC52anMtZHVyYXRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC40cmVtO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB6LWluZGV4OiAyO1xuICB9XG5cbiAgLnZqcy1jdXN0b20gLnZqcy1jdXJyZW50LXRpbWUge1xuICAgIGxlZnQ6IDFyZW07XG4gIH1cblxuICAudmpzLWN1c3RvbSAudmpzLWN1cnJlbnQtdGltZS1kaXNwbGF5LFxuICAudmpzLWN1c3RvbSAudmpzLWR1cmF0aW9uLWRpc3BsYXkge1xuICAgIGNvbG9yOiByZ2JhKDY4LDY4LDY4LDEpO1xuICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgICAke21lZGlhLm1kYFxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGB9XG4gIH1cblxuICAudmpzLWN1c3RvbSAudmpzLWR1cmF0aW9uIHsgXG4gICAgcmlnaHQ6IDFyZW07XG4gIH1cblxuICAudmpzLWN1c3RvbSAudmpzLXJlbWFpbmluZy10aW1lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnZqcy1jdXN0b20gLnZqcy1tdXRlLWNvbnRyb2wge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC52anMtY3VzdG9tIC52anMtdm9sdW1lLW1lbnUtYnV0dG9uLnZqcy1tZW51LWJ1dHRvbi1pbmxpbmUgLnZqcy1tZW51LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAudmpzLWN1c3RvbSAudmpzLXZvbHVtZS1wYW5lbCAudmpzLXZvbHVtZS1jb250cm9sLnZqcy12b2x1bWUtaG9yaXpvbnRhbCB7XG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAxcyxvcGFjaXR5IDFzO1xuICB9XG4gIC52anMtY3VzdG9tIC52anMtdm9sdW1lLXBhbmVsIC52anMtbXV0ZS1jb250cm9sOmhvdmVyfi52anMtdm9sdW1lLWNvbnRyb2wge1xuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMXMsb3BhY2l0eSAxcztcbiAgfVxuICAudmpzLWN1c3RvbSAudmpzLXZvbHVtZS1jb250cm9sLnZqcy12b2x1bWUtaG9yaXpvbnRhbCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMXMsb3BhY2l0eSAxcztcbiAgfVxuXG4gIC52anMtY3VzdG9tIC52anMtdm9sdW1lLWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAudmpzLWN1c3RvbSAudmpzLXNsaWRlci1ob3Jpem9udGFsIHtcbiAgICBcbiAgfVxuXG4gIC52anMtY3VzdG9tIC52anMtdm9sdW1lLWxldmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAudmpzLWN1c3RvbSAudmpzLXNsaWRlci1ob3Jpem9udGFsIC52anMtdm9sdW1lLWxldmVsOmJlZm9yZSB7XG4gICAgdG9wOiAtLjNlbTtcbiAgICByaWdodDogLS41ZW07XG4gIH1cblxuICAudmpzLWN1c3RvbSAudmpzLW1lbnUtYnV0dG9uLWlubGluZSAudmpzLW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxuICB9XG5cbiAgLnZqcy1tZW51LWJ1dHRvbi1pbmxpbmU6aG92ZXIgLnZqcy1tZW51LCAudmpzLW1lbnUtYnV0dG9uLWlubGluZTpmb2N1cyAudmpzLW1lbnUsIC52anMtbWVudS1idXR0b24taW5saW5lLnZqcy1zbGlkZXItYWN0aXZlIC52anMtbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiAgLnZqcy1jdXN0b20gLnZqcy1zcGFjZXIsIC52anMtY3VzdG9tIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG5cbiAgLnZqcy1jdXN0b20gLnZqcy1jb250cm9sIC52anMtaWNvbi1wbGFjZWhvbGRlcjpiZWZvcmUge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICB9XG5cbiAgLnZqcy1jdXN0b20gLnZqcy1jb250cm9sOmZvY3VzLCBcbiAgLnZqcy1jdXN0b20gLnZqcy1jb250cm9sOmZvY3VzOmJlZm9yZSwgXG4gIC52anMtY3VzdG9tIC52anMtY29udHJvbDpob3ZlcjpiZWZvcmUge1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAvKiBWaWRlb0pzIERvY2sgc3R5bGVzICovXG4gIC52anMtY3VzdG9tIC52anMtZG9jay1pbmZvLCAudmpzLWN1c3RvbSAudmpzLWRvY2stc2hlbGYge1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcztcbiAgfVxuICAudmpzLWN1c3RvbSAudmpzLWRvY2staW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNywxNywxNywuNyk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAudmpzLWN1c3RvbSAudmpzLWRvY2stcHJldmlldyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjgyNXJlbTtcbiAgfVxuXG4gIC52anMtY3VzdG9tIC52anMtZG9jay1kZXNjcmlwdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnZqcy1jdXN0b20gLnZqcy1kb2NrLW1ldGEsIC52anMtY3VzdG9tIC52anMtZG9jay10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLnZqcy1jdXN0b20gLnZqcy1kb2NrLW1ldGEge1xuICAgIGZvbnQtc2l6ZTogLjgyNXJlbTtcbiAgfVxuXG4gIC52anMtY3VzdG9tIC52anMtZG9jay10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDYyNXJlbVxuICB9XG5cbiAgLmVwaXNvZGUtcGxheWVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAgb3JkZXI6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC8qIFZpZGVvLmpzIFBsYXlsaXN0IFVJICovXG4gIC52anMtcGxheWxpc3Qge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgZmxleDogMCAwIDM1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMjUyNTI1O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MC42MjVlbSkge1xuICAgIHBhZGRpbmc6ICAwO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2OC43NWVtKSB7XG4gICAgLndhdGNoLWFyZWEge1xuICAgICAgcGFkZGluZzogMS44NzVyZW0gMy43NXJlbTtcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk1ZW0pIHtcbiAgICAud2F0Y2gtYXJlYSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cbiAgfSAgXG5gO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvUGxheWVyL3N0eWxlcy50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQbGF5ZXIgZnJvbSAndWkvY29tcG9uZW50cy9QbGF5ZXInO1xuaW1wb3J0IHsgV2F0Y2hDb250YWluZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGVwaXNvZGU/O1xuICBtYXRjaD86IHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIGlkOiBzdHJpbmcsXG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gV2F0Y2hBcmVhKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7ZXBpc29kZSwgbWF0Y2h9ID0gcHJvcHM7XG5cbiAgY29uc3QgdmpzT3B0aW9ucyA9IHtcbiAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgY29udHJvbHM6IHRydWUsXG4gICAgYXNwZWN0UmF0aW86ICcxNjo5JyxcbiAgICBzb3VyY2VzOiBbe1xuICAgICAgc3JjOiBgJHtlcGlzb2RlLnZpZGVvVXJsfWAsXG4gICAgICB0eXBlOiAndmlkZW8vbXA0JyxcbiAgICB9XSxcbiAgICBwbHVnaW5zOiB7XG4gICAgICAvLyBkb2NrOiB7XG4gICAgICAvLyAgIHRodW1iOiBgJHtlcGlzb2RlLnRodW1iSW1hZ2VVcmx9YCxcbiAgICAgIC8vICAgbWV0YTogYCR7ZXBpc29kZS5zaG93LnRpdGxlfWAsXG4gICAgICAvLyAgIHRpdGxlOiBgJHtlcGlzb2RlLnRpdGxlfWAsXG4gICAgICAvLyB9LFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8V2F0Y2hDb250YWluZXIgY2xhc3NOYW1lPVwid2F0Y2gtYXJlYVwiPlxuICAgICAgPFBsYXllciB7Li4udmpzT3B0aW9uc30gLz5cbiAgICA8L1dhdGNoQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXYXRjaEFyZWE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9XYXRjaEFyZWEvV2F0Y2hBcmVhLnRzeCIsImltcG9ydCBXYXRjaEFyZWEgZnJvbSAnLi9XYXRjaEFyZWEnO1xuXG5leHBvcnQgZGVmYXVsdCBXYXRjaEFyZWE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9XYXRjaEFyZWEvaW5kZXgudHMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAndWkvc3R5bGVzL0NvbnRhaW5lcic7XG5pbXBvcnQgeyBtZWRpYSB9IGZyb20gJ3VpL3N0eWxlcy91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBXYXRjaENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICAucGxheWVyLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICB9XG4gICR7bWVkaWEubWRgXG4gIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgV2F0Y2hBcmVhID0gc3R5bGVkLnNlY3Rpb25gXG4gIC5wbGF5ZXItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIH1cbiAgJHttZWRpYS5tZGBcbiAgYH1cbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9XYXRjaEFyZWEvc3R5bGVzLnRzIiwidmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkVwaXNvZGVcIn0sXCJ2YXJpYWJsZURlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIlZhcmlhYmxlRGVmaW5pdGlvblwiLFwidmFyaWFibGVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifX0sXCJ0eXBlXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIklEXCJ9fSxcImRlZmF1bHRWYWx1ZVwiOm51bGx9XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJFcGlzb2RlXCJ9LFwiYXJndW1lbnRzXCI6W3tcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGcmFnbWVudFNwcmVhZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJFcGlzb2RlSW5mb1wifSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwic2hvd1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZyYWdtZW50U3ByZWFkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNob3dJbmZvXCJ9LFwiZGlyZWN0aXZlc1wiOltdfV19fV19fV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjoxNzh9fTtcbmRvYy5kZWZpbml0aW9ucyA9IGRvYy5kZWZpbml0aW9ucy5jb25jYXQocmVxdWlyZShcIi4vRXBpc29kZUZyYWdtZW50cy5ncmFwaHFsXCIpLmRlZmluaXRpb25zKTtcbmRvYy5kZWZpbml0aW9ucyA9IGRvYy5kZWZpbml0aW9ucy5jb25jYXQocmVxdWlyZShcIi4vU2hvd0ZyYWdtZW50cy5ncmFwaHFsXCIpLmRlZmluaXRpb25zKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkb2M7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi91aS9ncmFwaHFsL0VwaXNvZGVRdWVyeS5ncmFwaHFsXG4vLyBtb2R1bGUgaWQgPSA1OTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==