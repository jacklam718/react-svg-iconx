import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';

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
import * as animationIcons from '../src/svg-icons/animation';

const iconTypes = {
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
  animation: animationIcons,
};

Object.keys(iconTypes).forEach((iconType) => {
  const stories = storiesOf(iconType, module);
  Object.keys(iconTypes[iconType]).forEach((iconName) => {
    let IconComponent = iconTypes[iconType][iconName];
    if (iconName.startsWith('Animation')) {
      class IconContainer extends Component {
        state = {
          show: false,
        }

        render() {
          const Icon = iconTypes[iconType][iconName];
          const buttonText = this.state.show ? 'Hide' : 'Show';
          return (
            <div>
              <Icon
                {...this.props}
                show={this.state.show}
              />

              <button
                onClick={() => {
                  this.setState({ show: !this.state.show });
                }}
              >
                {buttonText}
              </button>
            </div>
          );
        }
      }

      IconComponent = IconContainer;
    }

    stories.add(iconName, () => (
      <IconComponent
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
