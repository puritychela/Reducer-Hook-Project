import type { Joke } from "../types/type";

interface JokeComponentProps {
  joke: Joke;
  increaseRates: (id: number) => void;
  decreaseRates: (id: number) => void;
  deleteJoke: (id: number) => void;       
  updateJoke: (id: number, newText: string) => void; 
}

export const JokeComponent: React.FC<JokeComponentProps> = ({
  joke,
  increaseRates,
  decreaseRates,
  deleteJoke,
  updateJoke,
}) => {
  const handleUpdate = () => {
    const newJoke = prompt("Edit your joke:", joke.joke);
    if (newJoke !== null && newJoke.trim() !== "") {
      updateJoke(joke.id, newJoke.trim());
    }
  };

  return (
    <div className="joke">
      <div className="joke-text">{joke.joke}</div>
      <div className="rate">Rating : {joke.rate}</div>
      <div className="joke-buttons">
        <button className="btn btn-sm btn-success" onClick={() => increaseRates(joke.id)}>
          👍
        </button>
        <button className="btn btn-sm btn-danger" onClick={() => decreaseRates(joke.id)}>
          👎
        </button>
        <button className="btn btn-sm btn-secondary" onClick={handleUpdate}>
          ✏️ update
        </button>
        <button className="btn btn-sm btn-warning" onClick={() => deleteJoke(joke.id)}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};
