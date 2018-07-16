import React from 'react';
import getCompanies from '../../modules/operation/getCompanies';

const Company = ({
  id,
  name,
  earn,
  child,
}) => {
  console.log('child', child);
  console.log('id', id);
  console.log('NAME', name);
  return (
    <div>
      <h1>
        {name}
      </h1>
      <h3>
        {earn}
      </h3>
      <React.Fragment>
        {
          name && <Company name={id} />
        }
      </React.Fragment>


    </div>
  );
};


export default Company;
