import { notFound } from "next/navigation";

export default function ProductReview({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  if (parseInt(params.reviewId)>= 1000) {
    return notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for Product id {params.productId}
    </h1>
  );
}
