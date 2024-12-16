import { DataTable } from "@/components/table/data-table";
import { EventType } from "@/difinitions/types/events/EventType";
import events from "@/data/events-data.json"
import { eventsColumns } from "@/components/table/columns/events-columns";

export default function Events() {

  const typedEvents: EventType[] = events;

  const filters = [
    {
      columnKey: "organization",
      title: "Organization",
      options: Array.from(
        new Set(typedEvents.map((event) => event.organization))
      ).map((event) => ({
        label: event,
        value: event,
      }))
    },  

    {
      columnKey: "totalAmount",
      title: "Amount Range",
      options: Array.from(
        new Set(typedEvents.map((event) => event.totalAmount))
      ).map((amount) => ({
        label: amount.toString(),
        value: amount.toString(),
      }))
    }
  ]

    return (
      <section  className="flex flex-col flex-1">
        <DataTable 
          searchColumns="title"
          columns={eventsColumns} 
          data={typedEvents} 
          dateField="orderDate"
          filters={filters}
        />
      </section>
    );
}