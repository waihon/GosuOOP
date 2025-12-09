package oodesign

class Console {
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