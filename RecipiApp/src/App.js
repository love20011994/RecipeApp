import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import './App.css';



const App = ()=>{
    const APP_ID = "f3d27613";
    const APP_KEY = "19b2b24cd544e426a3c8d3af90e074f7";
    
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const[query, setQuery] = useState('paneer');

    




useEffect(()=>{
    getRrecipes();
},[query]);

const getRrecipes = async () =>{

    const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
    /*console.log(data.hits);*/
};

const updateSearch = e =>{
    setSearch(e.target.value);
    
};

const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
}


    return(
        <div className="test">
        <form onSubmit={getSearch} className="search-form">
           
            <input className="search-bar" type="text" value={search}  onChange={updateSearch} />
            <button className="search-button" type="submit">
                search
            </button>
        </form>
        <div className="recipes">
        {recipes.map(recipe=>(
            <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />
        ))}</div>
        </div> 
        );

};

export default App;