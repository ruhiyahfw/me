import React, { useState } from 'react'
import "./Signup.css"
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Signup() {
    const [showInfo, setShowInfo] = useState(false);

    const displayInfo = () => {
        setShowInfo(!showInfo);
    }
    
    const initialValues = {
        username: "",
        password: "",
    };

    let navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(8).max(20).required(),
    });

    const onSubmit = (data) => {
        // jika terhubung ke backend ... (tapi backend-nya belum dideploy jadi dikomen aja)
        // axios.post("http://localhost:3001/auth", data).then(() => {
        //     console.log(data);
        //     navigate("/dev/login");
        // })
        navigate("/dev/login");
    };

    return (
        <div className='signup'>
            <div className="info">
                <button className="info-btn" onClick={displayInfo}>i</button>
                <div className={showInfo ? "info-show" : "info-hide" }>
                    <h4>Ini adalah contoh halaman signup</h4>  
                    <div className="twogrid">
                        <div className="leftSide">
                            <strong>Pilih aksi</strong>
                            <button onClick={() => {navigate(`/dev`)}}>kembali ke dev</button>
                        </div>
                        <div>
                            <p>Di sini pengguna memasukkan username dan password</p>
                            <ul>
                                <li>Mengirim info login ke API (back-end)</li>
                                <li>Pengecekan input pengguna</li>
                            </ul>  
                        </div>
                    </div>           
                </div>
            </div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className='formContainer'>
                    <h1>Register</h1>
                    <label>Username: </label>
                    <ErrorMessage name="username" component="span" />
                    <Field className="input" name="username" placeholder="Username" autocomplete="off"/>
                    <label>Password: </label>
                    <ErrorMessage name="password" component="span" />
                    <Field className="input" name="password" placeholder="Password" autocomplete="off" type="password"/>
                    <button type='submit'>Sign Up</button>
                </Form>
            </Formik>
            <div className="centerItems">
                <p>Sudah punya akun? <span className="selectSpan" onClick={() => {navigate("/dev/login")}}>Masuk</span></p>
            </div>
        </div>
    )
}

export default Signup