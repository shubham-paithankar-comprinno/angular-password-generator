import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passwordLength = Boolean(false)
  length = 1
  password = ''

  //Booleans
  includeLetters = Boolean(false)
  includeNumbers = Boolean(false)
  includeSymbols = Boolean(false)

  //Functions
  
  onLengthChange (E: Event) {
    let { value } = E.target as HTMLButtonElement
    if (!isNaN(parseInt(value))) {
      this.length = parseInt(value) 
      this.passwordLength = Boolean(true)
    } else {
      this.passwordLength = Boolean(false)
    }
  }

  useLetters () {
    this.includeLetters = !this.includeLetters
  }

  useNumbers () {
    this.includeNumbers = !this.includeNumbers
  }

  useSymbols () {
    this.includeSymbols = !this.includeSymbols
  }

  onButtonClick () {
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUVQWXYZ'
    const symbols = `!@#$%^&*()`

    let validChars = ``
    this.includeLetters ? validChars += letters : null
    this.includeNumbers ? validChars += numbers : null
    this.includeSymbols ? validChars += symbols : null

    let generatedPassword = ''
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]  
    }
    this.password = generatedPassword
  }
}
