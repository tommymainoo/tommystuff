import React, { useState }  from "react";
import{Link, useNavigate} from 'react-router-dom'
import axios from "axios";

const SignIn=()=>{
    //hooks
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState('')
    const[loading,setLoading]=useState('')
    //hook for redirection
    const navigate=useNavigate()
    //function to handle Api
    const submit =async(e)=>{
        e.preventDefault();
    
        setLoading('Please wait')
        try {
            
            const data=new FormData();
            data.append("username", username);
            data.append("password",password);


            const response = await axios.post('https://ashtm3.pythonanywhere.com/api/signin',data)
            
            setLoading('')
            //checking if the username as user
            if (response.data.user){
           // if user is found store details in local storage
              localStorage.setItem('user',JSON.stringify(response.data.user))
              //redirect the get product page 
              navigate('/')
            }  
        else{
              setError(response.data.message)
              
            }
            
        } catch (error) {
            setLoading("")
            setError(error.response.data.message)
          
        }


    }

    return(
        <div className="row justify-content-center mt-2">
           <div className="col-md-6 card shadow  p-4">
            <h1>Sign In</h1>
                 <form onSubmit={submit}>
                    {error}
                    {loading}
        <input type="text" name="" placeholder="Enter Username" className="form-control" required 
         onChange={(e)=>setUsername(e.target.value)}
         /><br />
         {username}

                
                <input type="password" name="" placeholder="Enter Password"   className="form-control" required
                 onChange={(e)=>setPassword(e.target.value)}
                 /><br />
                 {password}
  
                <button type="Submit" className="btn btn-success"> Sign In</button>
                <p> Don't have an account?<br /></p>
                <Link to ="/signup">Sign Up</Link>
                
                
              

         </form>
       </div>
    </div> 

    )
}

export default SignIn;