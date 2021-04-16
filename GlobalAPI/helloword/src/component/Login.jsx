import React, {Component} from 'react';
import './CSS/login.css'

class Login extends Component{
    render(){
        return(
            <div>
                <h3>Form Login</h3>
                <form>
                    <h2>Tugas Pertemuan ke 3 </h2>
                <div className="container">
                <p>
                    <label>Username</label>
                    <input type="text" placeholder="Masukkan Username" name="username"/>
                </p>
                
                <p>
                    <label>Password</label>
                    <input type="password" placeholder="Masukkan Password" name="password"/>
                </p>
                
                    <button className="btnSubmit" type = "submit">Login</button>
                <p>
                    <input type="checkbox"/> remember me 
                </p>
                <p>
                    <button className="btnCancel" type = "submit">cancel</button>
                </p>
                </div>
                </form>
            </div>
        ) 
    }
}

export default Login