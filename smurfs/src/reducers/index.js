/*
  Be sure to import in all of the action types from `../actions`
*/
import { LOADING, SUCCESS, FALURE, ADDED, REMOVE } from '../actions';
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  loadingSmurfs: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
function smurfReducer(state = initialState, action){
  switch(action.type){
    case LOADING:
     return { ...state, loadingSmurfs: true, smurfs: [], error: null }
    case SUCCESS:
      return { ...state, loadingSmurfs: false, smurfs: action.smurfsGot, error: null }
    case FALURE:
      return { ...state, loadingSmurfs: false, smurfs: [], error: action.falureMessage }
    case ADDED:
      return { ...state, loadingSmurfs: false, smurfs: action.added, error: null }
    case REMOVE:
      return { ...state, loadingSmurfs: false, smurfs: action.updated, error: null}
    default:
      return state;
  }
}

export default smurfReducer;