function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const random = getRandomInt(201);
  // if (random === 200) {
  //   throw new Error("Error From the product page");
  // }
  return (
    <>
      {children}
      <h1>this is product feature layout</h1>
    </>
  );
}
