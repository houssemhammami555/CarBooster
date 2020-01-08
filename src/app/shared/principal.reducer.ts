import { Action } from '@ngrx/store';
import { Principal } from './principal.model';
import { SAVE_PRINCIPAL } from './save.user.action';



export function principalReducer(state :Principal , action :Action){
    switch(action.type){
      case  SAVE_PRINCIPAL:
        return Object.assign({}, state, action.type);
        default:
             return state ;
    }
}