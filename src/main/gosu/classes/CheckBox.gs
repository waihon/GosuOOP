package classes

uses inheritance.UIControl

class CheckBox extends UIControl {

  var _checked : boolean as Checked

  construct(isEnabled : boolean) {
    super(isEnabled)
  }

  static function main() : void {
    var control = new CheckBox(true)
    // Protected fields of a class can be accessed by its subclasses even in another package
    print(control._protectedState)
  }  
}
