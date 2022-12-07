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
    const water_final = cups*180
    this.coffee_final = Math.round(water_final/this.ratio)  
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

var powerinput = undefined
  powerButtons.forEach(button => {
    button.addEventListener('click',() => {
     powerinput = button.innerText}
  )});
  var cupsinput = undefined
  cupsButtons.forEach(button => {
    button.addEventListener('click',() => {
    cupsinput = button.innerText}
  )});



kindButtons.forEach(button =>{
  button.addEventListener('click',() => {
    calculator.cofe_machin_choser(powerinput,button.innerText)
    calculator.compute_coffee(cupsinput)
    calculator.update_display()
    console.log(powerinput)
  })
})

// cupsButtons.forEach(button =>{
//   button.addEventListener('click',() => {
//     calculator.compute_coffee(button.innerText)
//   })})