const boxAlexis = document.querySelector('#box-Alexis')
const boxFarge = document.querySelector('#box-Farge')
const boxPalermo = document.querySelector('#box-Palermo')
const boxPortal = document.querySelector('#box-Portal')

boxAlexis.addEventListener('click', () => {
    document.querySelector('.Alexis').classList.toggle('hidden')
    console.log('clicked')
})

boxFarge.addEventListener('click', () => {
    document.querySelector('.Farge').classList.toggle('hidden')
    console.log('clicked')
})

boxPalermo.addEventListener('click', () => {
    document.querySelector('.Palermo').classList.toggle('hidden')
    console.log('clicked')
})

boxPortal.addEventListener('click', () => {
    document.querySelector('.Portal').classList.toggle('hidden')
    console.log('clicked')
})