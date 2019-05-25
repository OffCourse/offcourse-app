import React, { memo } from "react";
import PropTypes from "prop-types";
import { Checkbox, Link, ListItem } from "atoms";

const CheckItem = ({ is, href, onClick, children, checked, id, onToggle }) => (
  <ListItem is={is} gridTemplateColumns="2rem 1fr">
    <Checkbox
      onToggle={({ checked }) => onToggle({ id, checked })}
      checked={checked}
    />
    {href || onClick ? (
      <Link href={href} onClick={onClick}>
        {children}
      </Link>
    ) : (
      <div>{children}</div>
    )}
  </ListItem>
);

CheckItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  is: PropTypes.func,
  checked: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func
};

export default memo(CheckItem);
