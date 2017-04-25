exports.ids = [1];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const recompose_1 = __webpack_require__(6);
const styles_1 = __webpack_require__(103);
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

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __webpack_require__(101);
exports.default = Player_1.default;


/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(1);
const Container_1 = __webpack_require__(19);
const utils_1 = __webpack_require__(4);
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

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const Player_1 = __webpack_require__(102);
const styles_1 = __webpack_require__(109);
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

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WatchArea_1 = __webpack_require__(107);
exports.default = WatchArea_1.default;


/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(1);
const utils_1 = __webpack_require__(4);
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

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Episode"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"Episode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EpisodeInfo"},"directives":[]},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"show"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShowInfo"},"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":178}};
doc.definitions = doc.definitions.concat(__webpack_require__(89).definitions);
doc.definitions = doc.definitions.concat(__webpack_require__(76).definitions);

module.exports = doc;

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const EpisodeDetail_1 = __webpack_require__(94);
function Watch(props) {
    const { match } = props;
    return (React.createElement(EpisodeDetail_1.default, { id: match.params.id }));
}
exports.default = Watch;


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Loading_1 = __webpack_require__(77);
exports.default = Loading_1.default;


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(1);
const utils_1 = __webpack_require__(4);
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

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(1);
const utils_1 = __webpack_require__(4);
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

/***/ 76:
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShowInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Show"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"uid"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"title"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"description"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"posterImageUrl"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"featureImageUrl"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShowEpisodes"},"directives":[]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShowEpisodes"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Show"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"episodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_not"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"uid"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"title"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"description"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"thumbImageUrl"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"imagePublicId"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":268}};

module.exports = doc;

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const recompose_1 = __webpack_require__(6);
const styles_1 = __webpack_require__(78);
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

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(1);
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

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_router_dom_1 = __webpack_require__(2);
const styles_1 = __webpack_require__(81);
const AspectRatios_1 = __webpack_require__(74);
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

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EpisodeCard_1 = __webpack_require__(79);
exports.default = EpisodeCard_1.default;


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(1);
const utils_1 = __webpack_require__(4);
const GridItem_1 = __webpack_require__(75);
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

/***/ 89:
/***/ (function(module, exports) {

var doc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EpisodeInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Episode"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"uid"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"title"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"description"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"thumbImageUrl"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"imagePublicId"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"videoUrl"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"season"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"topics"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"name"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":164}};

module.exports = doc;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_apollo_1 = __webpack_require__(10);
const recompose_1 = __webpack_require__(6);
const react_helmet_1 = __webpack_require__(11);
const Loading_1 = __webpack_require__(73);
const EpisodeCard_1 = __webpack_require__(80);
const WatchArea_1 = __webpack_require__(108);
const styles_1 = __webpack_require__(95);
const EPISODE_QUERY = __webpack_require__(113);
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

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EpisodeDetail_1 = __webpack_require__(93);
exports.default = EpisodeDetail_1.default;


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(1);
const Container_1 = __webpack_require__(19);
const utils_1 = __webpack_require__(4);
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


/***/ })

};;