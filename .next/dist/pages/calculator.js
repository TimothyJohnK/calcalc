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
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  flex: 1;\n  width: 60px;\n  height: 44px;\n  margin: 0 auto;\n  align-items: center;\n'], ['\n  display: flex;\n  flex: 1;\n  width: 60px;\n  height: 44px;\n  margin: 0 auto;\n  align-items: center;\n']);

var CalcForm = _styledComponents2.default.form(_templateObject);

var ButtonSpan = _styledComponents2.default.span(_templateObject2);

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

    var change = function change(e) {
      _this.setState((0, _defineProperty3.default)({}, e.target.name, e.target.value));
    };
    var onSubmit = function onSubmit(e) {
      e.preventDefault();
      console.log(_this.state);
    };
    return _this;
  }

  (0, _createClass3.default)(Calculator, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(CalcForm, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('input', {
        name: 'exercise',
        placeholder: 'Exercise',
        value: this.state.exercise,
        onChange: this.change,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement('input', {
        name: 'incline',
        placeholder: 'Incline',
        value: this.state.incline,
        onChange: function onChange() {
          return _this2.change;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement('input', {
        name: 'duration',
        placeholder: 'Duration',
        value: this.state.duration,
        onChange: this.change,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this2.onSubmit(e);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Submit'));
    }
  }]);

  return Calculator;
}(_react.Component);

exports.default = function () {
  return _react2.default.createElement(_layout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }, _react2.default.createElement(Calculator, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbGN1bGF0b3IuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJzdHlsZWQiLCJjc3MiLCJDYWxjRm9ybSIsImZvcm0iLCJCdXR0b25TcGFuIiwic3BhbiIsIkNhbGN1bGF0b3IiLCJwcm9wcyIsInN0YXRlIiwiZXhlcmNpc2UiLCJpbmNsaW5lIiwiZHVyYXRpb24iLCJjaGFuZ2UiLCJzZXRTdGF0ZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7Ozs7Ozs7OztBQUVqQixJQUFNLFdBQVcsMkJBQVgsQUFBa0IsS0FBeEI7O0FBZ0JBLElBQU0sYUFBYSwyQkFBYixBQUFvQixLQUExQjs7SUFTTSxBO3NDQUNKOztzQkFBQSxBQUFZLE9BQU87d0NBQUE7OzhJQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO2dCQUFRLEFBQ0QsQUFDVjtlQUZXLEFBRUYsQUFDVDtnQkFIRixBQUFhLEFBR0QsQUFHWjtBQU5hLEFBQ1g7O1FBS0ksU0FBUyxTQUFULEFBQVMsVUFBSyxBQUNsQjtZQUFBLEFBQUssMkNBQ0YsRUFBQSxBQUFFLE9BREwsQUFDWSxNQUFPLEVBQUEsQUFBRSxPQURyQixBQUM0QixBQUU3QjtBQUpELEFBS0E7UUFBTSxXQUFXLFNBQVgsQUFBVyxZQUFLLEFBQ3BCO1FBQUEsQUFBRSxBQUNGO2NBQUEsQUFBUSxJQUFJLE1BQVosQUFBaUIsQUFDbEI7QUFoQmdCLEFBYWpCO1dBSUQ7Ozs7OzZCQUVRO21CQUNQOzs2QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBO2NBQ0UsQUFDTyxBQUNMO3FCQUZGLEFBRWMsQUFDWjtlQUFPLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ2xCO2tCQUFVLEtBSlosQUFJaUI7O29CQUpqQjtzQkFERixBQUNFLEFBTUE7QUFOQTtBQUNFO2NBS0YsQUFDTyxBQUNMO3FCQUZGLEFBRWMsQUFDWjtlQUFPLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ2xCO2tCQUFVLG9CQUFBO2lCQUFNLE9BQU4sQUFBVztBQUp2Qjs7b0JBQUE7c0JBUEYsQUFPRSxBQU1BO0FBTkE7QUFDRTtjQUtGLEFBQ08sQUFDTDtxQkFGRixBQUVjLEFBQ1o7ZUFBTyxLQUFBLEFBQUssTUFIZCxBQUdvQixBQUNsQjtrQkFBVSxLQUpaLEFBSWlCOztvQkFKakI7c0JBYkYsQUFhRSxBQU9BO0FBUEE7QUFDRSwwQkFNRixjQUFBLFlBQVEsU0FBUyxvQkFBQTtpQkFBSyxPQUFBLEFBQUssU0FBVixBQUFLLEFBQWM7QUFBcEM7b0JBQUE7c0JBQUE7QUFBQTtTQXJCSixBQUNFLEFBb0JFLEFBR0w7Ozs7O0FBN0NzQixBLEFBZ0R6Qjs7a0JBQWUsWUFBQTt5QkFDYixBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGdDQUNFLEFBQUM7O2dCQUFEO2tCQUZXLEFBQ2IsQUFDRTtBQUFBO0FBQUE7QUFGSiIsImZpbGUiOiJjYWxjdWxhdG9yLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9UaW0vRG9jdW1lbnRzL0NvZGluZy9jYWxjYWxjIn0=