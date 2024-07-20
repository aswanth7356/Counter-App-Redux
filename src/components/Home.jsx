import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment,decrement,reset,incrementByAmount } from '../redux/counterSlice'

function Home() {

  const [amnt,setAmnt] = useState(0)

  const dispatch=useDispatch()
  const count= useSelector((state)=>state.counterReducer.count)


  return (
    <>
      <div className='bg-dark w-100 d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
        <div className='w-50 border border-light border-3 shadow p-5'>
            <h3 className='text-center text-danger'>Counter</h3>
            <h4 className='text-center text-white'>{count}</h4>

            <div className='d-flex justify-content-between mt-4 p-3'>
                <button className='btn btn-success' onClick={()=>dispatch(increment())}>Increment +</button>
                <button className='btn btn-info' onClick={()=>dispatch(reset())}>Reset</button>
                <button className='btn btn-danger' onClick={()=>dispatch(decrement())}>Decrement -</button>
            </div>

            <div className='p-3 mt-4'>
              <input type="text" className='form-control' placeholder='enter amount for increment' onChange={(e)=>setAmnt(e.target.value)} />
              <button className='btn btn-secondary mt-3' onClick={()=>dispatch(incrementByAmount(Number(amnt)))}>increment By Amount</button>
            </div>
        </div>

      </div>
    </>
  )
}

export default Home
