package inheritance

class UIControl {

  // Class fields have private access by default
  var _isEnabled : boolean as readonly Enabled = true
  internal var _internalState : String = "Stable"
  protected var _protectedState : String = "Unstable"

  construct(isEnabled : boolean) {
    print("UIControl")
    print("-----")

    _isEnabled = isEnabled
  }

  static function main() : void {
    var control = new UIControl(true)
    control.disable()
    print(control.Enabled) // false
    print("-----")
  }
  
  // Class methods have public access by default
  function enable() : void {
    _isEnabled = true
  }
  
  function disable() : void {
    _isEnabled = false
  }
  
}
