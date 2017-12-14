'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _styledComponents = require('styled-components');

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