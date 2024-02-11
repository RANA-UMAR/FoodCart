export const ADD =(items)=>{
    return{
        type:"ADD_CART",
        payload:items
    }
}


export const DELETE =(id)=>{
    return{
        type:"DELETE_CART",
        payload:id
    }
}

export const MINUS =(item)=>{
    return{
        type:"MINUS_BTN",
        payload:item
    }
}