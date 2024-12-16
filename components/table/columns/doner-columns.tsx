"use client"
import {ColumnDef} from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "../data-table-column-header";
import { DataTableRowActions } from "../data-table-row-actions";
import Image from "next/image";
import { DonerType } from "@/difinitions/types/components-type/DonerType";

export const donersColumns: ColumnDef<DonerType>[] = [

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

//   Full Name
  {
    accessorKey: "fullname",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Full Name" />
      ),
    cell: ({ row }) => <div>{row.getValue("fullname")}</div>,
    enableSorting: true,
    enableHiding: true,
  },

//  Email
  {
    accessorKey: "email",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
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

//   contact
  {
    accessorKey: "contact",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Contact" />
    ),
    cell: ({ row }) => <div>{row.getValue("contact")}</div>,
    enableSorting: true,
    enableHiding: true,
  },

//   current address
  {
    accessorKey: "currentaddress",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Current Address" />
      ),
    cell: ({ row }) => <div>{row.getValue("currentaddress")}</div>,
    enableSorting: true,
    enableHiding: true,
  },

//   bio
//   {
//     accessorKey: "bio",
//     header: ({ column }) => (
//         <DataTableColumnHeader column={column} title="Bio" />
//       ),
//     cell: ({ row }) => <div>{row.getValue("bio")}</div>,
//     enableSorting: true,
//     enableHiding: true,
//   },

//   donation amount
  {
    accessorKey: "donationamount",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Donation Amount" />
      ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("donationamount"))
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
