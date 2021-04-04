import React,{ Component }  from "react";
import ListProduk from "../Component/ListProduk";

class Produk extends Component{
    state={             //komponen state dari React u/ statefull comp
        listProduk:[]  // variabel array yang digunakan untuk menyimpan data API
    }
    
    ambilDataDariServerAPI(){    
        fetch('http://localhost:3001/Post') // alamat URL API yang kita ingin ambil datanya
        .then(response => response.json())   //ubah response data dari URL menjadi sebuah data json
        .then(jsonHasilAmbilDariAPI =>{
            this.setState({
                listProduk:jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount(){ //komponen u/ mengecek ketika compile telah di mounting,maka panggil API
        this.ambilDataDariServerAPI()
    }

    handleGetProduk = data => {
        fetch(`http://localhost:3001/Post/${data}`, { method: "GET" })
            .then(response => response.json())
            .then(res => {
                // this.handleUpdateList(data, res);
                var dataPost = { ...this.state.insertKeranjang };
                dataPost["id"] = res["id"];
                dataPost["namaproduk"] = res["namaproduk"];
                dataPost["gambar"] = res["gambar"];
                dataPost["harga"] = res["harga"];
                dataPost["stock"] = res["stock"];
                dataPost["qty"] = 1;
                this.setState({
                    insertKeranjang: dataPost
                });
            })
            .then(() => {
                this.handleCekKeranjang(data);
            })
            .then(() => {
                this.handleTombolSimpan();
            });
    };

    handleCekKeranjang = data => {
        fetch(`http://localhost:3002/isiKeranjang/${data}`, { method: "GET" }).then(
            response => {
                if (response.ok) {
                    response.json().then(res => {
                        this.handleUpdateKeranjang(data, res);
                        this.ambilDataDariServerAPI();
                    });
                } else {
                    this.handleTombolSimpan();
                }
            }
        );
    };

    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3002/isiKeranjang/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: res["id"],
                namaproduk: res["namaproduk"],
                gambar : res["gambar"],
                harga: res["harga"],
                stock: res["stock"],
                qty: res["qty"] + 1
            })
        });
    };

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/isiKeranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post">
                {
                /* <div className="form pb-2 border-bottom">
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div> */}
                <center><h2>Daftar Barang</h2></center>
                <div className="produk">
                    {
                        this.state.listProduk.map(barang => {
                            return (
                                <ListProduk
                                    key={barang.id}
                                    id={barang.id}
                                    nama={barang.namaproduk}
                                    harga={barang.harga}
                                    gambar={barang.gambar}
                                    stock={barang.stock}
                                    tambahBarang={this.handleGetProduk} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Produk;
