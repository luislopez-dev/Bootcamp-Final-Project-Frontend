import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'

const TestView = () => {

  const count = useSelector((state:any) => state.counter.value)
  const dispatch = useDispatch()

    return (
      <div>
        <Button onClick={() => dispatch(increment())}>add</Button>
        <br />
        <span>{count}</span>
        <br />
        <Button  onClick={() => dispatch(decrement())}>rest</Button>
      </div>
    )
}

export default TestView;