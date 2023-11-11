const Recipe = ({ recipe }) => {
  const { id,titulo, tiempo, dificultad, imagen } = recipe;

  return (
    <a href={`/recetas/${id}`} className="recipe-link">
    <div className="recipe bg-white p-4 mb-4 rounded shadow-md flex flex-col">
      <h2 className="text-xl font-bold mb-2">{titulo}</h2>
      <img src={imagen} alt={titulo} className="mb-2 rounded object-cover w-full h-48" />
      <div className="flex justify-between">
        <div>Dificultad: {dificultad}</div>
        <div className="text-blue-700">Tiempo: {tiempo}</div>
      </div>
    </div>
  </a>
  );
};

export default Recipe;