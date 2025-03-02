import { useState } from "react";
import { useNavigate } from "react-router";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import c from "../styles/modules/nav.module.css";
import { paths } from "../path";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNavigateToProducts = () => {
    navigate(paths.products);
    setOpen(false);
  };

  const handleNavigateToAddNewProduct = () => {
    navigate(paths.addNewProduct);
    setOpen(false);
  };

  return (
    <AppBar position="fixed">
      <Toolbar className={c.toolbar}>
        <h1 className={c.logo} onClick={handleNavigateToProducts}>
          Web Shop
        </h1>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={() => setOpen(true)}
          sx={{ display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <ul className={c.navLinks}>
          <li onClick={handleNavigateToProducts}>Products</li>
          <li onClick={handleNavigateToAddNewProduct}>Add new product</li>
        </ul>
      </Toolbar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "black",
            color: "white",
            width: "250px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "10px",
          }}
        >
          <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          <ListItem
            component="button"
            onClick={handleNavigateToProducts}
            sx={{ backgroundColor: "black", color: "white" }}
          >
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem
            component="button"
            onClick={handleNavigateToAddNewProduct}
            sx={{ backgroundColor: "black", color: "white" }}
          >
            <ListItemText primary="Add new product" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
