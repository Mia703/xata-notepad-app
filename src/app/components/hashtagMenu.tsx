"use client";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

export default function HashtagMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div id="hashtag-menu-container">
      <Button
        id="hashtag-toggle"
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
        All notes
      </Button>
      <Menu
        id="hashtag-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "hashtag-toggle",
        }}
      >
        <MenuItem
          sx={{
            fontSize: "0.9em",
          }}
        >
          #none
        </MenuItem>
      </Menu>
    </div>
  );
}
