import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Loader from "../components/Loader";
import { USER_FRAGMENT } from "../fragments";
import { ScrollView } from "react-native";
import UserProfile from "../components/UserProfile";

const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      ...UserParts
    }
  }
  ${USER_FRAGMENT}
`;

export default ({ route }) => {
  const {
    params: { username },
  } = route;
  const { loading, data } = useQuery(GET_USER, {
    variables: { username },
  });
  console.log(loading, data);
  return (
    <ScrollView>
      {loading ? (
        <Loader />
      ) : (
        data && data.seeUser && <UserProfile {...data.seeUser} />
      )}
    </ScrollView>
  );
};
