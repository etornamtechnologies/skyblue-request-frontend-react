import { createTypes } from "reduxsauce";

export default createTypes(
  `
  FETCH_REQUESTS
  FETCH_REQUESTS_SUCCESS
  FETCH_REQUESTS_FAILURE

  FETCH_MY_REQUESTS
  FETCH_MY_REQUESTS_SUCCESS
  FETCH_MY_REQUESTS_FAILURE

  GET_REQUEST
  GET_REQUEST_SUCCESS
  GET_REQUEST_FAILURE

  CREATE_REQUEST
  CREATE_REQUEST_SUCCESS
  CREATE_REQUEST_FAILURE

  UPDATE_REQUEST
  UPDATE_REQUEST_SUCCESS
  UPDATE_REQUEST_FAILURE

  UPDATE_SINGLE_REQUEST
  UPDATE_SINGLE_REQUEST_SUCCESS
  UPDATE_SINGLE_REQUEST_FAILURE

  DELETE_REQUEST
  DELETE_REQUEST_SUCCESS
  DELETE_REQUEST_FAILURE

  SET_REQUEST
  SET_SELECTED_REQUESTS

  FILTER_MY_REQUESTS

  FILTER_REQUESTS

  RESET_REQUEST

`,
  {}
);