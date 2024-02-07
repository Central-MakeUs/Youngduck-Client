import {TGenre} from '@/types/signup/genre';

interface ISelectGenreProps {
  selectedGenres: TGenre[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<TGenre[]>>;
  genre: TGenre;
}

const selectGenre = ({
  selectedGenres,
  setSelectedGenres,
  genre,
}: ISelectGenreProps) => {
  if (!selectedGenres.includes(genre)) {
    if (selectedGenres.length === 5) return;
    setSelectedGenres([...selectedGenres, genre]);
  } else {
    const newDatas = selectedGenres.filter(
      (selectedGenre: TGenre) => selectedGenre !== genre,
    );
    setSelectedGenres([...newDatas]);
  }
};

export default selectGenre;
