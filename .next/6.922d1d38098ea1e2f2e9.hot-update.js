webpackHotUpdate(6,{

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(373);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(411);

var _layout2 = _interopRequireDefault(_layout);

var _styledComponents = __webpack_require__(394);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Tim/Documents/Coding/calcalc/pages/calculator.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n  font-size: 1.2em;\n  margin: 20vh auto 0;\n  padding: 0 1em;\n  max-width: 600px;\n  border: 1px solid black;\n  padding: 2em;\n  @media screen and (max-width: 600px) {\n    margin: 10vh auto;\n    width: 80vw;\n  }\n'], ['\n  text-align: center;\n  font-size: 1.2em;\n  margin: 20vh auto 0;\n  padding: 0 1em;\n  max-width: 600px;\n  border: 1px solid black;\n  padding: 2em;\n  @media screen and (max-width: 600px) {\n    margin: 10vh auto;\n    width: 80vw;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 60px;\n'], ['\n  width: 60px;\n']);

var CALCDIV = _styledComponents2.default.div(_templateObject);
var Button = _styledComponents2.default.button(_templateObject2);

var CALC_ELEMENTS = [{
  name: 'Activity'
}, {
  name: 'Incline'
}, {
  name: 'Duration'
}];
// use CSS grid to implement a layout of objects from CALC_ELEMENTS

exports.default = function () {
  return _react2.default.createElement(_layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement(CALCDIV, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, CALC_ELEMENTS.map(function (_ref) {
    var name = _ref.name;
    return _react2.default.createElement('div', { key: name, __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }, name, ':', _react2.default.createElement('input', { type: 'text', name: name, value: '', __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }), _react2.default.createElement('br', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }));
  }), _react2.default.createElement(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, 'Enter ')));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbGN1bGF0b3IuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJzdHlsZWQiLCJjc3MiLCJDQUxDRElWIiwiZGl2IiwiQnV0dG9uIiwiYnV0dG9uIiwiQ0FMQ19FTEVNRU5UUyIsIm5hbWUiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7Ozs7Ozs7Ozs7QUFFakIsSUFBTSxVQUFVLDJCQUFWLEFBQWlCLElBQXZCO0FBYUEsSUFBTSxTQUFTLDJCQUFULEFBQWdCLE9BQXRCOztBQUlBLElBQU07UUFBZ0IsQUFDcEIsQUFDUTtBQURSLEFBQ0UsQ0FGa0I7UUFBQSxBQUlwQixBQUNRO0FBRFIsQUFDRTtRQUxKLEFBQXNCLEFBT3BCLEFBQ1E7QUFEUixBQUNFO0FBR0osQUFFQTs7a0JBQWUsWUFBQTt5QkFDYixBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNHLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLG1CQUNHLEFBQWMsSUFBSSxnQkFBQTtRQUFBLEFBQUcsWUFBSCxBQUFHOzJCQUNwQixjQUFBLFNBQUssS0FBTCxBQUFVO2tCQUFWO29CQUFBLEFBQ0c7QUFESDtLQUFBLEVBQUEsTUFFRSw4Q0FBTyxNQUFQLEFBQVksUUFBTyxNQUFuQixBQUF5QixNQUFNLE9BQS9CLEFBQXFDO2tCQUFyQztvQkFGRixBQUVFLEFBQ0E7QUFEQTs7O2tCQUNBO29CQUplLEFBQ2pCLEFBR0U7QUFBQTtBQUFBO0FBTE4sQUFDRyxBQU9ELHNCQUFDLGNBQUQ7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQVZTLEFBQ2IsQUFDRSxBQVFFO0FBVk4iLCJmaWxlIjoiY2FsY3VsYXRvci5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVGltL0RvY3VtZW50cy9Db2RpbmcvY2FsY2FsYyJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/Tim/Documents/Coding/calcalc/pages/calculator.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Tim/Documents/Coding/calcalc/pages/calculator.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/calculator")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(373);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(411);

var _layout2 = _interopRequireDefault(_layout);

var _styledComponents = __webpack_require__(394);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Tim/Documents/Coding/calcalc/pages/calculator.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  text-align: center;\n  font-size: 1.2em;\n  margin: 20vh auto 0;\n  padding: 0 1em;\n  max-width: 600px;\n  border: 1px solid black;\n  padding: 2em;\n  @media screen and (max-width: 600px) {\n    margin: 10vh auto;\n    width: 80vw;\n  }\n'], ['\n  text-align: center;\n  font-size: 1.2em;\n  margin: 20vh auto 0;\n  padding: 0 1em;\n  max-width: 600px;\n  border: 1px solid black;\n  padding: 2em;\n  @media screen and (max-width: 600px) {\n    margin: 10vh auto;\n    width: 80vw;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  width: 60px;\n'], ['\n  width: 60px;\n']);

var CALCDIV = _styledComponents2.default.div(_templateObject);
var Button = _styledComponents2.default.button(_templateObject2);

var CALC_ELEMENTS = [{
  name: 'Activity'
}, {
  name: 'Incline'
}, {
  name: 'Duration'
}];
// use CSS grid to implement a layout of objects from CALC_ELEMENTS

exports.default = function () {
  return _react2.default.createElement(_layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement(CALCDIV, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, CALC_ELEMENTS.map(function (_ref) {
    var name = _ref.name;
    return _react2.default.createElement('div', { key: name, __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    }, name, ':', _react2.default.createElement('input', { type: 'text', name: name, value: '', __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      }
    }), _react2.default.createElement('br', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      }
    }));
  }), _react2.default.createElement(Button, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, 'Enter ')));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbGN1bGF0b3IuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJzdHlsZWQiLCJjc3MiLCJDQUxDRElWIiwiZGl2IiwiQnV0dG9uIiwiYnV0dG9uIiwiQ0FMQ19FTEVNRU5UUyIsIm5hbWUiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7Ozs7Ozs7Ozs7QUFFakIsSUFBTSxVQUFVLDJCQUFWLEFBQWlCLElBQXZCO0FBYUEsSUFBTSxTQUFTLDJCQUFULEFBQWdCLE9BQXRCOztBQUlBLElBQU07UUFBZ0IsQUFDcEIsQUFDUTtBQURSLEFBQ0UsQ0FGa0I7UUFBQSxBQUlwQixBQUNRO0FBRFIsQUFDRTtRQUxKLEFBQXNCLEFBT3BCLEFBQ1E7QUFEUixBQUNFO0FBR0osQUFFQTs7a0JBQWUsWUFBQTt5QkFDYixBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNHLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0c7QUFESDtBQUFBLG1CQUNHLEFBQWMsSUFBSSxnQkFBQTtRQUFBLEFBQUcsWUFBSCxBQUFHOzJCQUNwQixjQUFBLFNBQUssS0FBTCxBQUFVO2tCQUFWO29CQUFBLEFBQ0c7QUFESDtLQUFBLEVBQUEsTUFFRSw4Q0FBTyxNQUFQLEFBQVksUUFBTyxNQUFuQixBQUF5QixNQUFNLE9BQS9CLEFBQXFDO2tCQUFyQztvQkFGRixBQUVFLEFBQ0E7QUFEQTs7O2tCQUNBO29CQUplLEFBQ2pCLEFBR0U7QUFBQTtBQUFBO0FBTE4sQUFDRyxBQU9ELHNCQUFDLGNBQUQ7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQVZTLEFBQ2IsQUFDRSxBQVFFO0FBVk4iLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvVGltL0RvY3VtZW50cy9Db2RpbmcvY2FsY2FsYyJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/Tim/Documents/Coding/calcalc/pages/calculator.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Tim/Documents/Coding/calcalc/pages/calculator.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/calculator")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi45MjJkMWQzODA5OGVhMWUyZjJlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FsY3VsYXRvci5qcz9jYTgyMThlIiwid2VicGFjazovLy8uL3BhZ2VzL2NhbGN1bGF0b3IuanM/MDc0MWE3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ0FMQ0RJViA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luOiAyMHZoIGF1dG8gMDtcbiAgcGFkZGluZzogMCAxZW07XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAyZW07XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgbWFyZ2luOiAxMHZoIGF1dG87XG4gICAgd2lkdGg6IDgwdnc7XG4gIH1cbmA7XG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICB3aWR0aDogNjBweDtcbmA7XG5cbmNvbnN0IENBTENfRUxFTUVOVFMgPSBbXG4gIHtcbiAgICBuYW1lOiAnQWN0aXZpdHknXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnSW5jbGluZSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdEdXJhdGlvbidcbiAgfVxuXTtcbi8vIHVzZSBDU1MgZ3JpZCB0byBpbXBsZW1lbnQgYSBsYXlvdXQgb2Ygb2JqZWN0cyBmcm9tIENBTENfRUxFTUVOVFNcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxDQUxDRElWPlxuICAgICAge0NBTENfRUxFTUVOVFMubWFwKCh7IG5hbWUgfSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17bmFtZX0+XG4gICAgICAgICAge25hbWV9OlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e25hbWV9IHZhbHVlPVwiXCIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxCdXR0b24+RW50ZXIgPC9CdXR0b24+XG4gICAgPC9DQUxDRElWPlxuICA8L0xheW91dD5cbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jYWxjdWxhdG9yLmpzP2VudHJ5IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IENBTENESVYgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbjogMjB2aCBhdXRvIDA7XG4gIHBhZGRpbmc6IDAgMWVtO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMmVtO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIG1hcmdpbjogMTB2aCBhdXRvO1xuICAgIHdpZHRoOiA4MHZ3O1xuICB9XG5gO1xuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgd2lkdGg6IDYwcHg7XG5gO1xuXG5jb25zdCBDQUxDX0VMRU1FTlRTID0gW1xuICB7XG4gICAgbmFtZTogJ0FjdGl2aXR5J1xuICB9LFxuICB7XG4gICAgbmFtZTogJ0luY2xpbmUnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRHVyYXRpb24nXG4gIH1cbl07XG4vLyB1c2UgQ1NTIGdyaWQgdG8gaW1wbGVtZW50IGEgbGF5b3V0IG9mIG9iamVjdHMgZnJvbSBDQUxDX0VMRU1FTlRTXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8Q0FMQ0RJVj5cbiAgICAgIHtDQUxDX0VMRU1FTlRTLm1hcCgoeyBuYW1lIH0pID0+IChcbiAgICAgICAgPGRpdiBrZXk9e25hbWV9PlxuICAgICAgICAgIHtuYW1lfTpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXtuYW1lfSB2YWx1ZT1cIlwiIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8QnV0dG9uPkVudGVyIDwvQnV0dG9uPlxuICAgIDwvQ0FMQ0RJVj5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FsY3VsYXRvci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFDQTtBQWFBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7O0FBQ0E7QUFhQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=