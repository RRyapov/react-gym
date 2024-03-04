import React, { useState, useEffect, useContext, createContext } from "react";
import Header from "./components/Header/Header";
import TrainingProgramsPage from "./pages/TrainingProgramsPage";
import DetailedTrainingProgramPage from "./pages/DetailedProgramPage/DetailedTrainingProgramPage";
import MainPage from "./pages/MainPage";
import { Routes, Route, useParams } from "react-router-dom";
// import { ProgramContext } from "./components/TrainingProgram/TrainingProgramEven";

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
