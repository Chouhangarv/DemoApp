import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
   data:"0"
  };



//   export const addLike=createAsyncThunk(
//     "users/like",
//     async (body, { rejectWithValue }) => {
//         const response = await axios.post(`http://localhost:7000/blog/likes/${body}/true`,
//         {headers: {
//           "Content-Type":"application/json"
//         }});
//         return response; 
//     }
//   );

  

  


const kioskSlice = createSlice({
    name: "kiosk",
    initialState,
   reducers:{
   },
    extraReducers: {
      //reducers for action send by createasyncthunk
    },
  });


  export default kioskSlice.reducer;
// export const {clearState}=crudSlice.actions;
  
  