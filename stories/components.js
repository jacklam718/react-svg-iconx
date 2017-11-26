import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';

import * as components from '../src/components';

const iconTypes = {
  component: components,
};

Object.keys(iconTypes).forEach((iconType) => {
  const stories = storiesOf(iconType, module);
  Object.keys(iconTypes[iconType]).forEach((iconName) => {
    const Icon = iconTypes[iconType][iconName];
    class IconContainer extends Component {
      state = {
        show: false,
        status: 'loading',
      }

      render() {
        const IconElement = iconTypes[iconType][iconName];
        const buttonText = this.state.show ? 'Hide' : 'Show';
        return (
          <div>
            <IconElement
              {...this.props}
              status={this.state.status}
            />

            <div style={{ marginTop: '100px', marginLeft: '50px' }}>
              <button
                onClick={() => {
                  this.setState({ status: this.state.status === 'loading' ? 'complete' : 'loading' });
                }}
              >
                {buttonText}
              </button>
            </div>
          </div>
        );
      }
    }

    stories.add(iconName, () => (
      <IconContainer
        color="#2196F3"
        hoverColor="#1386B5"
        style={{
          width: '200px',
          height: '200px',
        }}
      />
    ));
  });
});
