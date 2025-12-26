package inheritance

class Internal {
  static function main() {
    var control = new UIControl(true)
    // Internal fields of a class can be accessed by other classes within the same packkage.
    print(control._internalState)
  }
}
