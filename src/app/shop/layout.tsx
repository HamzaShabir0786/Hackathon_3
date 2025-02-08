export const metadata = {
  title: "Shop",
  description: "Discover amazing products from this shop!",
  openGraph: {
    title: "Shop Page",
    description: "Discover amazing Products!",
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <> {children}</>;
}
