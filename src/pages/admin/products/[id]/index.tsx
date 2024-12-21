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
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate"; // Import add image icon
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
              value={product?.products_details?.sort_description || ""}
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

            {/* Categories */}
            <FormControl fullWidth>
              <InputLabel>Categories</InputLabel>
              <Select
                label="Categories"
                name="categories_id"
                value={product?.categories_id || ""}
                onChange={handleChange}
              >
                <MenuItem value={1}>Default</MenuItem>
                {/* Add more categories dynamically if needed */}
              </Select>
            </FormControl>

            {/* Product Images */}
            <Typography variant="h6">Product Images</Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {product?.products_images?.images?.map(
                (img: string, index: number) => (
                  <Box key={index} sx={{ position: "relative" }}>
                    <img
                      src={img}
                      alt={`Product Image ${index + 1}`}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <Tooltip title="Delete Image">
                      <IconButton
                        onClick={() => handleDeleteImage(img)}
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                          },
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                )
              )}
            </Box>
            {/* Add New Image */}
            {product?.products_images?.images?.length < 4 && (
              <Box>
                <TextField
                  label="New Image URL"
                  variant="outlined"
                  fullWidth
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddImage}
                  sx={{ marginTop: 2 }}
                  startIcon={<AddPhotoAlternateIcon />}
                >
                  Add Image
                </Button>
              </Box>
            )}

            {/* Variants (Size & Color) */}
            <Typography variant="h6">Variants</Typography>
            <div>
              <p>Sizes: {product?.products_variants?.size.join(", ")}</p>
              <p>Colors: {product?.products_variants?.color.join(", ")}</p>
            </div>

            {/* Warranty Information */}
            <Typography variant="h6">Warranty Information</Typography>
            <TextField
              label="Warranty Summary"
              variant="outlined"
              fullWidth
              name="warranty_summary"
              value={
                product?.products_details?.warrantys?.warranty_summary || ""
              }
              onChange={handleChange}
            />
            <TextField
              label="Warranty Service Type"
              variant="outlined"
              fullWidth
              name="warranty_service_type"
              value={
                product?.products_details?.warrantys?.warranty_service_type ||
                ""
              }
              onChange={handleChange}
            />
            <TextField
              label="Covered in Warranty"
              variant="outlined"
              fullWidth
              name="covered_in_warranty"
              value={
                product?.products_details?.warrantys?.covered_in_warranty || ""
              }
              onChange={handleChange}
            />
            <TextField
              label="Not Covered in Warranty"
              variant="outlined"
              fullWidth
              name="not_covered_in_warranty"
              value={
                product?.products_details?.warrantys?.not_covered_in_warranty ||
                ""
              }
              onChange={handleChange}
            />
            <TextField
              label="Domestic Warranty"
              variant="outlined"
              fullWidth
              name="domestic_warranty"
              value={
                product?.products_details?.warrantys?.domestic_warranty || ""
              }
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
