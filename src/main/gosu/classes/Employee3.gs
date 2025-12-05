package classes

class Employee3 {
  property BaseSalary: int
  property HourlyRate: int
    
  function calculateWage(extraHours: int): int {
    return BaseSalary + (HourlyRate * extraHours)
  }
}
