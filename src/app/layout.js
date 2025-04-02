import "./globals.css";
import ReduxProvider from "./provider";

export const metadata = {
  title: "United Servants For Jesus",
  description: "A Non-Governmental Organization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/FavIcon.png" />
      </head>

      <body className={`font-manFont  antialiased`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
