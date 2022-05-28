import React from 'react'
import './Project.css';
import {useNavigate} from "react-router-dom";

function Projects() {
  let navigate = useNavigate();

  return (
    <div>
      <div className='header'>
          <div className='header-text'>
            <h1>Halo, selamat datang di bagian project!</h1>
            <p>Do bagian ini terdapat beberapa projek kecil yang telah saya buat</p>
            <a href='#whats'><button>Cari tahu</button></a>
          </div>
      </div>
      <div id="whats">
        <h1 className="highlight-text">Apa saja itu?</h1>
        <div className='menuContainer'>
          <div className='menu-item' onClick={() => {navigate("/projects/tictactoe")}}>
            <p>tictactoe</p>
          </div>
          <p className='menuket'>Maaf untuk saat ini hanya ada tic-tac-toe ＞︿＜</p>
        </div>
      </div>
    </div>
  )
}

export default Projects