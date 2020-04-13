import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "../../../components/SearchBar";
import { TextInput } from "react-native";
import SearchPresenter from "./SearchPresent";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);
  const onChange = (text) => {
      setTerm(text);
      setShouldFetch(false);
  }
  const onSubmit = () => {
      setShouldFetch(true);
  }
  navigation.setOptions({
    headerTitle: () => (
      <SearchBar value={term} onChange={onChange} onSubmit={onSubmit} />
    ),
  });
  return <SearchPresenter term={term} shouldFetch={shouldFetch} />;
};
