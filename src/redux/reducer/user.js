import * as Types from '../action/user';
import createReducer from '../helpers/createReducer';

const initialState = {
  pending:false,
}

const reducer = createReducer(initialState, {
  [Types.USER_LOGIN]: (state) => ({ ...state, pending:true }),
});

export default reducer;
