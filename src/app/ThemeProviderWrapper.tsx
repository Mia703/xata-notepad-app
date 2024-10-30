"use client";
import '@fontsource-variable/inter';
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";


const Background = "#121212";
const DarkGrey = "#585858";
const MediumGrey = "#C1C1C1";
const LightGrey = "#E0E0E0";
const White = "#FFFFFF";
const AccentPink = "#E054B9";

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: LightGrey,
      paper: DarkGrey,
    },
    primary: {
      main: MediumGrey,
    },
    text: {
      primary: LightGrey,
    },
  },
  typography: {
    fontFamily: 'Inter Variable, sans-serif',
    h1: {
      textTransform: "capitalize",
      fontSize: '1.5em',
      fontWeight: 500,
    },
    body1: {
      fontSize: '.9em',
    },
  },
});

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
