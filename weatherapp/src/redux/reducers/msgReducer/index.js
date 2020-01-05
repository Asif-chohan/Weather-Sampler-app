import { GET_DATA } from "../../actions/msgAction";

const INITIAL_STATE = {
  msg: [],
  loader: new Date()
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_DATA: {
      state.msg.push(action.payload);
      console.log("newreducer", state.msg);
      return {
        ...state,
        msg: state.msg,
        loader: new Date()
      };
    }

    default:
      return state;
  }
}

export default userReducer;
