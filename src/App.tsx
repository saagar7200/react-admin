import React from "react";
import { Admin, Resource, CustomRoutes } from "react-admin";
import { Categories } from "./components/categories/list";
import { SubCategories } from "./components/subCategories/list";
import { Offers } from "./components/offer/list";

import { CreateCategory } from "./components/categories/create";
import { CreateSubCategory } from "./components/subCategories/create";
import { CreateOffer } from "./components/offer/create";
import { EditCategory } from "./components/categories/edit";
import { EditSubCategory } from "./components/subCategories/edit";
import { EditOffer } from "./components/offer/edit";

import { Dashboard } from "./components/dashboard/Dashboard";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { theme } from "./theme/theme";
import CustomLayout from "./layout/customLayout";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import authProvider from "./utils/authProvider";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Transactions from "./components/transactions/list";
import Users from "./components/users/list";
import { CreateUser } from "./components/users/create";
import { EditUser } from "./components/users/edit/EditUser";
import { myDataProvider } from "./utils/data-provider";
import { DetailUser } from "./components/users/detail";
import TermsAndConditions from "./components/TermsAndConditions";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import LoginPage from "./components/login/login";
import RewardPoint from "./components/rewardPoint";
import Ledger from "./components/ledger/list";
import { DealSuggestion } from "./components/dealSuggestion/list/index";
import { CreateDealSuggestion } from "./components/dealSuggestion/create/index";
import { EditDealSuggestion } from "./components/dealSuggestion/edit/index";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import { FeatureDeals } from "./components/featureDeals/list";
import { CreateDeals } from "./components/featureDeals/create";
import { EditDeal } from "./components/featureDeals/edit";
import { CreateGiftOrder } from "./components/giftOrder/create/index";
import { GiftOrder } from "./components/giftOrder/list/index";
import { EditGiftOrder } from "./components/giftOrder/edit/index";
import { Reward } from "./components/reward/list/index";
import { CreateReward } from "./components/reward/create/index";
import { EditReward } from "./components/reward/edit/index";

function App() {
  return (
    <BrowserRouter>
      <Admin
        dashboard={Dashboard}
        theme={theme}
        dataProvider={myDataProvider}
        authProvider={authProvider}
        layout={CustomLayout}
        loginPage={LoginPage}
      >
        <Resource
          name="categories"
          list={Categories}
          create={CreateCategory}
          edit={EditCategory}
          icon={CategoryOutlinedIcon}
          recordRepresentation="name"
          options={{ label: "Categories" }}
        />
        <Resource
          name="sub-categories"
          list={SubCategories}
          create={CreateSubCategory}
          edit={EditSubCategory}
          icon={ClassOutlinedIcon}
          recordRepresentation="name"
          options={{ label: "Sub Categories" }}
        />
        <Resource
          name="offers"
          list={Offers}
          create={CreateOffer}
          edit={EditOffer}
          icon={LocalOfferOutlinedIcon}
          options={{ label: "All Offers" }}
          recordRepresentation="title"
        />
        <Resource
          name="deal-carousels"
          list={DealSuggestion}
          create={CreateDealSuggestion}
          edit={EditDealSuggestion}
          icon={BookmarksOutlinedIcon}
          options={{ label: "Deal Suggestion" }}
        />
        <Resource
          name="customer360"
          list={Users}
          create={CreateUser}
          edit={EditUser}
          show={DetailUser}
          icon={PeopleOutlinedIcon}
          options={{ label: "Users" }}
        />

        <Resource
          name="transactions"
          list={Transactions}
          icon={ReceiptOutlinedIcon}
          options={{ label: "Transactions" }}
        />
        <Resource
          name="ledgers"
          list={Ledger}
          icon={LibraryBooksOutlinedIcon}
          options={{ label: "Ledger" }}
        />
        <Resource
          name="carousel"
          list={FeatureDeals}
          create={CreateDeals}
          edit={EditDeal}
          icon={HandshakeOutlinedIcon}
          options={{ label: "Feature deals" }}
        />
        <Resource
          name="gift-order"
          list={GiftOrder}
          create={CreateGiftOrder}
          edit={EditGiftOrder}
          icon={MilitaryTechOutlinedIcon}
          options={{ label: "Gift Order" }}
          ></Resource>
          <Resource 
          name="gift"
          list={Reward}
          create={CreateReward}
          edit={EditReward}
          icon={RedeemOutlinedIcon}
          options={{ label: "Rewards" }}
        />
        <CustomRoutes noLayout>
          <Route path="/reward-point" element={<RewardPoint />} />
          <Route path="/terms&conditions" element={<TermsAndConditions />} />
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  );
}

export default App;
