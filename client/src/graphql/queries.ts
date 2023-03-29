import gql from 'graphql-tag';

const QUERY_RESORTS_LIST = gql`
  query ResortsList {
    resorts {
      id
      name
      length
      elevation
      lifts
      ticket_price
    }
  }
`;

const QUERY_RESORT = gql`
  query Resort($id: Int!) {
    resort(id: $id) {
      name
      length
      elevation
      lifts
      ticket_price
    }
  }
`;

export { QUERY_RESORT, QUERY_RESORTS_LIST};