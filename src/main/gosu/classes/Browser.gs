package classes

class Browser {
  function navigate(address: String) {
    var ip = findIpAddress(address)
    var html = sendHttpRequest(ip)
    print(html)
  }

  private function findIpAddress(address: String): String {
    return "127.0.0.1"
  }

  private function sendHttpRequest(ip: String): String {
    return "<html><head><title>Page Title</title></head><body>Hello, World!</body></html>"
  }
}
