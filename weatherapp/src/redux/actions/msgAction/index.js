// import axios from "axios";
import socket from "../../../socketConfig";
export const GET_DATA = "GET_DATA";
export const USERLOGOUT = "USERLOGOUT";
export const USERREGESTER = "USERREGESTER";

// fetch all todos from indexedDB in the form of array
export function getData() {
  return dispatch => {
    socket.on("chatmsg", msg => {
      console.log("checkMsg", msg);
      dispatch({
        type: GET_DATA,
        payload: msg
      });
    });
  };
}
