import React, { useState, useEffect } from "react";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "../components/Recipe";
import Alert from "../components/Alert";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

function Recipes() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const url = 'http://localhost:8080/recetas';

  const getData = async () => {
    try {
      let result;
      if (query === "") {
        result = await Axios.get(url);
      } else {
        result = await Axios.get(`${url}?titulo=${query}`);
      }

      if (!result.data || result.data.length === 0) {
        setRecipes([]);
        setAlert("No se encontraron datos :(");
      } else {
        setRecipes(result.data);
        setAlert("");
      }
    } catch (error) {
      setAlert("Error: No disponible, intenta más tarde.");
    }
  };

  useEffect(() => {
    getData();
  }, [query]);  // Ejecutar getData cuando la consulta cambie

  const onSubmit = async (e) => {
    e.preventDefault();
    getData();
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <TopBar />
      <div className="min-h-screen bg-gray-100 items-center">
        <div className="top-0 bg-white p-8">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="query"
              onChange={onChange}
              value={query}
              autoComplete="off"
              placeholder="Buscar receta"
              className="w-full border rounded p-2"
            />
          </form>
        </div>
        <div className="recipes p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <Recipe key={uuidv4()} recipe={recipe} />
          ))}
        </div>
        {alert !== "" && <Alert alert={alert} />}
      </div>
      <Footer />
    </>
  );
}

export default Recipes;
