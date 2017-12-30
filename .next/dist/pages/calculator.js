'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Tim/Documents/Coding/calcalc/pages/calculator.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: column;\n  font-size: 1.2em;\n  margin: 20vh auto 0;\n  padding: 0 1em;\n  max-width: 600px;\n  border: 1px solid black;\n  padding: 2em;\n  @media screen and (max-width: 600px) {\n    margin: auto;\n    margin: 10vh auto;\n    max-width: 318px;\n  }\n'], ['\n  display: flex;\n  flex-direction: column;\n  font-size: 1.2em;\n  margin: 20vh auto 0;\n  padding: 0 1em;\n  max-width: 600px;\n  border: 1px solid black;\n  padding: 2em;\n  @media screen and (max-width: 600px) {\n    margin: auto;\n    margin: 10vh auto;\n    max-width: 318px;\n  }\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex-direction: row;\n  margin: 0 auto;\n'], ['\n  display: flex;\n  flex-direction: row;\n  margin: 0 auto;\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  flex: 1;\n  width: 80px;\n  height: 44px;\n  margin: 0 auto;\n  align-items: center;\n'], ['\n  flex: 1;\n  width: 80px;\n  height: 44px;\n  margin: 0 auto;\n  align-items: center;\n']);

var CalcForm = _styledComponents2.default.form(_templateObject);
var ButtonDiv = _styledComponents2.default.div(_templateObject2);
var ButtonSpan = _styledComponents2.default.span(_templateObject3);

var Calculator = function (_Component) {
  (0, _inherits3.default)(Calculator, _Component);

  function Calculator(props) {
    (0, _classCallCheck3.default)(this, Calculator);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Calculator.__proto__ || (0, _getPrototypeOf2.default)(Calculator)).call(this, props));

    _this.state = {
      exercise: '',
      incline: '',
      duration: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Calculator, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState((0, _defineProperty3.default)({}, e.target.name, e.target.value));
    }
  }, {
    key: 'handleClear',
    value: function handleClear(e) {
      e.preventDefault();
      this.setState({
        exercise: '',
        incline: '',
        duration: ''
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      console.log(this.state);
      this.setState({
        exercise: '',
        incline: '',
        duration: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(CalcForm, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Exercise'), _react2.default.createElement('input', {
        name: 'exercise',
        placeholder: 'Exercise',
        value: this.state.exercise,
        onChange: this.handleChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Incline'), _react2.default.createElement('input', {
        name: 'incline',
        placeholder: 'Incline',
        value: this.state.incline,
        onChange: this.handleChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, 'Duration '), _react2.default.createElement('input', {
        name: 'duration',
        placeholder: 'Duration',
        value: this.state.duration,
        onChange: this.handleChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), _react2.default.createElement(ButtonDiv, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(ButtonSpan, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement('button', { onClick: this.handleClear.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Clear')), _react2.default.createElement(ButtonSpan, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement('button', { onClick: this.handleSubmit.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, 'Submit'))));
    }
  }]);

  return Calculator;
}(_react.Component);

exports.default = function () {
  return _react2.default.createElement(_layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  }, _react2.default.createElement(Calculator, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbGN1bGF0b3IuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJzdHlsZWQiLCJjc3MiLCJDYWxjRm9ybSIsImZvcm0iLCJCdXR0b25EaXYiLCJkaXYiLCJCdXR0b25TcGFuIiwic3BhbiIsIkNhbGN1bGF0b3IiLCJwcm9wcyIsInN0YXRlIiwiZXhlcmNpc2UiLCJpbmNsaW5lIiwiZHVyYXRpb24iLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlQ2xlYXIiLCJoYW5kbGVTdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7Ozs7Ozs7Ozs7O0FBRWpCLElBQU0sV0FBVywyQkFBWCxBQUFrQixLQUF4QjtBQWVBLElBQU0sWUFBWSwyQkFBWixBQUFtQixJQUF6QjtBQUtBLElBQU0sYUFBYSwyQkFBYixBQUFvQixLQUExQjs7SSxBQVFNO3NDQUNKOztzQkFBQSxBQUFZLE9BQU87d0NBQUE7OzhJQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO2dCQUFRLEFBQ0QsQUFDVjtlQUZXLEFBRUYsQUFDVDtnQkFMZSxBQUVqQixBQUFhLEFBR0Q7QUFIQyxBQUNYO1dBSUg7Ozs7O2lDLEFBRVksR0FBRyxBQUNkO1dBQUEsQUFBSywyQ0FDRixFQUFBLEFBQUUsT0FETCxBQUNZLE1BQU8sRUFBQSxBQUFFLE9BRHJCLEFBQzRCLEFBRTdCOzs7O2dDQUVXLEEsR0FBRyxBQUNiO1FBQUEsQUFBRSxBQUNGO1dBQUEsQUFBSztrQkFBUyxBQUNGLEFBQ1Y7aUJBRlksQUFFSCxBQUNUO2tCQUhGLEFBQWMsQUFHRixBQUViO0FBTGUsQUFDWjs7OztpQyxBQU1TLEdBQUcsQUFDZDtRQUFBLEFBQUUsQUFDRjtjQUFBLEFBQVEsSUFBSSxLQUFaLEFBQWlCLEFBQ2pCO1dBQUEsQUFBSztrQkFBUyxBQUNGLEFBQ1Y7aUJBRlksQUFFSCxBQUNUO2tCQUhGLEFBQWMsQUFHRixBQUViO0FBTGUsQUFDWjs7Ozs2QkFNSyxBQUNQOzZCQUNHLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBO2NBQUEsQUFDTyxBQUNMO3FCQUZGLEFBRWMsQUFDWjtlQUFPLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ2xCO2tCQUFVLEtBQUEsQUFBSyxhQUFMLEFBQWtCLEtBSjlCLEFBSVksQUFBdUI7O29CQUpuQztzQkFGRixBQUVFLEFBTUE7QUFOQTtBQUNFLDBCQUtGLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVJGLEFBUUUsQUFDQTtjQUFBLEFBQ08sQUFDTDtxQkFGRixBQUVjLEFBQ1o7ZUFBTyxLQUFBLEFBQUssTUFIZCxBQUdvQixBQUNsQjtrQkFBVSxLQUFBLEFBQUssYUFBTCxBQUFrQixLQUo5QixBQUlZLEFBQXVCOztvQkFKbkM7c0JBVEYsQUFTRSxBQU1BO0FBTkE7QUFDRSwwQkFLRixjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FmRixBQWVFLEFBQ0E7Y0FBQSxBQUNPLEFBQ0w7cUJBRkYsQUFFYyxBQUNaO2VBQU8sS0FBQSxBQUFLLE1BSGQsQUFHb0IsQUFDbEI7a0JBQVUsS0FBQSxBQUFLLGFBQUwsQUFBa0IsS0FKOUIsQUFJWSxBQUF1Qjs7b0JBSm5DO3NCQWhCRixBQWdCRSxBQU1BO0FBTkE7QUFDRSwwQkFLRCxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBLFlBQVEsU0FBUyxLQUFBLEFBQUssWUFBTCxBQUFpQixLQUFsQyxBQUFpQixBQUFzQjtvQkFBdkM7c0JBQUE7QUFBQTtTQUZKLEFBQ0UsQUFDRSxBQUVGLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsWUFBUSxTQUFTLEtBQUEsQUFBSyxhQUFMLEFBQWtCLEtBQW5DLEFBQWlCLEFBQXVCO29CQUF4QztzQkFBQTtBQUFBO1NBNUJSLEFBQ0UsQUFzQkUsQUFJRSxBQUNFLEFBS1Q7Ozs7O0FBckVzQixBLEFBd0V6Qjs7a0JBQWUsWUFBQTt5QkFDYixBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGdDQUNFLEFBQUM7O2dCQUFEO2tCQUZXLEFBQ2IsQUFDRTtBQUFBO0FBQUE7QUFGSiIsImZpbGUiOiJjYWxjdWxhdG9yLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9UaW0vRG9jdW1lbnRzL0NvZGluZy9jYWxjYWxjIn0=