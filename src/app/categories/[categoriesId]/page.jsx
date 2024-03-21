import { getCategoryNews } from "@/utils/getCategoryNews";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

const DynamicNewsPage = async ({ params, searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category);
  console.log(data);
  return (
    <div className="my-5">
      <h1>
        Total <span className="font-bold">{searchParams.category}</span> news:{" "}
        {data.length}
      </h1>
      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid key={news.id} item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia>
                  {/*  <Image src={topNews2} alt="top-news" width={800} /> */}
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
                    {news.category}
                  </p>
                  <Typography gutterBottom>
                    Bitcoin climbs as Elon Musk Says Tesla Likely to Accept it
                    Again
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By {news.author.name} - {news.author.publishd_date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {news.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DynamicNewsPage;
