'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = require('./transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SvgIcon = function (_Component) {
  _inherits(SvgIcon, _Component);

  function SvgIcon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SvgIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SvgIcon.__proto__ || Object.getPrototypeOf(SvgIcon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleMouseEnter = function (event) {
      _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SvgIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          color = _props.color,
          _offColor = _props.offColor,
          hoverColor = _props.hoverColor,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          style = _props.style,
          viewBox = _props.viewBox,
          other = _objectWithoutProperties(_props, ['children', 'color', 'offColor', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);

      var offColor = _offColor || 'currentColor';
      var onColor = hoverColor || offColor;
      var fill = this.state.hovered ? onColor : offColor;

      var mergedStyles = Object.assign({
        display: 'inline-block',
        color: color,
        fill: fill,
        height: 24,
        width: 24,
        userSelect: 'none',
        transition: _transitions2.default.easeOut()
      }, style);

      var newChildren = _react.Children.map(children, function (child) {
        if (child.props.style && !child.props.style.strokeWidth) {
          return child;
        }

        var newChild = (0, _react.cloneElement)(child, {
          style: _extends({}, child.props.style, {
            stroke: fill
          })

        });
        return newChild;
      });

      return _react2.default.createElement(
        'svg',
        _extends({}, other, {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          style: mergedStyles,
          viewBox: viewBox
        }),
        newChildren
      );
    }
  }]);

  return SvgIcon;
}(_react.Component);

SvgIcon.muiName = 'SvgIcon';
SvgIcon.propTypes = {
  offColor: _propTypes2.default.string,
  /**
   * Elements passed into the SVG Icon.
   */
  children: _propTypes2.default.node,

  color: _propTypes2.default.string,
  /**
   * This is the icon color when the mouse hovers over the icon.
   */
  hoverColor: _propTypes2.default.string,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Allows you to redefine what the coordinates
   * without units mean inside an svg element. For example,
   * if the SVG element is 500 (width) by 200 (height), and you
   * pass viewBox="0 0 50 20", this means that the coordinates inside
   * the svg will go from the top left corner (0,0) to bottom right (50,20)
   * and each unit will be worth 10px.
   */
  viewBox: _propTypes2.default.string
};
SvgIcon.defaultProps = {
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  viewBox: '0 0 24 24'
};
SvgIcon.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = SvgIcon;