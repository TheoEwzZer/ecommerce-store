import { ReactElement } from "react";

import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";

import { Product } from "@/types";

export const revalidate = 0;

async function HomePage(): Promise<ReactElement> {
  const products: Product[] = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("c8726b3b-3b28-49ed-a010-2d95788760d5");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList
            title="Featured Products"
            items={products}
          />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
