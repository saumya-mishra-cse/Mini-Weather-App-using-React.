import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./InfoBox.css"

export default function InfoBox({info}){
    const HOT_URL="https://images.unsplash.com/photo-1604949210966-9440c324823f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    const RAIN_URL="https://images.unsplash.com/photo-1532690505755-416f854618da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    return(
    <div className="InfoBox">
        <h1>Weather Info-<i class="style">{info.weather}</i></h1>

        <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity>80?RAIN_URL:(info.temp>15?HOT_URL:COLD_URL)}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            
            <div>Temperature:{info.temp}&deg;C</div>
            <div>Humidity:{info.humidity}</div>
            <div>Minimum:{info.tempMin}</div>
            <div>Maximum:{info.tempMax}</div>
            <div>Weather here feels like <i>{info.weather}</i></div>
          
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>)
}