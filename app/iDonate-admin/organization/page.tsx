import { organizationsColumns } from "@/components/table/columns/organization-columns";
import { OrganizationType } from "@/difinitions/types/components-type/OrganizationType";
import organizations from "@/data/organizations-data.json"
import { DataTable } from "@/components/table/data-table";

export default function Organization() {
  
  const typedOrganization: OrganizationType[] = organizations;
  const filters = [
    {
      columnKey: "full_name",
      title: "Full Name",
      options: Array.from(
        new Set(typedOrganization.map((organization) => organization.full_name))
      ).map((organization) => ({
        label: organization,
        value: organization,
      }))
    },
  ]

    return (
      <section  className="flex flex-col flex-1">
        <DataTable 
          searchColumns="full_name"
          columns={organizationsColumns} 
          data={typedOrganization} 
          dateField=""
          filters={filters}
        />
      </section>
    );
}