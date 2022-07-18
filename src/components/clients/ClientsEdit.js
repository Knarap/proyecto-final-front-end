import React from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import { useNavigate } from "react-router-dom";
import config from './../../helpers/config.json';

const ClientsEdit = () => {
    let navigate = useNavigate();
    let productData = JSON.parse(sessionStorage.getItem("product")); 
    const cancel = () => {
        var {clientName, clientLastname,rut, fono, direccion} = document.forms[0]; 
        var hasChanges = clientName.value.length > 0 ||  clientLastname.value.length > 0 ||rut.value.length > 0 || fono.value.length > 0 ||
           direccion.value.length > 0 ;
        if(hasChanges){
            if(window.confirm("Existen cambios sin guardar. ¿Seguro de querer cancelar?")){
                navigate("/products");
            }
        } else {
            navigate("/clientes")
        }
    }

    const save = async (event) => {
        event.preventDefault();
        var {clientName, clientLastname,rut, fono, direccion} = document.forms[0]; 
        var errors = "";
        errors += clientName === clientLastname ? "no se puede poner el mismo nombre \n": "";
        
        if(errors.length > 0){
            window.alert("Corrija los siguientes errores:\n"+errors);
        } else {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ "operatorId": config.operatorId, "name": clientName.value,"apellido": clientLastname.value,"rut": rut.value,"fono": fono.value,
                "direccion": direccion.value, "active": productData.active})
              }
              fetch(config.apiURL+"clients/"+productData.id, requestOptions).then((response) => {
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
                  window.alert("Actualizacion existosa");
                  navigate("/clients");
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
                            <h1>Editar Clientes</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol>
                                <li><a href="/">Cloud Sales</a></li>
                                <li><a href="/clients">clientes</a></li>
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
                                    <label htmlFor="name">Nombre</label>
                                    <input type="text" name="ClientName" id="ClientName"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group">
                                    <label htmlFor="apellido">Apellido</label>
                                    <input type="number" name="ClientLastName" id="ClientLastName"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group">
                                    <label htmlFor="rut">rut</label>
                                    <input type="number" name="Rut" id="rut"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group">
                                    <label htmlFor="fono">fono</label>
                                    <input type="number" name="fono" id="fono"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="direccion">Direccion</label>
                                    <input type="text" name="ClientDireccion" id="ClientDireccion"/>
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

export default ClientsEdit;
