import React, {Component} from "react";
import Post from "../BlogPost1/Post";
import './Blogpost.css';

class Blogpost extends Component{
    state={             //komponen state dari React u/ statefull comp
        listArtikel:[],  // variabel array yang digunakan untuk menyimpan data API
        userId: 1,
        id: 1,
        title: "",
        body: ""
    }
    
    ambilDataDariServerAPI(){    
        fetch('http://localhost:3001/posts?_sort=id&_order=desc') // alamat URL API yang kita ingin ambil datanya
        .then(response => response.json())   //ubah response data dari URL menjadi sebuah data json
        .then(jsonHasilAmbilDariAPI =>{
            this.setState({
                listArtikel:jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount(){ //komponen u/ mengecek ketika compile telah di mounting,maka panggil API
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => { //fungsi yg menghandle button act hapus data
        fetch(`http://localhost:3001/posts/${data}`, {method:'DELETE'}) //alamat API yg ingin kita hapus
        .then(res => {      //ketika proses hapus berhasil, maka ambil data dari server API lokal
            this.ambilDataDariServerAPI()
        })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel:formInsertArtikel
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/posts',{
            method:'post',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify(this.state.insertArtikel)
        })
            .then((Response) =>{
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
            </div>
        )
    }
}

export default Blogpost;
