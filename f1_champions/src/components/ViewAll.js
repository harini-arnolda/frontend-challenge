import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewYear extends Component {

    render() {

        const {championsOfTheYear} = this.props;
        const {allWinners}         = this.props;

        let winnerList = "Loading . . . . If you are unable to see results please go back and select an year";
        let worldChampion;

        if(championsOfTheYear) {

            // Itentify the world champion for the year
            allWinners.StandingsTable.StandingsLists.map(
                worldChampions => {
                    return ((worldChampions.season === championsOfTheYear.RaceTable.season)
                        ? worldChampion = worldChampions.DriverStandings[0].Driver.driverId : null );
                }
            )

            // Returns the race and winner list for the year
            winnerList = championsOfTheYear.RaceTable.Races.map( races => {
                const raceChamps = races.Results.map( racechamps => {

                    return (
                        <li key={racechamps.number} className= {(worldChampion === racechamps.Driver.driverId)
                            ? "list-group-item-action text-dark list-group-item-danger" : "list-group-item-action text-dark"}>
                                <h5>Race Name: <small>{races.raceName}</small> </h5>
                                <h5>Race Round: <small>{races.round}</small> </h5>
                                <h5>Constructor: <small>{racechamps.Constructor.name}</small> </h5>
                                <h5>Constructor Nationality: <small>{racechamps.Constructor.nationality}</small> </h5>
                                <h5>Drivers Name: <small>{racechamps.Driver.familyName} {racechamps.Driver.givenName}</small> </h5>
                                <h5>Nationality: <small>{racechamps.Driver.nationality}</small> </h5>
                        </li>
                    );

                });

                return raceChamps;

            });

        }

        return (
            <div className="jumbotron bg-dark text-danger">
                <h1>F1 <span className="text-light">races for the year</span></h1>
                <p className="lead text-light">Shows all the races for the year and the highlighted rows show the world champion for the year</p>
                <hr className="my-4"/>
                <ul className="list-group">
                    {winnerList}
                </ul>
            </div>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        championsOfTheYear: state.champions.championsOfTheYear,
        allWinners: state.champions.champions
    };
};

export default connect(mapStateToProps, null) (ViewYear);
