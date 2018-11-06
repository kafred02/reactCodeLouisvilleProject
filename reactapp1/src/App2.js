// import React, { Component } from 'react';
// import {Grid, Jumbotron} from 'react-bootstrap';
const Header =() => (





)

function Header(){
  return (
    <header>
      <h1>ScoreBoard</h1>
          <span className="stats"> Players: 1
          </span>

    </header>

  );
}

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        Guil
      
      </span>
        <Counter />
      </div>


    </div>

  );


}

const App =() =>{
  return(

    <div className="scoreboard">
      <Header />
    
    </div>

  );


}


const Counter = () => {
  <div className ="Counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">35</span>
        <button className="counter-action increment"> + </button>
      </div>


}

ReactDOM.render(
  <Header />,
  document.getElementById('root')


);
// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from "react";


// class App extends Component {
//   constructor() {
//     return(
//       <div>
//         <Jumbotron>
//           <Grid>
//             <h1>Search App</h1>
//             <p>This is a simple search app</p>
//           </Grid>
//         </Jumbotron>
//       </div>
//     );
//     }
//   }


class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
      search: "",
      selectedPokemon: null
    }
  }

//   async componentDidMount() {
//     const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
//     const json = await res.json()
//     this.setState({pokemon: json.results})
//   }

//   onSearchChange = event => {
//     this.setState({search: event.target.value})
//   }

//   generateSearchResults = search => {
//     if (search === "") {
//       return []
//     } else {
//       return this.state.pokemon
//         .filter(p => p.name.includes(search))
//         .slice(0, 10)
//     }
//   }

//   selectPokemon = async (name) => {
//     const res = 
//       await fetch(
//         `https://pokeapi.co/api/v2/pokemon/${name}/`,
//         {cache: "force-cache"})
        
//     const json = await res.json() 
//     this.setState({selectedPokemon: json, search: name})
//   }

//   render() {
//     const results = this.generateSearchResults(this.state.search)

//     return (
//       <div className="App">
//         <div className="search">
//           <input 
//             onChange={this.onSearchChange} 
//             type="text"
//             value={this.state.search}/>
//           <ul>
//             {results.map(r => 
//               <li onClick={() => this.selectPokemon(r.name)}> 
//                 {r.name} 
//               </li>
//             )}
//           </ul>
//         </div>

//         {this.state.selectedPokemon &&
//           <div className="result">
//             <img src={this.state.selectedPokemon.sprites.back_default} alt=""/>
//           </div>
//         }
//       </div>  
//     );
//   }
// }

// export default App;







// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
