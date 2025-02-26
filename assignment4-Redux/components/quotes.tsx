"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Quotes() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state: RootState) => state);

  useEffect(() => {
    const fetchQuotes = async () => {
      dispatch({ type: "FETCH_QUOTES_REQUEST" });

      try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        dispatch({ type: "FETCH_QUOTES_SUCCESS", payload: data.quotes });
      } catch (error) {
        dispatch({
          type: "FETCH_QUOTES_FAILURE",
          payload: "Failed to fetch quotes",
        });
      }
    };

    fetchQuotes();
  }, [dispatch]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );

  if (error)
    return <p className="text-red-500 text-center font-semibold">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Inspirational Quotes
      </h2>
      <ul className="space-y-6">
        {items.map((quote) => (
          <li
            key={quote.id}
            className="p-4 bg-gray-100 rounded-lg shadow-md border-l-4 border-blue-500"
          >
            <p className="text-lg text-gray-700 italic">"{quote.quote}"</p>
            <small className="block text-right text-gray-600 mt-2">
              - {quote.author}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}
