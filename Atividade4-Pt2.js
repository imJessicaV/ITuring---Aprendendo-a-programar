
let age1 = 13
let age2 = 18
let age3 = 20

legalAgeOrNot(age1)
legalAgeOrNot(age2)
legalAgeOrNot(age3)
function legalAgeOrNot(age) {
    if (age >= 18) {
      console.log('Sua idade é maior ou igual a 18 anos então você pode entrar na Boate!!.')
    } else {
      console.log('Sua idade é menor que 18 anos então você não pode entrar na Boate!!')
    }
  }  
  