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
    const newDatas = selectedGenres.filter(
      (selectedGenre: GenreTypes) => selectedGenre !== genre,
    );
    setSelectedGenres([...newDatas]);
  }
};

export default selectGenre;
