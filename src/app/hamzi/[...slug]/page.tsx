export default function hamzy({ params }: { params: { slug: string } }) {
  return (
    <div>
      <div>I am hamzi {params.slug} </div>
    </div>
  );
}
