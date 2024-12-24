
import { createSlice,configureStore } from "@reduxjs/toolkit"

    const slice = createSlice({
    name:"products",
    initialState:{
        datas:[]
    },
    reducers:{
        addCart(store,action)
        {
            console.log(action)
            store.datas=action.payload
            console.log(store.datas)
        },
    }
}
)

// }

export let myreducers=slice.actions

let Store = configureStore(slice)

export default Store