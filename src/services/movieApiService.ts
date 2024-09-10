import axios from "axios";
import { apiKey } from "../keys/apiTmdbKey";
import { apiConnect } from "./api";
const { baseUrl } = apiConnect;

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/movie/popular?api_key=${apiKey}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies", error);
  }
};
