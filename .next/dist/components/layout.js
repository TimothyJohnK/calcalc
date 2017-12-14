'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _anchor = require('./anchor');

var _anchor2 = _interopRequireDefault(_anchor);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

var _calculator = require('../pages/calculator');

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