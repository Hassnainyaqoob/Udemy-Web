import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';


export default function Cards(props) {

    const { img, name, price, rooms, services } = props.data
    const [open, setOpen] = React.useState(false);



    const handleClose = () => {
        setOpen(false);

    }



    return (


        <div style={{ display: "flex" }}>


            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent sx={{ backgroundColor: "white" }}>
                        <Typography sx={{ fontWeight: "bold" }}>
                            {name}
                        </Typography>
                        <Typography >
                             {price}
                        </Typography>
                        <Typography >
                             {rooms}
                        </Typography>
                        <Typography >
                             {services}
                        </Typography>




                    </CardContent>
                </CardActionArea>

            </Card>

            {/* <BookingModal open={open} handleClose={handleClose} /> */}

        </div>
    );
}
