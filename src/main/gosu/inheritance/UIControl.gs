package inheritance

class UIControl {

  var _isEnabled : boolean as readonly Enabled = true

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
  
  function enable() : void {
    _isEnabled = true
  }
  
  function disable() : void {
    _isEnabled = false
  }
  
}
