
import { createSlice,configureStore } from "@reduxjs/toolkit"

    const slice = createSlice({
    name:"products",
    initialState:{
        datas:[],
        accessperson:[
            {
                name:"kesavaraj",
                email:"kesavaraj48@gmail.com",
                password:"12345678",
                accesstype:"admin"
            },
            {
                name:"kesavaraj",
                email:"vijaykrishnan@gmail.com",
                password:"12345678",
                accesstype:"user"  
            }
        ]
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