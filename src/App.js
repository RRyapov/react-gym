import Header from "./components/Header/Header";
import TrainingProgramsPage from "./pages/TrainingProgramsPage";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";

import {
  Container,
  MainBackground,
  Background,
  Footer,
} from "./common/Container";

function App() {
  return (
    <MainBackground>
      <Background>
        <Container>
          <Header />

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/programs" element={<TrainingProgramsPage />} />
          </Routes>
        </Container>
      </Background>
      <Footer />
    </MainBackground>
  );
}

export default App;
