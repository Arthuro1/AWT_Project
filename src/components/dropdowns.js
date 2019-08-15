import React from 'react';
import Lectures from './lectures';
import Filter from './filter';

const Dropdowns = () => (
  <div className="col-2 col-sm-3 inline mx-5">
    <Lectures />
    <Filter />
  </div>
);

export default Dropdowns;
