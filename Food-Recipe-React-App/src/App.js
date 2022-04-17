import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './components/Recipe/Recipe'
import API from './API'
import Navbar from './components/Navbar/Navbar'

const App = ()=>{

  const [id,key] = API();
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken');

  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`);
    const data = await response.json();
    setRecipes(data.hits);
    
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className = "App">
      <Navbar />
      <form onSubmit={getSearch} className = "search-form">
        <input className = "search-bar" type = "text" value = {search} onChange = {updateSearch} placeholder = "Search your food here ..."/>
        <button className = "search-button" type = "submit">Search</button>
      </form>
      <div className = "recipes">
        {recipes.map(recipe =>(
          <Recipe 
                  key = {recipe.recipe.label}
                  title = {recipe.recipe.label} 
                  calories = {recipe.recipe.calories} 
                  image = {recipe.recipe.image}
                  ingredients = {recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )
}


export default App;
