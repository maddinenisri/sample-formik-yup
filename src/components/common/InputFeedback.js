import React from "react";
import classNames from "classnames";

const InputFeedback = ({ error }) =>
  error ? <div className={classNames("invalid-feedback")}>{error}</div> : null;

export default InputFeedback;
