import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  background-color: #f5f0f6;
  color: #385f71;
  width: 25%;
  display: flex;
  margin: 20px 20px;
  padding: 15px;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
  border-radius: 25px;
`;

export const Button = styled(Link)`
  background: #d7b377;
  color: white;
  border-radius: 7px;
  padding: 15px;
  margin: 10px;
  font-size: 16px;
  text-decoration: none;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px grey;
  }
`;

export const DeleteButton = styled.button`
  background: #385f71;
  color: white;
  border-radius: 7px;
  padding: 15px;
  margin: 10px;
  font-size: 16px;
  text-decoration: none;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px grey;
  }
`;

export const Container = styled.div`
  margin: 70px 50px;
  padding: 15px;
  width: 90vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SortStyles = styled.div`
  margin: 70px 200px -70px 200px;
  padding: 15px;
`

// Header Styles
export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #e1ad01;
  }
`;

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #2b4162;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled.a`
  padding: 1rem 0;
  color: white;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;


// Form Styles
export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledForm = styled.form`
  width: 80%;
  max-width: 700px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

export const StyledButton = styled.button`
  display: block;
  background-color: #d7b377;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

export const FormContainer = styled.div`
  margin: 70px 0px -100px 150px;
  padding: 15px;
  width: 80vw;
`;
