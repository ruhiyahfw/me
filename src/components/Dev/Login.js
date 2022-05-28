import React, { useState } from "react";
import "./Signup.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  let navigate = useNavigate();

  const displayInfo = () => {
    setShowInfo(!showInfo);
  }

  const login = () => {
    const data = { username: username, password: password };
    // jika terhubung ke backend ... (tapi backend-nya belum dideploy jadi dikomen aja)
    // axios.post("http://localhost:3001/auth/login", data).then((response) => {
    //     if (response.data.error){
    //         alert(response.data.error);
    //     }
    //     else{
    //         sessionStorage.setItem("accessToken", response.data);
    //         navigate("/dev/apilist");
    //     }
    // });
    navigate("/dev/apilist");
  };
  return (
      <div className="login">
        <div className="info">
            <button className="info-btn" onClick={displayInfo}>i</button>
            <div className={showInfo ? "info-show" : "info-hide" }>
                <h4>Ini adalah contoh halaman login</h4>  
                <div className="twogrid">
                    <div className="leftSide">
                        <strong>Pilih aksi</strong>
                        <button onClick={() => {navigate(`/dev`)}}>kembali ke dev</button>
                    </div>
                    <div>
                        <p>Di sini pengguna memasukkan username dan password</p>
                        <ul>
                            <li>Mengirim info signup ke API (back-end)</li>
                            <li>Jika pengguna belum login maka ia belum bisa masuk ke '/dev/apilist'</li>
                        </ul>  
                    </div>
                </div>           
            </div>
        </div>
        <div className="formContainer">
            <h1>Login</h1>
            <label>Username:</label>
            <input className="input"
                type="text"
                onChange={(event) => {
                setUsername(event.target.value);
                }}
                placeholder="Username"
            />
            <label>Password:</label>
            <input className="input"
                type="password"
                onChange={(event) => {
                setPassword(event.target.value);
                }}
            />

            <button onClick={login}> Login </button>
        </div>
        <div className="centerItems">
            <p>Belum punya akun? <span className="selectSpan" onClick={() => {navigate("/dev/signup")}}>Daftar</span></p>
        </div>
      </div>
    
  );
}

export default Login;