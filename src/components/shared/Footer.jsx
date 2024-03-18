import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

// icon
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

const Footer = () => {
  const NavItems = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Pages",
      pathname: "/pages",
    },
    {
      route: "Category",
      pathname: "/category",
    },
    {
      route: "News",
      pathname: "/news",
    },
    {
      route: "Post",
      pathname: "/post",
    },
    {
      route: "Contact",
      pathname: "/contact",
    },
  ];

  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box
          className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
        </Box>
        <Box className="w-full text-center">
          {NavItems.map((page) => (
            <Link key={page} href={page.pathname}>
              <Button className="text-white">{page.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography variant="body2" color="gray" textAlign="center">
          @2024 The Dragon News.Design by R.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
