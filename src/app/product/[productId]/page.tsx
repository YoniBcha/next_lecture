import { Metadata } from "next";

type Props = {
  params: { productId: string };
};
//see more lecture 17 with code evolutuoin
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

export default function ProductDetail({ params }: Props) {
  return <h1>About Product {params.productId} Detail</h1>;
}
