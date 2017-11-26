// @flow

import React, { Component } from 'react';
import {
  AnimationCheckCircle,
  AnimationSpinnerCircle,
} from '../svg-icons/animation';

const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';

// type Props = {
//   status: LOADING | SUCCESS,
// }

class AnimationLoading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: props.status,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.status !== nextProps.status) {
      this.setState({ status: nextProps.status });
    }
  }

  render() {
    return (
      <AnimationCheckCircle status={this.state.status} />
    );
    // if (this.state.status === LOADING) {
    //   return <AnimationSpinnerCircle show={this.state.status === LOADING} />;
    // } else if (this.state.status === SUCCESS) {
    //   return <AnimationCheckCircle show={this.state.status === SUCCESS} />;
    // }
    // return null;
    // return (
    //   <div>
    //     <AnimationSpinnerCircle show />
    //     <AnimationCheckCircle show={this.state.status === 'SUCCESS'} />
    //   </div>
    // );
  }
}

export default AnimationLoading;
