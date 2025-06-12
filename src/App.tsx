import './App.css';
import { useReducer } from 'react';
import { JokeComponent } from './components/jokeComponent';
import jokesReducer from './reducer/jokeReducers';
import type { Joke } from './types/type';

function App() {
  const InitialJokes: Joke[] = [
    {
      id: 1,
      joke: 'What do you call a very small valentine? A valen-tiny!!!',
      rate: 0,
    },
    {
      id: 2,
      joke: 'What did the dog say when he rubbed his tail on the sandpaper? Ruff, Ruff!!!',
      rate: 5,
    },
    {
      id: 3,
      joke: "Why don't sharks like to eat clowns? Because they taste funny!!!",
      rate: 10,
    },
  ];

  const [jokes, dispatch] = useReducer(jokesReducer, InitialJokes);

  const increaseRates = (id: number) => {
    dispatch({ type: 'INCREASE_JOKES_LIKES', id });
  };

  const decreaseRates = (id: number) => {
    dispatch({ type: 'DECREASE_JOKES_LIKES', id });
  };

  const deleteJoke = (id: number) => {
    dispatch({ type: 'DELETE_JOKE', id });
  };

  const updateJoke = (id: number, newJokeText: string) => {
    dispatch({ 
      type: 'UPDATE_JOKE', 
      id, 
      updatedJoke: { joke: newJokeText } 
    });
  };

  return (
    <>
      <div className="container">
        <h2>Jokes For You 😂</h2>
      </div>

      <div className="jokes">
        {jokes &&
          jokes
            .sort((a, b) => b.id - a.id)
            .map((joke: Joke) => (
              <JokeComponent
                key={joke.id}
                joke={joke}
                increaseRates={increaseRates}
                decreaseRates={decreaseRates}
                deleteJoke={deleteJoke}
                updateJoke={updateJoke}
              />
            ))}
      </div>
    </>
  );
}

export default App;



