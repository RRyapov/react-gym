import Header from "./components/Header/Header";
import { Container, MainBackground, Background } from "./common/Container";


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
