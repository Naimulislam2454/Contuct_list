import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
export default function Home() {
const contacts = useSelector(state => state)

const dispatch = useDispatch()
const deletecon=(id)=>{
dispatch({type:'deleted',payload:id});
toast.success('Contact deleted Successfully')
}
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-md-12 my-5 text-right px-5'>
                <Link to='/add' className='btn btn-outline-dark'>Add Contact</Link>
            </div>
            <div className='col-md-6 mx-auto'>
            <table className='table table-hover'>
            <thead className='text-white bg-dark text-center'>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Name</th>
                    <th scope='col'> Email</th>
                    <th scope='col'>Number</th>
                    <th scope='col'>Action</th>
                    
                </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contact,id)=>{
                     return    (
                     <tr key={id}>
                             <td>{id+1}</td>
                             <td>{contact.name}</td>
                             <td>{contact.email}</td>
                             <td>{contact.number}</td>
                             <td><Link to={`/edit/${contact.id}`} className='btn btn-primary btn-small mx-2'>Edit</Link>
                             <button onClick={()=>{
                                 deletecon(contact.id)
                             }} type='button' className='btn btn-small btn-danger'>Delete</button>
                                           
                             
                             </td>
                         </tr>)
                        })
                    }
                </tbody>
          
            </table>
            </div>
           
            </div>
        </div>
    )
}
