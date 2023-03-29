import React from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';
import { Card, Button, Container } from '../styles/styles';
import { QUERY_RESORT } from '../graphql/queries';

const Resort: React.FC = () => {
  const params = useParams() as any
  const id = parseInt(params.id);

  const { loading, error, data } = useQuery(QUERY_RESORT, {
    variables: { id: id }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  const { name, length, elevation, lifts, ticket_price } = data.resort;
  
  return (
      <Container>
        <Card>
          <h1>{name}</h1>
          <h3>Length: {length} km</h3>
          <h3>Elevation: {elevation}'</h3>
          <h3>Number of Lifts: {lifts}</h3>
          <h3>Ticket Price: $ {ticket_price}</h3>
          <Button to='/'>Back</Button>
        </Card>
      </Container>
  );
};

export default Resort;
