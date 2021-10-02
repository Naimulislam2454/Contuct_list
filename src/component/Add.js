import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
export default function Add() {

const[name,setname]=useState("");
const[email,setemail]=useState("");
const[number,setphone]=useState("");
 
const contacts =useSelector(state => state)
const dispatch = useDispatch()
const history=useHistory()
        
    const handle=(e)=>{
    e.preventDefault()
    const checkemail=contacts.find(contact=>contact.email===email && contact)
    const checknumber=contacts.find(contact=>contact.number===number && contact)
    if(!name||!email||!number){
        return toast.warning('please fill in all fields');
    }
    if(checkemail){
        return toast.error('email is already exist')
    }
    if(checknumber){
        return toast.error('number is already exist')
    }
    const data={
    id:contacts[contacts.length-1].id+1,
    name,
    email,
    number
    }
   
     dispatch({type:'Add',payload:data})
     toast.success('Student added successfully')
     history.push('/')

    }
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <h1 className='display-3 text-center'>
                        Add Student
                    </h1>
                    <div className='col-md-6 shadow mx-auto'>
              <form onSubmit={handle}>
                  <div className='form-group'>
                      <input type='text' placeholder='Name' className=' my-2 form-control' value={name} onChange={(e)=>setname(e.target.value)}/>
                  </div>
                  <div className='form-group'>
                      <input type='email' placeholder='Email' className=' my-2 form-control' value={email}  onChange={(e)=>setemail(e.target.value)}/>
                  </div>
                  <div className='form-group'>
                      <input type='number' placeholder='Phone' className=' my-2 form-control' value={number}  onChange={(e)=>{setphone(e.target.value)}}/>
                  </div>
                  <div className='form-group'>
                      <input type='submit' placeholder='Add Student' className=' my-2 btn btn-lg btn-dark' />
                  </div>
              </form>
            </div>
                </div>
            </div>
        </div>
    )
}
