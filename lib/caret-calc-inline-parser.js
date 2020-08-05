// pulled from inkdrop-math

function locator(value, fromIndex) {
    return value.indexOf('^', fromIndex)
  }
  
  const RE_MATH = /^\^((?:\\\^|[^^])+)\^/
  
  function tokenizer(eat, value, silent) {
    const match = RE_MATH.exec(value)
  
    if (match) {
      if (silent) {
        return true
      }
  
      return eat(match[0])(/SOMETHING/)
    }
  }
  
  tokenizer.locator = locator
  tokenizer.notInLink = true
  
  module.exports = tokenizer