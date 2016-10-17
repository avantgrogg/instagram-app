import React from 'react';
import { SearchContainer } from '../containers/searchContainer';
import { ResultsContainer } from '../containers/resultsContainer';
import { SelectedContainer } from '../containers/SelectedContainer';

export const App = () => (
  <div>
    <SearchContainer/>
    <ResultsContainer/>
    <SelectedContainer/>
  </div>
)
