let employee = {
  name: "Connor",
  streetAddress: "12 Mulberry St"
}


function updateEmployeeWithKeyAndValue(employee, key, value) {
  let newEmployee = {...employee}
  newEmployee.name = employee.name
  newEmployee.streetAddress = value

  return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
employee.name=employee.name
employee.streetAddress=value

return employee
}

function deleteFromEmployeeByKey(employee,key, value) {
let newEmployee = {...employee - key}
return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value){
  employee.name = key
  delete employee.name
  return employee 
}