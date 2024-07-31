"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("placeing your order");
    router.push("/");
  };
  return (
    <>
      <h1>Order Produt</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
