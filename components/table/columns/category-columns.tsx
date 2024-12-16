"use client"
import {ColumnDef} from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "../data-table-column-header";
import { DataTableRowActions } from "../data-table-row-actions";
import Image from "next/image";
import { CategoryType } from "@/difinitions/types/components-type/CategoryType";

export const categoryColumns: ColumnDef<CategoryType>[] = [

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

//   title
  {
    accessorKey: "title",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Title" />
      ),
    cell: ({ row }) => <div>{row.getValue("title")}</div>,
    enableSorting: true,
    enableHiding: true,
  },

//  description
  {
    accessorKey: "description",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => <div>{row.getValue("description")}</div>,
    enableSorting: true,
    enableHiding: true,
  },

//   Benefits
  {
    accessorKey: "benefits",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Benefits" />
    ),
    cell: ({ row }) => <div>{row.getValue("benefits")}</div>,
    enableSorting: true,
    enableHiding: true,
  },

//   action
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  }

]
