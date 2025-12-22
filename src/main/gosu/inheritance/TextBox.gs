package inheritance

class TextBox extends UIControl {

  var _text : String as Text

  static function main() {
    var control = new TextBox()
    control.disable()
    print(control.Enabled)
    print("-----")

    var box1 = new TextBox()
    var box2 = box1
    print(box1.hashCode())   // e.g. 1800967368 (decimal)
    print(box2.hashCode())   // Same hash code as box1
    print(box1.equals(box2)) // true
    print(box1.toString())   // inheritance.TextBox@6b5894c8 (hash code in hex)
  }

  function clear() : void {
    _text = ""
  }
  
}
