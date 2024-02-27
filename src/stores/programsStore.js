import axios from "axios";
import { makeAutoObservable } from "mobx";

class ProgramsStore {
  _programs = [];

  constructor() {
    makeAutoObservable(this);
  }

  get allPrograms() {
    return this._programs;
  }

  setAllPrograms = (dataPrograms) => {
    return (this._programs = dataPrograms);
  };

  getProgram = (programId) => {
    this._programs.find(({ id }) => id === programId);
  };

  getAllPrograms = () => {
    axios.get("http://localhost:3001/programs").then(({ data }) => {
      this.setAllPrograms(data);
    });
  };
}

export const programStorage = new ProgramsStore();
