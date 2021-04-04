import React, { Component } from "react";
import ListKeranjang from "../Component/ListKeranjang";

class Keranjang extends Component {
    state = {
        listKeranjang: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3002/isiKeranjang')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listKeranjang: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

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

    render(){
      var no = 0;
      var total = 0;
      return(
          <div className="list-artikel">
              <h2>Keranjang Belanja</h2>
              <table class="table table-bordered">
                  <thead>
                      <tr>
                        <th align="center">No</th>
                        <th align="center">ID Produk</th>
                        <th align="center">Gambar</th>
                        <th align="center">Nama</th>
                        <th align="center">Harga</th>
                        <th align="center">Qty</th>
                        <th align="center">Subtotal</th>
                      </tr>
                  </thead>
              {
                  this.state.listKeranjang.map(isiKeranjang => {
                    no += 1
                    total+=isiKeranjang.harga*isiKeranjang.qty
                      return <ListKeranjang 
                      no={no}
                      key={isiKeranjang.id}
                      id={isiKeranjang.id}
                      namaproduk={isiKeranjang.namaproduk}
                      harga={isiKeranjang.harga}
                      gambar={isiKeranjang.gambar}
                      stock={isiKeranjang.stock}
                      qty={isiKeranjang.qty}
                      tambahBarang={this.handleGetProduk}/>
                  })
                  
              }
              <tr>
                <td colspan="6" align="right">Total : </td>
                <td align="center">{total}</td>
              </tr>
              </table> 
          </div>
      )
  }

    // render() {
    //     var no = 0;
    //     var total = 0;
    //     return (
    //         <div className="post-keranjang">
    //             {
    //             /* <div className="form pb-2 border-bottom">
    //                 <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
    //             </div> */}
    //             <center><h2>Keranjang</h2></center>
    //             <div className="tgh">
    //                 <table border="2" cellpadding="5" width="100%">
    //                     <tr>
    //                         <th align="center">No</th>
    //                         <th align="center">ID Produk</th>
    //                         <th align="center">Gambar</th>
    //                         <th align="center">Nama</th>
    //                         <th align="center">Harga</th>
    //                         <th align="center">Qty</th>
    //                         <th align="center">Subtotal</th>
    //                     </tr>
    //                     {
    //                         this.state.listKeranjang.map(isiKeranjang => {
    //                             no += 1;
    //                             total+=isiKeranjang.harga*isiKeranjang.qty
    //                             return (
    //                                 <isiKeranjang
                                        // no={no}
                                        // key={isiKeranjang.id}
                                        // id={isiKeranjang.id}
                                        // namaproduk={isiKeranjang.namaproduk}
                                        // harga={isiKeranjang.harga}
                                        // gambar={isiKeranjang.gambar}
                                        // stock={isiKeranjang.stock}
                                        // qty={isiKeranjang.qty}
                                        // tambahBarang={this.handleGetProduk} />
    //                             )
    //                         })
    //                     }
    //                     <tr>
    //                         <td colspan="6" align="right">Total : </td>
    //                         <td align="center">{total}</td>
    //                     </tr>
    //                 </table>
    //             </div>
    //         </div>
    //     )
    // }
}

export default Keranjang;