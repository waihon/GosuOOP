package oodesign

uses java.text.NumberFormat

class MortgageCalculator {
  static final var PERCENT = 100
  static final var MONTHS_IN_YEAR = 12

  var _principal : int
  var _annualRate : double
  var _periodInYears : int

  construct(principal : int, annualRate : double, periodInYears : int) {
    _principal = principal
    _annualRate = annualRate
    _periodInYears = periodInYears
  }

  static function main() {
    var scanner = new Scanner(System.in)

    var principal : int = MortgageInput.readPrincipal()
    var annualRate : double = MortgageInput.readAnnualRate()
    var periodInYears : int = MortgageInput.readPeriodInYears()
    var calculator = new MortgageCalculator(principal, annualRate, periodInYears)

    var mortgage = calculator.calculateMortgage()
    var mortgageFormatted = NumberFormat.getCurrencyInstance().format(mortgage)

    print("Mortgage: ${mortgageFormatted}")
  }

  function calculateMortgage() : double {
    //        r ((1 + r) ^ n)
    // M = P -----------------
    //        ((1 + r) ^ n) - 1
    // ... where (1 + r) ^ n is called the Compounding Factor or Future Value Interest Factor (FVIF)
    //
    // When principal = 100,000, annualRate = 3.92, periodInYears = 30, the mortgage payment should be 472.81
    // When principal = 180,000, annualRate = 4.00, periodInYears = 10, the mortgage payment should be 1,822.41

    var monthlyRate: double = MonthlyRate
    var periodInMonths: int = PeriodInMonths
    var compoundingFactor: double = CompoundingFactor

    var mortgage: double = _principal * (monthlyRate * compoundingFactor) / (compoundingFactor - 1.0)
    mortgage = Math.round(mortgage * 100.0) / 100.0 // round to 2 decimal places

    return mortgage
  }


  function calculateBalance(numOfPaymentsMade : int) : double {
    return _principal
      * (Math.pow(1 + MonthlyRate, PeriodInMonths) - Math.pow(1 + MonthlyRate, numOfPaymentsMade))
      / (Math.pow(1 + MonthlyRate, PeriodInMonths) - 1)
  }

  property get MonthlyRate() : double {
    return _annualRate / PERCENT / MONTHS_IN_YEAR
  }

  property get PeriodInMonths() : int {
    return _periodInYears * MONTHS_IN_YEAR
  }

  private property get CompoundingFactor() : double {
    return Math.pow((1 + MonthlyRate), PeriodInMonths)
  }
}
