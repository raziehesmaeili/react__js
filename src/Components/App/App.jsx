import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Slider from '../Pages/Slider/Slider';
import Hygieneproducts from '../Pages/Hygieneproducts/Hygieneproducts';
import HygieneShow from '../Pages/Hygieneproducts/HygieneShow';
import Cosmetics from '../Pages/Cosmetics/Cosmetics';
import Home from '../Pages/Home/Home';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Show from '../Pages/Cosmetics/Show';
import Hairproducts from '../Pages/Hairproducts/Hairproducts';
import Boosters from '../Pages/Boosters/Boosters';
import Body from '../Pages/Body/Body';
import BoostersShow from '../Pages/Boosters/BoostersShow';
import Hairshow from '../Pages/Hairproducts/Hairshow';
import Bodyshow from '../Pages/Body/Bodyshow';
import Usemenu from '../Menu/Usemenu';

const App = () => {
  return (
 
        <BrowserRouter>
          <Menu />
          <Slider />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/محصولات پوستی" element={<Hygieneproducts />} />
            <Route path="/محصولات پوستی/:id" element={<HygieneShow />} />
            <Route path="/لوازم آرایشی" element={<Cosmetics />} />
            <Route path="/لوازم آرایشی/:id" element={<Show />} />
            <Route path="/محصولات مو" element={<Hairproducts />} />
            <Route path="/محصولات مو/:id" element={<Hairshow />} />
            <Route path="/تقویت کننده ها" element={<Boosters />} />
            <Route path="/تقویت کننده ها/:id" element={<BoostersShow />} />
            <Route path="/محصولات بدن" element={<Body />} />
            <Route path="/محصولات بدن/:id" element={<Bodyshow />} />
            <Route path="/user-menu" element={<Usemenu />} /> 
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>

  );
}

export default App;
