import { createSlice } from "@reduxjs/toolkit";

// use "useSelector" to get the array
const initialState = {
  // get number of element
  //when i make refersh never  back to the first state
  selectedProducts: localStorage.getItem("selectedProducts")
    ? JSON.parse(localStorage.getItem("selectedProducts"))
    : [],

    // get id of element
  selectedProductsID: localStorage.getItem("selectedProductsID")
    ? JSON.parse(localStorage.getItem("selectedProductsID"))
    : [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  // action.payload => product From API => القيمة التى بداخل الاقواس
  reducers: {
    // ===========================================================
    // // اضافته للعربة cart
    // ===========================================================

    addToCart: (state, action) => {
      // action.payload => product From API => القيمة التى بداخل الاقواس
      const productWithQuantity = { ...action.payload, quantity: 1 };
      state.selectedProducts.push(productWithQuantity);
      state.selectedProductsID.push(action.payload.id);

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );
    },
// =============================================
//         // تزيد العدد بواحد كل مرة 
//         ======================================

    increaseQuantity: (state, action) => {
      // action.payload => product From user
      const incresdedProuct = state.selectedProducts.find((item) => {
        return item.id === action.payload.id;
      });

      incresdedProuct.quantity += 1;



      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
    },
      // ====================================================
      // // تقليل 
      // ===================================================
    decreaseQuantity: (state, action) => {
      // action.payload => product From user
      const incresdedProuct = state.selectedProducts.find((item) => {
        // payload.id بتجيب العنصر
        return item.id === action.payload.id;
      });

      incresdedProuct.quantity -= 1;
      if (incresdedProuct.quantity === 0) {
        // delete the selected product
        const newArr = state.selectedProducts.filter((item) => {
          return item.id !== action.payload.id;
        });

        const newArr2 = state.selectedProductsID.filter((item) => {
          return item !== action.payload.id;
        });

        state.selectedProducts = newArr;
        state.selectedProductsID = newArr2;

        localStorage.setItem(
          "selectedProductsID",
          JSON.stringify(state.selectedProductsID)
        );
      }

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
    },
    // ===================================================
    //     // لحذف منتج
    //     ===============================================

    deleteProduct: (state, action) => {
      // delete the selected product
      const newArr = state.selectedProducts.filter((item) => {
        return item.id !== action.payload.id;
      });
          // يقوم بالحذف عندما يكون الكونتيتى تساوى صفر
      const newArr2 = state.selectedProductsID.filter((item) => {
        return item !== action.payload.id;
      });

      state.selectedProducts = newArr;
      state.selectedProductsID = newArr2;
          // يقوم بالتحديث
      localStorage.setItem(
        "selectedProductsID",
        JSON.stringify(state.selectedProductsID)
      );

      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(state.selectedProducts)
      );
    },
  },
});

//  دائماً هتنساهااااااااااااااااااااااااااااااااااااااع
export const { deleteProduct, addToCart, increaseQuantity, decreaseQuantity } =
  counterSlice.actions;

export default counterSlice.reducer;
