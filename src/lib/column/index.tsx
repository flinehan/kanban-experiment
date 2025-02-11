"use client"

import BoardCard, { CardType } from '@/lib/card'
import { Stack } from '@mui/material';

export default function Column({cards, handleNext}: {cards:CardType[], handleNext?: (card: CardType)=> void}) {

  return (
    <div>
      <Stack spacing={2}>
        {cards.map((card) => {
          return <BoardCard {...card} handleMove={() => handleNext?.(card)} />
        })}
      </Stack>
    </div>
  );
}
