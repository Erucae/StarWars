import React, { Component } from "react";
import "./people.css";
import SwapiServices from "../../services/swapi-services";
import ListItem from "../list-item";
import ItemDetail from "../item-detail";

class People extends Component {
  swapiServices = new SwapiServices();

  state = {
    people: [],
    id: null
  };

  async componentDidMount() {
    const people = await this.swapiServices.getPeople();
    this.setState({ people });
    alert("people have  already downloaded ");
    console.log(people);
  }

  onClickPerson = id => {
    this.setState({ id });
    console.log("id-", id);
  };

  renderItem = item => `${item.name}, ${item.mass}`;
  renderPersonDetail = ({ name, mass, height, gender }) => (
    <>
      <span>{name}</span>
      <span>mass: {mass}</span>
      <span>height: {height}</span>
      <span>gender: {gender}</span>
    </>
  );

  render() {
    const { people, id } = this.state;
    const activePerson = people[id];

    return (
      <div className="people-container">
        <span className="people-wrapper">
          {people.map((person, index) => (
            <ListItem
              onClickPerson={this.onClickPerson}
              renderItem={this.renderItem}
              person={person}
              key={index}
              id={index}
            />
          ))}
        </span>
        {activePerson ? (
          <ItemDetail 
            id={id} 
            item={activePerson} 
            renderItem = {this.renderPersonDetail}
          />
        ) : (
          "Choose person"
        )}
      </div>
    );
  }
}

export default People;
