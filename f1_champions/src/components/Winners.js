import React from 'react';
import './Winners.css';

const Winners = ({winners, selectYear}) => {

    let winnerList;

    // Checks if winners object is not empty and iterates to generate the winner list
    if (Object.keys(winners).length !== 0) {

        const years = ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'];

        winnerList = winners.champions.StandingsTable.StandingsLists.map( winner => {
            let driverList;

            // Filters data from 2005 to 2015
            if (years.indexOf(winner.season) !== -1) {

                driverList = winner.DriverStandings.map( driver => {

                    return (
                        <li key={driver.Driver.permanentNumber}
                            className="list-group-item-action text-dark" type="submit"
                            onClick={() => { selectYear(winner.season) }}>
                            <h5>Year: <small> {winner.season} </small></h5>
                            <h5>World Champion: <small> {driver.Driver.givenName} {driver.Driver.familyName} </small></h5>
                            <h5>Nationality: <small> {driver.Driver.nationality} </small></h5>
                        </li>
                    )

                })

            }

            return driverList;

        });

    }

    return (
        <ul className="list-group">
            {winnerList}
        </ul>
    );

}

export default Winners;
