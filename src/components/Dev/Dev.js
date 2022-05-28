import React from 'react'
import './Dev.css';
import {useNavigate} from "react-router-dom";

function Dev() {
  let navigate = useNavigate();

  return (
    <div className='dev'>
      <div className='headerb'>
          <div className='header-text'>
            <h1>Halo, selamat datang di bagian dev!</h1>
            <p>Di bagian ini akan ditampilkan beberapa hal dasar yang biasanya ada dalam aplikasi web</p>
            <a href='#whats'><button>Cari tahu</button></a>
          </div>
      </div>
      <div id="whats">
        <h1 className="highlight-text">Bagian apa saja itu?</h1>
        <div className='menuContainer'>
          <div className='menu-item' onClick={() => {navigate("/dev/signup")}}>
            <p>Signup dan login</p>
          </div>
          <div className='menu-item' onClick={() => {navigate("/dev/apilist")}}>
            <p>Menampilkan list dari api</p>
          </div>
          <a href="https://if4061-tb2-15.netlify.app/" target="_blank">
            <div className='menu-item'>
              <p>Dashboard</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Dev