const {shuffleArray} = require('./utils')
const { By } = require('selenium-webdriver')

require('chromedriver')

describe('shuffleArray length', () => {
    test('Shuffle array', async() => {
        expect(shuffleArray([1,2,4,5,6]).length).toBe(5)
    }) 
    test('If the data type is an array', async() => {
        expect(Array.isArray(shuffleArray([1,2,4,5,6]))).toBe(true)
    })   
})