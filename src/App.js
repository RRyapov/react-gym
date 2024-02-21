import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import { Container, MainBackground, Background } from "./common/Container";

function App() {
  return (
    <MainBackground>
      <Background>
        <Container>
          <Header />
          <MainPage />
        </Container>
      </Background>
    </MainBackground>
  );
}

export default App;
