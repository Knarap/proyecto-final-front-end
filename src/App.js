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
        <Route path="/" element={<Login/>} ></Route>
        <Route path="/sales" element={<Sales/>} ></Route>
        <Route path="/products" element={<ProductsAdmin/>} ></Route>
        <Route path="/products/add" element={<ProductAdd/>} ></Route>
        <Route path="/Products/edit" element={<ProductsEdit/>} ></Route>
        <Route path="/Clients/Admin" element={<ClientsAdmin/>} ></Route>
        <Route path="/Clients/Add" element={<ClientsAdd/>} ></Route>
        <Route path="/Clients/Edit" element={<ClientsEdit/>} ></Route>
        <Route path="/Users/Admin" element={<UsersAdmin/>} ></Route>
        <Route path="/Users/Add" element={<UsersAdd/>} ></Route>
        <Route path="/Users/Edit" element={<UsersEdit/>} ></Route>
      </Routes>
    </div>
  );
}

export default App; 