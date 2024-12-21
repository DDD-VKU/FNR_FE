import { useEffect, useState } from "react";
import {
  Typography,
  Button,
  TextField,
  Paper,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Tooltip,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {
  useGetProductsByIdQuery,
  useUpdateProductMutation,
} from "@/redux/api/productApi";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";
import AdminLayout from "../../layout";

const ProductDetailPage = () => {
  const route = useRouter();
  const { id } = route.query;
  const { data, isLoading, error } = useGetProductsByIdQuery(id);
  const [updateProduct] = useUpdateProductMutation();

  const [product, setProduct] = useState<any>(null);
  const [newImage, setNewImage] = useState<string>("");

  useEffect(() => {
    if (data) {
      setProduct(data.data);
    }
  }, [data]);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | { name?: string | undefined; value: unknown }
    >
  ) => {
    const { name, value } = event.target;
    setProduct((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await updateProduct(product);
      alert("Product updated successfully!");
      route.push("/admin/products");
    } catch (err) {
      console.error("Failed to update product:", err);
    }
  };

  const handleDeleteImage = (image: string) => {
    const newImages = product?.products_images?.images.filter(
      (img: string) => img !== image
    );
    setProduct((prev: any) => ({
      ...prev,
      products_images: {
        ...prev.products_images,
        images: newImages,
      },
    }));
  };

  const handleAddImage = () => {
    if (newImage && product?.products_images?.images.length < 4) {
      setProduct((prev: any) => ({
        ...prev,
        products_images: {
          ...prev.products_images,
          images: [...prev.products_images.images, newImage],
        },
      }));
      setNewImage(""); // Clear input after adding image
    } else {
      alert("You can only add up to 4 images.");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading product: {error.message}</div>;
  }

  return (
    <AdminLayout>
      <Box sx={{ padding: 4 }}>
        <Paper sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom>
            Product Details - {product?.name}
          </Typography>

          <Stack spacing={3}>
            {/* Product Name */}
            <TextField
              label="Product Name"
              variant="outlined"
              fullWidth
              name="name"
              value={product?.name || ""}
              onChange={handleChange}
            />

            {/* SKU */}
            <TextField
              label="SKU"
              variant="outlined"
              fullWidth
              name="SKU"
              value={product?.SKU || ""}
              onChange={handleChange}
            />

            {/* Short Description */}
            <TextField
              label="Short Description"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              name="short_description"
              value={product?.products_details?.short_description || ""}
              onChange={handleChange}
            />

            {/* Long Description */}
            <TextField
              label="Long Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="long_description"
              value={product?.products_details?.long_description || ""}
              onChange={handleChange}
            />

            {/* Price */}
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              name="price"
              value={product?.products_prices?.price || ""}
              onChange={handleChange}
            />

            {/* Sale Percent */}
            <TextField
              label="Sale Percent"
              variant="outlined"
              fullWidth
              name="sale_percent"
              value={product?.products_prices?.sale_percent || ""}
              onChange={handleChange}
            />

            {/* Dimensions Fields */}
            <Typography variant="h6">Dimensions</Typography>
            <Stack direction="row" spacing={2}>
              <TextField
                label="Width"
                variant="outlined"
                fullWidth
                name="width"
                value={product?.dimensions?.width || ""}
                onChange={handleChange}
              />
              <TextField
                label="Height"
                variant="outlined"
                fullWidth
                name="height"
                value={product?.dimensions?.height || ""}
                onChange={handleChange}
              />
              <TextField
                label="Depth"
                variant="outlined"
                fullWidth
                name="depth"
                value={product?.dimensions?.depth || ""}
                onChange={handleChange}
              />
            </Stack>
            <Stack direction="row" spacing={2}>
              <TextField
                label="Weight"
                variant="outlined"
                fullWidth
                name="weight"
                value={product?.dimensions?.weight || ""}
                onChange={handleChange}
              />
              <TextField
                label="Seat Height"
                variant="outlined"
                fullWidth
                name="seat_height"
                value={product?.dimensions?.seat_height || ""}
                onChange={handleChange}
              />
              <TextField
                label="Leg Height"
                variant="outlined"
                fullWidth
                name="leg_height"
                value={product?.dimensions?.leg_height || ""}
                onChange={handleChange}
              />
            </Stack>

            {/* General Fields */}
            <Typography variant="h6">General Information</Typography>
            <Stack direction="row" spacing={2}>
              <TextField
                label="Sales Package"
                variant="outlined"
                fullWidth
                name="sales_package"
                value={product?.general?.sales_package || ""}
                onChange={handleChange}
              />
              <TextField
                label="Model Number"
                variant="outlined"
                fullWidth
                name="model_number"
                value={product?.general?.model_number || ""}
                onChange={handleChange}
              />
            </Stack>
            <Stack direction="row" spacing={2}>
              <TextField
                label="Secondary Material"
                variant="outlined"
                fullWidth
                name="secondary_material"
                value={product?.general?.secondary_material || ""}
                onChange={handleChange}
              />
              <TextField
                label="Configuration"
                variant="outlined"
                fullWidth
                name="configuration"
                value={product?.general?.configuration || ""}
                onChange={handleChange}
              />
              <TextField
                label="Upholstery Material"
                variant="outlined"
                fullWidth
                name="upholstery_material"
                value={product?.general?.upholstery_material || ""}
                onChange={handleChange}
              />
            </Stack>
            <TextField
              label="Upholstery Color"
              variant="outlined"
              fullWidth
              name="upholstery_color"
              value={product?.general?.upholstery_color || ""}
              onChange={handleChange}
            />

            {/* Created At */}
            <TextField
              label="Created At"
              variant="outlined"
              fullWidth
              name="created_at"
              value={product?.created_at || ""}
              disabled
            />

            {/* Save and Cancel Buttons */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save Changes
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => route.push("/admin/products")}
              >
                Cancel
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Box>
    </AdminLayout>
  );
};

export default ProductDetailPage;
