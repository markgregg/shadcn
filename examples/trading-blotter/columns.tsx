'use client'

import { createColumnHelper } from '@tanstack/react-table'
import { Checkbox } from '@/components/checkbox'
import type { TradingBlotterRow } from './data'
import { cn } from '@/utils/index'

const columnHelper = createColumnHelper<TradingBlotterRow>()

export const columns = [
  columnHelper.display({
    id: 'select',
    header: ({ table }) => (
      <div className="trading-blotter-select-cell">
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div
        className="trading-blotter-select-cell"
        data-in-selected-row={row.getIsSelected() || undefined}
      >
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  }),

  columnHelper.accessor('status', {
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as TradingBlotterRow['status']
      const isSelected = row.getIsSelected()
      return (
        <div
          className={cn(
            'trading-blotter-pill',
            'trading-blotter-pill-status',
            `trading-blotter-status-${status.toLowerCase()}`,
            isSelected && 'trading-blotter-pill-selected'
          )}
        >
          {status}
        </div>
      )
    },
  }),

  columnHelper.accessor('product', {
    header: 'Product',
    cell: ({ row }) => <span className="text-data-category">{row.getValue('product')}</span>,
  }),

  columnHelper.accessor('ccy', {
    id: 'ccy',
    header: 'CCY1CCY2',
    cell: ({ row }) => <span className="text-data-currency">{row.getValue('ccy')}</span>,
  }),

  columnHelper.accessor('side', {
    header: 'Side',
    cell: ({ row }) => {
      const side = row.getValue('side') as TradingBlotterRow['side']
      const isSelected = row.getIsSelected()
      return (
        <div
          className={cn(
            'trading-blotter-pill',
            'trading-blotter-pill-side',
            `trading-blotter-side-${side.toLowerCase()}`,
            isSelected && 'trading-blotter-pill-selected'
          )}
        >
          {side}
        </div>
      )
    },
  }),

  columnHelper.accessor('execAmount', {
    header: 'Executed Amount',
    cell: ({ row }) => <span className="text-data-primary">{row.getValue('execAmount')}</span>,
    meta: { align: 'right' },
  }),

  columnHelper.accessor('execPrice', {
    header: 'Executed Price',
    cell: ({ row }) => <span className="text-data-primary">{row.getValue('execPrice')}</span>,
    meta: { align: 'right' },
  }),

  columnHelper.accessor('spotPrice', {
    header: 'Spot Price',
    cell: ({ row }) => <span className="text-data-primary">{row.getValue('spotPrice')}</span>,
    meta: { align: 'right' },
  }),

  columnHelper.accessor('fwdPoints', {
    header: 'Forward Points',
    cell: ({ row }) => <span className="text-data-secondary">{row.getValue('fwdPoints')}</span>,
  }),

  columnHelper.accessor('valueDate', {
    header: 'Value Date',
    cell: ({ row }) => <span className="text-data-datetime">{row.getValue('valueDate')}</span>,
  }),

  columnHelper.accessor('modifiedDate', {
    header: 'Modified Date',
    cell: ({ row }) => <span className="text-data-datetime">{row.getValue('modifiedDate')}</span>,
  }),

  columnHelper.accessor('modifiedBy', {
    header: 'Modified By',
    cell: ({ row }) => <span className="text-data-entity">{row.getValue('modifiedBy')}</span>,
  }),

  columnHelper.accessor('ref', {
    header: 'Ref',
    cell: ({ row }) => <span className="text-data-secondary">{row.getValue('ref')}</span>,
  }),

  columnHelper.accessor('lifecycle', {
    header: 'Lifecycle',
    cell: ({ row }) => {
      const lifecycle = row.getValue('lifecycle') as string
      const isComplete = lifecycle === 'Complete'
      const isPending = lifecycle === 'Pending'
      return (
        <span
          className={cn(
            isComplete && 'text-data-status-positive',
            isPending && 'text-data-status-warning',
            !isComplete && !isPending && 'text-data-status-neutral'
          )}
        >
          {lifecycle}
        </span>
      )
    },
  }),
]
