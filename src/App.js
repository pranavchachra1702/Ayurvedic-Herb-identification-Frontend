import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home';
import HerbIndentifier from './components/pages/herbIndentifier';
import RecipeDetail from './components/recipe/recipeCardDetail';
import HerbDetail from './components/herbCatalogue/herbDetail';
import RecipePageMain from './components/pages/recipePageMain';
import HerbCatalogue from './components/pages/herbCataloguePage';
import YogaPage from './components/pages/yogaPage';
import PoseCategory from './components/yogaPoses/poseCategory';
import Quiz from './components/doshaQuiz/doshaquiz';
import SignUp from './components/pages/signup';
import PoseDetail from './components/yogaPoses/poseCardTypeDetail';


function App() {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home></Home>}/>
      <Route path='/herb-identifier' exact element={<HerbIndentifier></HerbIndentifier>}/>
      <Route path='/vedic-recipies' element={<RecipePageMain/>}/>
       <Route path='/vedic-recipies/:id' element={<RecipeDetail/>} />
      <Route path='/dosha-quiz' exact element={<Quiz></Quiz>}/>
      <Route path='/herb-catalogue' exact element={<HerbCatalogue/>}/>
      <Route path='/herb/:id' element={<HerbDetail/>} />

      <Route path='/yoga-poses' exact element={<YogaPage></YogaPage>}/>
      <Route path='/yoga-poses/:category' element={<PoseCategory/>} />
      <Route path='/yoga-poses/:category/:id' element={<PoseDetail/>} />

      <Route path="/sign-up" element={<SignUp></SignUp>}/>

    </Routes>
   </Router>
   </>
  );
}

export default App;
