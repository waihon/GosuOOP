package classes

class Employee4 {
  var _baseSalary: int as readonly BaseSalary
  var _hourlyRate: int as readonly HourlyRate

  construct(baseSalary: int, hourlyRate: int) {
    _baseSalary = baseSalary
    _hourlyRate = hourlyRate
  }

  function calculateWage(extraHours: int): int {
    return _baseSalary + (_hourlyRate * extraHours)
  }

  function calculateWage(): int {
    return calculateWage(0)
  }
}
