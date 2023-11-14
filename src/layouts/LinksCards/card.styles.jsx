//card.styles.jsx
import styled from "@emotion/styled"
//import { CustomLink } from "../../custom-link/custom-link.styles"
import CustomImage from "../../components/custom-image/custom-image.component"
//import CustomButton from "../../custom-button/custom-button.component"

export const Images = styled(CustomImage)`
  width: 100%;
  height: 100%;
  max-width: 587px;
  img {
    object-fit: contain !important;
  }
`


/*import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="../../images/vector-palm.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

*/
