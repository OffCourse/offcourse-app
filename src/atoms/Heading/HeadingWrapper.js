import system from "system-components";
import { themeGet as t } from "styled-system";

const HeadingWrapper = system(
  {
    color: "inherit",
    lineHeight: 2,
    fontSize: 3,
    fontFamily: "bold"
  },
  props => ({
    userSelect: "none",
    textDecoration: "inherit",
    cursor: props.href ? "pointer" : "cursor",
    "&:hover": {
      color:
        props.href || props.onClick
          ? t("colors.primary")(props)
          : t("colors.black")(props)
    }
  })
);

export default HeadingWrapper;
