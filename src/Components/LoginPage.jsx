import React, { useState } from 'react'
import {Button} from 'antd';
import './LoginPage.css'
// import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
const [username, setUsername] = useState('kminchelle');
const [password, setPassword] = useState('');
// const [error,setError]= useState('')
// const navigate = useNavigate();

function redirectToPage() {
  window.location.href = '/menupage';
}
  

const handleLogin = (e) => {

  e.preventDefault();
  if(validate()){

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.token){
          localStorage.setItem('token',data.token);
          localStorage.setItem('username',data.username);
          localStorage.setItem('image',data.image);
        }
        if(Object.keys(data).length ===0){
          alert('Please Enter valid information');
        }else{
          if(data.username ===username){
              alert('success');
              redirectToPage()
            }else{
            alert('Please Enter valid username')
          }
        }

      })
      .catch((error) => {
        console.error('Login error:', error.message);
      });
  };
  }
    

  const validate = () =>{
    let result =true;
    if(username ==='' || username ===null){
       result=false;
       alert('Please Enter Username')
    }
    if(password ==='' || password ===null){
      result=false;
      alert('Please Enter Password')
   }
    return result;
  }

 

return (
  <div>
    <form onSubmit={handleLogin}>
    <div className='menupage'>
        <div className='main-div'>
            <div style={{fontWeight: 'normal', fontSize: '22px'}}>Login</div>
            <div>
                <fieldset className='fieldset-style'>
                    <legend  className='legend-style' >Username</legend>
                    <input 
                        type='text' 
                        className='input-style' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                     ></input>
                    
                </fieldset>
            </div>
            
            <div>
                <fieldset  className='fieldset-style'>
                    <legend className='legend-style'>Password</legend>
                    <input 
                        type='password' 
                        className='input-style' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    
                </fieldset>
               
            </div>
            <div><Button htmlType='submit' type="primary" block style={{width: '19rem'}}>
                LOG IN
            </Button></div>
        
        </div>
        </div>
        </form>
        </div>
   
  )
}
export default LoginPage;