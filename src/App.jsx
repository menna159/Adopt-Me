import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Pet from './Pet';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Search from './search';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import DetailsErrorBoundary from './DetailsErrorBoundary';
// import AdoptedPetContext from './AdoptedPetContext';
import { Provider } from 'react-redux';
import store from './store';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  // const adoptedPet=useState(null);
  return (
    <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        {/* <AdoptedPetContext.Provider value={adoptedPet}> */}
        <Routes>
          <Route path="/details/:id" element={<DetailsErrorBoundary />} />
          <Route path="/" element={<Search />} />
        </Routes>
        {/* </AdoptedPetContext.Provider> */}
      </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
  // return(React.createElement('div',{},[
  //     React.createElement('h1',{},"Adopt Me!"),
  //     React.createElement(Pet,{name:"jax", animal:"dog", bread :"G.sh"}),
  //     React.createElement(Pet,{name:"So", animal:"dog", bread :"G.sh"}),
  //     React.createElement(Search,{}),
  // ]));
};
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
