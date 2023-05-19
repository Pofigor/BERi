import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../slices/product.slice';
import DeliveryAddressReducer from '../slices/DeliveryAddress/deliveryAddress.slice';
import AddNewAddressBtn from '../slices/DeliveryAddress/addAddressButton.slice';
import UserReducer from '../slices/User/user.slice';
import ActivateReducer from '../slices/activebutton.slice'
import CategoriesReducer from '../slices/categories.slice'
import CartSlice from '../slices/shopCard/card.slice';

export const store = configureStore({
  reducer: {
    ProductReducer,
    DeliveryAddressReducer,
    AddNewAddressBtn,
    UserReducer,
    ActivateReducer,
    CategoriesReducer,
    CartSlice,
  },
});

export default store;
