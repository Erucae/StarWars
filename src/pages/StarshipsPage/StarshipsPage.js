import React, { Component } from "react";
import SwapiServices from "../../services/swapi-services";
import Header from "../../components/header";
import RandomPlanet from "../../components/random-planet";
import ListItem from "../../components/list-item";
import ItemDetail from "../../components/item-detail";
import "./style.css";
import LoaderIndicator from "../../components/loader-indicator";

class StarshipsPage extends Component {
  swapiServices = new SwapiServices();

  state = {
    starships: [],
    id: null,
    loaderIndicator: true
  };

  async componentDidMount() {
    const starships = await this.swapiServices.getStarships();
    this.setState({ starships });
    this.setState({ loaderIndicator: false });
    console.log(starships);
  }

  onStarshipClick = id => {
    this.setState({ id });
    console.log("id-", id);
  };

  renderStarship = ({name, crew}) => `${name}, ${crew}`;

  renderStarshipDetail = ({ name, crew, length, model }) => (
    <>
      <span>{name}</span>
      <span>crew: {crew}</span>
      <span>length: {length}</span>
      <span>model: {model}</span>
    </>
  );

  render() {
    const { starships, id, loaderIndicator } = this.state;
    const activeStarship = starships[id];

    return (
      <div className="content">
        <Header />
        <RandomPlanet />
        <div className="starships-container">
          {loaderIndicator ? (
            <LoaderIndicator />
          ) : (
            <>
              <div className="starships-list-wrapper">
                {starships.map((starship, index) => (
                  <ListItem
                    id={index}
                    item={starship}
                    renderItem={this.renderStarship}
                    onClickItem={this.onStarshipClick}
                    key={index}
                  />
                ))}
              </div>
              {activeStarship ? (
                <ItemDetail
                  id={id}
                  item={activeStarship}
                  renderItem={this.renderStarshipDetail}
                  getData={this.swapiServices.getStarshipImg}
                />
              ) : (
                "Choose Starship"
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default StarshipsPage;
