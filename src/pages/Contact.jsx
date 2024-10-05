import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Contact = () => {
const [formData,setFormData]=useState({
  name:"",
  email:"",
  gender:"",
  country:"",
  message:""
})
const navigate=useNavigate();
const {name,email,gender,country,message}=formData;
const onChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}
const onSubmit=(e)=>{
  e.preventDefault();
  const response=formData;
  toast.success("You will be contact shortly by our team")
  setFormData({
    name:"",
    email:"",
    gender:"",
    country:"",
    message:""
  })
  navigate("/")
  
}
  return (
    <form onSubmit={onSubmit}>
    <h1>Contact Form</h1>
    <label>Name:</label>
    <input type='text' name='name' value={name} placeholder='Enter Your name' onChange={onChange}/><br></br>

    <label>Email:</label>
    <input type='email' name='email' value={email} placeholder='Enter Your Email' onChange={onChange}/><br></br>

    <label>Gender:</label>
    <input type='radio' name='gender' onChange={onChange} value={"Male"}/>
    <label>Male</label>
    <input type='radio' name='gender' onChange={onChange} value={"Female"}/>
    <label>Female</label>
    <br></br>

    <select name='country' onChange={onChange}>
      <option value={"Pakistan"}>Pakistan</option>
      <option value={"India"}>India</option>
      <option value={"USA"}>USA</option>
      <option value={"Afghanistan"}>Afghanistan</option>
      <option value={"West Indies"}>West Indies</option>
    </select>
    <br></br>

<textarea name='message' value={message} onChange={onChange} placeholder='Please enter a message '>
</textarea><br></br>

<button type='submit' className='btn btn-primary'>Submit</button>
    </form>
  )
}

export default Contact