import React from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          username
        }
      }
      createdAt
    }
  }
`;

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

export default () => {
  const { loading, data } = useQuery(FEED_QUERY);
  console.log(loading, data);
  return <View>{loading ? <Loader /> : null}</View>;
};
