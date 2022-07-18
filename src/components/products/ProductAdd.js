import React from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import { useNavigate } from "react-router-dom";
import config from './../../helpers/config.json';

const ProductAdd = () => {
    let navigate = useNavigate(); 
    const cancel = () => {
        var {productName, MSU, price, stock, MDPrice, MDPercentage} = document.forms[0]; 
        var hasChanges = productName.value.length > 0 ||  MSU.value.length > 0 || price.value.length > 0 || stock.value.length > 0 ||
            MDPrice.value.length > 0 || MDPercentage.value.length > 0;
        if(hasChanges){
            if(window.confirm("Existen cambios sin guardar. ¿Seguro de querer cancelar?")){
                navigate("/products");
            }
        } else {
            navigate("/products")
        }
    }

    const save = async (event) => {
        event.preventDefault();
        var {productName, MSU, price, stock, MDPrice, MDPercentage} = document.forms[0];
        var errors = "";
        errors += parseInt(MDPrice.value) > (parseInt(price) / 2) ? "El descuento por precio no puede superar la mitad del unitario.\n": "";
        errors += parseInt(MDPercentage.value) > 51 ? "El descuento por descuento no puede superar el 50%.\n": "";
        if(errors.length > 0){
            window.alert("Corrija los siguientes errores:\n"+errors);
        } else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ "operatorId": config.operatorId, "name": productName.value,"MSU": MSU.value,"price": price.value,"stock": stock.value,
                "MDPrice": MDPrice.value,"MDPercentage": MDPercentage.value})
              }
              fetch(config.apiURL+"products", requestOptions).then((response) => {
                switch(response.status){
                  case 400:
                    console.log("consulta mal formada");
                    break;
                  case 403:
                    console.log("acceso prohibido");
                    break;
                  default:
                    //
                }
                return response.json();
              }).then((result) => {
                  window.alert("Regitro existoso");
                  navigate("/products");
              })
        }
    }
    return (<div>
            <Topbar />
            <Sidebar />
            <div>
                <section>
                    <div>
                        <div>
                            <div className="col-sm-6">
                                <h1>Agregar productos</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol>
                                    <li><a href="/">Cloud Sales</a></li>
                                    <li><a href="/products">Productos</a></li>
                                    <li>Agregar</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <div>
                            <form onSubmit={save}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Nombre</label>
                                        <input type="text" name="productName" id="productName"/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="MSU">U. min. Venta</label>
                                        <input type="number" name="MSU" id="MSU"/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="price">Precio</label>
                                        <input type="number" name="price" id="price"/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="stock">Stock</label>
                                        <input type="number" name="stock" id="stock"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="MDPrice">Maximo Descuento Precio</label>
                                        <input type="number" name="MDPrice" id="MDPrice"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label htmlFor="MDPercentage">Maximo Descuento Porcentaje</label>
                                        <input type="number" name="MDPercentage" id="MDPercentage" max="50" min="0"/>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <button type="button" onClick={cancel} className="btn btn-secondary"><i className="fas fa-times"></i> Cancelar</button>
                                <button type="submit" className="btn btn-primary"><i className="fas fa-save"></i> Guardar</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProductAdd;