import  {configureStore} from '@reduxjs/toolkit' 
import cartSlice from '../Slice/CartSlice'

const cartStore = configureStore({
    reducer:{
        cart:cartSlice
    }
})

export default cartStore