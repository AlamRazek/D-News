"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { IconButton, Stack } from "@mui/material";

// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

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

function Navbar() {
  return (
    <AppBar position="static" className="bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} alt="logo" width={100} height={100} />
          <Box className="w-full text-center">
            {NavItems.map((page) => (
              <Link key={page} href={page.pathname}>
                <Button className="text-white">{page.route}</Button>
              </Link>
            ))}
          </Box>

          <Box>
            <Stack
              direction="row"
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
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;