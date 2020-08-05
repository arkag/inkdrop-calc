// pulled from inkdrop-math

function locator(value, fromIndex) {
    return value.indexOf('^', fromIndex)
  }
  
  const RE_CALC = /^\^((?:\\\^|[^^])+)\^/
  
  function tokenizer(eat, value, silent) {
    const match = RE_CALC.exec(value)
  
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