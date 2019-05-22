import React, { FunctionComponent, useEffect, Component } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import PortalWrapper from "./PortalWrapper";

type PortalProps = {
  rootEl: string;
};

const Portal: FunctionComponent<PortalProps> = ({
  rootEl = "portal",
  children
}) => {
  const portalRoot = document.getElementById(rootEl);
  const el = document.createElement("div");

  useEffect(() => {
    if (portalRoot) {
      portalRoot.appendChild(el);
      return () => {
        portalRoot.removeChild(el);
        return;
      };
    }
  }, [children]);

  return createPortal(<PortalWrapper>{children}</PortalWrapper>, el);
};

export default Portal;
