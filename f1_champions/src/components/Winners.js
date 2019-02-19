import React from 'react';
import './Winners.css';

const Winners = ({winners, selectYear}) => {

    let winnerList;

    // Checks if winners object is not empty and iterates to generate the winner list
    if (Object.keys(winners).length !== 0) {

        const years = ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'];

        winnerList = winners.champions.StandingsTable.StandingsLists.map( winner => {

            // Filters data from 2005 to 2015
            if (years.indexOf(winner.season) !== -1) {

                const driverList = winner.DriverStandings.map( driver => {

                    return (
                        <li key={driver.Driver.permanentNumber} className="list-group-item list-group-item-action" type="submit"
                            onClick={() => { selectYear(winner.season) }}>
                            Year: {winner.season} <br/>
                            World Champion: {driver.Driver.givenName} {driver.Driver.familyName} <br/>
                            Nationality: {driver.Driver.nationality}
                        </li>
                    )

                })

                return driverList;

            }

        });

    }

    return (
        <ul className="list-group">
            {winnerList}
        </ul>
    );

}

export default Winners;
