import React, {useState} from 'react';
import { useQuery, useMutation } from 'react-apollo';
import {FormContainer, Button, Card, Container, DeleteButton } from '../styles/styles';
import { Resort } from '../graphql/types';
import { QUERY_RESORTS_LIST } from '../graphql/queries';
import { DELETE_RESORT_MUTATION } from '../graphql/mutations';
import AddResortForm from './AddResortForm';


const ResortList: React.FC = () => {
  const { data, error, loading } = useQuery(QUERY_RESORTS_LIST);
  const [isOpen, setIsOpen] = useState(false)

  const [deleteResort] = useMutation(DELETE_RESORT_MUTATION)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  function toggleModal(e: any) {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <FormContainer>
    <div>
        <button onClick={toggleModal}>Add Resort</button>
      { isOpen ? <AddResortForm/> : null }
        </div>
    </FormContainer>
  
      <Container>
        {
          data.resorts.map((resort: Resort) => (
            <Card key={resort.id}>
              <h2>{resort.name}</h2>
              <h4>Elevation: {resort.elevation}'</h4>
              <div>
              <Button to={`/resort/${resort.id}`}>Details</Button>
              <DeleteButton onClick={(e) => {
                e.preventDefault();
                deleteResort({
                  variables: {
                    id: resort.id
                  },
                  refetchQueries: () => [{
                    query: QUERY_RESORTS_LIST,
                    variables: {
                      status: 'OPEN',
                    },
                  }]
                })
              }}>Delete</DeleteButton>
              </div>
              
            </Card>
          ))
        }
      </Container>
    </>
  )
};

export default ResortList;