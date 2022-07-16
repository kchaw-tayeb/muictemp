import {
  EMPLOYEE_LIST_FAIL,
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,
} from "../constants/employeesConstants";
import axios from "axios";

export const listEmployees = () => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_LIST_REQUEST });

    const { data } = await axios.get("/api/employees");

    dispatch({
      type: EMPLOYEE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
