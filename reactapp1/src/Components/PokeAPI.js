import React from 'react';

//
class PokeAPI extends React.Component {
  constructor() {
    // 
    super()
    this.state = {
      pokemon: [],
      search: "",
      selectedPokemon: null
    }
  }
//Mounts the pokemon API to the state
  async componentDidMount() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const json = await res.json()
    this.setState({pokemon: json.results})
  }

  //changes state based on search results
  onSearchChange = event => {
    this.setState({search: event.target.value})
  }

  // returns the state based on what is searched, and filters it 10
  generateSearchResults = search => {
    if (search === "") {
      return []
    } else {
      return this.state.pokemon
        .filter(p => p.name.includes(search))
        .slice(0, 10)
    }
  }

  // selects the pokemon
  selectPokemon = async (name) => {
    const res = 
      await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}/`,
        {cache: "force-cache"})
        
        //sets the state based upon the response
    const json = await res.json() 
    this.setState({selectedPokemon: json, search: name})
  }
//renders the state after the mount
  render() {
    const results = this.generateSearchResults(this.state.search)

    return (
      <div className="PokeAPI">
        <div className="search">
          <input 
            onChange={this.onSearchChange} 
            type="text"
            value={this.state.search}/>
          <ul>
            {results.map(r => 
              <li onClick={() => this.selectPokemon(r.name)}> 
                {r.name} 
              </li>
            )}
          </ul>
        </div>

        {this.state.selectedPokemon &&
          <div className="result">
            <img src={this.state.selectedPokemon.sprites.back_default} alt=""/>
          </div>
        }
      </div>  
    );
  }
}



export default PokeAPI;