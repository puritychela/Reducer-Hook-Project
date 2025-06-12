import type { Joke } from "../types/type.ts";

type JokeAction =
  | { type: "INCREASE_JOKES_LIKES"; id: number }
  | { type: "DECREASE_JOKES_LIKES"; id: number }
  | { type: "UPDATE_JOKE"; id: number; updatedJoke: Partial<Joke> }
  | { type: "DELETE_JOKE"; id: number };

const jokesReducer = (jokes: Joke[], action: JokeAction): Joke[] => {
  switch (action.type) {
    case "INCREASE_JOKES_LIKES":
      return jokes.map((joke) =>
        joke.id === action.id ? { ...joke, rate: joke.rate + 1 } : joke
      );

    case "DECREASE_JOKES_LIKES":
      return jokes.map((joke) =>
        joke.id === action.id ? { ...joke, rate: joke.rate - 1 } : joke
      );

    case "UPDATE_JOKE":
      return jokes.map((joke) =>
        joke.id === action.id ? { ...joke, ...action.updatedJoke } : joke
      );

    case "DELETE_JOKE":
      return jokes.filter((joke) => joke.id !== action.id);

    default:
      return jokes;
  }
};

export default jokesReducer;
