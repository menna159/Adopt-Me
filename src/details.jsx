import {useParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';
import fetchPetDetails from './fetchPetDetails';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdoptedPetContext from './AdoptedPetContext';
import { useDispatch } from 'react-redux';
import { adopt } from './adoptedPetSlice';
import Modal from './Modal';
const Details = () => {
  // <Link to={}></Link>
  const {id} = useParams();
  const results = useQuery(['details', id], fetchPetDetails);
  // const [,setAdoptedPet]=useContext(AdoptedPetContext);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [showModal,setShowModal]=useState(false);
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">⚙️</h2>
      </div>
    );
  }
  const pet = results.data.pets[0];
  // throw new Error();
  return (
    <ErrorBoundary>
    <div className="details">
      <div>
        <Carousel images={pet.images}/>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal}-{pet.breed}-{pet.city},{pet.state}
        </h2>
        <button onClick={()=>{
          // setAdoptedPet(pet);
         
          setShowModal(true);
        }}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal?<Modal>
          <div>
            <h1>Would you like to adopt {pet.name}?</h1>
            <div className='buttons'>
            <button onClick={()=>{
                      dispatch(adopt(pet));
                      navigate("/");
            }}>Yes</button>
            <button onClick={()=>{
              setShowModal(false);
            }}>No</button>
            </div>
            
          </div>
        </Modal>:null}
      </div>
    </div>
    </ErrorBoundary>
  );
};

export default Details;
