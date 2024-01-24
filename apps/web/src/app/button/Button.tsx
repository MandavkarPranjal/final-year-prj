import PropTypes from "prop-types";
import React from "react";
import "./style.sass";

interface Props {
  text: string;
}

export const Button = ({ text = "Button" }: Props): JSX.Element => {
  return (
    <button className="button">
      <div className="text-wrapper">{text}</div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};