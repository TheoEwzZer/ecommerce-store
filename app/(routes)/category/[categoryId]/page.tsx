import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";

import getProducts from "@/actions/get-products";
import { ReactElement } from "react";
import { Category, Color, Product, Size } from "@/types";
import getCategory from "@/actions/get-category";
import getSizes from "@/actions/get-sizes";
import getColors from "@/actions/get-colors";

import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps): Promise<ReactElement> {
  const products: Product[] = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes: Size[] = await getSizes();
  const colors: Color[] = await getColors();
  const category: Category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters
              sizes={sizes}
              colors={colors}
            />
            <div className="hidden lg:block">
              <Filter
                valueKey="sizeId"
                name="Sizes"
                data={sizes}
              />
              <Filter
                valueKey="colorId"
                name="Colors"
                data={colors}
              />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map(
                  (item: Product): ReactElement => (
                    <ProductCard
                      key={item.id}
                      data={item}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CategoryPage;
