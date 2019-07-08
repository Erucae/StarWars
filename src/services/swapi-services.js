export default class SwapiServices {

    _apiBaseResourse = 'https://swapi.co/api/';
    _apiBaseImg = 'https://starwars-visualguide.com/assets/img/';

    getPersonImg = (id) => {
        return `${this._apiBaseImg}characters/${id}.jpg`;
    }

    getPlanetImg = (id) => {
       return `${this._apiBaseImg}planets/${id}.jpg`;
    }
    
    getStarshipImg = (id) => {
        return `${this._apiBaseImg}starships/${id}.jpg`;
    }

     async getPeople() {
        const responseData = await this.getResource('people/');
        return responseData.results.map(person => person);
        
    }

   async getPerson(id) {
        const responseData = await this.getResource(`people/${id}`);
        return responseData;
    }

    async getPlanets() {
        const responseData = await this.getResource('planets/');
        return responseData.results;
    }
    
    async getResource(url) {
        const response = await fetch(`${this._apiBaseResourse}${url}`);
        if(response.ok)
            return response.json();
        throw new Error(`Couldn't fetch data from ${this._apiBaseResourse}${url}, received ${response.status}`);
    }

    getPlanet(id) {
        return  this.getResource(`planets/${id}/`);
    }

    async getStarships() {
        const responseData = await this.getResource(`starships/`);
        return responseData.results;
    }

    async getStarship(id) {
        const responseData = await this.getResource(`starships/${id}`);
        return responseData;
    }



}