"use client";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button, IconButton } from "@mui/material";

interface NavigationProps {
  current: String;
}

const Navigation: React.FC<NavigationProps> = ({ current }) => {
  return (
    <nav id="main-navigation" className="bg-red-500 p-6">
      {current == "home" ? (
        <Button variant="contained" startIcon={<HomeIcon />}>
          Home
        </Button>
      ) : (
        <IconButton>
          <HomeIcon />
        </IconButton>
      )}
      {current == "search" ? (
        <Button variant="contained" startIcon={<SearchIcon />}>
          Search
        </Button>
      ) : (
        <IconButton>
          <SearchIcon />
        </IconButton>
      )}
      {current == "note" ? (
        <Button variant="contained" startIcon={<AddCircleOutlineIcon />}>
          New note
        </Button>
      ) : (
        <IconButton>
          <AddCircleOutlineIcon />
        </IconButton>
      )}
      {current == "settings" ? (
        <Button variant="contained" startIcon={<SettingsIcon />}>
          Settings
        </Button>
      ) : (
        <IconButton>
          <SettingsIcon />
        </IconButton>
      )}
    </nav>
  );
};

export default Navigation;
