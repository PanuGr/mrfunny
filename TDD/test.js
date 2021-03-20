const assert = require("assert")
const welcome =require('./welcome')
const fact = require('./facts')

describe("Mr Funny's functions",()=>{
    it('welcome function', ()=>{
        let name= 'Panu'
        const result= welcome(name)
        assert.ok(result==='Hello Panu')
    })

    it('fact function',()=>{
        let facts = ["The speed of a computer mouse is measured in Mickeys.", 'other random answer']
        const result= fact(facts);
        assert.ok(result ==='The speed of a computer mouse is measured in Mickeys.')
    })
})
