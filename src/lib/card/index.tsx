import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// title, description, type

export interface CardType {
  title: string;
  description: string;
  type?: string; // task, sub task, bug
  handleMove: (card: CardType) => void;
}

export default function BoardCard({ title, description, type, handleMove }: CardType) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {title}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
        <CardActions>
          <Button onClick={() => handleMove({ title, description, type })}>Move to in progress</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}