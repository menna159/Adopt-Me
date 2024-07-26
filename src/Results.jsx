import Pet from './Pet';
export default function Result({pets}) {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            location={`${pet.city} , ${pet.state}`}
            images={pet.images}
            id={pet.id}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
}
