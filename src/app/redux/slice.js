const { createSlice, nanoid, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = { users: [], userApiData: [] };

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
});

const Slice = createSlice({
  name: "ADD_USER_SLICE",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = { id: nanoid(), name: action.payload };
      state.users.push(data);
    },
    removeUser: (state, action) => {
      const remainingUsers = state.users.filter(
        (item) => item.id !== action.payload
      );

      state.users = remainingUsers;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
      state.isloading = false;
      state.userApiData = action.payload;
    });
  },
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
