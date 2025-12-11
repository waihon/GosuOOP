package oodesign

uses java.text.NumberFormat

class MortgageReport {
  static function main() {
    var principal : int = MortgageInput.readPrincipal()
    var annualRate : double = MortgageInput.readAnnualRate()
    var periodInYears : int = MortgageInput.readPeriodInYears()
    print("")

    printMortgage(principal, annualRate, periodInYears)

    printPaymentSchedule(principal, annualRate, periodInYears)
  }

  static function printMortgage(principal : int, annualRate : double, periodInYears : int) {
    var calculator = new MortgageCalculator(principal, annualRate, periodInYears)
    var mortgage = calculator.calculateMortgage()
    var mortgageFormatted = NumberFormat.getCurrencyInstance().format(mortgage)

    print("MORTGAGE")
    print("--------")
    print("Monthly Payments: ${mortgageFormatted}")
    print("")
  }

  static function printPaymentSchedule(principal: int, annualRate: double, periodInYears: int) {
    var calculator = new MortgageCalculator(principal, annualRate, periodInYears)

    print("PAYMENT SCHEDULE")
    print("----------------")

    for (numberOfPaymentsMade in 1..calculator.PeriodInMonths) {
      var loanBalance = calculator.calculateBalance(numberOfPaymentsMade)
      var loanBalanceFormatted = NumberFormat.getCurrencyInstance().format(loanBalance)
      print(loanBalanceFormatted)
    }
  }
}
