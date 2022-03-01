import Routing from "./Routing/Routing";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AppContainer = styled.main`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
  font-family: "Nunito", sans-serif;
  font-size: 22px;
  color: #fff;
`;

function App() {
  return (
    <AppContainer>
      <Routing />
    </AppContainer>
  );
}

export default App;
