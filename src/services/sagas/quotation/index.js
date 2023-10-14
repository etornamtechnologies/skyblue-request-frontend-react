import { call, put, takeLatest } from 'redux-saga/effects'
import { Creators, Types } from '../../redux/quotation/actions'

import {
  getAllQuotations as getAllQuotationsApi,
  updateQuotation as updateQuotationApi,
  createQuotation as createQuotationApi,
  generateQuotationForUnregisteredSupplier,
  approveQuotation as approveQuotationApi
} from '../../api/quotation'
import openNotification from '../../../util/notification'
import { message } from 'antd'
import { RESPONSE_SUCCESS_CODE } from '../../api/apiRequest'


export function* fetchQuotations(action) {
  try {
    const response = yield call(getAllQuotationsApi, action.query)
    if(response.status === RESPONSE_SUCCESS_CODE) {
      const responseData = response.data
      console.log('response data', responseData)
      yield put(Creators.fetchQuotationsSuccess(responseData))
    } else {
      openNotification('error', 'FETCH QUOTATIONS', response.message)
      yield put(Creators.fetchQuotationsFailure(response.message))
    }
  } catch (error) {
    console.log('my error', error?.response?.data)
    const errorMsg = error?.response?.data?.error || error?.response?.message  || "Failed to fetch Quotations"
    console.log('--------> error', error)
    openNotification('error', 'FETCH QUOTATIONS', errorMsg)
    yield put(Creators.fetchQuotationsFailure(errorMsg))
  }
}


export function* updateQuotation(action) {
  console.log('action', action)
  const {quotationId, payload} = action
  try {
    const response = yield call(updateQuotationApi, quotationId, payload)
    if(response.status === 'OK') {
      const responseData = response.data
      yield put(Creators.updateQuotationSuccess(responseData))
      openNotification('success', 'Update Quotation', response.message)
      //yield put(Creators.fetchQuotations({}))
    } else {
      openNotification('error', 'Update Quotation', response.message)
      yield put(Creators.updateQuotationFailure(response.message))
    }
  } catch (error) {
    const message = (error && error.response.data && error.response.data.error) || 'Failed to fetch Employees'
    openNotification('error', 'Login', message)
    yield put(Creators.updateQuotationFailure(message))
  }
}

export function* approveQuotation(action) {
  const {payload} = action
  try {
    const response = yield call(approveQuotationApi, payload)
    
    if(response.status === 'SUCCESS' || response.status === "OK") {
      const responseData = response?.data
      yield put(Creators.approveQuotationSuccess(responseData))
      openNotification('success', 'Approve Quotation', response.message)
      //yield put(Creators.fetchQuotations({}))
    } else {
      openNotification('error', 'Approve Quotation', response.message)
      yield put(Creators.approveQuotationFailure(response.message))
    }
  } catch (error) {
    const message = (error && error?.response?.data && error?.response?.data.error) || 'Failed to Approve quotation'
    openNotification('error', 'Approve Quotation', message)
    yield put(Creators.approveQuotationFailure(message))
  }
}

export function* createQuotation(action) {
  const { payload } = action
  try {
    const response = yield call(createQuotationApi, payload)
    if(response.status === RESPONSE_SUCCESS_CODE) {
      yield put(Creators.createQuotationSuccess(response?.data))
      message.success("Quotation Document Addedd Successfully")
    } else {
      message.error("Upload failed!")
      yield put(Creators.createQuotationFailure(response?.message))
    }
  } catch (error) {
    console.log('err: ', error)
    const errors = error?.response?.data?.errors || []
    message.error("Failed!")
    yield put(Creators.createQuotationFailure(errors[0]))
  }
}

export function* generateQuotation(action) {
  console.log('generate quotation saga', action)
  const { payload } = action
  try {
    const response = yield call(generateQuotationForUnregisteredSupplier, payload)
    if(response.status === RESPONSE_SUCCESS_CODE) {
      yield put(Creators.generateQuotationSuccess(response.data))
      message.success("Quotation Document Addedd Successfully")
    } else {
      message.error("Upload failed!")
      yield put(Creators.generateQuotationFailure(response?.message))
    }
  } catch (error) {
    console.log('err: ', error)
    const errors = error?.response?.data?.errors
    message.error("Failed!")
    yield put(Creators.generateQuotationFailure(errors[0]))
  }
}


export function* watchFetchQuotations(action) {
  yield takeLatest(Types.FETCH_QUOTATIONS, fetchQuotations)
}

export function* watchUpdateQuotation(action) {
  yield takeLatest(Types.UPDATE_QUOTATION, updateQuotation)
}

export function* watchApproveQuotation(action) {
  yield takeLatest(Types.APPROVE_QUOTATION, approveQuotation)
}

export function* watchCreateQuotation(action) {
  yield takeLatest(Types.CREATE_QUOTATION, createQuotation)
}

export function* watchGenerateQuotation(action) {
  yield takeLatest(Types.GENERATE_QUOTATION, generateQuotation)
}