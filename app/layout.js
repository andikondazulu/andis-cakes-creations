export const metadata = {
  title: "Andi's Cakes & Creations | Cakes, Pastries & Events in Lusaka",
  description:
    "Custom cakes, pastries and full event catering, planning and decoration in Lusaka, Zambia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}