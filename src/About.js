
import React from 'react';
import TournamentSchedule from './TournamentSchedule';
import LastTournament from './LastTournament';
import Raiting from './Raiting';




import {Route, Link} from 'react-router-dom';


class TurNavigation extends React.Component{
  render(){
    return(
      <div className="tur">
           <ul type = "turnir">
             <li><Link to="/about/tournamentSchedule">Расписание турниров</Link></li>
             <li><Link to="/about/lastTournament">Прошедшие турниры</Link></li>
             <li><Link to="/about/raiting">Рейтинг</Link></li>
           </ul>
           <Route path = "/about/tournamentSchedule" component= {TournamentSchedule} />
           <Route path = "/about/lastTournament" component= {LastTournament} />
           <Route path = "/about/raiting" component= {Raiting} />
    
         </div>
      )
  }
}

export default TurNavigation;