package classes

class Employee2 {
  var _baseSalary: int as BaseSalary
  var _hourlyRate: int as HourlyRate
    
  function calculateWage(extraHours: int): int {
    return _baseSalary + (_hourlyRate * extraHours)
  }
}
