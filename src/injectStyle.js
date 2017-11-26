
// only support @keyframes
const injectStyle = (style) => {
  const styleElement = window.document.createElement('style');
  let styleSheet = null;

  window.document.head.appendChild(styleElement);

  styleSheet = styleElement.sheet;

  styleSheet.insertRule(style, styleSheet.cssRules.length);
};

export default injectStyle;
