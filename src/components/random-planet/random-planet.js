import React, { Component } from "react";
import "./random-planet.css";
import SwapiServices from "../../services/swapi-services";
import LoaderIndicator from "../loader-indicator";

class RandomPlanet extends Component {
  state = {
    planets: null,
    isSetPlanet: false,
    randomPlanet: null, 
    randomPlanetNumber: null
  };

  intervalId = null;
  swapiServices = new SwapiServices();

  async componentDidMount() {
    const planets = await this.swapiServices.getPlanets();
    this.setState({ planets: planets });
    this.randomPlanet();
    this.setState({ isSetPlanet: true });
    this.intervalId = setInterval(this.randomPlanet, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  getRandomNumber = () => {
    return Math.floor(Math.random() * 9) + 1;
  };

  randomPlanet = () => {
    const rand = this.getRandomNumber();
    if (this.state.planets)
      this.setState(state => ({ randomPlanet: state.planets[rand] }));
      this.setState({randomPlanetNumber: rand})
  };

  render() {
    const { randomPlanet, randomPlanetNumber } = this.state;

    if (!randomPlanet) return <LoaderIndicator />;

    const {
      name,
      diameter,
      population,
      rotation_period: rotationPeriod
    } = randomPlanet;

    return (
      <div className="random-planet-wrapper">
        <div className="planet-photo-wrapper">
          <img
            className="planet-photo"
            src={`https://starwars-visualguide.com/assets/img/planets/${randomPlanetNumber}.jpg`}
            alt="planet"
          />
        </div>
        <ul>
          <li className="planet-name">{name}</li>
          <hr className="horizontal-line" />
          <li>Diameter: {diameter}</li>
          <li>Population: {population}</li>
          <li>Rotation period: {rotationPeriod}</li>
        </ul>
      </div>
    );
  }
}

export default RandomPlanet;
