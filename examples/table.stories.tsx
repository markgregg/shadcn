import type { Story } from '@ladle/react'
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '../src/components/table'

const invoices = [
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: '$550.00' },
]

export const Default: Story = () => (
  <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead style={{ width: 100 }}>Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead style={{ textAlign: 'right' }}>Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {invoices.map((inv) => (
        <TableRow key={inv.invoice}>
          <TableCell style={{ fontWeight: 500 }}>{inv.invoice}</TableCell>
          <TableCell>{inv.status}</TableCell>
          <TableCell>{inv.method}</TableCell>
          <TableCell style={{ textAlign: 'right' }}>{inv.amount}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell style={{ textAlign: 'right' }}>$1,750.00</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
)

export const Simple: Story = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Role</TableHead>
        <TableHead>Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Alice Johnson</TableCell>
        <TableCell>Admin</TableCell>
        <TableCell>Active</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Bob Smith</TableCell>
        <TableCell>Editor</TableCell>
        <TableCell>Active</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Carol White</TableCell>
        <TableCell>Viewer</TableCell>
        <TableCell>Inactive</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)
