import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import {Categories,SubCategories,Offers }from "./components/list/List"
import {CreateCategory,CreateSubCategory,CreateOffer} from './components/create/Create';
import {EditCategory,EditSubCategory,EditOffer} from './components/edit/Edit';
import {Dashboard} from './components/dashboard/Dashboard';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
// import {Route} from "react-router-dom"


import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
// import  authProvider from "./authProvider/authProvider"

import './App.css';


function App() {
  return (
    <div className="App" >
     <Admin dashboard={Dashboard} dataProvider={restProvider('http://localhost:3000')}  >
    
    
        <Resource name="categories" list={Categories}  create={CreateCategory}  edit={EditCategory} icon={CategoryOutlinedIcon} recordRepresentation="name" options={{label:'Categories'}}/>
        <Resource name="sub-categories"   list={SubCategories} create={CreateSubCategory} edit={EditSubCategory} icon={ClassOutlinedIcon} recordRepresentation="name" options={{label:'Sub Categories'}}/>
        <Resource name="offers"  list={Offers} create={CreateOffer} edit={EditOffer} icon={LocalOfferOutlinedIcon} options={{label:'All Offers'}} />

    </Admin>
    </div>
  );
}

export default App;
