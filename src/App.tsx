import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import {Categories,SubCategories,Offers }from "./components/List"
import {CreateCategory,CreateSubCategory,CreateOffer} from './components/Create';
import {EditCategory,EditSubCategory,EditOffer} from './components/Edit';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import authProvider from './authProvider/authProvider'

import './App.css';

// authProvider={authProvider}

function App() {
  return (
    <div className="App" >
     <Admin dataProvider={restProvider('http://localhost:3000')} authProvider={authProvider} >
        <Resource name="categories" list={Categories}  create={CreateCategory}  edit={EditCategory} icon={CategoryOutlinedIcon} recordRepresentation="name" options={{label:'Categories'}}/>
        <Resource name="sub-categories"   list={SubCategories} create={CreateSubCategory} edit={EditSubCategory} icon={ClassOutlinedIcon} recordRepresentation="name" options={{label:'Sub Categories'}}/>
        <Resource name="offers"  list={Offers} create={CreateOffer} edit={EditOffer} icon={LocalOfferOutlinedIcon} options={{label:'All Offers'}} />

    </Admin>
    </div>
  );
}

export default App;
