import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Loader from "../components/Loader";
import { POST_FRAGMENT } from "../fragments";
import Post from "../components/Post";

const POST_DETAIL = gql`
  query seeFullPost($id: String!) {
    seeFullPost(id: $id) {
      ...PostParts
    }
  }
  ${POST_FRAGMENT}
`;


const View = styled.View``;
const Text = styled.Text``;

export default ({ route }) => {
  const {
    params: { id },
  } = route;
  const { loading, data } = useQuery(POST_DETAIL, {
    variables: { id },
  });
  console.log(loading, data);
  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        data && data.seeFullPost && <Post {...data.seeFullPost} />
      )}
    </View>
  );
};
