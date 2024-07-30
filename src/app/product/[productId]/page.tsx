export default function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>About Product {params.productId} Detail</h1>;
}
