import React, { Component } from 'react';

import Winners from './Winners';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllChampions, getChampionsOfTheYear } from '../actions/ChampionsAction';

class Home extends Component {

    // Redirects to view page
    selectYear = (year) => {
        this.props.getChampionsOfTheYear(year);
        this.props.history.push('/ViewAll');
    }

    componentWillMount() {
        this.props.getChampions();
    }

    render(){
        const {allWinners} = this.props;

        return (
            <div className="jumbotron">
                <h1>F1 World Champions</h1>
                <p className="lead">This lists all the champions of F1 seasons from 2005 to 2015. Clicking on an item
                shows the list of the winners for every race for the selected year.</p>
                <hr className="my-4"/>
                <Winners winners={allWinners} selectYear={this.selectYear}/>
            </div>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        allWinners: state.champions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getChampions: () => {
            dispatch(getAllChampions());
        },
        getChampionsOfTheYear: (year) => {
            dispatch(getChampionsOfTheYear(year));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Home);
