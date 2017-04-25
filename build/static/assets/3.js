webpackJsonp([3],{

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(2);
const react_helmet_1 = __webpack_require__(196);
const ShowList_1 = __webpack_require__(565);
function Shows() {
    return (React.createElement("div", null,
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "Shows")),
        React.createElement(ShowList_1.default, null)));
}
exports.default = Shows;


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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91aS9wYWdlcy9TaG93cy9TaG93cy50c3giLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LnRzP2JmZTMqKiIsIndlYnBhY2s6Ly8vLi91aS9zdHlsZXMvQXNwZWN0UmF0aW9zLnRzPzczZGMqKiIsIndlYnBhY2s6Ly8vLi91aS9zdHlsZXMvR3JpZEl0ZW0udHM/YTc5YioqIiwid2VicGFjazovLy8uL3VpL2dyYXBocWwvU2hvd0ZyYWdtZW50cy5ncmFwaHFsPzk3NDMqKiIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy50c3g/YTAxZSoqIiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvTG9hZGluZy9zdHlsZXMudHM/NWQ0ZioqIiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvU2hvd0NhcmQvU2hvd0NhcmQudHN4PzM3MDcqIiwid2VicGFjazovLy8uL3VpL2NvbXBvbmVudHMvU2hvd0NhcmQvaW5kZXgudHM/MmM1MyoiLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9TaG93Q2FyZC9zdHlsZXMudHM/ZTJiMyoiLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9TaG93TGlzdC9TaG93TGlzdC50c3g/YWNlNyIsIndlYnBhY2s6Ly8vLi91aS9jb21wb25lbnRzL1Nob3dMaXN0L2luZGV4LnRzP2QyNjIiLCJ3ZWJwYWNrOi8vLy4vdWkvY29tcG9uZW50cy9TaG93TGlzdC9zdHlsZXMudHM/NjE2MyIsIndlYnBhY2s6Ly8vLi91aS9ncmFwaHFsL0FsbFNob3dzUXVlcnkuZ3JhcGhxbD9kYzJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEscUNBQStCO0FBQy9CLGdEQUFzQztBQUV0Qyw0Q0FBOEM7QUFFOUM7SUFDRSxNQUFNLENBQUMsQ0FDTDtRQUNFLG9CQUFDLHFCQUFNO1lBQ0wsMkNBQW9CLENBQ2I7UUFDVCxvQkFBQyxrQkFBUSxPQUFHLENBQ1IsQ0FDUCxDQUFDO0FBQ0osQ0FBQztBQUVELGtCQUFlLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7QUNoQnJCLDJDQUFnQztBQUVoQyxrQkFBZSxpQkFBTyxDQUFDOzs7Ozs7Ozs7OztBQ0Z2QixvREFBdUM7QUFDdkMsd0NBQXFEO0FBRXhDLHVCQUFlLEdBQUcsMkJBQU0sQ0FBQyxHQUFHO0lBQ3BDLG1CQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBRTtDQUN2QixDQUFDO0FBRVcsc0JBQWMsR0FBRywyQkFBTSxDQUFDLEdBQUc7SUFDbkMsbUJBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFFO0lBQ25CLGFBQUssQ0FBQyxFQUFFO01BQ0wsbUJBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFFO0dBQ3RCO0NBQ0YsQ0FBQztBQUVXLHNCQUFjLEdBQUcsMkJBQU0sQ0FBQyxHQUFHO0lBQ25DLG1CQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBRTtDQUN0QixDQUFDO0FBRVcsc0JBQWMsR0FBRywyQkFBTSxDQUFDLEdBQUc7SUFDbkMsbUJBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFFO0NBQ3RCLENBQUM7Ozs7Ozs7Ozs7O0FDcEJGLG9EQUF1QztBQUN2Qyx3Q0FBd0M7QUFFeEMsTUFBTSxRQUFRLEdBQUcsMkJBQU0sQ0FBQyxPQUFPOzs7a0JBR2IsS0FBSyxJQUFJLEtBQUssQ0FBQyxVQUFVOztJQUV2QyxhQUFLLENBQUMsRUFBRTs7R0FFVDs7SUFFQyxhQUFLLENBQUMsRUFBRTs7R0FFVDs7SUFFQyxhQUFLLENBQUMsRUFBRTs7R0FFVDs7OztNQUlHLGFBQUssQ0FBQyxFQUFFOztLQUVUOztDQUVKLENBQUM7QUFFRixrQkFBZSxRQUFRLENBQUM7Ozs7Ozs7O0FDNUJ4QixXQUFXLGtDQUFrQyxvQ0FBb0MsaUNBQWlDLGtCQUFrQiwyQkFBMkIsOEJBQThCLGlDQUFpQyxxQ0FBcUMsb0NBQW9DLDJCQUEyQixvREFBb0QsRUFBRSxvQ0FBb0MsNEJBQTRCLG9EQUFvRCxFQUFFLG9DQUFvQyw4QkFBOEIsb0RBQW9ELEVBQUUsb0NBQW9DLG9DQUFvQyxvREFBb0QsRUFBRSxvQ0FBb0MsdUNBQXVDLG9EQUFvRCxFQUFFLG9DQUFvQyx3Q0FBd0Msb0RBQW9ELEVBQUUsZ0NBQWdDLHFDQUFxQyxpQkFBaUIsR0FBRyxFQUFFLG9DQUFvQyxxQ0FBcUMsa0JBQWtCLDJCQUEyQiw4QkFBOEIsaUNBQWlDLHFDQUFxQyxvQ0FBb0MsaUNBQWlDLGVBQWUsMEJBQTBCLCtCQUErQixVQUFVLGdDQUFnQyw2QkFBNkIsK0JBQStCLFVBQVUsMEJBQTBCLDZCQUE2QixHQUFHLGtDQUFrQyxxQ0FBcUMsb0NBQW9DLDJCQUEyQixvREFBb0QsRUFBRSxvQ0FBb0MsNEJBQTRCLG9EQUFvRCxFQUFFLG9DQUFvQyw4QkFBOEIsb0RBQW9ELEVBQUUsb0NBQW9DLG9DQUFvQyxvREFBb0QsRUFBRSxvQ0FBb0Msc0NBQXNDLG9EQUFvRCxFQUFFLG9DQUFvQyxzQ0FBc0Msb0RBQW9ELEdBQUcsR0FBRyxTQUFTOztBQUV4NEUscUI7Ozs7Ozs7Ozs7QUNGQSxxQ0FBK0I7QUFDL0IsNENBQW9EO0FBQ3BELDBDQUFtQztBQUVuQztJQUNFLE1BQU0sQ0FBQyxDQUNMLG9CQUFDLGdCQUFPO1FBQ04sNkJBQUssU0FBUyxFQUFDLGNBQWM7WUFDM0IsNkJBQUssU0FBUyxFQUFDLGtCQUFrQixHQUFHO1lBQ3BDLDZCQUFLLFNBQVMsRUFBQyxrQkFBa0IsR0FBRztZQUNwQyw2QkFBSyxTQUFTLEVBQUMsa0JBQWtCLEdBQUc7WUFDcEMsNkJBQUssU0FBUyxFQUFDLGtCQUFrQixHQUFHO1lBQ3BDLDZCQUFLLFNBQVMsRUFBQyxrQkFBa0IsR0FBRztZQUNwQyw2QkFBSyxTQUFTLEVBQUMsa0JBQWtCLEdBQUc7WUFDcEMsNkJBQUssU0FBUyxFQUFDLGtCQUFrQixHQUFHO1lBQ3BDLDZCQUFLLFNBQVMsRUFBQyxrQkFBa0IsR0FBRztZQUNwQyw2QkFBSyxTQUFTLEVBQUMsa0JBQWtCLEdBQUcsQ0FDaEMsQ0FDRSxDQUNYLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxtQkFBbUIsR0FBRyxrQkFBTSxDQUNoQyxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQzNCLDJCQUFlLENBQUMsT0FBTyxDQUFDLENBQ3pCLENBQUM7QUFFRixrQkFBZSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7QUMzQm5DLG9EQUF1QztBQUcxQixlQUFPLEdBQUcsMkJBQU0sQ0FBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQThEaEMsQ0FBQzs7Ozs7Ozs7Ozs7QUNqRUYscUNBQStCO0FBQy9CLG1EQUF3QztBQUN4QywwQ0FBK0M7QUFDL0MsZ0RBQXlEO0FBZXpELGtCQUFrQixLQUFZO0lBQzVCLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQy9CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWCxNQUFNLENBQUMsQ0FDTCxvQkFBQyxpQkFBUSxJQUFDLFNBQVMsRUFBQyxXQUFXO1lBQzdCLGlDQUFTLFNBQVMsRUFBQyxjQUFjO2dCQUMvQiw2QkFBSyxTQUFTLEVBQUMsT0FBTztvQkFDcEIsb0JBQUMsOEJBQWU7d0JBQ2QsNkJBQUssU0FBUyxFQUFDLFlBQVk7NEJBQ3pCLDZCQUFLLEdBQUcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQzlDLENBQ1UsQ0FDZDtnQkFDTiw2QkFBSyxTQUFTLEVBQUMsV0FBVztvQkFDeEIsZ0NBQUssSUFBSSxDQUFDLEtBQUssQ0FBTTtvQkFDckIsK0JBQUksSUFBSSxDQUFDLFdBQVcsQ0FBSyxDQUNyQixDQUNFLENBQ0QsQ0FDWixDQUFDO0lBQ0osQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLENBQ0wsb0JBQUMsa0JBQVMsSUFBQyxTQUFTLEVBQUMsZ0JBQWdCO1lBQ25DLG9CQUFDLHVCQUFJLElBQUMsRUFBRSxFQUFFLFNBQVMsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN0Qyw2QkFBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRztnQkFDakQsZ0NBQUssSUFBSSxDQUFDLEtBQUssQ0FBTTtnQkFDckIsK0JBQUksSUFBSSxDQUFDLFdBQVcsQ0FBSyxDQUNwQixDQUNHLENBQ2IsQ0FBQztJQUNKLENBQUM7QUFDSCxDQUFDO0FBRUQsa0JBQWUsUUFBUSxDQUFDOzs7Ozs7Ozs7OztBQ25EeEIsNENBQWtDO0FBRWxDLGtCQUFlLGtCQUFRLENBQUM7Ozs7Ozs7Ozs7O0FDRnhCLG9EQUF1QztBQUN2Qyx3Q0FBd0M7QUFDeEMsNENBQTBDO0FBRTdCLGdCQUFRLEdBQUcsMkJBQU0sQ0FBQyxHQUFHOzs7Ozs7TUFNNUIsYUFBSyxDQUFDLEVBQUU7O0tBRVQ7Ozs7UUFJRyxhQUFLLENBQUMsRUFBRTs7T0FFVDs7Ozs7Ozs7O01BU0QsYUFBSyxDQUFDLEVBQUU7O0tBRVQ7Ozs7UUFJRyxhQUFLLENBQUMsRUFBRTs7T0FFVDs7O0NBR04sQ0FBQztBQUVXLGlCQUFTLEdBQUcsMkJBQU0sQ0FBQyxrQkFBUSxDQUFDOzs7O0lBSXJDLGFBQUssQ0FBQyxFQUFFOztHQUVUOztJQUVDLGFBQUssQ0FBQyxFQUFFOztHQUVUOztJQUVDLGFBQUssQ0FBQyxFQUFFOztHQUVUO0NBQ0YsQ0FBQztBQUVGLGtCQUFlLGlCQUFTLENBQUM7Ozs7Ozs7Ozs7O0FDekR6QixxQ0FBK0I7QUFDL0IsZ0RBQXVDO0FBQ3ZDLDRDQUF1RDtBQUV2RCwyQ0FBd0Q7QUFDeEQsMENBQXFDO0FBQ3JDLDRDQUE4QztBQUM5Qyw2Q0FBZ0U7QUFNaEUsa0JBQWtCLEtBQVk7SUFDNUIsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQztJQUMzQixNQUFNLENBQUMsQ0FDTCxvQkFBQyxnQkFBYSxJQUFDLElBQUksUUFBQyxPQUFPLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxnQkFBZ0I7UUFDcEUsNkJBQUssU0FBUyxFQUFDLFFBQVE7WUFDckIsd0NBQWMsQ0FDVjtRQUNMLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUNoQixvQkFBQyxrQkFBUSxJQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsQ0FDdEMsQ0FDYSxDQUNqQixDQUFDO0FBQ0osQ0FBQztBQUVELGtCQUFlLG1CQUFPLENBQ3BCLHNCQUFPLENBQUMsV0FBVyxDQUFDLEVBQ3BCLGlCQUFtQixFQUNuQix1QkFBVyxDQUFDLE1BQU0sQ0FBQyxFQUNuQixnQkFBSSxDQUNMLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDaENaLDRDQUFrQztBQUVsQyxrQkFBZSxrQkFBUSxDQUFDOzs7Ozs7Ozs7OztBQ0Z4QixvREFBdUM7QUFDdkMsNkNBQTRDO0FBQzVDLHdDQUF3QztBQUV4QyxNQUFNLGFBQWEsR0FBRywyQkFBTSxDQUFDLG1CQUFTLENBQUM7OztJQUduQyxhQUFLLENBQUMsRUFBRTtHQUNUO0NBQ0YsQ0FBQztBQUVGLGtCQUFlLGFBQWEsQ0FBQzs7Ozs7Ozs7QUNYN0IsV0FBVyxrQ0FBa0MseURBQXlELGlDQUFpQyx5QkFBeUIsd0NBQXdDLDBCQUEwQiw0QkFBNEIsU0FBUywyQkFBMkIsNEJBQTRCLHFCQUFxQixrQ0FBa0MscUNBQXFDLG9DQUFvQyxpQ0FBaUMsZ0RBQWdELHFDQUFxQyxnQ0FBZ0MsaUNBQWlDLGlCQUFpQixHQUFHLEdBQUcsU0FBUztBQUNycEI7O0FBRUEscUIiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5cbmltcG9ydCBTaG93TGlzdCBmcm9tICd1aS9jb21wb25lbnRzL1Nob3dMaXN0JztcblxuZnVuY3Rpb24gU2hvd3MoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWxtZXQ+XG4gICAgICAgIDx0aXRsZT5TaG93czwvdGl0bGU+XG4gICAgICA8L0hlbG1ldD5cbiAgICAgIDxTaG93TGlzdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9wYWdlcy9TaG93cy9TaG93cy50c3giLCJpbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvTG9hZGluZy9pbmRleC50cyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgYXNwZWN0UmF0aW8sIG1lZGlhIH0gZnJvbSAndWkvc3R5bGVzL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IEFzcGVjdFJhdGlvMTZ4OSA9IHN0eWxlZC5kaXZgXG4gICR7IGFzcGVjdFJhdGlvKDE2LCA5KSB9XG5gO1xuXG5leHBvcnQgY29uc3QgQXNwZWN0UmF0aW81eDIgPSBzdHlsZWQuZGl2YFxuICAkeyBhc3BlY3RSYXRpbyg0LCAzKSB9XG4gICR7bWVkaWEubWRgXG4gICAgJHsgYXNwZWN0UmF0aW8oNSwgMikgfVxuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFzcGVjdFJhdGlvNHgzID0gc3R5bGVkLmRpdmBcbiAgJHsgYXNwZWN0UmF0aW8oNCwgMykgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFzcGVjdFJhdGlvMngzID0gc3R5bGVkLmRpdmBcbiAgJHsgYXNwZWN0UmF0aW8oMiwgMykgfVxuYDtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL3N0eWxlcy9Bc3BlY3RSYXRpb3MudHMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lZGlhIH0gZnJvbSAndWkvc3R5bGVzL3V0aWxzJztcblxuY29uc3QgR3JpZEl0ZW0gPSBzdHlsZWQuYXJ0aWNsZWBcbiAgZmxleDogMCAwIDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMuaXRlbU1hcmdpbn07XG5cbiAgJHttZWRpYS5tZGBcbiAgICBmbGV4OiAwIDAgY2FsYygxMDAlIC8gMiAtIDAuMjUpO1xuICBgfVxuXG4gICR7bWVkaWEubGdgXG4gICAgZmxleDogMCAwIGNhbGMoMTAwJSAvIDMgLSAwLjVyZW0pO1xuICBgfVxuXG4gICR7bWVkaWEueGxgXG4gICAgZmxleDogMCAwIGNhbGMoMTAwJSAvIDQgLSAwLjVyZW0pO1xuICBgfVxuXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAke21lZGlhLm1kYFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgYH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZEl0ZW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvc3R5bGVzL0dyaWRJdGVtLnRzIiwidmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJGcmFnbWVudERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2hvd0luZm9cIn0sXCJ0eXBlQ29uZGl0aW9uXCI6e1wia2luZFwiOlwiTmFtZWRUeXBlXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIlNob3dcIn19LFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ1aWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRpdGxlXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJkZXNjcmlwdGlvblwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicG9zdGVySW1hZ2VVcmxcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImZlYXR1cmVJbWFnZVVybFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRnJhZ21lbnRTcHJlYWRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2hvd0VwaXNvZGVzXCJ9LFwiZGlyZWN0aXZlc1wiOltdfV19fSx7XCJraW5kXCI6XCJGcmFnbWVudERlZmluaXRpb25cIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiU2hvd0VwaXNvZGVzXCJ9LFwidHlwZUNvbmRpdGlvblwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTaG93XCJ9fSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJlcGlzb2Rlc1wifSxcImFyZ3VtZW50c1wiOlt7XCJraW5kXCI6XCJBcmd1bWVudFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJmaWx0ZXJcIn0sXCJ2YWx1ZVwiOntcImtpbmRcIjpcIk9iamVjdFZhbHVlXCIsXCJmaWVsZHNcIjpbe1wia2luZFwiOlwiT2JqZWN0RmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRfbm90XCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifX19XX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJpZFwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwidWlkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjpudWxsfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwiYWxpYXNcIjpudWxsLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJ0aXRsZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6bnVsbH0se1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiZGVzY3JpcHRpb25cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRodW1iSW1hZ2VVcmxcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJhbGlhc1wiOm51bGwsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImltYWdlUHVibGljSWRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOm51bGx9XX19XX19XSxcImxvY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjI2OH19O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvYztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3VpL2dyYXBocWwvU2hvd0ZyYWdtZW50cy5ncmFwaHFsXG4vLyBtb2R1bGUgaWQgPSA1NTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYnJhbmNoLCByZW5kZXJDb21wb25lbnQgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4vc3R5bGVzJztcblxuZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8U3Bpbm5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZS1ncmlkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlMVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlMlwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlM1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlNFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlNVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlNlwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlN1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlOFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY3ViZSBzay1jdWJlOVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1NwaW5uZXI+XG4gICk7XG59XG5cbmNvbnN0IGRpc3BsYXlMb2FkaW5nU3RhdGUgPSBicmFuY2goXG4gIHByb3BzID0+IHByb3BzLmRhdGEubG9hZGluZyxcbiAgcmVuZGVyQ29tcG9uZW50KExvYWRpbmcpLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUxvYWRpbmdTdGF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy50c3giLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lZGlhIH0gZnJvbSAndWkvc3R5bGVzL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IFNwaW5uZXIgPSBzdHlsZWQuZGl2YFxuICAuc2stY3ViZS1ncmlkIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICB9XG5cbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZSB7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBoZWlnaHQ6IDMzJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTNENjNGO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jdWJlR3JpZFNjYWxlRGVsYXkgMS4zcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2stY3ViZUdyaWRTY2FsZURlbGF5IDEuM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTEge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzOyB9XG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4zczsgfVxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlMyB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7IH1cbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzOyB9XG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU1IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxuICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNiB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7IH1cbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTcge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMHM7IH1cbiAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTgge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzOyB9XG4gIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU5IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzay1jdWJlR3JpZFNjYWxlRGVsYXkge1xuICAgIDAlLCA3MCUsIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcbiAgICB9IDM1JSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpOyBcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNrLWN1YmVHcmlkU2NhbGVEZWxheSB7XG4gICAgMCUsIDcwJSwgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xuICAgIH0gMzUlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XG4gICAgfVxuICB9XG5gO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvTG9hZGluZy9zdHlsZXMudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBDYXJkSW5mbywgU2hvd0VudHJ5IH0gZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHsgQXNwZWN0UmF0aW8xNng5IH0gZnJvbSAndWkvc3R5bGVzL0FzcGVjdFJhdGlvcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNob3c6IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIHVpZDogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICBwb3N0ZXJJbWFnZVVybDogc3RyaW5nLFxuICAgIGZlYXR1cmVJbWFnZVVybDogc3RyaW5nLFxuXG4gIH07XG4gIGRldGFpbD86IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIFNob3dDYXJkKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IHNob3csIGRldGFpbCB9ID0gcHJvcHM7XG4gIGlmIChkZXRhaWwpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRJbmZvIGNsYXNzTmFtZT1cInNob3ctdmlld1wiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzaG93LW1hcnF1ZWVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICA8QXNwZWN0UmF0aW8xNng5PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2hvdy5mZWF0dXJlSW1hZ2VVcmx9IGFsdD17c2hvdy50aXRsZX0vPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQXNwZWN0UmF0aW8xNng5PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1pbmZvXCI+XG4gICAgICAgICAgICA8aDE+e3Nob3cudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxwPntzaG93LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9DYXJkSW5mbz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8U2hvd0VudHJ5IGNsYXNzTmFtZT1cIml0ZW0gc2hvdy1pdGVtXCI+XG4gICAgICAgIDxMaW5rIHRvPXtgL3Nob3cvJHtzaG93LmlkfS8ke3Nob3cudWlkfWB9PlxuICAgICAgICAgIDxpbWcgc3JjPXtzaG93LnBvc3RlckltYWdlVXJsfSBhbHQ9e3Nob3cudGl0bGV9Lz5cbiAgICAgICAgICA8aDE+e3Nob3cudGl0bGV9PC9oMT5cbiAgICAgICAgICA8cD57c2hvdy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvU2hvd0VudHJ5PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvd0NhcmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9TaG93Q2FyZC9TaG93Q2FyZC50c3giLCJpbXBvcnQgU2hvd0NhcmQgZnJvbSAnLi9TaG93Q2FyZCc7XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dDYXJkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvU2hvd0NhcmQvaW5kZXgudHMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IG1lZGlhIH0gZnJvbSAndWkvc3R5bGVzL3V0aWxzJztcbmltcG9ydCBHcmlkSXRlbSBmcm9tICd1aS9zdHlsZXMvR3JpZEl0ZW0nO1xuXG5leHBvcnQgY29uc3QgQ2FyZEluZm8gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcblxuICAuc2hvdy1tYXJxdWVlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgJHttZWRpYS5tZGBcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYH1cbiAgICAubWVkaWEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXg6IDAgMCAgMTAwJTtcbiAgICAgICR7bWVkaWEubWRgXG4gICAgICAgIGZsZXg6IDAgMCAgNjAlO1xuICAgICAgYH1cbiAgICB9XG4gIH1cbiAgLnNob3ctaW1hZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAuc2hvdy1pbmZvIHtcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAke21lZGlhLm1kYFxuICAgICAgcGFkZGluZzogMCAycmVtO1xuICAgIGB9XG5cbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICR7bWVkaWEubWRgXG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgICAgYH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTaG93RW50cnkgPSBzdHlsZWQoR3JpZEl0ZW0pYFxuICBmbGV4OiAwIDAgY2FsYygxMDAlIC8gMiAtIDRweCk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyAyIC0gNHB4KTtcblxuICAke21lZGlhLm1kYFxuICAgIGZsZXg6IDAgMCBjYWxjKDEwMCUgLyAyIC0gNHB4KTtcbiAgYH1cblxuICAke21lZGlhLmxnYFxuICAgIGZsZXg6IDAgMCBjYWxjKDEwMCUgLyAzIC0gOHB4KTtcbiAgYH1cblxuICAke21lZGlhLnhsYFxuICAgIGZsZXg6IDAgMCBjYWxjKDEwMCUgLyA0IC0gOHB4KTtcbiAgYH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dFbnRyeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL1Nob3dDYXJkL3N0eWxlcy50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgY29tcG9zZSwgZmxhdHRlblByb3AsIHB1cmUgfSBmcm9tICdyZWNvbXBvc2UnO1xuXG5pbXBvcnQgZGlzcGxheUxvYWRpbmdTdGF0ZSBmcm9tICd1aS9jb21wb25lbnRzL0xvYWRpbmcnO1xuaW1wb3J0IFNob3dDb250YWluZXIgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IFNob3dDYXJkIGZyb20gJ3VpL2NvbXBvbmVudHMvU2hvd0NhcmQnO1xuaW1wb3J0ICogYXMgU0hPV1NfUVVFUlkgZnJvbSAndWkvZ3JhcGhxbC9BbGxTaG93c1F1ZXJ5LmdyYXBocWwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhbGxTaG93cztcbn1cblxuZnVuY3Rpb24gU2hvd0xpc3QocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgYWxsU2hvd3MgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxTaG93Q29udGFpbmVyIHdyYXAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBjbGFzc05hbWU9XCJzaG93LWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGgyPlNob3dzPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAge2FsbFNob3dzLm1hcChzaG93ID0+XG4gICAgICAgIDxTaG93Q2FyZCBrZXk9e3Nob3cuaWR9IHNob3c9e3Nob3d9Lz4sXG4gICAgICApfVxuICAgIDwvU2hvd0NvbnRhaW5lcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgZ3JhcGhxbChTSE9XU19RVUVSWSksXG4gIGRpc3BsYXlMb2FkaW5nU3RhdGUsXG4gIGZsYXR0ZW5Qcm9wKCdkYXRhJyksXG4gIHB1cmUsXG4pKFNob3dMaXN0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vc291cmNlLW1hcC1sb2FkZXIhLi91aS9jb21wb25lbnRzL1Nob3dMaXN0L1Nob3dMaXN0LnRzeCIsImltcG9ydCBTaG93TGlzdCBmcm9tICcuL1Nob3dMaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgU2hvd0xpc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3NvdXJjZS1tYXAtbG9hZGVyIS4vdWkvY29tcG9uZW50cy9TaG93TGlzdC9pbmRleC50cyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICd1aS9zdHlsZXMvQ29udGFpbmVyJztcbmltcG9ydCB7IG1lZGlhIH0gZnJvbSAndWkvc3R5bGVzL3V0aWxzJztcblxuY29uc3QgU2hvd0NvbnRhaW5lciA9IHN0eWxlZChDb250YWluZXIpYFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gICR7bWVkaWEubWRgXG4gIGB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTaG93Q29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zb3VyY2UtbWFwLWxvYWRlciEuL3VpL2NvbXBvbmVudHMvU2hvd0xpc3Qvc3R5bGVzLnRzIiwidmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcIkFsbFNob3dzXCJ9LFwidmFyaWFibGVEZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiaWRcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJJRFwifX0sXCJkZWZhdWx0VmFsdWVcIjpudWxsfV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcImFsaWFzXCI6bnVsbCxcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYWxsU2hvd3NcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGcmFnbWVudFNwcmVhZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTaG93SW5mb1wifSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6OTV9fTtcbmRvYy5kZWZpbml0aW9ucyA9IGRvYy5kZWZpbml0aW9ucy5jb25jYXQocmVxdWlyZShcIi4vU2hvd0ZyYWdtZW50cy5ncmFwaHFsXCIpLmRlZmluaXRpb25zKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkb2M7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi91aS9ncmFwaHFsL0FsbFNob3dzUXVlcnkuZ3JhcGhxbFxuLy8gbW9kdWxlIGlkID0gNTY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIl0sInNvdXJjZVJvb3QiOiIifQ==