import React from 'react';
import teams from '../bballteams'
import seasons from '../Seasons'




class API extends React.Component {
  constructor() {
    super()
    this.state = {
      seasons: "",
      teams: "",
      search: "",
      selectedPokemon: null
    }
  }

  async componentDidMount() {
    const res = await fetch(`https://stats.nba.com/stats/commonteamroster`)
    const json = await res.json()
    this.setState({commonTeamRoster: json.results})
  }
  // async componentDidMount() {
  //     try {
  //       const response = await fetch(`https://stats.nba.com/stats/commonteamroster`);
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
  //       const json = await response.json();
  //     }
  //   }



   //changes state based on search results
   onSeasonListChange = event => {
    this.setState({seasonList: event.target.value})
  }

  generateCommonTeamRoster = search => {
    if (search === "") {
      return []
    } else {
      return this.state.commonTeamRoster
        .filter(p => p.season.includes(search))
        .slice(0, 10)
    }
  }

  selectCommonRoster = async (teamID, season) => {
  const res = 
    await fetch(
      `https://stats.nba.com/stats/commonteamroster/?Season=${season}&TeamID=${teamID}/`,
      {cache: "force-cache"})
      
  const json = await res.json() 
  this.setState({selectedCommonRoster: json, selectSeason: season, selectTeam: teamID})
  }
  
  render() {

    const results = this.generateCommonTeamRoster(this.state.search)
    
        return(

          // document = (props) => (
            <div className="main-content">
              {/* <h2>{ props.title }</h2> */}
              <p>This is where the API would go</p>
              <p>Find a Team Roster</p>
          
              <div className="seasonList">
                <select id="seasons" pr-5>
                {seasons.map(season =><option> {season.seasonYear} </option>)}
                onChange={this.onSeasonListChange}
                value={this.state.seasonList}

                
                </select>

                <ul>
                  {results.map(r => 
                    <li onClick={() => this.selectCommonRoster(r.season)}> 
                      {r.season} 
                    </li>
                  )}
                  </ul>
                
              
              </div>
              <div className="TeamList">
              <select id="teams" pr-5>    
                  {teams.map(team =><option value={team.teamID}> {team.simpleName} </option>)}
              </select>
              </div>
              
              
                <button className="bballGo ml-3" bsStyle="primary" onClick="teamGo" >Go!</button>
              
                </div>

                  
              );

        
       }  

}





// var FruitSelector = React.createClass({
//   getInitialState:function(){
//     return {selectValue:'Radish'};
// },
//   handleChange:function(e){
//   this.setState({selectValue:e.target.value});
// },
// render: function() {
//   var message='You selected '+this.state.selectValue;
//   return (
//     <div>
//     <select 
//       value={this.state.selectValue} 
//       onChange={this.handleChange} 
//     >
//      <option value="Orange">Orange</option>
//       <option value="Radish">Radish</option>
//       <option value="Cherry">Cherry</option>
//     </select>
//     <p>{message}</p>
//     </div>        
//   );
// }
// });



// selectTeamAndYear = async (teamID, season) => {
//   const res = 
//     await fetch(
//       `https://stats.nba.com/stats/commonteamroster/?Season=${season}&TeamID=${teamID}/`,
//       {cache: "force-cache"})
      
//   const json = await res.json() 
//   this.setState({selectedPokemon: json, search: name})

//   




//changes state based on search results
// onSearchChange = event => {
//   this.setState({search: event.target.value})
// }


//https://stats.nba.com/stats/commonteamroster

//   async componentDidMount() {
//     const res = await fetch('https://stats.nba.com/stats/commonteamroster')
//     const json = await res.json()
//     this.setState({pokemon: json.results})
//   }


// async componentDidMount() {
//   try {
//     const response = await fetch(`https://stats.nba.com/stats/commonteamroster`);
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     const json = await response.json();

//     //this is this.setState()
//     this.setState({ commonRoster: json });
//   } catch (error) {
//     console.log(error);
//   }
// }

//   async componentDidMount() {
//     const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
//     const json = await res.json()
//     this.setState({pokemon: json.results})
//   }

//   onTeamhange = event => {
//     this.setState({search: event.target.value})
//   }


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

//https://stats.nba.com/stats/commonteamroster?Season=2000-01&TeamID=1610612762
 

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


// example return
// {
//   "resource": "commonteamroster",
//   "parameters": {
//       "TeamID": 1610612762,
//       "LeagueID": null,
//       "Season": "2000-01"
//   },
//   "resultSets": [
//       {
//           "name": "CommonTeamRoster",
//           "headers": [
//               "TeamID",
//               "SEASON",
//               "LeagueID",
//               "PLAYER",
//               "NUM",
//               "POSITION",
//               "HEIGHT",
//               "WEIGHT",
//               "BIRTH_DATE",
//               "AGE",
//               "EXP",
//               "SCHOOL",
//               "PLAYER_ID"
//           ],
//           "rowSet": [
//               [
//                   1610612762,
//                   "2000",
//                   "00",
//                   "Olden Polynice",
//                   "0",
//                   "C-F",
//                   "7-0",
//                   "250",
//                   "NOV 21, 1964",
//                   36,
//                   "13",
//                   "Virginia",
//                   178
//               ]

export default API;