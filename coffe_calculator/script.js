class Calculator{
  constructor(waterOutputTextElement,coffeeOutputTextElemnt){
    this.waterOutputTextElement = waterOutputTextElement
    this.coffeeOutputTextElemnt = coffeeOutputTextElemnt
  }
  update_display(){
    console.log("lalal")
    this.waterOutputTextElement.innerText = this.water_final
    this.coffeeOutputTextElemnt.innerText = this.coffee_final
    
  }

  compute_coffee(cups){
    let coffee_final
    const ratio = this.ratio
    const water_final = cups*180
    //const water_amount = parseFloat(cups) 
    coffee_final = Math.round(water_final/ratio)
    this.coffee_final = coffee_final  
    this.water_final = water_final
  }
  
  cofe_machin_choser(power,kind){
    // this.kindButtons = kind
    // this.powerbuton = power
    //also will start computing? 
    let ratio
    switch(kind){
      case "Pour-O":
        switch(power){
          case "X":
            ratio = 18
            break 
          case "XX":
            ratio = 16.5
            break
          case "XXX":
            ratio = 15
            break
        }
        break
      case "French-P":
        switch(power){
          case "X":
            ratio = 18
            break 
          case "XX":
            ratio = 15
            break
          case "XXX":
            ratio = 12
            break
        }
        break
      case "Mokka-P":
        switch(power){
          case "X":
            ratio = 17.25
            break 
          case "XX":
            ratio = 10
            break
          case "XXX":
            ratio = 7
            break
        }
        break
      default:
        return
    }
    this.ratio = ratio
  }



}




const powerButtons = document.querySelectorAll('[data-power]')
const cupsButtons = document.querySelectorAll('[data-cups]')
const kindButtons = document.querySelectorAll('[data-kind]')
const coffeeOutputTextElemnt = document.querySelector('[data-coffee-output]')
const waterOutputTextElement = document.querySelector('[data-water-output]')

const calculator = new Calculator(waterOutputTextElement,coffeeOutputTextElemnt)



kindButtons.forEach(button =>{
  button.addEventListener('click',() => {
    kind = button.innerText
    calculator.cofe_machin_choser("X","Mokka-P")
    calculator.compute_coffee("1")
    calculator.update_display()
  })
})

cupsButtons.forEach(button =>{
  button.addEventListener('click',() => {
  })})