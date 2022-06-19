import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
	cart: [],
	favorites: []
}

type product = {
	id:number,
	name: string,
	img: string,
	count: number,
	price: number
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    addToFavorities: (state:any, action:any) => {

			if(state.favorites.length > 0){
        if(!state.favorites.some( (obj:any) => obj.id == action.payload.id )){
            state.favorites.push({
              id: action.payload.id, 
              name: action.payload.name,
              price:action.payload.price, 
              img:action.payload.img,
              count:1});
        }
      }else{
        state.favorites.push({id: action.payload.id, name: action.payload.name,
                         count:1, price:action.payload.price, 
                         img:action.payload.img}); 
      }
  
    },

    removeFromFavorites: (state:any, action:any) => {
      const index = state.favorites.map( (e:any) => e.id ).indexOf(action.payload.id);
      state.favorites.splice(index, 1)   
    },

		addToCart: (state:any, action:any) => {

			if(state.cart.length > 0){
        if(!state.cart.some( (obj:any) => obj.id == action.payload.id )){
            state.cart.push({
              id: action.payload.id, 
              name: action.payload.name,
              price:action.payload.price, 
              img:action.payload.img,
              count:1});
        }else{

          // const index = state.cart.map( ((e:product) => e.id ).indexOf(action.payload.id);
					const index = state.cart.findIndex( (x:any) => x.id == action.payload.id );
          state.cart[index].count += 1;
        }

      }else{
        state.cart.push({id: action.payload.id, name: action.payload.name,
                         count:1, price:action.payload.price, 
                         img:action.payload.img}); 
      }
    },

    remove_from_cart: (state:any, action:any) => {

      if(state.cart.some( (obj:any) => obj.id == action.payload.id )){

        console.log(action.payload.id)

        const index = state.cart.map( (e:any) => e.id ).indexOf(action.payload.id);
 
        if(state.cart[index].count == 1){
          state.cart.splice(index,1)
        }else{
          state.cart[index].count -= 1;
        }
      }
    },

    clearCart: (state:any) => {
      state.cart = [];
    },

    clearFavorites: (state:any) => {
      state.favorites = [];
    },

  },
})

// Action creators are generated for each case reducer function
export const { addToCart, addToFavorities, 
               remove_from_cart, removeFromFavorites, 
               clearCart, clearFavorites} = counterSlice.actions

export default counterSlice.reducer