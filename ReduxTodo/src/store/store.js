import {configureStore} from '@reduxjs/toolkit'
import todoSlice from './features/';

const reducer = {todo:todoSlice};
const store = configureStore({
    reducer: reducer,
    devTools:true,
});
export default store;