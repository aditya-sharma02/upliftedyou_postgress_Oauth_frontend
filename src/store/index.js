import { configureStore } from "@reduxjs/toolkit"
import LoggingSlice from "./slice/LoggingSlice"


export const store = configureStore({
    reducer: {
        logging:LoggingSlice
    }
})
