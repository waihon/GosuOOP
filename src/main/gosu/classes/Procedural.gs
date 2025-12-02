package classes

class Procedural {
  static function calculateWage(
    baseSalary: int,
    extraHours: int,
    hourlyRate: int): int {
  
    return baseSalary + (extraHours * hourlyRate)    
  }
}
