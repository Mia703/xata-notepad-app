"use client";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

export default function FilterMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div id="filter-menu-container">
      <Button
        id="filter-toggle"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDown />}
        sx={{
          fontWeight: 600,
          color: "var(--accent-pink)",
        }}
      >
        Filter By
      </Button>
      <Menu
        id="filter-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "filter-toggle",
        }}
      >
        <MenuItem
          sx={{
            fontSize: "0.9em",
          }}
        >
          By time
        </MenuItem>
        <MenuItem
          sx={{
            fontSize: "0.9em",
          }}
        >
          By date
        </MenuItem>
      </Menu>
    </div>
  );
}
