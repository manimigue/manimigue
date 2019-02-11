export const inputAddress = (address)=>({
  type: 'INPUT_ADDRESS',
  payload: {
    address
  }
});

export const addAddress = (address)=>({
  type: 'ADD_ADDRESS',
  payload: {
    address
  }
});
