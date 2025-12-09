package oodesign

uses java.text.NumberFormat

class MortgageReport {
  static function main() {
    var scanner = new Scanner(System.in)

    var principal: int = MortgageInput.readPrincipal()
    var annualRate: double = MortgageInput.readAnnualRate()
    var periodInYears: int = MortgageInput.readPeriodInYears()
    print("")

    printMortgage(principal, annualRate, periodInYears)

    printPaymentSchedule(principal, annualRate, periodInYears)
  }

  static function printMortgage(principal: int, annualRate: double, periodInYears: int) {
    var mortgage = MortgageCalculator.calculateMortgage(principal, annualRate, periodInYears)
    var mortgageFormatted = NumberFormat.getCurrencyInstance().format(mortgage)

    print("MORTGAGE")
    print("--------")
    print("Monthly Payments: ${mortgageFormatted}")
    print("")
  }
  
  static function printPaymentSchedule(principal: int, annualRate: double, periodInYears: int) {
    var monthlyRate = MortgageCalculator.getMonthlyRate(annualRate)
    var periodInMonths = MortgageCalculator.getPeriodInMonths(periodInYears)

    print("PAYMENT SCHEDULE")
    print("----------------")

    for (numberOfPaymentsMade in 1..periodInMonths) {
      var loanBalance = MortgageCalculator.calculateBalance(principal, annualRate, periodInYears, numberOfPaymentsMade)
      var loanBalanceFormatted = NumberFormat.getCurrencyInstance().format(loanBalance)
      print(loanBalanceFormatted)
    }
  }
}
