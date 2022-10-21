import { useEffect, useState } from 'react';
import Gallery from '../../components/ui/gallery/Gallery';
import Header from '../../components/ui/header/Header';
import tempData from './temp_data.json';
import './categories.css';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  //This needs to be updated when API is up and running
  useEffect(() => {
    setCategories(tempData);
  }, []);

  return (
    <>
      <Header title="Categories"/>
      <Gallery content={ categories } />
    </>
  )
};
