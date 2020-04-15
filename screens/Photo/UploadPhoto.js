import React from "react";
import styled from "styled-components";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default ({ route }) => {
  const {
    params: {
      photo: { uri },
    },
  } = route;
  return (
    <View>
      <Text>I should upload {uri}</Text>
    </View>
  );
};
