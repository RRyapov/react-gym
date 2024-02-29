import axios from "axios";
import { makeAutoObservable } from "mobx";

class ProgramsStore {
  _programs = [];
  _chosenPageNumber = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get allPrograms() {
    return this._programs;
  }

  get programsTotalCount() {
    return this.allPrograms.length;
  }

  get chosenPage() {
    return this._chosenPageNumber;
  }

  setAllPrograms = (dataPrograms) => {
    return (this._programs = dataPrograms);
  };

  //   getPaginatedPrograms = (number) => {
  //     this._programs = this._programs.slice(number * 3 - 3, number * 3);
  //   };

  getProgram = (programId) => {
    this._programs.find(({ id }) => id === programId);
  };

  getAllPrograms = () => {
    axios.get("http://localhost:3001/programs").then(({ data }) => {
      this.setAllPrograms(data.slice(0, 3));
    });
  };

  getPaginatedPrograms = (number) => {
    axios.get("http://localhost:3001/programs").then(({ data }) => {
      this.setAllPrograms(data.slice(number * 3 - 3, number * 3));
    });
  };

  selectChosenPage = (number) => {
    this._chosenPage = number;
  };
}

export const programStorage = new ProgramsStore();
