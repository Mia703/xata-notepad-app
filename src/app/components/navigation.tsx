"use client";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button, Container, IconButton } from "@mui/material";

interface NavigationProps {
  current: String;
}

const Navigation: React.FC<NavigationProps> = ({ current }) => {
  return (
    <nav id="main-navigation" className="absolute bottom-0 left-0 flex w-full">
      <Container
        component={"div"}
        className="m-6 flex flex-row justify-center rounded-lg bg-[--medium-grey] p-3"
      >
        <IconButton>
          <HomeIcon sx={{ color: "#121212", margin: '0 5px' }} />
        </IconButton>

        <IconButton>
          <SearchIcon sx={{ color: "#121212", margin: '0 5px' }} />
        </IconButton>

        <IconButton>
          <AddCircleOutlineIcon sx={{ color: "#121212", margin: '0 5px' }} />
        </IconButton>

        <IconButton>
          <SettingsIcon sx={{ color: "#121212", margin: '0 5px' }} />
        </IconButton>
      </Container>
    </nav>
  );
};

export default Navigation;
