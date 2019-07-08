import React, { Component } from "react";
import "./style.css";
import SwapiServices from "../../services/swapi-services";
import ListItem from "../../components/list-item";
import ItemDetail from "../../components/item-detail";
import Header from "../../components/header";
import RandomPlanet from "../../components/random-planet";
import { withRouter } from "react-router-dom";
class PeoplePage extends Component {
  swapiServices = new SwapiServices();

  state = {
    people: [],
    id: null

  };

  async componentDidMount() {
    const people = await this.swapiServices.getPeople();
    this.setState({ people });
    console.log(people);
  }

  onPersonClick = id => {
    // this.setState({ id });
    this.props.history.push(`${id}`);
    console.log(this.props.history);
    console.log(this.props.match);
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
    const { people } = this.state;
    // const activePerson = people[id];
    let activePerson = null;
    const { id } = this.props.match.params;
    if(id)
      activePerson = people[id];
    

    return (
      <>
        <Header />
        <RandomPlanet />

        <div className="people-container">
          <div className="people-wrapper">
            {people.map((person, index) => (
              <ListItem
                onClickItem={this.onPersonClick}
                renderItem={this.renderItem}
                item={person}
                key={index}
                id={index}
              />
            ))}
          </div>
          {activePerson ? (
            <ItemDetail
              id={id}
              item={activePerson}
              renderItem={this.renderPersonDetail}
              getData={ this.swapiServices.getPersonImg }
            />
          ) : (
            "Choose person"
          )}
        </div>
      </>
    );
  }
}

export default withRouter(PeoplePage);
