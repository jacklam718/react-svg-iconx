// @flow

import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import transitions from './transitions';

class SvgIcon extends Component {
  static muiName = 'SvgIcon';

  static propTypes = {
    offColor: PropTypes.string,
    /**
     * Elements passed into the SVG Icon.
     */
    children: PropTypes.node,

    color: PropTypes.string,
    /**
     * This is the icon color when the mouse hovers over the icon.
     */
    hoverColor: PropTypes.string,
    /** @ignore */
    onMouseEnter: PropTypes.func,
    /** @ignore */
    onMouseLeave: PropTypes.func,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * Allows you to redefine what the coordinates
     * without units mean inside an svg element. For example,
     * if the SVG element is 500 (width) by 200 (height), and you
     * pass viewBox="0 0 50 20", this means that the coordinates inside
     * the svg will go from the top left corner (0,0) to bottom right (50,20)
     * and each unit will be worth 10px.
     */
    viewBox: PropTypes.string,
  };

  static defaultProps = {
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    viewBox: '0 0 24 24',
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    hovered: false,
  };

  handleMouseLeave = (event) => {
    this.setState({ hovered: false });
    this.props.onMouseLeave(event);
  };

  handleMouseEnter = (event) => {
    this.setState({ hovered: true });
    this.props.onMouseEnter(event);
  };

  render() {
    const {
      children,
      color,
      offColor: _offColor,
      hoverColor,
      onMouseEnter, // eslint-disable-line no-unused-vars
      onMouseLeave, // eslint-disable-line no-unused-vars
      style,
      viewBox,
      ...other
    } = this.props;

    const offColor = _offColor || 'currentColor';
    const onColor = hoverColor || offColor;
    const fill = this.state.hovered ? onColor : offColor;

    const mergedStyles = Object.assign({
      display: 'inline-block',
      color,
      fill,
      height: 24,
      width: 24,
      userSelect: 'none',
      transition: transitions.easeOut(),
    }, style);

    const newChildren = Children.map(children, (child) => {
      if (child.props.style && !child.props.style.strokeWidth) {
        return child;
      }

      const newChild = cloneElement(child, {
        style: {
          ...child.props.style,
          stroke: fill,
        },

      });
      return newChild;
    });

    return (
      <svg
        {...other}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={mergedStyles}
        viewBox={viewBox}
      >
        {newChildren}
      </svg>
    );
  }
}

export default SvgIcon;
