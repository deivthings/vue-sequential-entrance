export default {
  functional: true,
  render(createElement, { props, data, children }) {
    let delay = props.delay || 250;
    let tag = props.tag || "section";
    let animation = props.animation || "slideIn";
    if (children) {
      children.forEach((child, index) => {
        child.data.staticStyle = {
          opacity: 0,
          animationFillMode: "forwards",
          animationDelay: index * delay + "ms"
        };
        child.data.staticClass += " " + animation;
      });
    }
    return createElement(tag, children);
  }
};
