import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { ScrollView, RefreshControl } from "react-native";
import Loader from "../../../components/Loader";
import SquarePhoto from "../../../components/SquarePhoto";


export const SEARCH = gql`
  query search($term: String!) {
    searchPost(term: $term) {
      id
      files {
        id
        url
      }
      likeCount
      commentCount
    }
  }
`;

const SearchPresenter = ({ term, shouldFetch }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { data, loading, refetch } = useQuery(SEARCH, {
    variables: {
      term,
    },
    skip: !shouldFetch,
    fetchPolicy: "network-only"
  });
  console.log(data, loading);
  const onRefresh = async () => {
    try {
      setRefreshing(true);
      await refetch({ variables: { term } });
    } catch (e) {
    } finally {
      setRefreshing(false);
    }
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    >
        {loading ? <Loader/> : data?.searchPost?.map(post => <SquarePhoto key={post.id} {...post} />)}
    </ScrollView>
  );
};

SearchPresenter.propTypes = {
  term: PropTypes.string.isRequired,
  shouldFetch: PropTypes.bool.isRequired,
};

export default SearchPresenter;
