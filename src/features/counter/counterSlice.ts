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
        }else{

					const index = state.favorites.findIndex( (x:any) => x.id == action.payload.id );
          state.favorites[index].count += 1;
        }

      }else{
        state.favorites.push({id: action.payload.id, name: action.payload.name,
                         count:1, price:action.payload.price, 
                         img:action.payload.img}); 
      }
  
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
    

			// if(state.cart.some( (obj:any) => obj.id == action.payload.id )) {

			// 	const index = state.cart.map( (e:any) => e.id ).indexOf(action.payload.id);
 
			// 	if(state.cart[index].count == 1){
			// 		state.cart.splice(index,1)
			// 	} else{
			// 		state.cart[index].count -= 1;
			// 	}

			// } 
			
			// else {

      //   state.cart.push({id: action.payload.id, name: action.payload.name,
      //                    count:1, price:action.payload.price, 
      //                    img:action.payload.img}); 
      // }
		},

    increment: (state:any) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state:any) => {
      state.value -= 1
    },
    incrementByAmount: (state:any, action:any) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,
               addToCart, addToFavorities } = counterSlice.actions

export default counterSlice.reducer