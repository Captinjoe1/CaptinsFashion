import Products from "../../products.content";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: Products,
  filteredItems: Products,
  searchTerm: "",
  selectedCategory: "All",
};

// 🔍 Filter products based on search term and selected category
const filterProducts = (state) => {
  const term = state.searchTerm.trim().toLowerCase();
  const category = state.selectedCategory;

  return state.items.filter((product) => {
    const matchesSearch =
      !term ||
      product?.name?.toLowerCase().includes(term) ||
      product?.category?.toLowerCase().includes(term) ||
      product?.description?.toLowerCase().includes(term);

    const matchesCategory =
      category === "All" || product?.category === category;

    return matchesSearch && matchesCategory;
  });
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredItems = filterProducts(state);
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredItems = filterProducts(state);
    },
    resetFilter: (state) => {
      state.searchTerm = "";
      state.selectedCategory = "All";
      state.filteredItems = state.items;
    },
  },
});

export const { setSearchTerm, setSelectedCategory, resetFilter } = productSlice.actions;
export default productSlice.reducer;
