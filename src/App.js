import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import TrainingProgramsPage from "./pages/TrainingProgramsPage";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import {
  Container,
  MainBackground,
  Background,
  Footer,
} from "./common/Container";
import { programStorage } from "./stores/programsStore";
import { observer } from "mobx-react-lite";
import Pagination from "./components/Pagination/Pagination";

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

export default observer(App);
