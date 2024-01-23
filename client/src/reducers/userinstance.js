import { createSlice } from "@reduxjs/toolkit";
const userLocal = JSON.parse(localStorage.getItem("user")) || "";
const contractInstanceLocal =
  JSON.parse(localStorage.getItem("contractInstance")) || "";
const balanceLocal = JSON.parse(localStorage.getItem("balance")) || "";
// const contractLocal = JSON.parse(localStorage.getItem("contract")) || "";
const providerLocal = JSON.parse(localStorage.getItem("provider")) || {};
const signerLocal = JSON.parse(localStorage.getItem("signer")) || {};
const initialState = {
  userAddress: userLocal,
  contractInstance: contractInstanceLocal,
  balance: balanceLocal,
  provider: providerLocal,
  signer: signerLocal,
};

const userInstance = createSlice({
  name: "user11",
  initialState,
  reducers: {
    setUserAddress: (state, action) => {
      state.userAddress = action.payload;
      localStorage.setItem("user", JSON.stringify(state.userAddress));
    },
    setContractInstance: (state, action) => {
      state.contractInstance = action.payload;
      localStorage.setItem(
        "contractInstance",
        JSON.stringify(state.contractInstance)
      );
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
      localStorage.setItem("balance", JSON.stringify(state.balance));
    },
    setContract: (state, action) => {
      state.contract = action.payload;
    },
    setSigner: (state, action) => {
      state.signer = action.payload;
      localStorage.setItem("signer", JSON.stringify(state.signer));
    },
    setProvider: (state, action) => {
      state.provider = action.payload;
      localStorage.setItem("provider", JSON.stringify(state.provider));
    },
  },
});

export const {
  setUserAddress,
  setContractInstance,
  setBalance,
  setContract,
  setSigner,
  setProvider,
} = userInstance.actions;

export default userInstance.reducer;
