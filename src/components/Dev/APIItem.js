import React, {useEffect, useState}  from 'react'
import {useParams} from "react-router-dom"
import axios from "axios";
import parse from 'html-react-parser';
import {useNavigate} from "react-router-dom";

function APIItem() {
    let {id} = useParams(); 
    let navigate = useNavigate();
    const [jobObject, setJobObject] = useState({});

    // useEffect(() => {
    //     axios.get(`http://localhost:3001/jobs/byId/${id}`, {
    //         headers: {
    //           'accessToken': sessionStorage.getItem("accessToken")
    //         }}).then((response) => {
    //         if (response.data.error){
    //             navigate("/login");
    //         }   
    //     setJobObject(response.data);
    //     });
    // }, []);

    useEffect(() => {
        axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`).then((response) => {
            setJobObject(response.data);
        })
    })

    const [showInfo, setShowInfo] = useState(false);

    const displayInfo = () => {
        setShowInfo(!showInfo);
    }

    return (
        <div className='apiitem'>
            <div className='backBtn'>
                <button onClick={() => {navigate("/dev/apilist")}}>{`<\tBack`}</button>
            </div>
            <div className="info">
                <button className="info-btn" onClick={displayInfo}>i</button>
                <div className={showInfo ? "info-show" : "info-hide" }>
                    <h4>Halaman ini menampilkan detail dari item list</h4>  
                    <div className="twogrid">
                        <div className="leftSide">
                            <strong>Pilih aksi</strong>
                            <button onClick={() => {navigate(`/dev`)}}>kembali ke dev</button>
                            <button onClick={() => {navigate(`/dev/logout`)}}>logout</button>
                        </div>
                        <div>
                            <p>Datanya diperoleh dari API juga</p>
                            <ul>
                                <li>Beberapa bagian HTML adalah kembalian dari API (deskripsi list)</li>
                            </ul>  
                        </div>
                    </div>           
                </div>
            </div>
            <div className='jobDetail box'>
                <p className='miniup'><span className='location-up'>{jobObject.location}</span><span className='time-up'>{jobObject.type}</span></p>
                <h2>{jobObject.title}</h2>
                <hr></hr>
                <div className='gridTwo'>
                    <div className='leftSide desc'>
                        {parse(`${jobObject.description}`)}
                        <p></p>
                    </div>
                    <div className='rightSide'>
                        <div className='aboveLogo box'>
                            <div className='gridTwo'>
                                <div className='leftSide company'>{jobObject.company}</div>
                                <div className='rightSide'>©</div>
                            </div>
                            <hr></hr>
                            <div className='photoPlaceholder'>
                                <img src={jobObject.company_logo} alt="logo" />
                            </div>
                            <div className='footer'>
                                <a href={jobObject.company_url}>Visit site</a>
                            </div>
                        </div>
                        <div className='applyInfo box leftSide'>
                            <h4>How to apply</h4>
                            <hr></hr>
                            {parse(`${jobObject.how_to_apply}`)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default APIItem