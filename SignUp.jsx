import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [phone ,setPhone] = useState('');

    const[success,setSuccess]= useState('')
    const [error , setError] = useState('')
    const [loading, setLoading] = useState("")
    //function to create submit
    const submit=async(e)=>{
      //prevent default
      e.preventDefault();
      //setloading hook variable to true to show loading message
      setLoading('Please wait as we ulpoad your data')
      try {
        //append updated hook variable to data variable
        const data= new FormData();
        data.append("username",username);
        data.append("email",email);
        data.append('password',password);
        data.append('phone',phone);
        //use axios to post data to the backend

        const response = await axios.post('https://ashtm3.pythonanywhere.com/api/signin',data)
        //set loading to be empty after successful sign up
        setLoading("")
        //update success message
        setSuccess(response.data.welcome)
   

      } catch (error) {
        setLoading("")
        setError(error.welcome)
      }

    }
    


  return (
    <div className="row justify-content-center mt-3">
      <div className="col-md-6 card shadow-lg">
        <h2 className="pt-3">
          <b>Sign Up</b>
        </h2>
        <form action="" className="p-3" onSubmit={submit}>
          {error}
          {success}
          {loading}
          <input
            type="text"
            placeholder="Enter Username"
            className="form-control"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          {username}
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          {email}
          <input
            type="password"
            placeholder="Enter Password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          {password}
          <input
            type="text"
            placeholder="Enter Phone"
            className="form-control"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          {phone}
          <button className="btn btn-primary" type="submit">
            Sign Up
          </button>
          <br />
          <span>
            <b>Already have an account?</b>
            <br />
            <Link to="/signin">Sign In</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default SignUp;