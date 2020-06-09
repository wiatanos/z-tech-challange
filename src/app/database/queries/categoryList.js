import gql from 'graphql-tag';

const GET_CATEGORIES = gql`
query allCategoriesSearch {
    allCategory{
      title
      id
    }
  }
`;

export default GET_CATEGORIES