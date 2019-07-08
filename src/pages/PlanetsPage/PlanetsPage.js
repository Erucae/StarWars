import React, { Component } from "react";
import SwapiServices from "../../services/swapi-services";
import Header from "../../components/header";
import RandomPlanet from "../../components/random-planet";
import ListItem from "../../components/list-item";
import ItemDetail from "../../components/item-detail";
import "./style.css";
import LoaderIndicator from "../../components/loader-indicator";

class PlanetsPage extends Component {
  swapiServices = new SwapiServices();

  state = {
    planets: [],
    id: null,
    loaderIndicator: true
  };

  async componentDidMount() {
    const planets = await this.swapiServices.getPlanets();
    this.setState({ planets });
    this.setState({ loaderIndicator: false });
    console.log(planets);
  }

  onPlanetClick = id => {
    this.setState({ id });
    console.log("id-", id);
  };

  renderPlanet = item => `${item.name}, ${item.diameter}`;

  renderPlanetDetail = ({ name, diameter, population, climate }) => (
    <>
      <span>{name}</span>
      <span>diameter: {diameter}</span>
      <span>population: {population}</span>
      <span>climate: {climate}</span>
    </>
  );

  render() {
    const { planets, id, loaderIndicator } = this.state;
    const activePlanet = planets[id];

    return (
      <div className="content">
        <Header />
        <RandomPlanet />
        <div className="planets-container">
          {loaderIndicator ? (
            <LoaderIndicator />
          ) : (
            <>
              <div className="planets-list-wrapper">
                {planets.map((planet, index) => (
                  <ListItem
                    id={index}
                    item={planet}
                    renderItem={this.renderPlanet}
                    onClickItem={this.onPlanetClick}
                    key={index}
                  />
                ))}
              </div>
              {activePlanet && !loaderIndicator ? (
                <ItemDetail
                  id={id}
                  item={activePlanet}
                  renderItem={this.renderPlanetDetail}
                  getData={this.swapiServices.getPlanetImg}
                />
              ) : (
                "Choose planet"
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default PlanetsPage;
