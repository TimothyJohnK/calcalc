webpackHotUpdate(5,{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45MjJkMWQzODA5OGVhMWUyZjJlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FsY3VsYXRvci5qcz8wNzQxYTcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBDQUxDRElWID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW46IDIwdmggYXV0byAwO1xuICBwYWRkaW5nOiAwIDFlbTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDJlbTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBtYXJnaW46IDEwdmggYXV0bztcbiAgICB3aWR0aDogODB2dztcbiAgfVxuYDtcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIHdpZHRoOiA2MHB4O1xuYDtcblxuY29uc3QgQ0FMQ19FTEVNRU5UUyA9IFtcbiAge1xuICAgIG5hbWU6ICdBY3Rpdml0eSdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdJbmNsaW5lJ1xuICB9LFxuICB7XG4gICAgbmFtZTogJ0R1cmF0aW9uJ1xuICB9XG5dO1xuLy8gdXNlIENTUyBncmlkIHRvIGltcGxlbWVudCBhIGxheW91dCBvZiBvYmplY3RzIGZyb20gQ0FMQ19FTEVNRU5UU1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPENBTENESVY+XG4gICAgICB7Q0FMQ19FTEVNRU5UUy5tYXAoKHsgbmFtZSB9KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtuYW1lfT5cbiAgICAgICAgICB7bmFtZX06XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT17bmFtZX0gdmFsdWU9XCJcIiAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPEJ1dHRvbj5FbnRlciA8L0J1dHRvbj5cbiAgICA8L0NBTENESVY+XG4gIDwvTGF5b3V0PlxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbGN1bGF0b3IuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7O0FBQ0E7QUFhQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=