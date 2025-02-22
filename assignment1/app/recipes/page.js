"use client";

import { useEffect, useState } from "react";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const res = await fetch("https://dummyjson.com/recipes?limit=10");
        const data = await res.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, []);

  if (loading) return <p>Loading recipes...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Recipes</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Prep Time (Minutes)</th>
            <th className="border p-2">Servings</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id} className="hover:bg-gray-50">
              <td className="border p-2 text-center">{recipe.id}</td>
              <td className="border p-2">{recipe.name}</td>
              <td className="border p-2 text-center">
                {recipe.prepTimeMinutes}
              </td>
              <td className="border p-2 text-center">{recipe.servings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
