import { ProductCard } from "@/app/_comonents/productCard";
import { getCatalogByName } from "../../../Service/Query/get-catalog-by-name";

const CatalogSingle = async ({ params }: any) => {
  const { name } = params;

  const product = await getCatalogByName(name);

  return (

    <div className="container">
      <div className="grid  grid-cols-4 gap-5 pt-[100px]">
        {product.map((catalog) => (
          <>
            <ProductCard key={catalog.id} {...catalog} />
          </>
        ))}
      </div>
    </div>
   
  );
};

export default CatalogSingle;
