import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../SvgIcon';

const styles = {
  circle: {
    transition: 'all 1s',
    opacity: 0,
    strokeDasharray: 130,
    strokeDashoffset: 130,
    fill: 'none',
    stroke: '#000',
    strokeWidth: 2,
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  },
  check: {
    strokeDasharray: 50,
    strokeDashoffset: 50,
    transition: 'stroke-dashoffset 1s 0.5s ease-out',
    fill: 'none',
    stroke: '#000',
    strokeWidth: 2,
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  },
  path: {
    opacity: 1,
    strokeDashoffset: 0,
  },
};

let AnimationCheckCircle = (props) => {
  let circleStyle = styles.circle;
  let checkStyle = styles.check;
  if (props.show) {
    circleStyle = { ...circleStyle, ...styles.path, ...props.circleStyle };
    checkStyle = { ...checkStyle, ...styles.path, ...props.checkStyle };
  }

  return (
    <SvgIcon
      viewBox="-6 -6 50 50"
      {...props}
    >
      <path
        style={circleStyle}
        d="M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
      />
      <polyline
        style={checkStyle}
        points="11.6,20 15.9,24.2 26.4,13.8"
      />
    </SvgIcon>
  );
};

AnimationCheckCircle = pure(AnimationCheckCircle);
AnimationCheckCircle.displayName = 'AnimationCheckCircle';
AnimationCheckCircle.muiName = 'SvgIcon';

export default AnimationCheckCircle;
