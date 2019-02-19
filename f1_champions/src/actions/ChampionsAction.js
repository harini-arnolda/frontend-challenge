/*
* This file calls the web API to fetch champions related data from ergast api
*/

import * as actionTypes from './actionTypes';
import Axios from 'axios';

export const getChampionsDataSuccess = (champions) => {
  return {
    type: actionTypes.FETCH_CHAMPIONS_SUCCESS, champions
  }
};

// Retrives world champions list
export const getAllChampions = () => {
  return (dispatch) => {
    return Axios.get('http://ergast.com/api/f1/driverstandings/1.json?limit=20&offset=50')
      .then(response => {
        dispatch(getChampionsDataSuccess(response.data.MRData))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const getYearsDataSuccess = (championsOfTheYear) => {
  return {
    type: actionTypes.FETCH_CHAMPIONS_OF_THE_YEAR_SUCCESS, championsOfTheYear
  }
};

// Retrives races and champions for the selected year
export function getChampionsOfTheYear(year) {
    return (dispatch) => {
        return Axios.get('http://ergast.com/api/f1/'+year+'/results/1.json')
          .then(response => {
            dispatch(getYearsDataSuccess(response.data.MRData))
          })
          .catch(error => {
            throw(error);
          });
    };
};
