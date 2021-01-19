export const initialState = {
    basket: [{
        id:"123644",
                    title:"Outdoor Security Camera, 1080P WiFi Camera Surveillance Cameras, IP Camera with Two-Way Audio",
                    price:56.65,
                    rating: 5,
                    image:"https://images-na.ssl-images-amazon.com/images/I/71Cj-5UMIdL._AC_UL320_SR320,320_.jpg"




    },
    ],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
            break;
        case "REMOVE_FROM_BASKET":
            break;
        default:
            return state;
    }
};

export default reducer;