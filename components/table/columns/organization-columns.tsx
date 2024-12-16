"use client"
import {ColumnDef} from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "../data-table-column-header";
import { DataTableRowActions } from "../data-table-row-actions";
import Image from "next/image";
import { OrganizationType } from "@/difinitions/types/components-type/OrganizationType";

export const organizationsColumns: ColumnDef<OrganizationType>[] = [

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
    accessorKey: "full_name",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Full Name" />
      ),
    cell: ({ row }) => <div>{row.getValue("full_name")}</div>,
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
    accessorKey: "current_address",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Current Address" />
      ),
    cell: ({ row }) => <div>{row.getValue("current_address")}</div>,
    enableSorting: true,
    enableHiding: true,
  },

//  Reference Information
  {
    accessorKey: "reference_information",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Reference Information" />
      ),
    cell: ({ row }) => <div>{row.getValue("reference_information")}</div>,
    enableSorting: true,
    enableHiding: true,
  },

  //  Purpose
  // {
  //   accessorKey: "purpose",
  //   header: ({ column }) => (
  //       <DataTableColumnHeader column={column} title="Purpose" />
  //     ),
  //   cell: ({ row }) => <div className="line-clamp-1">{row.getValue("purpose")}</div>,
  //   enableSorting: true,
  //   enableHiding: true,
  // },

  // Bio
  // {
  //   accessorKey: "bio",
  //   header: ({ column }) => (
  //       <DataTableColumnHeader column={column} title="Bio" />
  //     ),
  //   cell: ({ row }) => <div className="line-clamp-1">{row.getValue("bio")}</div>,
  //   enableSorting: true,
  //   enableHiding: true,
  // },

//   action
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  }

]
