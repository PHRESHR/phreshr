webpackJsonp([2],{

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const ShowDetail_1 = __webpack_require__(584);
function Show(props) {
    const { match } = props;
    return (React.createElement("div", null,
        React.createElement(ShowDetail_1.default, { id: match.params.id })));
}
exports.default = Show;


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

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const react_apollo_1 = __webpack_require__(111);
const recompose_1 = __webpack_require__(70);
const react_helmet_1 = __webpack_require__(196);
const Loading_1 = __webpack_require__(552);
const ShowCard_1 = __webpack_require__(562);
const EpisodeCard_1 = __webpack_require__(559);
const styles_1 = __webpack_require__(585);
const SHOW_QUERY = __webpack_require__(594);
function ShowDetail(props) {
    const { Show } = props;
    const show = Show;
    return (React.createElement("div", { className: "show-detail" },
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, show.title),
            React.createElement("meta", { name: "description", content: show.description }),
            React.createElement("meta", { property: "og:title", content: `${show.title}: ${show.title}` }),
            React.createElement("meta", { property: "og:description", content: show.description }),
            React.createElement("meta", { property: "og:url", content: `https://phreshr.com/watch/${show.id}/${show.uid}` }),
            React.createElement("meta", { property: "og:type", content: "article" }),
            React.createElement("meta", { property: "og:image", content: show.featureImageUrl }),
            React.createElement("meta", { property: "twitter:title", content: show.title }),
            React.createElement("meta", { property: "twitter:description", content: show.description }),
            React.createElement("meta", { property: "twitter:url", content: `https://phreshr.com/watch/${show.id}/${show.uid}` }),
            React.createElement("meta", { property: "twitter:card", content: "summary_large_image" }),
            React.createElement("meta", { property: "twitter:image", content: show.featureImageUrl })),
        React.createElement(styles_1.ShowLede, { padding: "0" }, show &&
            React.createElement(ShowCard_1.default, { key: show.id, show: show, detail: true })),
        React.createElement(styles_1.DetailContainer, { className: "more-episodes", column: true },
            React.createElement("h2", null, "Episodes:"),
            show.episodes.length < 3
                ? (React.createElement(styles_1.DetailContainer, { wrap: true, padding: "0", itemMargin: "0.5rem" }, show.episodes.map(ep => (React.createElement(EpisodeCard_1.default, { key: ep.id, episode: ep })))))
                : (React.createElement(styles_1.DetailContainer, { wrap: true, justify: "space-between", padding: "0" }, show.episodes.map(ep => (React.createElement(EpisodeCard_1.default, { key: ep.id, episode: ep }))))))));
}
exports.default = recompose_1.compose(react_apollo_1.graphql(SHOW_QUERY, {
    options: params => ({
        variables: {
            id: params.id,
        },
    }),
}), Loading_1.default, recompose_1.flattenProp('data'), recompose_1.pure)(ShowDetail);


/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ShowDetail_1 = __webpack_require__(583);
exports.default = ShowDetail_1.default;


/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __webpack_require__(26);
const Container_1 = __webpack_require__(195);
const utils_1 = __webpack_require__(49);
exports.ShowLede = styled_components_1.default(Container_1.default) `
  position: relative;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  padding-bottom: .5rem;
  ${utils_1.media.md `
    padding-bottom: 2.5rem;
  `}
`;
exports.ShowHub = styled_components_1.default(Container_1.default) `
  ${utils_1.media.md `
  `}
`;
exports.DetailContainer = styled_components_1.default(Container_1.default) `
  flex-direction: row;
  ${utils_1.media.md `
  `}

  h2 {
    font-size: 1.2rem;
    ${utils_1.media.md `
      font-size: 1.5rem;
    `}
  }
`;


/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Show"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"Show"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShowInfo"},"directives":[]}]}}]}}],"loc":{"start":0,"end":98}};
doc.definitions = doc.definitions.concat(__webpack_require__(555).definitions);

module.exports = doc;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9wYWdlcy9TaG93L1Nob3cudHN4Iiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvTG9hZGluZy9pbmRleC50cz9iZmUzKiIsIndlYnBhY2s6Ly8vLi91aS9zdHlsZXMvQXNwZWN0UmF0aW9zLnRzPzczZGMqIiwid2VicGFjazovLy8uL3VpL3N0eWxlcy9HcmlkSXRlbS50cz9hNzliKiIsIndlYnBhY2s6Ly8vLi91aS9ncmFwaHFsL1Nob3dGcmFnbWVudHMuZ3JhcGhxbD85NzQzKiIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy50c3g/YTAxZSoiLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9Mb2FkaW5nL3N0eWxlcy50cz81ZDRmKiIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0VwaXNvZGVDYXJkL0VwaXNvZGVDYXJkLnRzeD8yNDUwKiIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0VwaXNvZGVDYXJkL2luZGV4LnRzP2Q4MTQqIiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvRXBpc29kZUNhcmQvc3R5bGVzLnRzPzE5ZjcqIiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvU2hvd0NhcmQvU2hvd0NhcmQudHN4PzM3MDciLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9TaG93Q2FyZC9pbmRleC50cz8yYzUzIiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvU2hvd0NhcmQvc3R5bGVzLnRzP2UyYjMiLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9TaG93RGV0YWlsL1Nob3dEZXRhaWwudHN4Iiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvU2hvd0RldGFpbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL1Nob3dEZXRhaWwvc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3VpL2dyYXBocWwvU2hvd1F1ZXJ5LmdyYXBocWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxxQ0FBK0I7QUFDL0IsOENBQWtEO0FBVWxELGNBQWMsS0FBWTtJQUN4QixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLE1BQU0sQ0FBQyxDQUNMO1FBQ0Usb0JBQUMsb0JBQVUsSUFBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUksQ0FDL0IsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQUVELGtCQUFlLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7QUNwQnBCLDJDQUFnQztBQUVoQyxrQkFBZSxpQkFBTyxDQUFDOzs7Ozs7Ozs7OztBQ0Z2QixvREFBdUM7QUFDdkMsd0NBQXFEO0FBRXhDLHVCQUFlLEdBQUcsMkJBQU0sQ0FBQyxHQUFHO0lBQ3BDLG1CQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBRTtDQUN2QixDQUFDO0FBRVcsc0JBQWMsR0FBRywyQkFBTSxDQUFDLEdBQUc7SUFDbkMsbUJBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFFO0lBQ25CLGFBQUssQ0FBQyxFQUFFO01BQ0wsbUJBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFFO0dBQ3RCO0NBQ0YsQ0FBQztBQUVXLHNCQUFjLEdBQUcsMkJBQU0sQ0FBQyxHQUFHO0lBQ25DLG1CQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRTtDQUN0QixDQUFDO0FBRVcsc0JBQWMsR0FBRywyQkFBTSxDQUFDLEdBQUc7SUFDbkMsbUJBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFFO0NBQ3RCLENBQUM7Ozs7Ozs7Ozs7O0FDcEJGLG9EQUF1QztBQUN2Qyx3Q0FBd0M7QUFFeEMsTUFBTSxRQUFRLEdBQUcsMkJBQU0sQ0FBQyxPQUFPOzs7a0JBR2IsS0FBSyxJQUFJLEtBQUssQ0FBQyxVQUFVOztJQUV2QyxhQUFLLENBQUMsRUFBRTs7R0FFVDs7SUFFQyxhQUFLLENBQUMsRUFBRTs7R0FFVDs7SUFFQyxhQUFLLENBQUMsRUFBRTs7R0FFVDs7OztNQUlHLGFBQUssQ0FBQyxFQUFFOztLQUVUOztDQUVKLENBQUM7QUFFRixrQkFBZSxRQUFRLENBQUM7Ozs7Ozs7O0FDNUJ4QixXQUFXLGtDQUFrQyxvQ0FBb0MsaUNBQWlDLGtCQUFrQiwyQkFBMkIsOEJBQThCLGlDQUFpQyxxQ0FBcUMsb0NBQW9DLDJCQUEyQixvREFBb0QsRUFBRSxvQ0FBb0MsNEJBQTRCLG9EQUFvRCxFQUFFLG9DQUFvQyw4QkFBOEIsb0RBQW9ELEVBQUUsb0NBQW9DLG9DQUFvQyxvREFBb0QsRUFBRSxvQ0FBb0MsdUNBQXVDLG9EQUFvRCxFQUFFLG9DQUFvQyx3Q0FBd0Msb0RBQW9ELEVBQUUsZ0NBQWdDLHFDQUFxQyxpQkFBaUIsR0FBRyxFQUFFLG9DQUFvQyxxQ0FBcUMsa0JBQWtCLDJCQUEyQiw4QkFBOEIsaUNBQWlDLHFDQUFxQyxvQ0FBb0MsaUNBQWlDLGVBQWUsMEJBQTBCLCtCQUErQixVQUFVLGdDQUFnQyw2QkFBNkIsK0JBQStCLFVBQVUsMEJBQTBCLDZCQUE2QixHQUFHLGtDQUFrQyxxQ0FBcUMsb0NBQW9DLDJCQUEyQixvREFBb0QsRUFBRSxvQ0FBb0MsNEJBQTRCLG9EQUFvRCxFQUFFLG9DQUFvQyw4QkFBOEIsb0RBQW9ELEVBQUUsb0NBQW9DLG9DQUFvQyxvREFBb0QsRUFBRSxvQ0FBb0Msc0NBQXNDLG9EQUFvRCxFQUFFLG9DQUFvQyxzQ0FBc0Msb0RBQW9ELEdBQUcsR0FBRyxTQUFTOztBQUV4NEUscUI7Ozs7Ozs7Ozs7QUNGQSxxQ0FBK0I7QUFDL0IsNENBQW9EO0FBQ3BELDBDQUFtQztBQUVuQztJQUNFLE1BQU0sQ0FBQyxDQUNMLG9CQUFDLGdCQUFPO1FBQ04sNkJBQUssU0FBUyxFQUFDLGNBQWM7WUFDM0IsNkJBQUssU0FBUyxFQUFDLGtCQUFrQixHQUFHO1lBQ3BDLDZCQUFLLFNBQVMsRUFBQyxrQkFBa0IsR0FBRztZQUNwQyw2QkFBSyxTQUFTLEVBQUMsa0JBQWtCLEdBQUc7WUFDcEMsNkJBQUssU0FBUyxFQUFDLGtCQUFrQixHQUFHO1lBQ3BDLDZCQUFLLFNBQVMsRUFBQyxrQkFBa0IsR0FBRztZQUNwQyw2QkFBSyxTQUFTLEVBQUMsa0JBQWtCLEdBQUc7WUFDcEMsNkJBQUssU0FBUyxFQUFDLGtCQUFrQixHQUFHO1lBQ3BDLDZCQUFLLFNBQVMsRUFBQyxrQkFBa0IsR0FBRztZQUNwQyw2QkFBSyxTQUFTLEVBQUMsa0JBQWtCLEdBQUcsQ0FDaEMsQ0FDRSxDQUNYLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxtQkFBbUIsR0FBRyxrQkFBTSxDQUNoQyxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQzNCLDJCQUFlLENBQUMsT0FBTyxDQUFDLENBQ3pCLENBQUM7QUFFRixrQkFBZSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7QUMzQm5DLG9EQUF1QztBQUcxQixlQUFPLEdBQUcsMkJBQU0sQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQThEaEMsQ0FBQzs7Ozs7Ozs7Ozs7QUNqRUYscUNBQStCO0FBQy9CLG1EQUF3QztBQUV4QywwQ0FBK0M7QUFDL0MsZ0RBQXlEO0FBaUJ6RCxpQkFBaUIsS0FBWTtJQUMzQixNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQztJQUNsQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1gsTUFBTSxDQUFDLENBQ0wsb0JBQUMsaUJBQVEsSUFBQyxTQUFTLEVBQUMsY0FBYztZQUNoQztnQkFDRSxnQ0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBTTtnQkFDN0IsZ0NBQUssT0FBTyxDQUFDLEtBQUssQ0FBTSxDQUNqQjtZQUNULDZCQUFLLFNBQVMsRUFBQyxpQkFBaUI7Z0JBQzlCLDZCQUFLLFNBQVMsRUFBQyxPQUFPO29CQUNwQiw2QkFBSyxTQUFTLEVBQUMscUJBQXFCO3dCQUNsQyw4Q0FBb0I7d0JBQ3BCLCtCQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUssQ0FDeEI7b0JBQ04sNkJBQUssU0FBUyxFQUFDLGdCQUFnQjt3QkFDN0IsdUNBQWE7d0JBQ1osT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUN2Qiw2QkFBSyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFPLENBQ3ZDLENBQ0csQ0FDRixDQUNGLENBQ0csQ0FDWixDQUFDO0lBQ0osQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLENBQ0wsb0JBQUMsa0JBQVMsSUFBQyxTQUFTLEVBQUMsbUJBQW1CO1lBQ3RDLG9CQUFDLHVCQUFJLElBQUMsRUFBRSxFQUFFLFVBQVUsT0FBTyxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO2dCQUM3QyxvQkFBQyw4QkFBZTtvQkFDZDt3QkFFRSw2QkFBSyxHQUFHLEVBQUUsT0FBTyxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUNsRCxDQUNVO2dCQUNqQixPQUFPLENBQUMsSUFBSSxJQUFJLGdDQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFNO2dCQUM5QyxnQ0FBSyxPQUFPLENBQUMsS0FBSyxDQUFNO2dCQUN4QiwrQkFBSSxPQUFPLENBQUMsV0FBVyxDQUFLO2dCQUMzQixPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssSUFDekMsNkJBQUssR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBTyxDQUN2QyxDQUNJLENBQ0csQ0FDZixDQUFDO0lBQ0YsQ0FBQztBQUNILENBQUM7QUFFRCxrQkFBZSxPQUFPLENBQUM7Ozs7Ozs7Ozs7O0FDcEV2QiwrQ0FBd0M7QUFFeEMsa0JBQWUscUJBQVcsQ0FBQzs7Ozs7Ozs7Ozs7QUNGM0Isb0RBQXVDO0FBQ3ZDLHdDQUF3QztBQUV4Qyw0Q0FBMEM7QUFFN0IsZ0JBQVEsR0FBRywyQkFBTSxDQUFDLE9BQU87Ozs7Ozs7Ozs7OztlQVl2QixLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFJLFdBQVc7TUFDOUQsYUFBSyxDQUFDLEVBQUU7aUJBQ0csS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBSSxTQUFTO0tBQy9EO01BQ0MsYUFBSyxDQUFDLEVBQUU7aUJBQ0csS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBSSxVQUFVO0tBQ2hFO01BQ0MsYUFBSyxDQUFDLEVBQUU7aUJBQ0csS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBSSxRQUFRO0tBQzlEOztJQUVELGFBQUssQ0FBQyxFQUFFO0dBQ1Q7Q0FDRixDQUFDO0FBRVcsaUJBQVMsR0FBRywyQkFBTSxDQUFDLGtCQUFRLENBQUM7SUFDckMsYUFBSyxDQUFDLEVBQUU7R0FDVDs7SUFFQyxhQUFLLENBQUMsRUFBRTtHQUNUOztJQUVDLGFBQUssQ0FBQyxFQUFFO0dBQ1Q7Q0FDRixDQUFDO0FBRUYsa0JBQWUsaUJBQVMsQ0FBQzs7Ozs7Ozs7Ozs7QUMzQ3pCLHFDQUErQjtBQUMvQixtREFBd0M7QUFDeEMsMENBQStDO0FBQy9DLGdEQUF5RDtBQWV6RCxrQkFBa0IsS0FBWTtJQUM1QixNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQztJQUMvQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1gsTUFBTSxDQUFDLENBQ0wsb0JBQUMsaUJBQVEsSUFBQyxTQUFTLEVBQUMsV0FBVztZQUM3QixpQ0FBUyxTQUFTLEVBQUMsY0FBYztnQkFDL0IsNkJBQUssU0FBUyxFQUFDLE9BQU87b0JBQ3BCLG9CQUFDLDhCQUFlO3dCQUNkLDZCQUFLLFNBQVMsRUFBQyxZQUFZOzRCQUN6Qiw2QkFBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUM5QyxDQUNVLENBQ2Q7Z0JBQ04sNkJBQUssU0FBUyxFQUFDLFdBQVc7b0JBQ3hCLGdDQUFLLElBQUksQ0FBQyxLQUFLLENBQU07b0JBQ3JCLCtCQUFJLElBQUksQ0FBQyxXQUFXLENBQUssQ0FDckIsQ0FDRSxDQUNELENBQ1osQ0FBQztJQUNKLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLE1BQU0sQ0FBQyxDQUNMLG9CQUFDLGtCQUFTLElBQUMsU0FBUyxFQUFDLGdCQUFnQjtZQUNuQyxvQkFBQyx1QkFBSSxJQUFDLEVBQUUsRUFBRSxTQUFTLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDdEMsNkJBQUssR0FBRyxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQ2pELGdDQUFLLElBQUksQ0FBQyxLQUFLLENBQU07Z0JBQ3JCLCtCQUFJLElBQUksQ0FBQyxXQUFXLENBQUssQ0FDcEIsQ0FDRyxDQUNiLENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQztBQUVELGtCQUFlLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7QUNuRHhCLDRDQUFrQztBQUVsQyxrQkFBZSxrQkFBUSxDQUFDOzs7Ozs7Ozs7OztBQ0Z4QixvREFBdUM7QUFDdkMsd0NBQXdDO0FBQ3hDLDRDQUEwQztBQUU3QixnQkFBUSxHQUFHLDJCQUFNLENBQUMsR0FBRzs7Ozs7O01BTTVCLGFBQUssQ0FBQyxFQUFFOztLQUVUOzs7O1FBSUcsYUFBSyxDQUFDLEVBQUU7O09BRVQ7Ozs7Ozs7OztNQVNELGFBQUssQ0FBQyxFQUFFOztLQUVUOzs7O1FBSUcsYUFBSyxDQUFDLEVBQUU7O09BRVQ7OztDQUdOLENBQUM7QUFFVyxpQkFBUyxHQUFHLDJCQUFNLENBQUMsa0JBQVEsQ0FBQzs7OztJQUlyQyxhQUFLLENBQUMsRUFBRTs7R0FFVDs7SUFFQyxhQUFLLENBQUMsRUFBRTs7R0FFVDs7SUFFQyxhQUFLLENBQUMsRUFBRTs7R0FFVDtDQUNGLENBQUM7QUFFRixrQkFBZSxpQkFBUyxDQUFDOzs7Ozs7Ozs7OztBQ3pEekIscUNBQStCO0FBQy9CLGdEQUF1QztBQUN2Qyw0Q0FBdUQ7QUFDdkQsZ0RBQXNDO0FBRXRDLDJDQUF3RDtBQUN4RCw0Q0FBOEM7QUFDOUMsK0NBQW9EO0FBQ3BELDBDQUFtRDtBQUVuRCw0Q0FBMkQ7QUFNM0Qsb0JBQW9CLEtBQVk7SUFDOUIsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQztJQUN2QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbEIsTUFBTSxDQUFDLENBQ0wsNkJBQUssU0FBUyxFQUFDLGFBQWE7UUFDMUIsb0JBQUMscUJBQU07WUFDTCxtQ0FBUSxJQUFJLENBQUMsS0FBSyxDQUFTO1lBQzNCLDhCQUFNLElBQUksRUFBQyxhQUFhLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUk7WUFDdEQsOEJBQU0sUUFBUSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBSTtZQUNyRSw4QkFBTSxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUk7WUFDN0QsOEJBQU0sUUFBUSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUUsNkJBQTZCLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFJO1lBQ3ZGLDhCQUFNLFFBQVEsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLFNBQVMsR0FBRztZQUM3Qyw4QkFBTSxRQUFRLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxHQUFJO1lBRTNELDhCQUFNLFFBQVEsRUFBQyxlQUFlLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUk7WUFDdEQsOEJBQU0sUUFBUSxFQUFDLHFCQUFxQixFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFJO1lBQ2xFLDhCQUFNLFFBQVEsRUFBQyxhQUFhLEVBQUMsT0FBTyxFQUFFLDZCQUE2QixJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBSTtZQUM1Riw4QkFBTSxRQUFRLEVBQUMsY0FBYyxFQUFDLE9BQU8sRUFBQyxxQkFBcUIsR0FBRztZQUM5RCw4QkFBTSxRQUFRLEVBQUMsZUFBZSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxHQUFJLENBQ3pEO1FBQ1Qsb0JBQUMsaUJBQVEsSUFBQyxPQUFPLEVBQUMsR0FBRyxJQUNsQixJQUFJO1lBQ0gsb0JBQUMsa0JBQVEsSUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEdBQUcsQ0FFNUM7UUFDWCxvQkFBQyx3QkFBZSxJQUFDLFNBQVMsRUFBQyxlQUFlLEVBQUMsTUFBTTtZQUMvQyw0Q0FBa0I7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztrQkFDbkIsQ0FDQSxvQkFBQyx3QkFBZSxJQUFDLElBQUksUUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFDLFVBQVUsRUFBQyxRQUFRLElBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUN2QixvQkFBQyxxQkFBVyxJQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsQ0FDdEMsQ0FDRixDQUNlLENBQ25CO2tCQUNDLENBQ0Usb0JBQUMsd0JBQWUsSUFBQyxJQUFJLFFBQUMsT0FBTyxFQUFDLGVBQWUsRUFBQyxPQUFPLEVBQUMsR0FBRyxJQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FDdkIsb0JBQUMscUJBQVcsSUFBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLENBQ3RDLENBQ0YsQ0FDZSxDQUNuQixDQUVTLENBQ2QsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQUVELGtCQUFlLG1CQUFPLENBQ3BCLHNCQUFPLENBQUMsVUFBVSxFQUFFO0lBQ2xCLE9BQU8sRUFBRSxNQUFNLElBQUksQ0FBQztRQUNsQixTQUFTLEVBQUU7WUFDVCxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDZDtLQUNGLENBQUM7Q0FDSCxDQUFDLEVBQ0YsaUJBQW1CLEVBQ25CLHVCQUFXLENBQUMsTUFBTSxDQUFDLEVBQ25CLGdCQUFJLENBQ0wsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUM3RWQsOENBQXNDO0FBRXRDLGtCQUFlLG9CQUFVLENBQUM7Ozs7Ozs7Ozs7O0FDRjFCLG9EQUF1QztBQUN2Qyw2Q0FBNEM7QUFDNUMsd0NBQXdDO0FBRTNCLGdCQUFRLEdBQUcsMkJBQU0sQ0FBQyxtQkFBUyxDQUFDOzs7Ozs7SUFNckMsYUFBSyxDQUFDLEVBQUU7O0dBRVQ7Q0FDRixDQUFDO0FBRVcsZUFBTyxHQUFHLDJCQUFNLENBQUMsbUJBQVMsQ0FBQztJQUNwQyxhQUFLLENBQUMsRUFBRTtHQUNUO0NBQ0YsQ0FBQztBQUVXLHVCQUFlLEdBQUcsMkJBQU0sQ0FBQyxtQkFBUyxDQUFDOztJQUU1QyxhQUFLLENBQUMsRUFBRTtHQUNUOzs7O01BSUcsYUFBSyxDQUFDLEVBQUU7O0tBRVQ7O0NBRUosQ0FBQzs7Ozs7Ozs7QUMvQkYsV0FBVyxrQ0FBa0MseURBQXlELDZCQUE2Qix5QkFBeUIsd0NBQXdDLDBCQUEwQiw0QkFBNEIsU0FBUywyQkFBMkIsNEJBQTRCLHFCQUFxQixrQ0FBa0MscUNBQXFDLG9DQUFvQyw2QkFBNkIsZUFBZSwwQkFBMEIsMkJBQTJCLFVBQVUsMEJBQTBCLDZCQUE2QixrQ0FBa0MscUNBQXFDLGdDQUFnQyxpQ0FBaUMsaUJBQWlCLEdBQUcsR0FBRyxTQUFTO0FBQ3B3Qjs7QUFFQSxxQiIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNob3dEZXRhaWwgZnJvbSAndWkvY29tcG9uZW50cy9TaG93RGV0YWlsJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbWF0Y2g6IHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIGlkOiBzdHJpbmcsXG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gU2hvdyhwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBtYXRjaCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTaG93RGV0YWlsIGlkPXttYXRjaC5wYXJhbXMuaWR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvcGFnZXMvU2hvdy9TaG93LnRzeCIsImltcG9ydCBMb2FkaW5nIGZyb20gJy4vTG9hZGluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LnRzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBhc3BlY3RSYXRpbywgbWVkaWEgfSBmcm9tICd1aS9zdHlsZXMvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgQXNwZWN0UmF0aW8xNng5ID0gc3R5bGVkLmRpdmBcbiAgJHsgYXNwZWN0UmF0aW8oMTYsIDkpIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBBc3BlY3RSYXRpbzV4MiA9IHN0eWxlZC5kaXZgXG4gICR7IGFzcGVjdFJhdGlvKDQsIDMpIH1cbiAgJHttZWRpYS5tZGBcbiAgICAkeyBhc3BlY3RSYXRpbyg1LCAyKSB9XG4gIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgQXNwZWN0UmF0aW80eDMgPSBzdHlsZWQuZGl2YFxuICAkeyBhc3BlY3RSYXRpbyg0LCAzKSB9XG5gO1xuXG5leHBvcnQgY29uc3QgQXNwZWN0UmF0aW8yeDMgPSBzdHlsZWQuZGl2YFxuICAkeyBhc3BlY3RSYXRpbygyLCAzKSB9XG5gO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvc3R5bGVzL0FzcGVjdFJhdGlvcy50cyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWVkaWEgfSBmcm9tICd1aS9zdHlsZXMvdXRpbHMnO1xuXG5jb25zdCBHcmlkSXRlbSA9IHN0eWxlZC5hcnRpY2xlYFxuICBmbGV4OiAwIDAgMTAwJTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy5pdGVtTWFyZ2lufTtcblxuICAke21lZGlhLm1kYFxuICAgIGZsZXg6IDAgMCBjYWxjKDEwMCUgLyAyIC0gMC4yNSk7XG4gIGB9XG5cbiAgJHttZWRpYS5sZ2BcbiAgICBmbGV4OiAwIDAgY2FsYygxMDAlIC8gMyAtIDAuNXJlbSk7XG4gIGB9XG5cbiAgJHttZWRpYS54bGBcbiAgICBmbGV4OiAwIDAgY2FsYygxMDAlIC8gNCAtIDAuNXJlbSk7XG4gIGB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICR7bWVkaWEubWRgXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkSXRlbTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9zdHlsZXMvR3JpZEl0ZW0udHMiLCJ2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIkZyYWdtZW50RGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTaG93SW5mb1wifSxcInR5cGVDb25kaXRpb25cIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2hvd1wifX0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInVpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGl0bGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImRlc2NyaXB0aW9uXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwb3N0ZXJJbWFnZVVybFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZmVhdHVyZUltYWdlVXJsXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGcmFnbWVudFNwcmVhZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTaG93RXBpc29kZXNcIn0sXCJkaXJlY3RpdmVzXCI6W119XX19LHtcImtpbmRcIjpcIkZyYWdtZW50RGVmaW5pdGlvblwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTaG93RXBpc29kZXNcIn0sXCJ0eXBlQ29uZGl0aW9uXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNob3dcIn19LFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImVwaXNvZGVzXCJ9LFwiYXJndW1lbnRzXCI6W3tcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImZpbHRlclwifSxcInZhbHVlXCI6e1wia2luZFwiOlwiT2JqZWN0VmFsdWVcIixcImZpZWxkc1wiOlt7XCJraW5kXCI6XCJPYmplY3RGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZF9ub3RcIn0sXCJ2YWx1ZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9fX1dfX1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1aWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRpdGxlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJkZXNjcmlwdGlvblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidGh1bWJJbWFnZVVybFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaW1hZ2VQdWJsaWNJZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH1dfX1dfX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MjY4fX07XG5cbm1vZHVsZS5leHBvcnRzID0gZG9jO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdWkvZ3JhcGhxbC9TaG93RnJhZ21lbnRzLmdyYXBocWxcbi8vIG1vZHVsZSBpZCA9IDU1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBicmFuY2gsIHJlbmRlckNvbXBvbmVudCB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICByZXR1cm4gKFxuICAgIDxTcGlubmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jdWJlLWdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jdWJlIHNrLWN1YmUxXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jdWJlIHNrLWN1YmUyXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jdWJlIHNrLWN1YmUzXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jdWJlIHNrLWN1YmU0XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jdWJlIHNrLWN1YmU1XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jdWJlIHNrLWN1YmU2XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jdWJlIHNrLWN1YmU3XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jdWJlIHNrLWN1YmU4XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jdWJlIHNrLWN1YmU5XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvU3Bpbm5lcj5cbiAgKTtcbn1cblxuY29uc3QgZGlzcGxheUxvYWRpbmdTdGF0ZSA9IGJyYW5jaChcbiAgcHJvcHMgPT4gcHJvcHMuZGF0YS5sb2FkaW5nLFxuICByZW5kZXJDb21wb25lbnQoTG9hZGluZyksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TG9hZGluZ1N0YXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLnRzeCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWVkaWEgfSBmcm9tICd1aS9zdHlsZXMvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgU3Bpbm5lciA9IHN0eWxlZC5kaXZgXG4gIC5zay1jdWJlLWdyaWQge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDEwMHB4IGF1dG87XG4gIH1cblxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIGhlaWdodDogMzMlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0Q2M0Y7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzay1jdWJlR3JpZFNjYWxlRGVsYXkgMS4zcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgfVxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlMSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9XG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUzIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC40czsgfVxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMXM7IH1cbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzOyB9XG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU2IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4zczsgfVxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNyB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwczsgfVxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlOCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMXM7IH1cbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTkge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzOyB9XG5cbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWN1YmVHcmlkU2NhbGVEZWxheSB7XG4gICAgMCUsIDcwJSwgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xuICAgIH0gMzUlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7IFxuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcbiAgICAwJSwgNzAlLCAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XG4gICAgfSAzNSUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcbiAgICB9XG4gIH1cbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9Mb2FkaW5nL3N0eWxlcy50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnY2xvdWRpbmFyeS1yZWFjdCc7XG5pbXBvcnQgeyBDYXJkSW5mbywgQ2FyZEVudHJ5IH0gZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHsgQXNwZWN0UmF0aW8xNng5IH0gZnJvbSAndWkvc3R5bGVzL0FzcGVjdFJhdGlvcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGVwaXNvZGU6IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIHVpZDogc3RyaW5nLFxuICAgIHNob3c6IHtcbiAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgfSxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgdGh1bWJJbWFnZVVybDogc3RyaW5nLFxuICAgIHRvcGljczogW3tpZCwgbmFtZX1dLFxuICB9O1xuICBkZXRhaWw/OiBib29sZWFuO1xufVxuXG5mdW5jdGlvbiBFcGlzb2RlKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGVwaXNvZGUsIGRldGFpbCB9ID0gcHJvcHM7XG4gIGlmIChkZXRhaWwpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRJbmZvIGNsYXNzTmFtZT1cImVwaXNvZGUtaW5mb1wiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxoMz57ZXBpc29kZS5zaG93LnRpdGxlfTwvaDM+XG4gICAgICAgICAgPGgxPntlcGlzb2RlLnRpdGxlfTwvaDE+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVwaXNvZGUtZGV0YWlsc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXBpc29kZS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICA8aDQ+RGVzY3JpcHRpb248L2g0PlxuICAgICAgICAgICAgICA8cD57ZXBpc29kZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXBpc29kZS10b3BpY3NcIj5cbiAgICAgICAgICAgICAgPGg0PlRhZ3M8L2g0PlxuICAgICAgICAgICAgICB7ZXBpc29kZS50b3BpY3MubWFwKHRvcGljID0+XG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3RvcGljLmlkfT57dG9waWMubmFtZX08L2Rpdj4sXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NhcmRJbmZvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkRW50cnkgY2xhc3NOYW1lPVwiaXRlbSBlcGlzb2RlLWl0ZW1cIj5cbiAgICAgICAgPExpbmsgdG89e2Avd2F0Y2gvJHtlcGlzb2RlLmlkfS8ke2VwaXNvZGUudWlkfWB9PlxuICAgICAgICAgIDxBc3BlY3RSYXRpbzE2eDk+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7Lyo8SW1hZ2UgY2xvdWROYW1lPVwicGhyZXNoci1tZWRpYVwiIHB1YmxpY0lkPXtlcGlzb2RlLnRodW1iSW1hZ2VVcmx9IHdpZHRoPVwiNjAwXCIgY3JvcD1cInNjYWxlXCIgdHlwZT1cImZldGNoXCIgLz4qL31cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2VwaXNvZGUudGh1bWJJbWFnZVVybH0gYWx0PXtlcGlzb2RlLnRpdGxlfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0FzcGVjdFJhdGlvMTZ4OT5cbiAgICAgICAgICB7ZXBpc29kZS5zaG93ICYmIDxoMz57ZXBpc29kZS5zaG93LnRpdGxlfTwvaDM+fVxuICAgICAgICAgIDxoMT57ZXBpc29kZS50aXRsZX08L2gxPlxuICAgICAgICAgIDxwPntlcGlzb2RlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICB7ZXBpc29kZS50b3BpY3MgJiYgZXBpc29kZS50b3BpY3MubWFwKHRvcGljID0+XG4gICAgICAgICAgICA8ZGl2IGtleT17dG9waWMuaWR9Pnt0b3BpYy5uYW1lfTwvZGl2PixcbiAgICAgICAgICApfVxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0NhcmRFbnRyeT5cbiAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcGlzb2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvRXBpc29kZUNhcmQvRXBpc29kZUNhcmQudHN4IiwiaW1wb3J0IEVwaXNvZGVDYXJkIGZyb20gJy4vRXBpc29kZUNhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBFcGlzb2RlQ2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL0VwaXNvZGVDYXJkL2luZGV4LnRzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBtZWRpYSB9IGZyb20gJ3VpL3N0eWxlcy91dGlscyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3VpL3N0eWxlcy9Db250YWluZXInO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ3VpL3N0eWxlcy9HcmlkSXRlbSc7XG5cbmV4cG9ydCBjb25zdCBDYXJkSW5mbyA9IHN0eWxlZC5zZWN0aW9uYFxuICBoZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gIH1cbiAgLmVwaXNvZGUtZGV0YWlscyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbiAgICBwYWRkaW5nOiAyLjVyZW0gMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgaGVhZGVyLFxuICAuZXBpc29kZS1kZXRhaWxzIC5pbm5lciB7XG4gICAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy5wYWRkaW5nID8gcHJvcHMucGFkZGluZyA6ICAnMCAuMzc1cmVtJ307XG4gICAgJHttZWRpYS5zbWBcbiAgICAgIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMucGFkZGluZyA/IHByb3BzLnBhZGRpbmcgOiAgJzAgLjVyZW0nfTtcbiAgICBgfVxuICAgICR7bWVkaWEubWRgXG4gICAgICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmcgPyBwcm9wcy5wYWRkaW5nIDogICcwIDIuNXJlbSd9O1xuICAgIGB9XG4gICAgJHttZWRpYS54bGBcbiAgICAgIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMucGFkZGluZyA/IHByb3BzLnBhZGRpbmcgOiAgJzAgNXJlbSd9O1xuICAgIGB9XG4gIH1cbiAgJHttZWRpYS5tZGBcbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJkRW50cnkgPSBzdHlsZWQoR3JpZEl0ZW0pYFxuICAke21lZGlhLm1kYFxuICBgfVxuXG4gICR7bWVkaWEubGdgXG4gIGB9XG5cbiAgJHttZWRpYS54bGBcbiAgYH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRFbnRyeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL0VwaXNvZGVDYXJkL3N0eWxlcy50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IENhcmRJbmZvLCBTaG93RW50cnkgfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyBBc3BlY3RSYXRpbzE2eDkgfSBmcm9tICd1aS9zdHlsZXMvQXNwZWN0UmF0aW9zJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2hvdzoge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgdWlkOiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxuICAgIHBvc3RlckltYWdlVXJsOiBzdHJpbmcsXG4gICAgZmVhdHVyZUltYWdlVXJsOiBzdHJpbmcsXG5cbiAgfTtcbiAgZGV0YWlsPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gU2hvd0NhcmQocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgc2hvdywgZGV0YWlsIH0gPSBwcm9wcztcbiAgaWYgKGRldGFpbCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZEluZm8gY2xhc3NOYW1lPVwic2hvdy12aWV3XCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNob3ctbWFycXVlZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgIDxBc3BlY3RSYXRpbzE2eDk+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1pbWFnZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzaG93LmZlYXR1cmVJbWFnZVVybH0gYWx0PXtzaG93LnRpdGxlfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Bc3BlY3RSYXRpbzE2eDk+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LWluZm9cIj5cbiAgICAgICAgICAgIDxoMT57c2hvdy50aXRsZX08L2gxPlxuICAgICAgICAgICAgPHA+e3Nob3cuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L0NhcmRJbmZvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaG93RW50cnkgY2xhc3NOYW1lPVwiaXRlbSBzaG93LWl0ZW1cIj5cbiAgICAgICAgPExpbmsgdG89e2Avc2hvdy8ke3Nob3cuaWR9LyR7c2hvdy51aWR9YH0+XG4gICAgICAgICAgPGltZyBzcmM9e3Nob3cucG9zdGVySW1hZ2VVcmx9IGFsdD17c2hvdy50aXRsZX0vPlxuICAgICAgICAgIDxoMT57c2hvdy50aXRsZX08L2gxPlxuICAgICAgICAgIDxwPntzaG93LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9TaG93RW50cnk+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93Q2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL1Nob3dDYXJkL1Nob3dDYXJkLnRzeCIsImltcG9ydCBTaG93Q2FyZCBmcm9tICcuL1Nob3dDYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgU2hvd0NhcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9TaG93Q2FyZC9pbmRleC50cyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbWVkaWEgfSBmcm9tICd1aS9zdHlsZXMvdXRpbHMnO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ3VpL3N0eWxlcy9HcmlkSXRlbSc7XG5cbmV4cG9ydCBjb25zdCBDYXJkSW5mbyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5zaG93LW1hcnF1ZWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAke21lZGlhLm1kYFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBgfVxuICAgIC5tZWRpYSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMCAwICAxMDAlO1xuICAgICAgJHttZWRpYS5tZGBcbiAgICAgICAgZmxleDogMCAwICA2MCU7XG4gICAgICBgfVxuICAgIH1cbiAgfVxuICAuc2hvdy1pbWFnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIC5zaG93LWluZm8ge1xuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgICR7bWVkaWEubWRgXG4gICAgICBwYWRkaW5nOiAwIDJyZW07XG4gICAgYH1cblxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgJHttZWRpYS5tZGBcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgICBgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNob3dFbnRyeSA9IHN0eWxlZChHcmlkSXRlbSlgXG4gIGZsZXg6IDAgMCBjYWxjKDEwMCUgLyAyIC0gNHB4KTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDIgLSA0cHgpO1xuXG4gICR7bWVkaWEubWRgXG4gICAgZmxleDogMCAwIGNhbGMoMTAwJSAvIDIgLSA0cHgpO1xuICBgfVxuXG4gICR7bWVkaWEubGdgXG4gICAgZmxleDogMCAwIGNhbGMoMTAwJSAvIDMgLSA4cHgpO1xuICBgfVxuXG4gICR7bWVkaWEueGxgXG4gICAgZmxleDogMCAwIGNhbGMoMTAwJSAvIDQgLSA4cHgpO1xuICBgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgU2hvd0VudHJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvU2hvd0NhcmQvc3R5bGVzLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBjb21wb3NlLCBmbGF0dGVuUHJvcCwgcHVyZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xuXG5pbXBvcnQgZGlzcGxheUxvYWRpbmdTdGF0ZSBmcm9tICd1aS9jb21wb25lbnRzL0xvYWRpbmcnO1xuaW1wb3J0IFNob3dDYXJkIGZyb20gJ3VpL2NvbXBvbmVudHMvU2hvd0NhcmQnO1xuaW1wb3J0IEVwaXNvZGVDYXJkIGZyb20gJ3VpL2NvbXBvbmVudHMvRXBpc29kZUNhcmQnO1xuaW1wb3J0IHtEZXRhaWxDb250YWluZXIsIFNob3dMZWRlfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyBBc3BlY3RSYXRpbzE2eDkgfSBmcm9tICd1aS9zdHlsZXMvQXNwZWN0UmF0aW9zJztcbmltcG9ydCAqIGFzIFNIT1dfUVVFUlkgZnJvbSAndWkvZ3JhcGhxbC9TaG93UXVlcnkuZ3JhcGhxbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIFNob3c7XG59XG5cbmZ1bmN0aW9uIFNob3dEZXRhaWwocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgU2hvdyB9ID0gcHJvcHM7XG4gIGNvbnN0IHNob3cgPSBTaG93O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1kZXRhaWxcIj5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT57c2hvdy50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtzaG93LmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YCR7c2hvdy50aXRsZX06ICR7c2hvdy50aXRsZX1gfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17c2hvdy5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgaHR0cHM6Ly9waHJlc2hyLmNvbS93YXRjaC8ke3Nob3cuaWR9LyR7c2hvdy51aWR9YH0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cImFydGljbGVcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17c2hvdy5mZWF0dXJlSW1hZ2VVcmx9IC8+XG5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17c2hvdy50aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17c2hvdy5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9e2BodHRwczovL3BocmVzaHIuY29tL3dhdGNoLyR7c2hvdy5pZH0vJHtzaG93LnVpZH1gfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17c2hvdy5mZWF0dXJlSW1hZ2VVcmx9IC8+XG4gICAgICA8L0hlbG1ldD5cbiAgICAgIDxTaG93TGVkZSBwYWRkaW5nPVwiMFwiPlxuICAgICAgICB7c2hvdyAmJlxuICAgICAgICAgIDxTaG93Q2FyZCBrZXk9e3Nob3cuaWR9IHNob3c9e3Nob3d9IGRldGFpbD17dHJ1ZX0vPlxuICAgICAgICB9XG4gICAgICA8L1Nob3dMZWRlPlxuICAgICAgPERldGFpbENvbnRhaW5lciBjbGFzc05hbWU9XCJtb3JlLWVwaXNvZGVzXCIgY29sdW1uPlxuICAgICAgICA8aDI+RXBpc29kZXM6PC9oMj5cbiAgICAgICAge3Nob3cuZXBpc29kZXMubGVuZ3RoIDwgM1xuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIDxEZXRhaWxDb250YWluZXIgd3JhcCBwYWRkaW5nPVwiMFwiIGl0ZW1NYXJnaW49XCIwLjVyZW1cIj5cbiAgICAgICAgICAgICAgICB7c2hvdy5lcGlzb2Rlcy5tYXAoZXAgPT4gKFxuICAgICAgICAgICAgICAgICAgPEVwaXNvZGVDYXJkIGtleT17ZXAuaWR9IGVwaXNvZGU9e2VwfS8+XG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvRGV0YWlsQ29udGFpbmVyPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgPERldGFpbENvbnRhaW5lciB3cmFwIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgcGFkZGluZz1cIjBcIj5cbiAgICAgICAgICAgICAgICAgIHtzaG93LmVwaXNvZGVzLm1hcChlcCA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxFcGlzb2RlQ2FyZCBrZXk9e2VwLmlkfSBlcGlzb2RlPXtlcH0vPlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0RldGFpbENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgIDwvRGV0YWlsQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICBncmFwaHFsKFNIT1dfUVVFUlksIHtcbiAgICBvcHRpb25zOiBwYXJhbXMgPT4gKHtcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBpZDogcGFyYW1zLmlkLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSksXG4gIGRpc3BsYXlMb2FkaW5nU3RhdGUsXG4gIGZsYXR0ZW5Qcm9wKCdkYXRhJyksXG4gIHB1cmUsXG4pKFNob3dEZXRhaWwpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvU2hvd0RldGFpbC9TaG93RGV0YWlsLnRzeCIsImltcG9ydCBTaG93RGV0YWlsIGZyb20gJy4vU2hvd0RldGFpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dEZXRhaWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9TaG93RGV0YWlsL2luZGV4LnRzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3VpL3N0eWxlcy9Db250YWluZXInO1xuaW1wb3J0IHsgbWVkaWEgfSBmcm9tICd1aS9zdHlsZXMvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgU2hvd0xlZGUgPSBzdHlsZWQoQ29udGFpbmVyKWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gICR7bWVkaWEubWRgXG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbiAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTaG93SHViID0gc3R5bGVkKENvbnRhaW5lcilgXG4gICR7bWVkaWEubWRgXG4gIGB9XG5gO1xuXG5leHBvcnQgY29uc3QgRGV0YWlsQ29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICR7bWVkaWEubWRgXG4gIGB9XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICR7bWVkaWEubWRgXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBgfVxuICB9XG5gO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvU2hvd0RldGFpbC9zdHlsZXMudHMiLCJ2YXIgZG9jID0ge1wia2luZFwiOlwiRG9jdW1lbnRcIixcImRlZmluaXRpb25zXCI6W3tcImtpbmRcIjpcIk9wZXJhdGlvbkRlZmluaXRpb25cIixcIm9wZXJhdGlvblwiOlwicXVlcnlcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2hvd1wifSxcInZhcmlhYmxlRGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiVmFyaWFibGVEZWZpbml0aW9uXCIsXCJ2YXJpYWJsZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9fSxcInR5cGVcIjp7XCJraW5kXCI6XCJOYW1lZFR5cGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiSURcIn19LFwiZGVmYXVsdFZhbHVlXCI6bnVsbH1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNob3dcIn0sXCJhcmd1bWVudHNcIjpbe1wia2luZFwiOlwiQXJndW1lbnRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn0sXCJ2YWx1ZVwiOntcImtpbmRcIjpcIlZhcmlhYmxlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9fX1dLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZyYWdtZW50U3ByZWFkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNob3dJbmZvXCJ9LFwiZGlyZWN0aXZlc1wiOltdfV19fV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjo5OH19O1xuZG9jLmRlZmluaXRpb25zID0gZG9jLmRlZmluaXRpb25zLmNvbmNhdChyZXF1aXJlKFwiLi9TaG93RnJhZ21lbnRzLmdyYXBocWxcIikuZGVmaW5pdGlvbnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvYztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3VpL2dyYXBocWwvU2hvd1F1ZXJ5LmdyYXBocWxcbi8vIG1vZHVsZSBpZCA9IDU5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9