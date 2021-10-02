import { createTypes } from "reduxsauce";

export default createTypes(
  `
  FETCH_PETTY_CASH_REQUESTS
  FETCH_PETTY_CASH_REQUESTS_SUCCESS
  FETCH_PETTY_CASH_REQUESTS_FAILURE

  FETCH_MY_PETTY_CASH_REQUESTS
  FETCH_MY_PETTY_CASH_REQUESTS_SUCCESS
  FETCH_MY_PETTY_CASH_REQUESTS_FAILURE

  GET_PETTY_CASH_REQUEST
  GET_PETTY_CASH_REQUEST_SUCCESS
  GET_PETTY_CASH_REQUEST_FAILURE

  CREATE_PETTY_CASH_REQUEST
  CREATE_PETTY_CASH_REQUEST_SUCCESS
  CREATE_PETTY_CASH_REQUEST_FAILURE

  UPDATE_PETTY_CASH_REQUEST
  UPDATE_PETTY_CASH_REQUEST_SUCCESS
  UPDATE_PETTY_CASH_REQUEST_FAILURE

  DELETE_PETTY_CASH_REQUEST
  DELETE_PETTY_CASH_REQUEST_SUCCESS
  DELETE_PETTY_CASH_REQUEST_FAILURE

  RESET_PETTY_CASH_REQUEST

`,
  {}
);