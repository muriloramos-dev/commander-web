import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="h-screen flex flex-row justify-center items-center"
      >
        {children}
      </body>
    </html>
  );
}
