"use client";

import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductReview({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Error from the review");
  // }

  if (parseInt(params.reviewId) >= 1000) {
    return notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for Product id {params.productId}
    </h1>
  );
}
