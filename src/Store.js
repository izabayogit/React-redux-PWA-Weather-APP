import React from "react";
import { Provider } from "react-redux"
import { applyMiddleware } from "redux"
import reduxPromise from "redux-promise"
import { thunk } from "redux-thunk"
import combinedReducers from "./Redux/reducers/index"
import { composeWithDevTools } from "redux-devtools-extension"
import { configureStore } from "@reduxjs/toolkit"

export default ({ children, initialState = {} }) =>
{
        const middleware = applyMiddleware(thunk, reduxPromise);
        const store = configureStore(
                { reducer: combinedReducers },
                initialState,
                composeWithDevTools(middleware)
        )
        return <Provider store={store}> {children}</Provider>
}