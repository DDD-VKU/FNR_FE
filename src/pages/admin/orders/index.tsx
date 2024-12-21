import AdminLayout from "../layout";
import {
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function OrdersPage() {
  const orders = [
    {
      id: 1,
      customer: "John Doe",
      date: "2023-05-01",
      total: 99.99,
      status: "Completed",
    },
    {
      id: 2,
      customer: "Jane Smith",
      date: "2023-05-02",
      total: 149.99,
      status: "Processing",
    },
    {
      id: 3,
      customer: "Bob Johnson",
      date: "2023-05-03",
      total: 199.99,
      status: "Shipped",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "success";
      case "Processing":
        return "warning";
      case "Shipped":
        return "info";
      default:
        return "default";
    }
  };

  return (
    <AdminLayout>
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>
      <Button variant="contained" startIcon={<AddIcon />} sx={{ mb: 2 }}>
        Add Order
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Chip
                    label={order.status}
                    color={getStatusColor(order.status) as any}
                  />
                </TableCell>
                <TableCell>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                  <Button size="small" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
}
