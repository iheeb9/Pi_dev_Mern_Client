import React from 'react'
import Loading from './Loading'
import { useSelector,useDispatch } from 'react-redux'
import Toast from './Toast'
export default function Notify() {
const {notif}= useSelector(state=>state)

const dispatch=useDispatch()

  return (
    <div>
        {notif.loading && <Loading/>}


        {
    notif.error && 
    <Toast msg={{title: 'Error', body: notif.error}}
    handleShow={() => dispatch({type: 'NOTIFY', payload: {}})} 
    bgColor="bg-danger" />
}

{
    notif.success && 
    <Toast msg={{title: 'Success', body: notif.success}} 
    handleShow={() => dispatch({type: 'NOTIFY', payload: {}})}
    bgColor="bg-success" />
}
    </div>
  )
}