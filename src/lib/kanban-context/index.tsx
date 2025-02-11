"use client"

import { createContext, useContext, useState, ReactNode } from "react";
import { CardType } from "../card";

// Define the shape of the context
interface MyContextType {
  toDo: CardType[];
  inProgress: CardType[];
  doneCol: CardType[];
  addTodo: (card: CardType) => void;
  handleMoveToInProgress: (card: CardType) => void;
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

  const addTodo = (card: CardType) => {
    setTodo([...toDo, card])
  }

  const handleMoveToInProgress = (card: CardType) => {
    const filteredTodo = toDo.filter((foundCard) => foundCard.title !== card.title);
    setTodo([...filteredTodo])
    setInProgress([...inProgress, card])
  }

  return (
    <KanbanContext.Provider value={{ toDo, inProgress, doneCol, addTodo, handleMoveToInProgress }}>
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
