import styled from "styled-components";
import Header from "./components/Header";
import { Container } from "./common/Container";
const MainBackground = styled.div`
  min-height: 100vw;
  width: 100%;

  background-image: url("./img/background-blur.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100vw auto;

  display: flex;
  justify-content: center;
`;

const Background = styled.div`
  min-height: 100%;
  width: 1440px;

  background-image: url("./img/background.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;

  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <MainBackground>
      <Background>
        <Container>
          <Header>
            <div className="App">
              <header className="App-header">Learn React</header>
            </div>
          </Header>
        </Container>
      </Background>
    </MainBackground>
  );
}

export default App;
