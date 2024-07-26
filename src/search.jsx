import {useContext, useEffect, useState} from 'react';
import useBreedList from './useBreedList';
import Result from './Results';
// import requestPets from './fetchSearch';
import {useQuery} from '@tanstack/react-query';
import fetchSearch from './fetchSearch';
// import AdoptedPetContext from './AdoptedPetContext';
import { useSelector } from 'react-redux';

const ANIMALS = ['','bird', 'cat', 'dog', 'rabbit', 'reptile'];
const Search = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [breeds] = useBreedList(animal);
  //   const [pets, setPets] = useState([]);

  //   useEffect(() => {
  //     requestPets(animal, breed, location).then((data) => setPets(data));
  //   }, []);
  const [formState, setFormState] = useState({
    location: '',
    animal: '',
    breed: '',
  });
  const results = useQuery(['search', formState], fetchSearch);
  const pets = results?.data?.pets ?? [];
  // const [adoptedPet] = useContext(AdoptedPetContext);
  const adoptedPet=useSelector((state)=>state.adoptedPet.value);
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          setFormState({
            location: formData.get('location'),
            animal: formData.get('animal'),
            breed: formData.get('breed'),
          });
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            type="text"
            name="location"
            id="location"
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select id="breed" name="breed" key={breed}>
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Result pets={pets} />
    </div>
  );
};
export default Search;
