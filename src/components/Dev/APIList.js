import './APIList.css'
import React from 'react'
import axios from "axios";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function APIList() {

    const [listOfJobs, setListOfJobs] = useState([]);
    const [inputJobdesc, setInputJobdesk] = useState("");
    const [inputLocation, setInputLocation] = useState("");
    const [inputFulltime, setInputFulltime] = useState(false);

    let navigate = useNavigate();

    const [showInfo, setShowInfo] = useState(false);

    const displayInfo = () => {
        setShowInfo(!showInfo);
    }

    // jika terhubung ke backend ... (tapi backend-nya belum dideploy jadi dikomen aja)
    // useEffect(() => {
    //     axios.get("http://localhost:3001/jobs", {
    //         headers: {
    //           'accessToken': sessionStorage.getItem("accessToken")
    //         }}).then((response) => {  
    //         console.log(response.data);
    //         if (response.data.error){
    //             navigate("/dev/login");
    //         }
    //         setListOfJobs(response.data);
    //         });
    // }, []);

    useEffect(() => {
        axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json').then((response) => {
            console.log(response.data);
            setListOfJobs(response.data);
        });
    }, []);

    return (
        <div className='apilist'>
            <div className="info">
                <button className="info-btn" onClick={displayInfo}>i</button>
                <div className={showInfo ? "info-show" : "info-hide" }>
                    <h4>Halaman ini menampilkan list yang diperoleh dari API</h4>  
                    <div className="twogrid">
                        <div className="leftSide">
                            <strong>Pilih aksi</strong>
                            <button onClick={() => {navigate(`/dev`)}}>kembali ke dev</button>
                            <button onClick={() => {navigate(`/dev/logout`)}}>logout</button>
                        </div>
                        <div>
                            <p>Ditampilkan beberapa info list</p>
                            <ul>
                                <li>List dapat dipilih untuk dilihat detailnya</li>
                            </ul>  
                        </div>
                    </div>           
                </div>
            </div>
            {/* <div className='jobSearch'>
                <div>
                    <label>Job Description</label>
                    <br></br>
                    <input className="input"
                        type="text"
                        onChange={(event) => {
                            setInputJobdesk(event.target.value);
                        }}
                        placeholder="Filter by title, companies, expertise"
                    />
                </div>
                <div>
                    <label>Location</label>
                    <br></br>
                    <input className="input"
                        type="text"
                        onChange={(event) => {
                            setInputLocation(event.target.value);
                        }}
                        placeholder="Filter by city, state, zip code, or country"
                    />
                </div>
                <div>
                    <div className='cbPlace'>
                        <label>Full time only</label>
                        <br></br>
                        <input className="input" id="checkbox"
                            type="checkbox"
                            onChange={(event) => {
                                setInputFulltime(event.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className='buttonPlace'>
                    <button> Search </button>
                </div>
            </div> */}
            <div className='box'>
                <h2>Job List</h2>
                {listOfJobs.map((value, key) => {
                    return(
                    <div className='job'>
                        <hr></hr>
                        <div className='jobKet' onClick={() => {navigate(`/dev/apidetail/${value.id}`)}}>
                            <div className='leftSide'>
                                <div className='title'>{value.title}</div>
                                <p>
                                    <span className='company'>{value.company}</span>
                                    <span>  -  </span>
                                    <span className='type'>{value.type}</span>
                                </p> 
                            </div>
                            <div className='rightSide'>
                                <div className='location'>{value.location}</div>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default APIList