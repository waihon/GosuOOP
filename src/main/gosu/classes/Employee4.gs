package classes

class Employee4 {
  static var _numberOfEmployees: int as readonly NumberOfEmployees

  var _baseSalary: int as readonly BaseSalary
  var _hourlyRate: int as readonly HourlyRate

  static function printNumberOfEmployees() {
    print(_numberOfEmployees)
  }

  construct(baseSalary: int) {
    this(baseSalary, 0)
  }

  construct(baseSalary: int, hourlyRate: int) {
    _baseSalary = baseSalary
    _hourlyRate = hourlyRate

    _numberOfEmployees++
  }

  function calculateWage(extraHours: int): int {
    return _baseSalary + (_hourlyRate * extraHours)
  }

  function calculateWage(): int {
    return calculateWage(0)
  }
}
