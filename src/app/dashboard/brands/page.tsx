import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddSquare, SortVertical, Filters } from "solar-icon-set";
import Table from "./_components/Table";
import CreateNewBrandProfile from "./_components/create_new_brand/CreateNewBrand";

function BrandsPage() {
  return (
    <main className="h-full">
      <section className="h-[5.1rem] p-4 border-b">
        <h2 className="text-xl font-bold tracking-wide">Brands</h2>
        <p className="text-slate-500">These are your available brands</p>
      </section>

      <section className="h-[4.25rem] p-4 flex justify-between items-center border-b">
        <CreateNewBrandProfile></CreateNewBrandProfile>

        <div className="flex gap-3">
          <Input type="search" placeholder="Search" />
          <Button variant="outline" className="flex gap-2">
            <SortVertical size={20}></SortVertical>
            Sort
          </Button>
          <Button variant="outline" className="flex gap-2">
            <Filters size={20}></Filters>
            Filter
          </Button>
        </div>
      </section>

      <Table></Table>
    </main>
  );
}
export default BrandsPage;
