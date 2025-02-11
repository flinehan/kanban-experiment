"use client"

import BoardCard from '@/lib/card'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useKanban } from '@/lib/kanban-context';
import { Stack } from '@mui/material';

export default function Home() {
  const { addTodo, toDo, inProgress, doneCol, handleMoveToInProgress } = useKanban()
  return (
    <div>
      <Grid container spacing={2}>
        <Stack spacing={2}>
          {toDo.map((card) => {
            return <BoardCard {...card} handleMove={()=> handleMoveToInProgress(card)} />
          })}
        </Stack>
        <Grid item xs={4}>
          <Stack spacing={2}>
            {inProgress.map((card) => {
              return <BoardCard {...card} handleMove={()=> handleMoveToInProgress(card)} />
            })}
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2}>
            {doneCol.map((card) => {
              return <BoardCard {...card}handleMove={()=> handleMoveToInProgress(card)} />
            })}
          </Stack>
        </Grid>

      </Grid>

      <Button variant="text" onClick={() => addTodo({ description: "dynamic desc", title: "tile" })}>Add todo</Button>
    </div>
  );
}
