import React from 'react';
import { BrowserRouter, Navigate, Route, Routes as Switch, Redirect } from 'react-router-dom';
import { DndProvider } from 'react-dnd-multi-backend';
import { HTML5toTouch } from 'rdndmb-html5-to-touch';
import { reducer } from './context/main-context';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AuthProvider } from './pages/loginPage/AuthContext';
// import Header from './components/general/header/Header';
import Header from './components/general/header/header';
import Footer from './components/general/footer/Footer';
import HomePage from './pages/homePage';
import AboutUsPage from './pages/aboutUsPage';
import OurTeamPage from './pages/ourTeamPage';
import FranchisePage from './pages/franchisePage';
import PostPropertyPage from './pages/postPropertyPage';
import ContactPage from './pages/contactPage';
import PropertyPage from './pages/propertyPage';
import ComponentsPage from './pages/componentsPage';
import LoginPage from './pages/loginPage/loginPage';
import ForgetPass from './pages/loginPage/forgetpass';
import GeneralInfo from "./pages/PropertyAddition/GeneralInfo";
import Owner from "./pages/PropertyAddition/Owner";
import Property from "./pages/PropertyAddition/Property";
import Description from "./pages/PropertyAddition/Description";
import PhotosAndDocs from "./pages/PropertyAddition/PhotosAndDocs";
import Confirm from "./pages/PropertyAddition/Confirm";
import OpenHomePage from './pages/openHomePage';
import UserProperty from './pages/userProperty';
import './App.css';
import './fonts.css';

const App = () => {

  const store = createStore(reducer);

  return (
    <BrowserRouter>
      <DndProvider options={HTML5toTouch}>

        <Provider store={store}>
          <Header />
          <AuthProvider>
            <Switch>
                <Route path='/' element={<HomePage />} exact />
                <Route path='/about_us' element={<AboutUsPage />} exact />
                <Route path='/our_team' element={<OurTeamPage />} exact />
                <Route path="/franchise" element={<FranchisePage />} exact/>
                <Route path='/contact' element={<ContactPage />} exact />
                <Route path='/open_property/:id/:langId' element={<OpenHomePage />} exact />
                <Route path='/post_property' element={<PostPropertyPage />} exact />
                <Route path='/user_property' element={<UserProperty />} exact />
                <Route path='/property/:property_id' element={<PropertyPage />} exact />

                <Route path='/components/' element={<ComponentsPage />} exact />
                <Route path='/logIn/' element={<LoginPage />} exact />
                <Route path='/forgotPass/' element={<ForgetPass />} exact />

                <Route path='/post_property' element={<PostPropertyPage/>} exact/>
                <Route path="/post_property/general_info" element={<GeneralInfo/>} exact/>
                <Route path="/post_property/owner" element={<Owner/>} exact/>
                <Route path="/post_property/property" element={<Property/>} exact/>
                <Route path="/post_property/description" element={<Description/>} exact/>
                <Route path="/post_property/photos_and_docs" element={<PhotosAndDocs/>} exact/>
                <Route path="/post_property/confirm" element={<Confirm/>} exact/>
            </Switch>
          </AuthProvider>
              

          <Footer />

        </Provider>

      </DndProvider>
    </BrowserRouter>
  );
};

export default App;
