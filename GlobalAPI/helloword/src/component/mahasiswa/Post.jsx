import React from "react";
 
const Post = (props) => {
    return(
        <div className = "artikel">
            <div className = "gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel"/>
            </div>
            <div className = "konten-artikel">
                <div className="nim-artikel">{props.nim} </div>
                <p className = "nama-artikel">{props.nama}</p>
                <p className = "alamat-artikel">{props.alamat}</p>
                <p className = "hp-artikel">{props.hp}</p>
                <p className = "angkatan-artikel">{props.angkatan}</p>
                <p className = "status-artikel">{props.status}</p>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.idArtikel)}>hapus</button>
            </div>
        </div>
    )
}

export default Post;