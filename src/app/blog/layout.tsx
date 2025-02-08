export const metadata = {
  title: "Blog",
  description: "Discover amazing blog posts here!",
  openGraph: {
    title: "Blog Page",
    description: "Discover amazing blog posts here!",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <> {children}</>;
}
