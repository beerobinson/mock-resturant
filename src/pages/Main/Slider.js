import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Card, CardMedia, CardContent, Typography } from '@mui/material'
import road from '../../images/road.jpg'
import america from '../../images/america.jpg'
import pineapple from '../../images/pineapple.jpg'

function Slider(props)
{
  const slides = [
    {
      background: road,
      text: "Road"
    },
    {
      background: america,
      text: "America"
    },
    {
      background: pineapple,
      text: "Pineapple"
    }
  ];

    return (
        <Carousel height='100px'>
            {
                slides.map( (slide, i) => <Slide key={i} item={slide} /> )
            }
        </Carousel>
    )
}

function Slide(props)
{
  
const styles = {
  paperContainer: {
      backgroundImage: `url('${props.background}')`
  }
};
    return (
        <Paper style={styles.paperContainer}>
            <h2>{props.item.text}</h2>
        </Paper>
    )
}

export default Slider
