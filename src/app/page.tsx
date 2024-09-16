import { Catalogs } from "./_comonents/catalogs";
import { Bunnor } from "./_comonents/bunnor";
import { Product } from "./_comonents/product";
import { Phone } from "./_comonents/phone";
import { Brend } from "./_comonents/bredn";
export default function Home() {
  return (
    <div className="container pt-[100px]">
      <div className="flex">
        <div>
          <Catalogs />
        </div>

        <div className="  dark:bg-gray-900 flex-grow ">
          <div>
            <Bunnor />
          </div>
          <div>
            <Product />
          </div>
          <div>
            <Phone />
          </div>
          <div>
            <Brend />
          </div>
        </div>
      </div>
    </div>
  );
}
