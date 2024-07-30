export default function ProductReview({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  return (
    <h1>
      Review {params.reviewId} for Product id {params.productId}
    </h1>
  );
}
