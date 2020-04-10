import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.View`
  margin-bottom: 10px;
`;

const TextInput = styled.TextInput``;

const AuthInput = ({
  value,
  placeholder,
  keyboardType = "default",
  autoCapitalize,
}) => (
  <Container>
    <TextInput
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
    />
  </Container>
);

AuthInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  keyboardType: PropTypes.oneOf([
    "default",
    "number-pad",
    "decimal-pad",
    "numeric",
    "email-address",
    "phone-pad",
  ]),
  autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
};

export default AuthInput;
