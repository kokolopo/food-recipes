import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registerSlice from "../slices/registerSlice";
import recipesSlice from "../slices/recipesSlice";
import detailRecipeSlice from "../slices/detailRecipeSlice";
import myRecipesSlice from "../slices/myRecipesSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  recipes: recipesSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    reducer: persistedReducer,
    register: registerSlice,
    recipes: recipesSlice,
    detail: detailRecipeSlice,
    myrecipes: myRecipesSlice,
  },
});

export const persistor = persistStore(store);
