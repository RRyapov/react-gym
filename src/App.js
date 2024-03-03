import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import TrainingProgramsPage from "./pages/TrainingProgramsPage";
import DetailedTrainingProgramPage from "./pages/DetailedTrainingProgramPage";
import MainPage from "./pages/MainPage";
import { Routes, Route, useParams } from "react-router-dom";
import axios from "axios";

import {
  Container,
  MainBackground,
  Background,
  Footer,
} from "./common/Container";
import { observer } from "mobx-react-lite";
import { programStorage } from "./stores/programsStore";

function App() {
  const { getAllPrograms } = programStorage;

  useEffect(() => {
    getAllPrograms();
  }, [getAllPrograms]);

  return (
    <MainBackground>
      <Background>
        <Container>
          <Header />

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/programs" element={<TrainingProgramsPage />} />
            {/* <Route path="/program/:id" element={<ProgramPage />} /> */}
            {/* <Route
              path="/programs/detailed"
              element={<DetailedTrainingProgramPage />}
            /> */}
          </Routes>
        </Container>
      </Background>
      <Footer />
    </MainBackground>
  );
}

export default observer(App);
