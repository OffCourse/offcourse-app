import React, { memo } from "react";
import PropTypes from "prop-types";
import CheckpointInputWrapper from "./CheckpointInputWrapper";
import { Input } from "atoms";

const CheckpointInput = ({
  name,
  children,
  value,
  hasErrors,
  onChange,
  onBlur
}) => {
  return (
    <CheckpointInputWrapper border={hasErrors ? 2 : 0}>
      <div alignItems="stretch" className="inputs">
        <Input
          onChange={onChange}
          onBlur={onBlur}
          pb={2}
          mb={0}
          name={`${name}.task`}
          value={value.task}
          placeholder="Task"
        />
        <Input
          onChange={onChange}
          onBlur={onBlur}
          unformatted
          pt={0}
          mt={0}
          name={`${name}.resourceUrl`}
          variant="small"
          value={value.resourceUrl}
          placeholder="Resource URL"
        />
      </div>
      {children && (
        <div px={6} alignItems="flex-end">
          {children}
        </div>
      )}
    </CheckpointInputWrapper>
  );
};

CheckpointInput.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  hasErrors: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.shape({
    task: PropTypes.string,
    resourceUrl: PropTypes.string
  })
};

export default memo(CheckpointInput);
