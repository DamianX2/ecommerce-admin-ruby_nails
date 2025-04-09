import prismadb from "@/lib/prismadb";
import { ProductForm } from "./components/product-form";
import { Product, Image } from "@prisma/client";

const ProductPage = async ({
  params,
}: {
  params: { productId: string; storeId: string };
}) => {
  const { productId, storeId } = params;

  const product = await prismadb.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      images: true,
    },
  });

  // Create serialized product with type assertion
  const serializedProduct = product
    ? ({
        ...product,
        price: parseFloat(String(product.price)),
      } as unknown as Product & { images: Image[] })
    : null;

  const categories = await prismadb.category.findMany({
    where: {
      storeId: storeId,
    },
  });

  const sizes = await prismadb.size.findMany({
    where: {
      storeId: storeId,
    },
  });

  const colors = await prismadb.color.findMany({
    where: {
      storeId: storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          categories={categories}
          colors={colors}
          sizes={sizes}
          initialData={serializedProduct}
        />
      </div>
    </div>
  );
};

export default ProductPage;
