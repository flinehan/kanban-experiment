"use client"

import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { CardType } from "../card";

// Define the shape of the context
interface MyContextType {
  toDo: CardType[];
  inProgress: CardType[];
  doneCol: CardType[];
  setTodo: Dispatch<SetStateAction<CardType[]>>;
  setInProgress: Dispatch<SetStateAction<CardType[]>>;
  setDoneCol: Dispatch<SetStateAction<CardType[]>>;
}

// Create the context with a default undefined value
const KanbanContext = createContext<MyContextType | undefined>(undefined);

const TO_DO: CardType[] = [];
const IN_PROGRESS: CardType[] = [];
const DONE: CardType[] = [];

// Provider component
export const KanbanProvider = ({ children }: { children: ReactNode }) => {
  const [toDo, setTodo] = useState(TO_DO);
  const [inProgress, setInProgress] = useState(IN_PROGRESS);
  const [doneCol, setDoneCol] = useState(DONE);

  return (
    <KanbanContext.Provider value={{ toDo, inProgress, doneCol, setTodo, setInProgress, setDoneCol }}>
      {children}
    </KanbanContext.Provider>
  );
};

export const useKanban = () => {
  const context = useContext(KanbanContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
