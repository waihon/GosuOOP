package inheritance

class UIControl {
  
  var _isEnabled : Boolean as readonly Enabled = true
  
  static function main() : void {
    var control = new UIControl()
    control.disable()
    print(control.Enabled)
    print("-----")
  }
  
  function enable() : void {
    _isEnabled = true
  }
  
  function disable() : void {
    _isEnabled = false
  }
  
}
