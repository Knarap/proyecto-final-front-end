import React from "react";
import { Route,Routes } from "react-router-dom";
import Login from './components/login';
import Sales from './components/sales';

import ProductsAdmin from './components/products/ProductsAdmin';
import ProductAdd from './components/products/ProductAdd';
import ProductsEdit from './components/products/ProductsEdit';

import ClientsAdmin from './components/clients/ClientsAdmin';
import ClientsAdd from './components/clients/ClientsAdd';
import ClientsEdit from './components/clients/ClientsEdit';

import UsersAdmin from './components/clients/UsersAdmin';
import UsersAdd from './components/clients/UsersAdd';
import UsersEdit from './components/clients/UsersEdit';


function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/" element ={<Login />} ></Route>
        <Route path="/" element ={<Sales />} ></Route>
        <Route path="/" element ={<ProductsAdmin />} ></Route>
        <Route path="/" element ={<ProductAdd />} ></Route>
        <Route path="/" element ={< ProductsEdit/>} ></Route>
        <Route path="/" element ={< ClientsAdmin/>} ></Route>
        <Route path="/" element ={< ClientsAdd/>} ></Route>
        <Route path="/" element ={< ClientsEdit/>} ></Route>
        <Route path="/" element ={< UsersAdmin/>} ></Route>
        <Route path="/" element ={< UsersAdd/>} ></Route>
        <Route path="/" element ={< UsersEdit />} ></Route>
      </Routes>
    </div>
  );
}

export default App; 