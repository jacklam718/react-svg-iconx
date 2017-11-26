import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';

import * as animationIcons from '../src/svg-icons/animation';
import * as actionIcons from '../src/svg-icons/action';
import * as alertIcons from '../src/svg-icons/alert';
import * as avIcons from '../src/svg-icons/av';
import * as communicationIcons from '../src/svg-icons/communication';
import * as contentIcons from '../src/svg-icons/content';
import * as deviceIcons from '../src/svg-icons/device';
import * as editorIcons from '../src/svg-icons/editor';
import * as fileIcons from '../src/svg-icons/file';
import * as hardwareIcons from '../src/svg-icons/hardware';
import * as imageIcons from '../src/svg-icons/image';
import * as mapsIcons from '../src/svg-icons/maps';
import * as navigationIcons from '../src/svg-icons/navigation';
import * as notificationIcons from '../src/svg-icons/notification';
import * as placesIcons from '../src/svg-icons/places';
import * as toggleIcons from '../src/svg-icons/toggle';

const iconTypes = {
  animation: animationIcons,
  action: actionIcons,
  alert: alertIcons,
  av: avIcons,
  communication: communicationIcons,
  content: contentIcons,
  device: deviceIcons,
  editor: editorIcons,
  file: fileIcons,
  hardware: hardwareIcons,
  image: imageIcons,
  maps: mapsIcons,
  navigation: navigationIcons,
  notification: notificationIcons,
  places: placesIcons,
  toggle: toggleIcons,
};

Object.keys(iconTypes).forEach((iconType) => {
  const stories = storiesOf(iconType, module);
  Object.keys(iconTypes[iconType]).forEach((iconName) => {
    let Icon = iconTypes[iconType][iconName];
    if (iconName.startsWith('Animation')) {
      class IconContainer extends Component {
        state = {
          show: false,
        }

        render() {
          const IconElement = iconTypes[iconType][iconName];
          const buttonText = this.state.show ? 'Hide' : 'Show';
          return (
            <div>
              <IconElement
                {...this.props}
                show={this.state.show}
              />

              <div style={{ marginTop: '100px', marginLeft: '50px' }}>
                <button
                  onClick={() => {
                    this.setState({ show: !this.state.show });
                  }}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          );
        }
      }

      Icon = IconContainer;
    }

    stories.add(iconName, () => (
      <Icon
        color="#2196F3"
        hoverColor="#1386B5"
        style={{
          width: 54,
          height: 54,
        }}
      />
    ));
  });
});
