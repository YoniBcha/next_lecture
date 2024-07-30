import Link from "next/link";

export default function home() {
  return (
    <>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Product</Link>
      <h2>
        Well come to the <span style={{ color: "green" }}>HOME PAGE</span>
      </h2>
    </>
  );
}
