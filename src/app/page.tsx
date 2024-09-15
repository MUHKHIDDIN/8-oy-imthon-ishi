import {Catalogs} from "./_comonents/catalogs";
import { Bunnor } from "./_comonents/bunnor";
import {Product} from "./_comonents/product"
export default function Home() {
  return (
    <div className="container">
      <div className="flex">
        <Catalogs />
        <div className="  dark:bg-gray-900 flex-grow p-[20px] ">
          <Bunnor />
           <div>

           <Product />
           </div>
        </div>
      </div>
    </div>
  );
}
