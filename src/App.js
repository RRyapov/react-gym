import React, { useEffect, createContext } from "react";
import Header from "./components/Header";
import TrainingProgramsPage from "./pages/ProgramsPage";
import DetailedTrainingProgramPage from "./pages/DetailedTrainingProgramPage";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";

import {
  Container,
  MainBackground,
  Background,
  Footer,
} from "./common/ui/Container";
import { observer } from "mobx-react-lite";
import { programStorage } from "./stores/programsStore";

export const ProgramContext = createContext();

function App() {
  const { getAllPrograms, getProgram } = programStorage;

  useEffect(() => {
    getAllPrograms();
  }, [getAllPrograms]);

  return (
    <MainBackground>
      <Background>
        <Container>
          <Header />
          <ProgramContext.Provider value={{ getProgram }}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/programs" element={<TrainingProgramsPage />} />
              <Route
                path="/program/:id"
                element={<DetailedTrainingProgramPage />}
              />
            </Routes>
          </ProgramContext.Provider>
        </Container>
      </Background>
      <Footer />
    </MainBackground>
  );
}

export default observer(App);
