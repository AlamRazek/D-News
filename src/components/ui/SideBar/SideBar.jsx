import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import sideBarNews from "@/assets/side-top-news.png";

const SideBar = () => {
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sideBarNews} alt="top-news" width={800} />
          </CardMedia>
          <CardContent>
            <p
              className="
            w-[100px]
            bg-red-500
            text-white
            p-1
            my-5
            rounded
            "
            >
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom className="my-3">
              By Awlad Hossain - Mar 18 2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout....
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SideBar;
