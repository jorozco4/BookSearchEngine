import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        title
        description
        image
        link
      }
    }
  }
`;
