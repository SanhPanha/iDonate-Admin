"use client"
import {ColumnDef} from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "../data-table-column-header";
import { DataTableRowActions } from "../data-table-row-actions";
import { EventType } from "@/difinitions/types/events/EventType";
import Image from "next/image";

export const eventsColumns: ColumnDef<EventType>[] = [

// select
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

//   Title
  {
    accessorKey: "title",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Title" />
      ),
    cell: ({ row }) => <div>{row.getValue("title")}</div>,
    enableSorting: true,
    enableHiding: true,
  },

//   Image
//   {
//     accessorKey: "image",
//     header: ({ column }) => (
//         <DataTableColumnHeader column={column} title="Image" />
//       ),
//     cell: ({ row }) => <Image 
//         width={20} 
//         height={20} 
//         src={`${row.getValue("image")}`} 
//         alt=""  
//         className="object-cover rounded-full" 
//     />,
//     enableSorting: true,
//     enableHiding: true,
//   },

//   Description
//   {
//     accessorKey: "description",
//     header: ({ column }) => (
//         <DataTableColumnHeader column={column} title="Description" />
//       ),
//     cell: ({ row }) => <div>{row.getValue("description")}</div>,
//     enableSorting: true,
//     enableHiding: true,
//     meta: { hidden: true },
//   },


//   order date
  {
    accessorKey: "orderDate",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Order Date" />
    ),
    cell: ({ row }) => <span>{row.getValue("orderDate")}</span>,
    filterFn: (row, columnId, filterValue) => {
        if (!filterValue) return true; // No filter applied
    
        const rowDate = new Date(row.getValue(columnId));
        const { from, to } = filterValue;
    
        if (from && rowDate < new Date(from)) {
          return false;
        }
        if (to && rowDate > new Date(to)) {
          return false;
        }
        return true;
    },
    enableSorting: true,
    enableHiding: true,

    // header: ({ column }) => {
    //     return (
    //       <Button
    //         variant="ghost"
    //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //       >
    //         Date
    //         <ArrowUpDown className="ml-2 h-4 w-4" />
    //       </Button>
    //     )
    //   },
  },

//   end date
  {
    accessorKey: "endDate",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="End Date" />
    ),
    cell: ({ row }) => <span>{row.getValue("endDate")}</span>,
    filterFn: (row, columnId, filterValue) => {
        if (!filterValue) return true; // No filter applied
    
        const rowDate = new Date(row.getValue(columnId));
        const { from, to } = filterValue;
    
        if (from && rowDate < new Date(from)) {
          return false;
        }
        if (to && rowDate > new Date(to)) {
          return false;
        }
        return true;
    },
    enableSorting: true,
    enableHiding: true,
  },

//   Organization
  {
    accessorKey: "organization",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Organization" />
      ),
    cell: ({ row }) => <div>{row.getValue("organization")}</div>,
    enableSorting: true,
    enableHiding: true,
  },

//   Event Category
  {
    accessorKey: "eventCategory",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Event Category" />
      ),
    cell: ({ row }) => <div>{row.getValue("eventCategory")}</div>,
    enableSorting: true,
    enableHiding: true,
  },

//   Total Amount
  {
    accessorKey: "totalAmount",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Amount" />
      ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalAmount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 
      return <div className="text-iDonate-green-primary font-semibold">{formatted}</div>
    },
    // cell: ({ row }) => <div>{row.getValue("email")}</div>,
    enableSorting: true,
    enableHiding: true,
  },

//   action
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  }

]
