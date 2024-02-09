import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

function Header() {
  return (
    <>
      <Box
        sx={[
          { display: "flex" },
          { justifyContent: "space-between" },
          { alignItems: "center" },
          { bgcolor: "#944E63" },
          { padding: "2rem" },
        ]}
      >
        <Link style={{ textDecoration: "none" }} to="/">
          <h2>Bookify</h2>
        </Link>

        <Box
          sx={[{ gap: "2rem" }, { display: "flex" }, { marginRight: "3rem" }]}
        >
          <Link to="sales" underline="hover">
            {"On Sale"}
          </Link>
          <Link to="allBooks" underline="hover">
            {"All Books"}
          </Link>
          <Link to="newReleases" underline="hover">
            {"New Releases"}
          </Link>
          <Link to="search" underline="hover">
            <SearchIcon />
          </Link>
          <Link to="cart" underline="hover">
            <ShoppingBagIcon />
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Header;
