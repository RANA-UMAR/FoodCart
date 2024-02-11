const initialState = {
  carts: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      // eslint-disable-next-line no-case-declarations
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        // If item already exists, create a new array with updated quantity
        const updatedCarts = state.carts.map((item, index) =>
          index === itemIndex ? { ...item, qnty: item.qnty + 1 } : item
        );
        return {
          ...state,
          carts: updatedCarts,
        };
      } else {
        // If item does not exist, add it to the cart
        const newItem = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, newItem],
        };
      }

    case "DELETE_CART":
      // eslint-disable-next-line no-case-declarations
      const updatedCarts = state.carts.filter((item) => item.id !== action.payload);
      return {
        ...state,
        carts: updatedCarts,
      };

      case "MINUS_BTN":
      // eslint-disable-next-line no-case-declarations
      const itemIndex_dec = state.carts.findIndex((item) => item.id === action.payload.id);
      if (itemIndex_dec >= 0) {
        // If item already exists, create a new array with updated quantity
        const updatedCarts = state.carts.map((item, index) =>
          index === itemIndex_dec ? { ...item, qnty: item.qnty - 1 } : item
        );
        return {
          ...state,
          carts: updatedCarts,
        };
      } else if(state.carts[itemIndex_dec].qnty === 1){
        // If item does not exist, add it to the cart
        const data = state.carts.filter((elem)=>elem.id !== action.payload)
        // const newItem = { ...action.payload, qnty: 1 };
      
        return {
          ...state,
          carts:data,
        };
    }

    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};
