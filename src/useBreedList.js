import {useQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import fetchBreedList from './fetchBreedList';
import { useGetBreedQuery } from './petApiService';
const localCash = [];
export default function useBreedList(animal) {
  // const results = useQuery(['breeds', animal], fetchBreedList);
  const {data:breeds}=useGetBreedQuery(animal,{skip:!animal});
  // return [results?.data?.breeds??[]];
  return [breeds??[]];
}
