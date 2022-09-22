import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface IToDostate {
  [key: string]: ITodo[];
}

export const toDoState = atom<IToDostate>({
  key: "toDo",
  default: {
    To_Do: [],
    Doing: [],
    Done: [],
  },
});
