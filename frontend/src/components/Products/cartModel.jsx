import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Paper,
  TextField,
  Stack,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Link } from "react-router-dom";

const CartPage = ({ cartItems, onRemoveFromCart, onChangeQuantity }) => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    pinCode: "",
    nearPlace: "",
    onlinePaymentOption: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBuyNow = () => {
    if (
      !form.name.trim() ||
      !form.address.trim() ||
      !form.phone.trim() ||
      !form.pinCode.trim() ||
      !form.nearPlace.trim()
    ) {
      alert("Please fill all shipping fields before proceeding.");
      return;
    }

    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (paymentMethod === "Online Payment" && !form.onlinePaymentOption) {
      alert("Please select an Online Payment option.");
      return;
    }

    console.log("Order details:", {
      cartItems,
      totalPrice,
      shippingDetails: form,
      paymentMethod,
      onlinePaymentOption:
        paymentMethod === "Online Payment" ? form.onlinePaymentOption : null,
    });

    alert(
      `Thank you for your purchase!\n\nPayment Method: ${
        paymentMethod === "Cash on Delivery"
          ? "Cash on Delivery"
          : `Online Payment (${form.onlinePaymentOption})`
      }\nTotal Amount: ₹${totalPrice.toFixed(2)}`
    );
  };

  return (
    <Box
      sx={{
        maxWidth: 900,
        margin: { xs: "1rem", sm: "4rem auto" },
        px: { xs: 1, sm: 4 },
        py: { xs: 2, sm: 4 },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "700",
          color: "#088178",
          mb: { xs: 2, sm: 3 },
          fontSize: { xs: "1.6rem", sm: "2.2rem" },
          textAlign: "center",
        }}
      >
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography
          variant="body1"
          sx={{ fontSize: "1.1rem", textAlign: "center", mt: 5 }}
        >
          Your cart is empty.{" "}
          <Link to="/" style={{ color: "#088178", fontWeight: "600" }}>
            Go shopping
          </Link>
        </Typography>
      ) : (
        <>
          {/* Cart Table */}
          <Paper
            elevation={3}
            sx={{
              borderRadius: 3,
              mb: { xs: 3, sm: 4 },
              p: { xs: 0, sm: 2 },
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Table
              sx={{
                minWidth: "100%",
                borderCollapse: "separate",
                borderSpacing: "0 10px",
                "& th, & td": {
                  fontSize: { xs: "0.75rem", sm: "1rem" },
                  padding: { xs: "6px 8px", sm: "12px 16px" },
                  verticalAlign: "middle",
                },
              }}
              aria-label="cart table"
            >
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f0f5f4" }}>
                  <TableCell
                    sx={{ fontWeight: 700, fontSize: { xs: "0.75rem", sm: "1rem" } }}
                  >
                    Product
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: 700, fontSize: { xs: "0.75rem", sm: "1rem" } }}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: 700, fontSize: { xs: "0.75rem", sm: "1rem" } }}
                  >
                    Qty
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: 700, fontSize: { xs: "0.75rem", sm: "1rem" } }}
                  >
                    Total
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{
                      backgroundColor: "#ffffff",
                      borderRadius: 2,
                      boxShadow:
                        "0px 1px 3px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.1)",
                      "&:last-child td": { borderBottom: 0 },
                    }}
                  >
                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", sm: "row" },
                          alignItems: "center",
                          gap: { xs: 0.5, sm: 2 },
                          whiteSpace: "normal",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          width={60}
                          height={60}
                          style={{ borderRadius: 10, objectFit: "cover" }}
                        />
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: { xs: "0.8rem", sm: "1rem" },
                            wordBreak: "break-word",
                            textAlign: { xs: "center", sm: "left" },
                            maxWidth: 160,
                          }}
                          noWrap
                          title={item.name}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}
                    >
                      ₹{item.price.toFixed(2)}
                    </TableCell>

                    <TableCell align="center">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 1,
                        }}
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => {
                            if (item.quantity > 1) {
                              onChangeQuantity(item.id, -1);
                            } else {
                              onRemoveFromCart(item.id);
                            }
                          }}
                          sx={{
                            minWidth: 24,
                            fontWeight: "bold",
                            borderColor: "#088178",
                            color: "#088178",
                            fontSize: "0.85rem",
                            padding: "2px",
                            "&:hover": {
                              backgroundColor: "#e0f2f1",
                              borderColor: "#088178",
                            },
                          }}
                        >
                          -
                        </Button>

                        <Typography
                          component="span"
                          sx={{
                            mx: 0.8,
                            fontWeight: 600,
                            fontSize: "0.9rem",
                            minWidth: 20,
                            textAlign: "center",
                          }}
                        >
                          {item.quantity}
                        </Typography>

                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => onChangeQuantity(item.id, +1)}
                          sx={{
                            minWidth: 24,
                            fontWeight: "bold",
                            borderColor: "#088178",
                            color: "#088178",
                            fontSize: "0.85rem",
                            padding: "2px",
                            "&:hover": {
                              backgroundColor: "#e0f2f1",
                              borderColor: "#088178",
                            },
                          }}
                        >
                          +
                        </Button>
                      </Box>
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: "0.85rem", sm: "1.1rem" },
                        color: "#088178",
                      }}
                    >
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}

                {/* Total row */}
                <TableRow>
                  <TableCell
                    colSpan={3}
                    align="right"
                    sx={{ fontSize: { xs: "0.9rem", sm: "1.2rem" }, fontWeight: "bold" }}
                  >
                    Total:
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "1rem", sm: "1.3rem" },
                      color: "#088178",
                    }}
                  >
                    ₹{totalPrice.toFixed(2)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>

          <Divider sx={{ mb: 4 }} />

          {/* Shipping Details */}
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, sm: 4 },
              borderRadius: 3,
              backgroundColor: "#f9fdfc",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: "#088178",
                mb: 3,
                fontSize: { xs: "1.5rem", sm: "2rem" },
                textAlign: "center",
              }}
            >
              Shipping Details
            </Typography>

            <Stack spacing={3}>
              <TextField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                fullWidth
                required
                sx={{ bgcolor: "white", borderRadius: 1 }}
                placeholder="Your full name"
                size="small"
              />
              <TextField
                label="Address"
                name="address"
                value={form.address}
                onChange={handleChange}
                multiline
                rows={3}
                fullWidth
                required
                sx={{ bgcolor: "white", borderRadius: 1 }}
                placeholder="Street, house number, etc."
                size="small"
              />
              <TextField
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                fullWidth
                required
                sx={{ bgcolor: "white", borderRadius: 1 }}
                placeholder="10-digit mobile number"
                size="small"
              />
              <TextField
                label="Pin Code"
                name="pinCode"
                value={form.pinCode}
                onChange={handleChange}
                fullWidth
                required
                sx={{ bgcolor: "white", borderRadius: 1 }}
                placeholder="Postal code"
                size="small"
              />
              <TextField
                label="Near Place"
                name="nearPlace"
                value={form.nearPlace}
                onChange={handleChange}
                fullWidth
                required
                sx={{ bgcolor: "white", borderRadius: 1 }}
                placeholder="Landmark or nearby location"
                size="small"
              />
            </Stack>

            {/* Payment Method */}
            <Box mt={5}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "#088178", mb: 2, textAlign: "center" }}
              >
                Payment Method
              </Typography>
              <RadioGroup
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                row
                sx={{ justifyContent: "center" }}
              >
                <FormControlLabel
                  value="Cash on Delivery"
                  control={
                    <Radio
                      sx={{
                        color: "#088178",
                        "&.Mui-checked": { color: "#088178" },
                      }}
                    />
                  }
                  label="Cash on Delivery"
                />
                <FormControlLabel
                  value="Online Payment"
                  control={
                    <Radio
                      sx={{
                        color: "#088178",
                        "&.Mui-checked": { color: "#088178" },
                      }}
                    />
                  }
                  label="Online Payment"
                />
              </RadioGroup>

              {/* Online Payment Options */}
              {paymentMethod === "Online Payment" && (
                <Box mt={2} textAlign="center">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, color: "#088178", mb: 1 }}
                  >
                    Choose Online Payment Option:
                  </Typography>
                  <RadioGroup
                    name="onlinePaymentOption"
                    value={form.onlinePaymentOption}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        onlinePaymentOption: e.target.value,
                      }))
                    }
                    row
                    sx={{ justifyContent: "center" }}
                  >
                    <FormControlLabel
                      value="PhonePe"
                      control={
                        <Radio
                          sx={{
                            color: "#088178",
                            "&.Mui-checked": { color: "#088178" },
                          }}
                        />
                      }
                      label="PhonePe"
                    />
                    <FormControlLabel
                      value="Google Pay"
                      control={
                        <Radio
                          sx={{
                            color: "#088178",
                            "&.Mui-checked": { color: "#088178" },
                          }}
                        />
                      }
                      label="Google Pay"
                    />
                    <FormControlLabel
                      value="Net Banking / UPI"
                      control={
                        <Radio
                          sx={{
                            color: "#088178",
                            "&.Mui-checked": { color: "#088178" },
                          }}
                        />
                      }
                      label="Net Banking / UPI"
                    />
                  </RadioGroup>
                </Box>
              )}
            </Box>

            <Box mt={5} textAlign="center">
              <Button
                variant="contained"
                size="large"
                onClick={handleBuyNow}
                sx={{
                  backgroundColor: "#088178",
                  px: { xs: 3, sm: 5 },
                  py: { xs: 1.5, sm: 1.8 },
                  fontWeight: 700,
                  fontSize: { xs: "1rem", sm: "1.2rem" },
                  borderRadius: 3,
                  boxShadow: "0 6px 12px rgba(8, 129, 120, 0.5)",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#056257",
                    boxShadow: "0 8px 15px rgba(5, 98, 87, 0.7)",
                  },
                }}
              >
                Buy Now
              </Button>
            </Box>
          </Paper>
        </>
      )}
    </Box>
  );
};

export default CartPage;
