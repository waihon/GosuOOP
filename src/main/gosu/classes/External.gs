package classes

uses inheritance.UIControl

class External extends UIControl {

  construct() {
    super(true)
  }

  static function main() {
    var control = new UIControl(false)
    print(control.Enabled)
    // Internal fields of a class cannot be accessed by classes in a different packkage,
    // not even by its subclass.
    //print(control._internalState)
  }

}