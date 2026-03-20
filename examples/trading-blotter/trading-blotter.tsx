'use client'

import * as React from 'react'
import { cn } from '@/utils/index'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { columns } from './columns'
import { tradingBlotterData } from './data'

export function TradingBlotter() {
  const [rowSelection, setRowSelection] = React.useState<Record<string, boolean>>({
    'blotter-3': true,
  })

  const table = useReactTable({
    data: tradingBlotterData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    getRowId: (row) => row.id,
  })

  return (
    <div className="trading-blotter-shell">
      <div className="trading-blotter-scroll">
        <table className="trading-blotter-table">
          <TableHeader className="trading-blotter-header">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="trading-blotter-header-row">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={cn(
                      'trading-blotter-header-cell',
                      (header.column.columnDef.meta as { align?: string })?.align === 'right' &&
                        'trading-blotter-align-right'
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="trading-blotter-row"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={cn(
                        'trading-blotter-cell',
                        (cell.column.columnDef.meta as { align?: string })?.align === 'right' &&
                          'trading-blotter-align-right'
                      )}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className="trading-blotter-empty-row">
                <TableCell colSpan={columns.length} className="trading-blotter-empty-cell">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </table>
      </div>
    </div>
  )
}
