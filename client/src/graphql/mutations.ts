import gql from 'graphql-tag';

export const CREATE_RESORT_MUTATION = gql`
  mutation addResort(
    $name: String!
    $elevation: Int!
    $length: Float!
    $lifts: Int!
    $ticket_price: Float!
  ) {
    addResort(name: $name, elevation: $elevation, length: $length, lifts: $lifts, ticket_price: $ticket_price) {
     name,
     elevation,
     length,
     lifts,
     ticket_price
    }
  }
`;

export const DELETE_RESORT_MUTATION = gql`
  mutation deleteResort(
    $id: Int!
  ) {
    deleteResort(id: $id) {
     name
    }
  }
`;



