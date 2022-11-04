import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import {Categories,SubCategories,Offers }from "./components/list/List"
import {CreateCategory,CreateSubCategory,CreateOffer} from './components/create/Create';
import {EditCategory,EditSubCategory,EditOffer} from './components/edit/Edit';
import {Dashboard} from './components/dashboard/Dashboard';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import {theme} from "./theme/theme";
import CustomLayout from "./layout/customLayout";
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
// import {Route} from "react-router-dom"


import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import  authProvider from "./authProvider/authProvider"

import './App.css';
import { BrowserRouter } from 'react-router-dom';

// dashboard={Dashboard}

function App() {
  return (
    <BrowserRouter>
     <Admin dashboard={Dashboard} theme={theme} dataProvider={restProvider('http://localhost:3000')} authProvider={authProvider} layout={CustomLayout} >
    <Resource name="categories" list={Categories}  create={CreateCategory}  edit={EditCategory} icon={CategoryOutlinedIcon} recordRepresentation="name" options={{label:'Categories'}}/>
    <Resource name="sub-categories"   list={SubCategories} create={CreateSubCategory} edit={EditSubCategory} icon={ClassOutlinedIcon} recordRepresentation="name" options={{label:'Sub Categories'}}/>
    <Resource name="offers"  list={Offers} create={CreateOffer} edit={EditOffer} icon={LocalOfferOutlinedIcon} options={{label:'All Offers'}} />

</Admin>
    </BrowserRouter>
  );
}

export default App;
