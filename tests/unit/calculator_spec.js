var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add two numbers', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(5, calculator.runningTotal)
  })

  it('should subtract two numbers', function(){
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(3, calculator.runningTotal)
  })

  it('should multiply two numbers', function(){
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(15, calculator.runningTotal)
  })

  it('should divide two numbers', function(){
    calculator.numberClick(2)
    calculator.numberClick(1)
    calculator.operatorClick('/')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(3, calculator.runningTotal)
  })

  it('should concatenate multiple number button clicks', function(){
    calculator.numberClick(1)
    calculator.numberClick(1)
    calculator.numberClick(1)
    assert.equal(111, calculator.runningTotal)
  })

  it('should chain multiple operations together', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.operatorClick('+')
    assert.equal(2, calculator.runningTotal)
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.clearClick()
    calculator.operatorClick('=')
    assert.equal(2, calculator.runningTotal)
  })

  

  


  

});
