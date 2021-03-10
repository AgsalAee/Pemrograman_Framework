import React, {Component} from "react";
import Post from './Post';
import '../container/blogpost/Blogpost.css'

class MahasiswaPost extends Component{
    state={             //komponen state dari React u/ statefull comp
        listMahasiswa:[],  // variabel array yang digunakan untuk menyimpan data API
        id: 1,
        NIM: "",
        nama: "",
        alamat: "",
        hp: "",
        angkatan: "",
        status: ""
    }
    
    ambilDataDariServerAPI(){    
        fetch('http://localhost:3002/posts') // alamat URL API yang kita ingin ambil datanya
        .then(response => response.json())   //ubah response data dari URL menjadi sebuah data json
        .then(jsonHasilAmbilDariAPI =>{
            this.setState({
                listMahasiswa:jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount(){ //komponen u/ mengecek ketika compile telah di mounting,maka panggil API
        this.ambilDataDariServerAPI()
    }

    handleHapusArtikel = (data) => { //fungsi yg menghandle button act hapus data
        fetch(`http://localhost:3002/posts/${data}`, {method:'DELETE'}) //alamat API yg ingin kita hapus
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
        fetch('http://localhost:3002/posts',{
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
                        <label htmlFor="nim" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nim" name="nim" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="nama" name="nama" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">hp</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="hp" name="hp" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">angkatan</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="angkatan" name="angkatan" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">status</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="status" name="status" rows="3" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(artikel => {
                        return <Post key={artikel.id} nim={artikel.nim} nama={artikel.nama} alamat={artikel.alamat} hp={artikel.hp} angkatan={artikel.angkatan} status={artikel.status} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
            </div>
        )
    }
}

export default MahasiswaPost;
