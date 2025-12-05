package classes

class Employee {
  var _baseSalary: int
  var _hourlyRate: int
  
  property get BaseSalary(): int {
    return _baseSalary
  }
  
  property set BaseSalary(value: int) {
    if (value <= 0) {
      throw new IllegalArgumentException("Base salary must be greater than zero.")
    }
    _baseSalary = value
  }
  
  property get HourlyRate(): int {
    return _hourlyRate
  }
  
  property set HourlyRate(value: int) {
    if (value <= 0) {
      throw new IllegalArgumentException("Hourly rate must be greater than zero.")
    }
    _hourlyRate = value  
  }
  
  function calculateWage(extraHours: int): int {
    return _baseSalary + (_hourlyRate * extraHours)
  }
}
