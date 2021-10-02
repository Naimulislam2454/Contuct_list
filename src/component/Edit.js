import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Edit() {
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[number,setphone]=useState("");
  const  {id}=useParams()
  const contacts = useSelector(state => state)
  const currentcon=contacts.find((contact)=>{
    return  contact.id===parseInt(id);
  })
  const dispatch = useDispatch()
const history=useHistory()

useEffect(()=>{
    if(currentcon){
    setname(currentcon.name)
    setemail(currentcon.email)
    setphone(currentcon.number)
    }
},[currentcon])
  
const handle=(e)=>{
    e.preventDefault()
    const checkemail=contacts.find(  contact=>contact.email===email && contact.id !==parseInt(id))
    const checknumber=contacts.find(contact=>contact.number===number && contact.id!==parseInt(id))
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
    id:parseInt(id),
    name,
    email,
    number
    }
   
     dispatch({type:'Update',payload:data})
     toast.success('Student Updated successfully')
     history.push('/')
}

    return (
        <div>
           
            <div className='container'>
                { currentcon?
               ( <>
                <div className="row">
                    <h1 className='display-3 text-center'>
                        Edit Student 
                    </h1>
                    <div className='col-md-6 shadow mx-auto'>
    
        

         <form onSubmit={handle}>
                  <div className='form-group'>
                      <input type='text' placeholder='Name'  value={name} onChange={(e)=>setname(e.target.value)} className=' my-2 form-control' />
                  </div>
                  <div className='form-group'>
                      <input type='email' placeholder='Email' value={email}  onChange={(e)=>setemail(e.target.value)} className=' my-2 form-control'/>
                  </div>
                  <div className='form-group'>
                      <input type='number' placeholder='number' value={number}  onChange={(e)=>{setphone(e.target.value)}}className=' my-2 form-control' />
                  </div>
                  <div className='form-group'>
                      <input type='submit' placeholder='Update Student' className=' my-2 btn mx-4 btn-dark' />
                 <Link to='/' className='btn btn-danger'>
                 Cancel
                 </Link>
                 
                  </div>
                 
              </form>
    
            </div>
                </div>
                </>
                )
            : <h1>Student id of{id} is not found</h1>
}
            </div>
            
        </div>
    )
}

