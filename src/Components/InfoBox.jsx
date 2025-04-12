import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css"


export default function InfoBox({info}) {
  const INIT_URL = "https://plus.unsplash.com/premium_photo-1715972898845-62dd6786fb58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=66SpftUPpEa6YmhgcV_yJAIKEgGaLpYk43y8yc3v-OI=";
  const HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1518803194621-27188ba362c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW58ZW58MHx8MHx8fDA%3D";

  return (
    <div className="InfoBox">
      <h3>Weather Information</h3>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            title="green iguana"
          />
          <CardContent className='CardContent'>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Temperature = {info.temp}&deg;C
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Humidity = {info.humidity}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Temp Min = {info.tempMin}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Temp Max = {info.tempMax}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              The Weather can be described as {info.weather} and feels{" "}
              {info.feelsLike}&deg;C
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
