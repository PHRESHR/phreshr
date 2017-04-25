exports.ids = [3];
exports.modules = {

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_helmet_1 = __webpack_require__(11);
const ShowList_1 = __webpack_require__(86);
function Shows() {
    return (React.createElement("div", null,
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "Shows")),
        React.createElement(ShowList_1.default, null)));
}
exports.default = Shows;


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

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_router_dom_1 = __webpack_require__(2);
const styles_1 = __webpack_require__(84);
const AspectRatios_1 = __webpack_require__(74);
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

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ShowCard_1 = __webpack_require__(82);
exports.default = ShowCard_1.default;


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(1);
const utils_1 = __webpack_require__(4);
const GridItem_1 = __webpack_require__(75);
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

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_apollo_1 = __webpack_require__(10);
const recompose_1 = __webpack_require__(6);
const Loading_1 = __webpack_require__(73);
const styles_1 = __webpack_require__(87);
const ShowCard_1 = __webpack_require__(83);
const SHOWS_QUERY = __webpack_require__(88);
function ShowList(props) {
    const { allShows } = props;
    return (React.createElement(styles_1.default, { wrap: true, justify: "space-between", className: "show-container" },
        React.createElement("div", { className: "header" },
            React.createElement("h2", null, "Shows")),
        allShows.map(show => React.createElement(ShowCard_1.default, { key: show.id, show: show }))));
}
exports.default = recompose_1.compose(react_apollo_1.graphql(SHOWS_QUERY), Loading_1.default, recompose_1.flattenProp('data'), recompose_1.pure)(ShowList);


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ShowList_1 = __webpack_require__(85);
exports.default = ShowList_1.default;


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(1);
const Container_1 = __webpack_require__(19);
const utils_1 = __webpack_require__(4);
const ShowContainer = styled_components_1.default(Container_1.default) `
  flex-direction: row;
  flex-wrap: wrap;
  ${utils_1.media.md `
  `}
`;
exports.default = ShowContainer;


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllShows"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"allShows"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShowInfo"},"directives":[]}]}}]}}],"loc":{"start":0,"end":95}};
doc.definitions = doc.definitions.concat(__webpack_require__(76).definitions);

module.exports = doc;

/***/ })

};;