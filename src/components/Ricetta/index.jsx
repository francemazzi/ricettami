import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const RicettaCard = ({ ricetta }) => {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      key={ricetta.id}
      style={{ margin: "20px", height: "18.25rem", width: "18.42rem" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ricetta.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {ricetta.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          Scopri di più
        </Button>
      </CardActions>
    </Card>
  );
};

export default RicettaCard;
