/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import Axios from 'axios';

export const SUCCESS = 'SUCCESS';
export const FALURE = 'FALURE';
export const LOADING = 'LOADING';


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export function getSmufs() {
  return dispatch => {
    dispatch({ type: LOADING})

    Axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log("Response: ", response.data)
      dispatch({ type: SUCCESS, smurfsGot: response.data})
    })
    .catch(error => {
      console.log(error)
      dispatch({type: FALURE, falureMessage: "Oops, something seems to have gone wrong :("})
    })
  }
}