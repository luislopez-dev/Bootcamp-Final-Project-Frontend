import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, clearFavorites } from '../features/counter/counterSlice';

const TestView = () => {

  const count = useSelector((state:any) => state.counter.value)
  const dispatch = useDispatch()

    return (
      <div>
        <Button variant='contained' onClick={ () => dispatch(clearCart())}>Clear cart</Button>  
        <Button variant='contained' onClick={ () => dispatch(clearFavorites())}>Clear favorites</Button>      
      </div>
    )
}

export default TestView;