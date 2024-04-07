import React, { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

type Props = {
  onAdd: (movie: Movie) => void;
};

export const NewMovie: React.FC<Props> = ({ onAdd }) => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState<string>('');
  // const [hasTitleError, setHasTitleError] = useState<boolean>(false);

  const [description, setDescription] = useState<string>('');

  const [imgUrl, setImgUrl] = useState<string>('');
  // const [hasImgUrlError, setHasImgUrlError] = useState<boolean>(false);

  const [imdbUrl, setImdbUrl] = useState<string>('');
  // const [hasImdbUrlError, setHasImdbUrlError] = useState<boolean>(false);

  const [imdbId, setImdbId] = useState<string>('');
  // const [hasImdbIdError, setHasImdbIdError] = useState<boolean>(false);

  const checkFields = () => {
    return !title || !imgUrl || !imdbUrl || !imdbId;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const movie = {
      title: title,
      description: description,
      imgUrl: imgUrl,
      imdbUrl: imdbUrl,
      imdbId: imdbId,
    };

    onAdd(movie);
    setTitle('');
    setDescription('');
    setImgUrl('');
    setImdbUrl('');
    setImdbId('');
    setCount(a => a + 1);
  };

    return (
      <form
        className="NewMovie"
        key={count}
        onSubmit={handleSubmit}
      >
        <h2 className="title">Add a movie</h2>

        <TextField
          name="title"
          label="Title"
          // ifError={hasTitleError}
          value={title}
          onChange={setTitle}
          required
        />

        <TextField
          name="description"
          label="Description"
          value={description}
          onChange={setDescription}
        />

        <TextField
          name="imgUrl"
          label="Image URL"
          value={imgUrl}
          onChange={setImgUrl}
          required
        />

        <TextField
          name="imdbUrl"
          label="Imdb URL"
          value={imdbUrl}
          onChange={setImdbUrl}
          required
        />

        <TextField
          name="imdbId"
          label="Imdb ID"
          value={imdbId}
          onChange={setImdbId}
          required
        />

        <div className="field is-grouped">
          <div className="control">
            <button
              type="submit"
              data-cy="submit-button"
              className="button is-link"
              disabled={checkFields()}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    );
  };
