// Users Datatable (client component) that will contain our data table definitions.
"use client"

import React, { useState, useEffect } from 'react'

import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  ColumnDef,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Input } from "@/components/ui/input"



export function UsersTable({ columns, data, filterEmail }) {

  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    }
  })

  useEffect(() => {
    table.getColumn("email")?.setFilterValue(filterEmail);
  }, [filterEmail, table]);

  function getStatusStyle(status) {
    switch (status) {
      case "Active":
        return "bg-[#f3fcf6] text-[#91e3a8] rounded-[100px] min-h-[30px] w-[180px]"; // Example: green background for active status
      case "Inactive":
        return "text-[#8f95a9] bg-[#f5f5f7] rounded-[100px] min-h-[30px] w-[180px]"; // Example: gray background for inactive status
      case "Pending":
        return "bg-[#fdf7e5] text-[#f3d472] rounded-[100px] min-h-[30px] w-[180px]"; // Example: yellow background for pending status
      case "Blacklisted":
        return "bg-[#fce6eb] text-[#ef6b8c] rounded-[100px] min-h-[30px] w-[180px]"; // Example: red background for error status
      default:
        return "bg-white text-gray-500 rounded-[100px] min-h-[30px] w-[180px]"; // Default styling
    }
  }

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead 
                      className='uppercase'
                      key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => {
                    const cellValue = cell.getValue();
                    const isStatusColumn = cell.column.id === 'status';
                    return (
                    <TableCell 
                    key={cell.id}
                    className={isStatusColumn && `p-2 font-semibold text-left `}> 
                      {isStatusColumn ? <Button className={isStatusColumn ? `max-w-[80px] h-[30px] py-2 px-4 font-semibold text-center ${getStatusStyle(cellValue)}` : ""}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}</Button> 
                        : flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  )
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

       {/* PAGINATION SECTION */}

       <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

