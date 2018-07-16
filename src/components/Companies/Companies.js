import React from 'react';
import { getCompanies } from '../../modules';
import { Company } from '..';


class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      parentCompany: [],
      childCompany: [],
    };
  }

  componentWillMount() {
    getCompanies()
      .then(res => this.setState({
        isLoading: true,
        parentCompany: res.data.parentCompany,
        childCompany: res.data.childCompany,
      }));
  }


  render() {
    console.log(this.state);
    const { isLoading, parentCompany, childCompany } = this.state;
    if (!isLoading) return <h1>LOADING...</h1>
    return (
       <React.Fragment>
         {
           parentCompany.map(item => {
             const child = childCompany.filter(el => el.parentCompanyID === item._id);
             return (
             <Company
               key={item._id}
               id={item._id}
               name={item.companyName}
               earn={item.earnings}
               child={child}
             />
           )})
         }
       </React.Fragment>
    )
  }
}

export default Companies;
