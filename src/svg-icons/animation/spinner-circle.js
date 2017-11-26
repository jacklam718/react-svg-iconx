import React from 'react';
import pure from 'recompose/pure';
import styled, { css } from 'styled-components';
import SvgIcon from '../../SvgIcon';

const Circle = styled.path`
  fill: none;
  stroke: #7DB0D5;
  stroke-width: 3px;
  stroke-miterlimit: 10;

  ${props => props.show && css`
    // stroke-dasharray: 300;
    // stroke-dashoffset: 0;
    stroke-dasharray: 130;
    stroke-dashoffset: 130;
    animation-name: load, spin;
    animation-duration: 3s, 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    transform-origin: 50% 50%;
  `}

  @keyframes load {
    0% {
      stroke-dashoffset: 130;
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }
    50% {
      stroke-dashoffset: 0;
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }
    100% {
      stroke-dashoffset: -105;
    }
  };

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  };
`;

let AnimationCheckCircle = props => (
  <SvgIcon
    viewBox="0 0 37 37"
    {...props}
  >
    <Circle
      show={props.show}
      d="M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
    />
  </SvgIcon>
);

AnimationCheckCircle = pure(AnimationCheckCircle);
AnimationCheckCircle.displayName = 'AnimationSpinnerCircle';
AnimationCheckCircle.muiName = 'SvgIcon';

export default AnimationCheckCircle;
