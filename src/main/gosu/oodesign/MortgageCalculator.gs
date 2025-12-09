package oodesign

uses java.text.NumberFormat

class MortgageCalculator {
  static final var PERCENT = 100
  static final var MONTHS_IN_YEAR = 12
    
  static function main() {
    var scanner = new Scanner(System.in)

    var principal: int = MortgageInput.readPrincipal()
    var annualRate: double = MortgageInput.readAnnualRate()
    var periodInYears: int = MortgageInput.readPeriodInYears()

    var mortgage = calculateMortgage(principal, annualRate, periodInYears)
    var mortgageFormatted = NumberFormat.getCurrencyInstance().format(mortgage)

    print("Mortgage: ${mortgageFormatted}")
  }
  
  static function calculateMortgage(
      principal: int,
      annualRate: double,
      periodInYears: int): double {
  
    //        r ((1 + r) ^ n)
    // M = P -----------------
    //        ((1 + r) ^ n) - 1
    // ... where (1 + r) ^ n is called the Compounding Factor or Future Value Interest Factor (FVIF)
    //
    // When principal = 100,000, annualRate = 3.92, periodInYears = 30, the mortgage payment should be 472.81
    // When principal = 180,000, annualRate = 4.00, periodInYears = 10, the mortgage payment should be 1,822.41

    var monthlyRate: double = getMonthlyRate(annualRate)
    var periodInMonths: int = getPeriodInMonths(periodInYears)
    var compoundingFactor: double = getCompoundingFactor(annualRate, periodInYears)

    var mortgage: double = principal * (monthlyRate * compoundingFactor) / (compoundingFactor - 1.0)
    mortgage = Math.round(mortgage * 100.0) / 100.0 // round to 2 decimal places

    return mortgage
  }

  static function getMonthlyRate(annualRate: double): double {
    return annualRate / PERCENT / MONTHS_IN_YEAR
  }

  static function getPeriodInMonths(periodInYears: int): int {
    return periodInYears * MONTHS_IN_YEAR
  }

  static function getCompoundingFactor(annualRate: double, periodInYears: int): double {
    return Math.pow((1 + getMonthlyRate(annualRate)), getPeriodInMonths(periodInYears))
  }

  static function calculateBalance(
    principal: int,
    annualRate: double,
    periodInYears: int,
    numOfPaymentsMade: int): double {

    var monthlyRate = getMonthlyRate(annualRate)
    var periodInMonths = getPeriodInMonths(periodInYears)

    return principal
      * (Math.pow(1 + monthlyRate, periodInMonths) - Math.pow(1 + monthlyRate, numOfPaymentsMade))
      / (Math.pow(1 + monthlyRate, periodInMonths) - 1)
  }
}
