import React from "react";

const ListKeranjang = (props) => {
    return(
        <tbody>
            <tr>
                    <td className="id">{props.no}</td>
                    <td className="id">{props.id}</td>
                    <td className="gambar"><img src={props.gambar} alt="gambar" width="150" height="150"/></td>
                    <td aclassName="namaproduk">{props.namaproduk}</td>
                    <td className="harga">{props.harga}</td>
                    <td className="qty">{props.qty}</td>
                    <td className="total">{props.harga * props.qty}</td>
                </tr>
        </tbody>
                
    )
}

export default ListKeranjang;