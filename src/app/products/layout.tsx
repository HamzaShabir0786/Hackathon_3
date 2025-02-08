export const metadata = {
  title: "Products",
  description: "Discover Our Products!",
  openGraph: {
    title: "Products Page",
    description: "Discover Us and Our Products !",
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <> {children}</>;
}
