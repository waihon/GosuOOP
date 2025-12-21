package inheritance

class TextBox extends UIControl {

  var _text : String as Text

  static function main() {
    var control = new TextBox()
    control.disable()
    print(control.Enabled)
    print("-----")
  }

  function clear() : void {
    _text = ""
  }
  
}
