import "@/styles/globals.css";
import "@/styles/variables.css";
import NetBackground from "@/components/NetBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NetBackground />
        {children}
      </body>
    </html>
  );
}