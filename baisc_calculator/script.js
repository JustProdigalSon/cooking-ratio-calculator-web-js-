class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear(){
        this.currentOperand = ''
        this.previousOperand = '' 
        this.operation = undefined
    }
    delet(){
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    // appendNumber(number) {
    //     if (number === '.' && this.currentOperand.includes('.')) return
    //     this.currentOperand = this.currentOperand.toString() + number
    //   }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
      }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
        console.log("1")
    }
    
  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '/':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
    }
}




const numberButtons = document.querySelectorAll('[data-number]')
const operationsButtons = document.querySelectorAll('[data-operations]')
const equalButtons = document.querySelectorAll('[data-equal]')
const deleteButtons = document.querySelectorAll('[data-delete]')
const allClearButton = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-opperand]')
const currentOperandTextElement = document.querySelector('[data-current-opperand]')


const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationsButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
})

equalButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.compute()
      calculator.updateDisplay()
    })
})

allClearButton.forEach(button => {
  button.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
  })
})

deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.delet()
    calculator.updateDisplay()
  })
})

