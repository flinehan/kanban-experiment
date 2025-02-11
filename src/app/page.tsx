"use client"

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useKanban } from '@/lib/kanban-context';
import Column from '@/lib/column';
import { CardType } from '@/lib/card';

export default function Home() {
  const { toDo, inProgress, doneCol, setDoneCol, setInProgress, setTodo } = useKanban()

  // todo: could easily move these into context.
  const handleMoveToInProgress = (card: CardType)=>{
    const filteredTodo = toDo.filter((foundCard) => foundCard.title !== card.title);
    setTodo([...filteredTodo])
    setInProgress([...inProgress, card])
  }

  const handleMoveToDone = (card: CardType)=>{
    const filteredTodo = inProgress.filter((foundCard) => foundCard.title !== card.title);
    setInProgress([...filteredTodo])
    setDoneCol([...inProgress, card])
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Column cards={toDo} handleNext={handleMoveToInProgress}/>
        </Grid>
        <Grid item xs={4}>
          <Column cards={inProgress} handleNext={handleMoveToDone} />
        </Grid>
        <Grid item xs={4}>
          <Column cards={doneCol} />
        </Grid>
      </Grid>
      <Button variant="text" onClick={() => setTodo([...toDo, { description: "dynamic desc", title: "tile" }])}>Add todo</Button>
    </div>
  );
}
