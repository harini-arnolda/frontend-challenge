import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ViewYear extends Component {

    render() {

        const {championsOfTheYear} = this.props;
        const {allWinners}         = this.props;

        let winnerList = "Loading.....";
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
                        <li key={racechamps.number} className={(worldChampion === racechamps.Driver.driverId)
                            ? "list-group-item list-group-item-info" : "list-group-item"}>
                                Race Name: {races.raceName} <br />
                                Race Round: {races.round} <br />
                                Constructor: {racechamps.Constructor.name} <br />
                                Constructor Nationality: {racechamps.Constructor.nationality} <br />
                                Drivers Name: {racechamps.Driver.familyName} {racechamps.Driver.givenName} <br />
                                Nationality: {racechamps.Driver.nationality} <br />
                        </li>
                    );

                });

                return raceChamps;

            });

        }

        return (
            <div className="jumbotron">
                <h1>F1 races for the year</h1>
                <p className="lead">Shows all the races for the year and the highlighted rows show the world champion for the year</p>
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
