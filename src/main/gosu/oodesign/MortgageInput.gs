package oodesign

class MortgageInput {
  static function readPrincipal(): int {
    return readNumber("Principal (1,000 - 1,000,000): $", 1000, 1000000) as int
  }

  static function readAnnualRate(): double {
    return readNumber("Annual Interest Rate (%): ", 1.0, 20.0)
  }

  static function readPeriodInYears(): int {
    return readNumber("Period (Years): ", 10, 30) as int
  }
    
  static function readNumber(
      prompt: String,
      minValue: double,
      maxValue: double): double {
    
    var scanner = new Scanner(System.in)
    var number: double
    
    while (true) {
      System.out.print(prompt)
      number = scanner.nextDouble()

      if (number >= minValue and number <= maxValue) {
        break // valid input
      }

      print("Enter a value between ${minValue} and ${maxValue}.")
    }
    
    return number
  }
}