import React from 'react';
import axios from 'axios';
import PropertyCard from '../components/homePage/propertyCard';


export default class HomePageTest extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('https://api.myflats.ge/api/Appartments/get-appartments', {page: 2})
      .then(res => {
        const persons = res.data;
        this.setState({ persons });


      })
  }

  render() {

    return (
      <ul className='ts-properties-section d-flex flex-row flex-wrap align-items-start' style={{ gap: "24px", marginBottom: "48px" }}>
        {
          this.state.persons
            .map(person =>
                  <PropertyCard key={person.id} apartmentInfo = {person} />
            )
        }
      </ul>
    )
  }
}