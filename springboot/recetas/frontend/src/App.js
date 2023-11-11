import RecipeDetails from "./pages/RecipeDetails";
import Recipes from "./pages/Recipes";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/recetas/:id" element={<RecipeDetails />}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;