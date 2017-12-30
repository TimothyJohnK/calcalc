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
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  flex: 1;\n  width: 80px;\n  height: 44px;\n  margin: 0 auto;\n  align-items: center;\n'], ['\n  flex: 1;\n  width: 80px;\n  height: 44px;\n  margin: 0 auto;\n  align-items: center;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  max-width: calc(100%);\n  text-align: center;\n'], ['\n  max-width: calc(100%);\n  text-align: center;\n']);

var CalcForm = _styledComponents2.default.form(_templateObject);
var ButtonDiv = _styledComponents2.default.div(_templateObject2);
var ButtonSpan = _styledComponents2.default.span(_templateObject3);

var Result = _styledComponents2.default.div(_templateObject4);

var Calculator = function (_Component) {
  (0, _inherits3.default)(Calculator, _Component);

  function Calculator(props) {
    (0, _classCallCheck3.default)(this, Calculator);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Calculator.__proto__ || (0, _getPrototypeOf2.default)(Calculator)).call(this, props));

    _this.state = {
      exercise: '',
      incline: '',
      duration: '',
      calories: null
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
        duration: '',
        calories: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var calories = 10 * this.state.duration * (this.state.incline / 2);
      return _react2.default.createElement(CalcForm, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(Result, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, calories, ' calories burned'), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'Exercise'), _react2.default.createElement('input', {
        name: 'exercise',
        placeholder: 'Walking',
        value: this.state.exercise,
        onChange: this.handleChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'Incline'), _react2.default.createElement('input', {
        name: 'incline',
        placeholder: '2%',
        value: this.state.incline,
        onChange: this.handleChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, 'Duration (in mins)'), _react2.default.createElement('input', {
        name: 'duration',
        placeholder: '30',
        value: this.state.duration,
        onChange: this.handleChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), _react2.default.createElement(ButtonDiv, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(ButtonSpan, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement('button', { onClick: this.handleClear.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, 'Clear')), _react2.default.createElement(ButtonSpan, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement('button', { onClick: this.handleSubmit.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 106
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
      lineNumber: 115
    }
  }, _react2.default.createElement(Calculator, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbGN1bGF0b3IuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJzdHlsZWQiLCJjc3MiLCJDYWxjRm9ybSIsImZvcm0iLCJCdXR0b25EaXYiLCJkaXYiLCJCdXR0b25TcGFuIiwic3BhbiIsIlJlc3VsdCIsIkNhbGN1bGF0b3IiLCJwcm9wcyIsInN0YXRlIiwiZXhlcmNpc2UiLCJpbmNsaW5lIiwiZHVyYXRpb24iLCJjYWxvcmllcyIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVDbGVhciIsImhhbmRsZVN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7Ozs7Ozs7Ozs7O0FBRWpCLElBQU0sV0FBVywyQkFBWCxBQUFrQixLQUF4QjtBQWVBLElBQU0sWUFBWSwyQkFBWixBQUFtQixJQUF6QjtBQUtBLElBQU0sYUFBYSwyQkFBYixBQUFvQixLQUExQjs7QUFRQSxJQUFNLFNBQVMsMkJBQVQsQUFBZ0IsSUFBdEI7O0lBS00sQTtzQ0FDSjs7c0JBQUEsQUFBWSxPQUFPO3dDQUFBOzs4SUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSztnQkFBUSxBQUNELEFBQ1Y7ZUFGVyxBQUVGLEFBQ1Q7Z0JBSFcsQUFHRCxBQUNWO2dCQU5lLEFBRWpCLEFBQWEsQUFJRDtBQUpDLEFBQ1g7V0FLSDs7Ozs7aUMsQUFFWSxHQUFHLEFBQ2Q7V0FBQSxBQUFLLDJDQUNGLEVBQUEsQUFBRSxPQURMLEFBQ1ksTUFBTyxFQUFBLEFBQUUsT0FEckIsQUFDNEIsQUFFN0I7Ozs7Z0MsQUFFVyxHQUFHLEFBQ2I7UUFBQSxBQUFFLEFBQ0Y7V0FBQSxBQUFLO2tCQUFTLEFBQ0YsQUFDVjtpQkFGWSxBQUVILEFBQ1Q7a0JBSEYsQUFBYyxBQUdGLEFBRWI7QUFMZSxBQUNaOzs7O2lDLEFBS1MsR0FBRyxBQUNkO1FBQUEsQUFBRSxBQUNGO2NBQUEsQUFBUSxJQUFJLEtBQVosQUFBaUIsQUFFakI7O1dBQUEsQUFBSztrQkFBUyxBQUNGLEFBQ1Y7aUJBRlksQUFFSCxBQUNUO2tCQUhZLEFBR0YsQUFDVjtrQkFKRixBQUFjLEFBSUYsQUFFYjtBQU5lLEFBQ1o7Ozs7NkJBT0ssQUFDUDtVQUFNLFdBQVcsS0FBSyxLQUFBLEFBQUssTUFBVixBQUFnQixZQUFZLEtBQUEsQUFBSyxNQUFMLEFBQVcsVUFBeEQsQUFBaUIsQUFBaUQsQUFDbEU7NkJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUFTO0FBQVQ7QUFBQSxTQUFBLFVBREYsQUFDRSxBQUNBLHFDQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDQTtjQUFBLEFBQ08sQUFDTDtxQkFGRixBQUVjLEFBQ1o7ZUFBTyxLQUFBLEFBQUssTUFIZCxBQUdvQixBQUNsQjtrQkFBVSxLQUFBLEFBQUssYUFBTCxBQUFrQixLQUo5QixBQUlZLEFBQXVCOztvQkFKbkM7c0JBSEYsQUFHRSxBQU1BO0FBTkE7QUFDRSwwQkFLRixjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FURixBQVNFLEFBQ0E7Y0FBQSxBQUNPLEFBQ0w7cUJBRkYsQUFFYyxBQUNaO2VBQU8sS0FBQSxBQUFLLE1BSGQsQUFHb0IsQUFDbEI7a0JBQVUsS0FBQSxBQUFLLGFBQUwsQUFBa0IsS0FKOUIsQUFJWSxBQUF1Qjs7b0JBSm5DO3NCQVZGLEFBVUUsQUFNQTtBQU5BO0FBQ0UsMEJBS0YsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBaEJGLEFBZ0JFLEFBQ0E7Y0FBQSxBQUNPLEFBQ0w7cUJBRkYsQUFFYyxBQUNaO2VBQU8sS0FBQSxBQUFLLE1BSGQsQUFHb0IsQUFDbEI7a0JBQVUsS0FBQSxBQUFLLGFBQUwsQUFBa0IsS0FKOUIsQUFJWSxBQUF1Qjs7b0JBSm5DO3NCQWpCRixBQWlCRSxBQU1BO0FBTkE7QUFDRSwwQkFLRCxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBLFlBQVEsU0FBUyxLQUFBLEFBQUssWUFBTCxBQUFpQixLQUFsQyxBQUFpQixBQUFzQjtvQkFBdkM7c0JBQUE7QUFBQTtTQUZKLEFBQ0UsQUFDRSxBQUVGLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsWUFBUSxTQUFTLEtBQUEsQUFBSyxhQUFMLEFBQWtCLEtBQW5DLEFBQWlCLEFBQXVCO29CQUF4QztzQkFBQTtBQUFBO1NBN0JSLEFBQ0UsQUF1QkUsQUFJRSxBQUNFLEFBS1Q7Ozs7O0FBekVzQixBQTRFekIsQTs7a0JBQWUsWUFBQTt5QkFDYixBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGdDQUNFLEFBQUM7O2dCQUFEO2tCQUZXLEFBQ2IsQUFDRTtBQUFBO0FBQUE7QUFGSiIsImZpbGUiOiJjYWxjdWxhdG9yLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9UaW0vRG9jdW1lbnRzL0NvZGluZy9jYWxjYWxjIn0=