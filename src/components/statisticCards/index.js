import { Card, CardContent, Divider, Typography,Box } from "@mui/material";

const MediaCard = ({ chartData, chartComponent, cardTitle, cardSubtitle,body }) => {
  return (

    <Box sx={{marginTop:"30px"}}>
    <Card>
    <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      {chartComponent({ data: chartData })}
      <br/>
      <Typography variant="h5" component="h2" style={{ marginRight: 16 }}>
        {cardTitle}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {cardSubtitle}
      </Typography>
      <hr/>
      <Divider style={{ marginTop: 16, marginBottom: 16 }} />
      <Typography variant="body2" component="p">
        {body}
      </Typography>
    </CardContent>
  </Card>
  </Box>
    
  );
};

export default MediaCard;
