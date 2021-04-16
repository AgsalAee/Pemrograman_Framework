import React, {Component} from "react";
import Post from './Post';
import '../container/blogpost/Blogpost.css'
import API from '../../Services/index'

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
    
    ambilDataDariServerAPI = () => {
        API.getMahasiswa().then(result => {
            this.setState({
                listMahasiswa: result
            })
        })
    };

    componentDidMount() {   //komponen untuk mengecek ketika komponen telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI();
    }

    handleHapus = (data) => {
        API.deleteMahasiswa(data)
            .then((response) => {
                this.ambilDataDariServerAPI();
            })
    }
    

    handleTambah = (event) => {
        let formInsertMhs = { ...this.state.insertMhs };
        let timestamp = new Date().getTime();
        formInsertMhs['id'] = timestamp;
        formInsertMhs[event.target.name] = event.target.value;
        this.setState({
            insertMhs: formInsertMhs
        });
    }

    handleTombolSimpan = () => {
        API.postMahasiswa(this.state.insertMhs)
            .then((response) => {
                this.ambilDataDariServerAPI();
            });
    };

    render() {
        return (
            <div className="post-artikel">
                <div className="row">
                    <div className="col-sm">
                        <div className="TopBar">
                            <div className="form pb-2">
                                <h1>INPUT MAHASISWA BARU</h1>
                                <div className="form-group row">
                                    <label htmlFor="NIM" className="col-sm-2 col-form-label">NIM</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="nim" name="nim" onChange={this.handleTambah} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambah} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                                    <div className="col-sm-10">
                                        <textarea type="text" className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambah} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="hp" className="col-sm-2 col-form-label">No Hp</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambah} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                                    <div className="col-sm-10">
                                        <input type="number" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambah} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambah} />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary" id="simpan" onClick={this.handleTombolSimpan}>Simpan</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="isiKonten">
                        <h2>Daftar Mahasiswa</h2>
                            {
                                this.state.listMahasiswa.map(artikel => {
                                    return <Post key={artikel.id} nim={artikel.nim} nama={artikel.nama} alamat={artikel.alamat} hp={artikel.hp} angkatan={artikel.angkatan} status={artikel.status} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default MahasiswaPost;
