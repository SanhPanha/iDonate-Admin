import { DonerType } from "@/difinitions/types/components-type/DonerType";
import donoers from "@/data/donors-data.json"
import { donersColumns } from "@/components/table/columns/doner-columns";
import { DataTable } from "@/components/table/data-table";

export default function Doner() {
  const typedDoner: DonerType[] = donoers;

  const filters = [
    {
      columnKey: "donationamount",
      title: "Amount Range",
      options: Array.from(
        new Set(typedDoner.map((donor) => donor.donationamount))
      ).map((amount) => ({
        label: amount.toString(),
        value: amount.toString(),
      }))
    }
  ]

    return (
      <section  className="flex flex-col flex-1">
        <DataTable
          searchColumns="fullname" 
          columns={donersColumns} 
          data={typedDoner} 
          dateField="orderDate"
          filters={filters}
        />
      </section>
    );
}