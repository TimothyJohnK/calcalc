webpackHotUpdate(5,{

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(373);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(412);

var _link2 = _interopRequireDefault(_link);

var _styledComponents = __webpack_require__(394);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _anchor = __webpack_require__(424);

var _anchor2 = _interopRequireDefault(_anchor);

var _footer = __webpack_require__(427);

var _footer2 = _interopRequireDefault(_footer);

var _calculator = __webpack_require__(428);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Tim/Documents/Coding/calcalc/components/layout.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  height: 100%;\n  color: black;\n'], ['\n  height: 100%;\n  color: black;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: lightblue;\n  padding: 1em 0em;\n  display: flex;\n  font-size: 1.5;\n  justify-content: space-around;\n  align-items: center;\n  @media screen and (max-width: 600px) {\n    font-size: 0.8em;\n    flex-direction: column;\n    text-align: center;\n  }\n'], ['\n  background-color: lightblue;\n  padding: 1em 0em;\n  display: flex;\n  font-size: 1.5;\n  justify-content: space-around;\n  align-items: center;\n  @media screen and (max-width: 600px) {\n    font-size: 0.8em;\n    flex-direction: column;\n    text-align: center;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 2.9em;\n'], ['\n  font-size: 2.9em;\n']);

var Wrapper = _styledComponents2.default.div(_templateObject);

var Header = _styledComponents2.default.header(_templateObject2);

var TitleComponent = _styledComponents2.default.div(_templateObject3);

var LINKS = [{
  name: 'Home',
  href: '/'
}, {
  name: 'Calculator',
  href: '/calculator'
}];

exports.default = function (_ref) {
  var children = _ref.children,
      page = _ref.page;

  return _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement(TitleComponent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, 'Calorie Calculator'), LINKS.map(function (_ref2) {
    var href = _ref2.href,
        name = _ref2.name;
    return _react2.default.createElement(_link2.default, { href: href, key: name, passHref: true, prefetch: true, __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      }
    }, _react2.default.createElement(_anchor2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    }, name));
  })), _react2.default.createElement('main', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, children), _react2.default.createElement(_footer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGluayIsInN0eWxlZCIsIkFuY2hvciIsIkZvb3RlciIsIkNhbGMiLCJXcmFwcGVyIiwiZGl2IiwiSGVhZGVyIiwiaGVhZGVyIiwiVGl0bGVDb21wb25lbnQiLCJMSU5LUyIsIm5hbWUiLCJocmVmIiwiY2hpbGRyZW4iLCJwYWdlIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7Ozs7Ozs7Ozs7QUFFckIsSUFBTSxVQUFVLDJCQUFWLEFBQWlCLElBQXZCOztBQUtBLElBQU0sU0FBUywyQkFBVCxBQUFnQixPQUF0Qjs7QUFjQSxJQUFNLGlCQUFpQiwyQkFBakIsQUFBd0IsSUFBOUI7O0FBSUEsSUFBTTtRQUNKLEFBQ1EsQUFDTjtRQUhVLEFBQ1osQUFFUTtBQUZSLEFBQ0UsQ0FGVTtRQUtaLEFBQ1EsQUFDTjtRQVBKLEFBQWMsQUFLWixBQUVRLEFBSVY7QUFORSxBQUNFOztrQkFLVyxnQkFBd0I7TUFBckIsQUFBcUIsZ0JBQXJCLEFBQXFCO01BQVgsQUFBVyxZQUFYLEFBQVcsQUFDckM7O3lCQUNHLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0csY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0csY0FBRDs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNDLDZCQUFBLEFBQU0sSUFBSSxpQkFBQTtRQUFBLEFBQUcsYUFBSCxBQUFHO1FBQUgsQUFBUyxhQUFULEFBQVM7MkJBQ2xCLEFBQUMsZ0NBQUssTUFBTixBQUFZLE1BQU0sS0FBbEIsQUFBdUIsTUFBTSxVQUE3QixNQUFzQyxVQUF0QztrQkFBQTtvQkFBQSxBQUNFO0FBREY7S0FBQSxrQkFDRSxBQUFDOztrQkFBRDtvQkFBQSxBQUFTO0FBQVQ7QUFBQSxPQUZPLEFBQ1QsQUFDRTtBQUxSLEFBQ0UsQUFFRyxBQU1ILHVCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQU87QUFBUDtBQUFBLEtBVEYsQUFTRSxBQUNBLDJCQUFBLEFBQUM7O2dCQUFEO2tCQVhKLEFBQ0UsQUFVRSxBQUdMO0FBSEs7QUFBQTtBQVpOIiwiZmlsZSI6ImxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVGltL0RvY3VtZW50cy9Db2RpbmcvY2FsY2FsYyJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/Tim/Documents/Coding/calcalc/components/layout.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Tim/Documents/Coding/calcalc/components/layout.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45ZjI5NjFhN2EwOTIwMjlhYmZjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQuanM/ZTZiMWMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEFuY2hvciBmcm9tICcuL2FuY2hvcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcbmltcG9ydCB7IENhbGMgfSBmcm9tICcuLi9wYWdlcy9jYWxjdWxhdG9yJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IGJsYWNrO1xuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICBwYWRkaW5nOiAxZW0gMGVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEuNTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgVGl0bGVDb21wb25lbnQgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDIuOWVtO1xuYDtcblxuY29uc3QgTElOS1MgPSBbXG4gIHtcbiAgICBuYW1lOiAnSG9tZScsXG4gICAgaHJlZjogJy8nXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnQ2FsY3VsYXRvcicsXG4gICAgaHJlZjogJy9jYWxjdWxhdG9yJ1xuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgcGFnZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8VGl0bGVDb21wb25lbnQ+Q2Fsb3JpZSBDYWxjdWxhdG9yPC9UaXRsZUNvbXBvbmVudD5cbiAgICAgICAge0xJTktTLm1hcCgoeyBocmVmLCBuYW1lIH0pID0+IChcbiAgICAgICAgICA8TGluayBocmVmPXtocmVmfSBrZXk9e25hbWV9IHBhc3NIcmVmIHByZWZldGNoPlxuICAgICAgICAgICAgPEFuY2hvcj57bmFtZX08L0FuY2hvcj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xheW91dC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBYUE7QUFDQTtBQUdBO0FBR0E7QUFBQTtBQURBO0FBS0E7QUFJQTtBQUxBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTtBQVpBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=