import {
  EMPLOYEE_LIST_FAIL,
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,
} from "../constants/employeesConstants";

export const employeeListReducer = (state = { employees: [] }, action) => {
  switch (action.type) {
    case EMPLOYEE_LIST_REQUEST:
      return { loading: true, employees: [] };
    case EMPLOYEE_LIST_SUCCESS:
      return { loading: false, employees: action.payload };
    case EMPLOYEE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
