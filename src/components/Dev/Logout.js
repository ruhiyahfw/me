import React from 'react'
import {useEffect} from "react"
import {useNavigate} from "react-router-dom";

function Logout() {

    let navigate = useNavigate();

    useEffect(() => {
        // jika terhubung ke backend ... (tapi backend-nya belum dideploy jadi dikomen aja)
        // sessionStorage.removeItem("accessToken");
        navigate("/dev/login");
    })

    return (
        <div>Logout</div>
    )
}

export default Logout