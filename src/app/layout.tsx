import { Metadata, Viewport } from "next";
import React from "react";
import ThemeProviderWrapper from "./ThemeProviderWrapper";
import "./globals.css";

export const metatdata: Metadata = {
  title: "Notepad",
  description: "A simple notepad for all",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return(
		<html lang="en">
			<body>
				<ThemeProviderWrapper>
					{children}
				</ThemeProviderWrapper>
			</body>
		</html>
	);
}
