import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headerImage from "@/assets/The Dragon News.png";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box className="w-full my-5">
      <Container>
        <Image
          alt="header"
          src={headerImage}
          width={500}
          height={500}
          className="mx-auto"
        />
        <Typography
          variant="body2"
          color="gray"
          textAlign="center"
          className="my-2"
        >
          Journalism Without Fear or Favor
        </Typography>
        <Typography textAlign="center">{currentDate}</Typography>
      </Container>
    </Box>
  );
};

export default Header;
