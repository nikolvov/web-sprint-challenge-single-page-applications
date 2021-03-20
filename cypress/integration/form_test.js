describe('Testing pizza builder', () => {

    const textInput  = () => cy.get('.inputs > :nth-child(1) > input')
    const submitBtn = () => cy.get('button')
    const sizeSelect = () => cy.get('select')
    const specialInput = () => cy.get('.special > label > input')
    const pepperoniBox = () => cy.get(':nth-child(2) > label > input')
    const oliveBox = () => cy.get('.checkboxes > :nth-child(3) > label > input')
    const fetaBox = () => cy.get(':nth-child(4) > label > input')
    const peppersBox = () => cy.get(':nth-child(5) > label > input')
    const testText = 'Text is working!'

    it('Visits Pizza Builder site', () => {
        cy.visit('http://localhost:3001/pizza')
    })

    it('renders properly', () => {
        textInput().should('exist')
        submitBtn().should('exist')
        sizeSelect().should('exist')
        pepperoniBox().should('exist')
        oliveBox().should('exist')
        fetaBox().should('exist')
        peppersBox().should('exist')
        specialInput().should('exist')
    })

    it('Can add text to box', () => {
        textInput()
        .type(testText)
        .should('have.value', testText)

        specialInput()
        .type(testText)
        .should('have.value', testText)
    })

    it('Can select sizing', () => {
        sizeSelect()
        .select('small')
        .select('medium')
        .select('large')
    })

    it('Can select multiple toppings', () => {
        pepperoniBox()
        .click()

        oliveBox()
        .click()

        fetaBox()
        .click()
    
        peppersBox()
        .click()
    })

    it('Can submit order', () => {
        submitBtn()
        .click()


    })

})