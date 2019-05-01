import system from "system-components";

const LabelWrapper = system(
  {
    is: "div",
    p: 0,
    color: "black",
    m: 0
  },
  props => ({
    fontFamily: props.theme.fonts.bold,
    fontWeight: 700,
    display: props.is === "span" ? "inline-block" : "block",
    userSelect: "none"
  })
);

export default LabelWrapper;
