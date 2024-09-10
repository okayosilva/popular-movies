import axios from "axios";
import { apiConnect } from "./api";

const { baseUrl, apiKey } = apiConnect;

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/movie/popular?api_key=${apiKey}`,
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies", error);
  }
};
