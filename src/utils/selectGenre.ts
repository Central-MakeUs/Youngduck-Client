import {GenreTypes} from '@/types/genre';

interface ISelectGenreProps {
  selectedGenres: GenreTypes[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<GenreTypes[]>>;
  genre: GenreTypes;
}

const selectGenre = ({
  selectedGenres,
  setSelectedGenres,
  genre,
}: ISelectGenreProps) => {
  if (!selectedGenres.includes(genre)) {
    setSelectedGenres([...selectedGenres, genre]);
  } else {
    const indexOfGenre = selectedGenres.indexOf(genre);
    const newDatas = [
      ...selectedGenres.slice(0, indexOfGenre),
      ...selectedGenres.slice(indexOfGenre + 1),
    ];
    setSelectedGenres([...newDatas]);
  }
};

export default selectGenre;
