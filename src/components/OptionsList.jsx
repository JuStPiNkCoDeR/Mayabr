import React from 'react';
import AddCity from './AddCity';
import FilterTemperature from './FilterTemperature';

const OptionsList = () => {
  return(
      <div className="optionsBlock">
          <AddCity/>
          <FilterTemperature/>
      </div>
  )
};

export default OptionsList;