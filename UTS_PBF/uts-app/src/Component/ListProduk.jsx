import React from "react";
import '../Component/Produk.css';

const ListProduk = (brg) => {
    return (

        <div className="barang">
            <div className="konten-barang">
                <div className="gambar-barang">
                    <img src={brg.gambar} width="150" height="150" alt="" />
                </div>
                <div className="isi-barang">
                    <p id="id-brg">ID : {brg.id}</p>
                    <p id="nama-brg">{brg.nama}</p>
                    <p>Stok : {brg.stock} </p>
                    <p id="harga-brg">Rp. {brg.harga}</p>
                </div>
            </div>
            { <button className="btn btn-sm" onClick={brg.tambahBarang.bind(this, brg.id)}>Beli</button> }
        </div>

    )
}

export default ListProduk;