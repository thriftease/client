import gql from 'graphql-tag';

const userFragment = gql`
    fragment userFragment on UserType {
      id, email, givenName, middleName, familyName, suffix
      fullName
    }
`;

export {
    userFragment
};
