import { CategoryType } from "@/difinitions/types/components-type/CategoryType";
import categories from "@/data/category.json"
import { DataTable } from "@/components/table/data-table";
import { categoryColumns } from "@/components/table/columns/category-columns";

export default function Category() {
  const typedCategory: CategoryType[] = categories;

  // const filters = [
  //   {
  //     columnKey: "title",
  //     title: "Title",
  //     options: Array.from(
  //       new Set(typedCategory.map((category) => category.title))
  //     ).map((category) => ({
  //       label: category,
  //       value: category,
  //     }))
  //   },
  // ]

    return (
      <section  className="flex flex-col flex-1">
        <DataTable 
          searchColumns="title"
          columns={categoryColumns} 
          data={typedCategory} 
          dateField="orderDate"
          // filters={filters}
        />
      </section>
    );
}