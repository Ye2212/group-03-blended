import { configureStore } from "@reduxjs/toolkit";
import { contactsSliceReducers } from "./contacts-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

export const persistConfig = {
  key: "contacts",
  storage,
};
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSliceReducers
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});
export const persistor = persistStore(store);
