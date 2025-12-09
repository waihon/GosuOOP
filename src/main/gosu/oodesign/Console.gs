package oodesign

class Console {
  private static var scanner = new Scanner(System.in)

  static function readNumber(prompt: String) : double {
    System.out.print(prompt)

    return scanner.nextDouble()
  }

  static function readNumber(
      prompt: String,
      minValue: double,
      maxValue: double): double {
    
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