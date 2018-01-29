import * as heroActions from './hero.actions';

export function heroReducer(state = [], action: heroActions.Action) {
  switch (action.type) {
    case heroActions.LOAD_HEROES_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
