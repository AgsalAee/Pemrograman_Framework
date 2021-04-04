import React from "react";
import '../Component/About.css';
import photo from '../pp.jpg';

const About = (props) => {
    return(
        <div className = "biodata">
            <img src={photo} alt="gambar" />
            <div className = "konten-biodata">
                <p>Nama : Agsal Fairrohmad A.P</p>
                <p>No : 03</p>
                <p>NIM : 1841720208</p>
                <p>Kelas : TI-3F</p>
            </div>
        </div>
    )
}

export default About;