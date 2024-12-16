"use client"
import {ColumnDef} from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "../data-table-column-header";
import { DataTableRowActions } from "../data-table-row-actions";
import Image from "next/image";
import { TestimonialType } from "@/difinitions/types/components-type/testimonial";

export const testimonialsColumns: ColumnDef<TestimonialType>[] = [

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
    accessorKey: "name",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Full Name" />
      ),
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
    enableSorting: true,
    enableHiding: true,
  },

//  Position
  {
    accessorKey: "position",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Position" />
    ),
    cell: ({ row }) => <div>{row.getValue("position")}</div>,
    enableSorting: true,
    enableHiding: true,
  },


//   Comment
  {
    accessorKey: "comment",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Comment" />
      ),
    cell: ({ row }) => <div>{row.getValue("comment")}</div>,
    enableSorting: true,
    enableHiding: true,
  },


//   action
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  }

]
