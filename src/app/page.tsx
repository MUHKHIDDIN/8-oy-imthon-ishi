import { Catalogs } from "./_comonents/catalogs";
import { Bunnor } from "./_comonents/bunnor";
import { Notebook } from "./_comonents/notebook";
import { Phone } from "./_comonents/phone";
import { WashingMachine } from "./_comonents/washing-machine";

export default function Home() {
  return (
    <div className="container mx-auto pt-24 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/4">
          <Catalogs />
        </div>

        <div className="w-full lg:w-3/4 dark:bg-gray-900 p-4 lg:p-6 rounded-lg">
          <div className="mb-6">
            <Bunnor />
          </div>

          <div className="mb-6">
            <Notebook />
          </div>

          <div className="mb-6">
            <Phone />
          </div>

          <div>
            <WashingMachine />
          </div>
        </div>
      </div>
    </div>
  );
}
