import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import { TextInput } from "react-native";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({navigation}) => {
  const [term, setTerm] = useState("");
  const onChange = text => setTerm(text);
  navigation.setOptions({
    headerTitle: () => (
      <SearchBar value={term} onChange={onChange} onSubmit={() => null} />
    ),
  });
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};
