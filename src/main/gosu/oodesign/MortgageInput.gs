package oodesign

class MortgageInput {
  static function readPrincipal(): int {
    return Console.readNumber("Principal (1,000 - 1,000,000): $", 1000, 1000000) as int
  }

  static function readAnnualRate(): double {
    return Console.readNumber("Annual Interest Rate (%): ", 1.0, 20.0)
  }

  static function readPeriodInYears(): int {
    return Console.readNumber("Period (Years): ", 10, 30) as int
  }
}