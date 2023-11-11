import React, { useEffect, useState } from "react";
import Axios from "axios";
import TopBar from "../components/TopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

function RecipesDetail() {
  const { id } = useParams();

  const [recipeData, setRecipeData] = useState({
    titulo: "",
    imagen: "",
    ingredientes: "",
    dificultad: "",
    tiempo: "",
    video: "",
  });

  const url = `http://localhost:8080/recetas/` + id;

  const getData = async () => {
    try {
      const result = await Axios.get(url);
      if (result.data) {
        const { titulo, imagen, ingredientes, dificultad, tiempo, video } = result.data;
        setRecipeData({ titulo, imagen, ingredientes, dificultad, tiempo, video });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const { titulo, imagen, ingredientes, dificultad, tiempo, video } = recipeData;


  const [mostrarIngredientes, setMostrarIngredientes] = useState(false);

  const toggleMostrarIngredientes = () => {
    setMostrarIngredientes(!mostrarIngredientes);
  };

  const embedUrl = video.replace("watch?v=", "embed/");

  return (
    <>
      <TopBar />

      <div className="min-h-screen bg-gray-100 items-center">
        <div className="top-0 bg-white">

          <div className="flex flex-col items-center p-8 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">{titulo}</h2>
            <img className="mb-4 rounded w-full md:max-w-xs lg:max-w-sm xl:max-w-md h-auto" src={imagen} alt={titulo} />

            <div className="ml-2 text-center">
              <a
                onClick={toggleMostrarIngredientes}
                className="cursor-pointer flex items-center justify-center"
              >
                Ingredientes<FontAwesomeIcon icon={faAngleDown} className="ml-2" />
              </a>
              <ul
                className={`mt-4 ${mostrarIngredientes ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
                  } overflow-hidden transition-all duration-300 ease-in-out`}
              >
                {ingredientes &&
                  ingredientes.map(({ cantidad, nombre }, index) => (
                    <li key={index} className="mb-2">
                      <div><strong>Cantidad:</strong> {cantidad}</div>
                      <div><strong>Ingrediente:</strong> {nombre}</div>
                      {index < ingredientes.length - 1 && <hr className="border-t border-gray-600 my-2" />}
                    </li>
                  ))}
              </ul>
              <br />
            </div>

            <div className="mb-2 text-center">Dificultad: <span className="font-light">{dificultad}</span></div>
            <div className="mb-2 text-center">Tiempo: <span className="font-light">{tiempo}</span></div>


            <div className="mt-2 mb-8">
              Demostracion.
              <iframe title="Video" width="560" height="315" src={embedUrl} frameborder="0" allowfullscreen></iframe>

            </div>

          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default RecipesDetail;
