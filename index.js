const rawOpen = XMLHttpRequest.prototype.open
const rawSend = XMLHttpRequest.prototype.close

XMLHttpRequest.prototype.open = function (...args) {
  rawOpen.apply(this, args)
  this.method = args[0]
  this.url = args[1]
  this.async = args[2]
}

XMLHttpRequest.prototype.send = function (...args) {
  rawSend.apply(this, args)
}

function isInURLs(url) {
  
}

function verifyDataType(data) {

}