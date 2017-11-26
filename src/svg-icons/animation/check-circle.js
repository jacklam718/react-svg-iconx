import React from 'react';
import pure from 'recompose/pure';
import styled, { css } from 'styled-components';
import SvgIcon from '../../SvgIcon';

const pathStyle = css`
  opacity: 1;
  stroke-dashoffset: 0;
`;

console.log(pathStyle);
const Circle = styled.path`
  transition: all 1s;
  opacity: 0;
  stroke-dasharray: 130;
  stroke-dashoffset: 130;
  fill: none;
  stroke: #000;
  stroke-width: 3;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  ${props => props.show && pathStyle}
`;

const Check = styled.polyline`
  stroke-dasharray: 50;
  stroke-dashoffset: 50;
  transition: stroke-dashoffset 1s 0.5s ease-out;
  fill: none;
  stroke: #000;
  stroke-width: 3;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  ${props => props.show && pathStyle}
`;

const styles = {
  circle: {
    transition: 'all 1s',
    opacity: 0,
    strokeDasharray: 130,
    strokeDashoffset: 130,
    fill: 'none',
    stroke: '#000',
    strokeWidth: 3,
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  },
  check: {
    strokeDasharray: 50,
    strokeDashoffset: 50,
    transition: 'stroke-dashoffset 1s 0.5s ease-out',
    fill: 'none',
    stroke: '#000',
    strokeWidth: 3,
    strokeLinejoin: 'round',
    strokeMiterlimit: 10,
  },
  path: {
    opacity: 1,
    strokeDashoffset: 0,
  },
};

let AnimationCheckCircle = props => (
  <SvgIcon
    viewBox="0 0 37 37"
    {...props}
  >
    <Circle
      show={props.show}
      d="M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
    />
    <Check
      show={props.show}
      points="11.6,20 15.9,24.2 26.4,13.8"
    />
  </SvgIcon>
);

AnimationCheckCircle = pure(AnimationCheckCircle);
AnimationCheckCircle.displayName = 'AnimationCheckCircle';
AnimationCheckCircle.muiName = 'SvgIcon';

export default AnimationCheckCircle;
