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
  Tooltip,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useGetProductsQuery } from "@/redux/api/productApi";
import Loading from "@/components/Loading";
import { useHistory } from "react-router-dom";

export default function ProductsPage() {
  const {
    data: productsRes,
    isLoading,
    error,
  } = useGetProductsQuery({
    skip: false,
    refetchOnMountOrArgChange: true,
  });

  const history = useHistory(); // Hook for navigation

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = productsRes.data || [
    {
      id: 1,
      name: "Modern L-Shaped Sofa",
      description:
        "A modern L-shaped sofa with fabric and polyester upholstery, offering comfort and style in Ocean Blue & Ash Grey colors.",
      SKU: "MODERN-SOFA-L123",
      tags: ["furniture", "sofa", "living room"],
      created_at: "2024-11-26T11:13:18.300Z",
      image:
        "http://res.cloudinary.com/dmodnm4xp/image/upload/v1732619130/ytu5krejibm4ag1gkbb7.webp",
      price: 500,
      sale_percent: 10,
    },
  ];

  const handleViewProduct = (productId: number) => {
    // Navigate to the product details page
    history.push(`/products/${productId}`);
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <Typography
          variant="h4"
          gutterBottom
          className="font-bold text-gray-900"
        >
          Products
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ mb: 2 }}
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          Add Product
        </Button>
      </div>
      <TableContainer component={Paper} className="shadow-md rounded-lg">
        <Table>
          <TableHead className="bg-gray-50">
            <TableRow>
              <TableCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </TableCell>
              <TableCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </TableCell>
              <TableCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </TableCell>
              <TableCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </TableCell>
              <TableCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sale Percent
              </TableCell>
              <TableCell className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <TableRow key={product.id} className="hover:bg-gray-100">
                <TableCell className="px-6 py-4">{product.id}</TableCell>
                <TableCell className="px-6 py-4">{product.name}</TableCell>
                <TableCell className="px-6 py-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </TableCell>
                <TableCell className="px-6 py-4">
                  $
                  {(
                    product.price -
                    (product.price * product.sale_percent) / 100
                  ).toFixed(2)}
                </TableCell>
                <TableCell className="px-6 py-4">
                  {product.sale_percent}%
                </TableCell>
                <TableCell className="px-6 py-4 flex space-x-2">
                  {/* View Button */}
                  <Tooltip title="View">
                    <IconButton
                      onClick={() => handleViewProduct(product.id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>

                  {/* Edit Button */}
                  <Tooltip title="Edit">
                    <IconButton className="text-indigo-600 hover:text-indigo-900">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>

                  {/* Delete Button */}
                  <Tooltip title="Delete">
                    <IconButton className="text-red-600 hover:text-red-900">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
}
