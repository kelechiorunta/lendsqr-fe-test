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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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

import { DoubleArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons'



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
        return "px-12 bg-[#f3fcf6] text-[#91e3a8] rounded-[100px] min-h-[30px] w-[180px]"; // Example: green background for active status
      case "Inactive":
        return "px-12 text-[#8f95a9] bg-[#f5f5f7] rounded-[100px] min-h-[30px] w-[180px]"; // Example: gray background for inactive status
      case "Pending":
        return "px-12 bg-[#fdf7e5] text-[#f3d472] rounded-[100px] min-h-[30px] w-[180px]"; // Example: yellow background for pending status
      case "Blacklisted":
        return "px-12 bg-[#fce6eb] text-[#ef6b8c] rounded-[100px] min-h-[30px] w-[180px]"; // Example: red background for error status
      default:
        return "px-12 bg-white text-gray-500 rounded-[100px] min-h-[30px] w-[180px]"; // Default styling
    }
  }

  return (
    <div>
      <div className="rounded-md border overflow-visible">
        <Table className='overflow-visible'>
          <TableHeader className='overflow-visible'>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead 
                      className='uppercase font-extrabold overflow-visible'
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
                      {isStatusColumn ? <Button className={isStatusColumn ? `max-w-[80px] h-[30px] py-2 px-8 font-semibold text-center ${getStatusStyle(cellValue)}` : ""}>
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

       <div className="flex items-center justify-between space-x-6 lg:space-x-8 max-sm:flex-wrap">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Showing</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value))
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={table.getState().pagination.pageSize} />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm font-medium">out of 100</p>
          </div>
          {/* <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div> */}
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to first page</span>
              <DoubleArrowLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to previous page</span>
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to next page</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to last page</span>
              <DoubleArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      




       {/* <div className="flex items-center justify-end space-x-2 py-4">
       <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
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
      </div> */}
    </div>
  )
}

