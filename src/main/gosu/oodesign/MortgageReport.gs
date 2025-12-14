package oodesign

uses java.text.NumberFormat

class MortgageReport {
  var _calculator : MortgageCalculator

  construct(calculator : MortgageCalculator) {
    _calculator = calculator
  }

  static function main() {
    var principal : int = MortgageInput.readPrincipal()
    var annualRate : double = MortgageInput.readAnnualRate()
    var periodInYears : int = MortgageInput.readPeriodInYears()
    print("")

    var calculator = new MortgageCalculator(principal, annualRate, periodInYears)
    var report = new MortgageReport(calculator)

    report.printMortgage()

    report.printPaymentSchedule()
  }

  function printMortgage() {
    var mortgage = _calculator.calculateMortgage()
    var mortgageFormatted = NumberFormat.getCurrencyInstance().format(mortgage)

    print("MORTGAGE")
    print("--------")
    print("Monthly Payments: ${mortgageFormatted}")
    print("")
  }

  function printPaymentSchedule() {
    print("PAYMENT SCHEDULE")
    print("----------------")

    for (balance in _calculator.getRemainingBalances()) {
      print(NumberFormat.getCurrencyInstance().format(balance))
    }
  }
}
