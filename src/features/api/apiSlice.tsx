import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// http://www.omdbapi.com/?t=The Mummy&apikey=9fc0fef8
export interface FilmResponse {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: FilmRating[],
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
interface FilmRating {
  Source: string;
  Value: string;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://www.omdbapi.com",
  }),
  endpoints: (builder) => ({
    getFilm: builder.query<FilmResponse, string>({
      query: (title) => `/?t=${title}&apikey=9fc0fef8`,
      keepUnusedDataFor: 300,
    }),
  }),
});

export const { useGetFilmQuery } = apiSlice;
