package inheritance

class TextBox extends UIControl {

  // Class fields have private access by default
  var _text : String as Text

  construct() {
    super(true)

    print("TextBox")
    print("-----")
  }

  static function main() {
    var control = new UIControl(true)
    
    var textbox = new TextBox()
    textbox.disable()
    print(textbox.Enabled)   // false
    print("-----")

    var textbox1 = new TextBox()
    textbox1.Text = "Hello"
    var textbox2 = textbox1
    print(textbox1.hashCode())   // e.g. 1800967368 (decimal)
    print(textbox2.hashCode())   // Same hash code as box1
    print(textbox1.equals(textbox2)) // true
    print(textbox1.toString())   // Hello (used to be inheritance.TextBox@6b5894c8 (hash code in hex))
    print(textbox2)              // Hello
    print("-----")

    show(control)                // inheritance.UIControl@2c3dec30
    show(textbox1)               // Hello (upcasting TextBox to UIControl)
    print("-----")
  }

  static function show(control : UIControl) {
    print(control) // Hello
  }

  // Class methods have public access by default
  function clear() : void {
    _text = ""
  }
  
  override function toString() : String {
    return _text
  }

}
