'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = require('../../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  circle: {
    transition: 'all 1s',
    opacity: 0,
    strokeDasharray: 130,
    strokeDashoffset: 130,
    fill: 'none',
    stroke: '#000',
    strokeWidth: 3,
    strokeLinejoin: 'round',
    strokeMiterlimit: 10
  },
  check: {
    strokeDasharray: 50,
    strokeDashoffset: 50,
    transition: 'stroke-dashoffset 1s 0.5s ease-out',
    fill: 'none',
    stroke: '#000',
    strokeWidth: 3,
    strokeLinejoin: 'round',
    strokeMiterlimit: 10
  },
  path: {
    opacity: 1,
    strokeDashoffset: 0
  }
};

var AnimationCheckCircle = function AnimationCheckCircle(props) {
  var circleStyle = styles.circle;
  var checkStyle = styles.check;
  if (props.show) {
    circleStyle = _extends({}, circleStyle, styles.path, props.circleStyle);
    checkStyle = _extends({}, checkStyle, styles.path, props.checkStyle);
  }

  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({
      viewBox: '-6 -6 50 50'
    }, props),
    _react2.default.createElement('path', {
      style: circleStyle,
      d: 'M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z'
    }),
    _react2.default.createElement('polyline', {
      style: checkStyle,
      points: '11.6,20 15.9,24.2 26.4,13.8'
    })
  );
};

AnimationCheckCircle = (0, _pure2.default)(AnimationCheckCircle);
AnimationCheckCircle.displayName = 'AnimationCheckCircle';
AnimationCheckCircle.muiName = 'SvgIcon';

exports.default = AnimationCheckCircle;