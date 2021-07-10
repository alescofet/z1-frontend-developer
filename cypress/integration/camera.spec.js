/* eslint-disable no-undef */
///<reference types="Cypress" />
const { url } = require("inspector");
const approved={"summary":{"outcome":"Approved"}}
const rejected={"summary":{"outcome":"Too Much Glare"}}

describe("Test rendering of intro",() =>{
    it("Should be able to submit a successful submission via contact-us form", ()=>{
        cy.visit('http://localhost:3000/camera')
        cy.get('h1').should('have.text', 'Take picture')
        cy.get('.text').should('contain','Fit your ID card inside the frame.')
    });
    it("Border should be green if the ID is accepted", ()=>{
        cy.intercept('post','https://front-exercise.z1.digital/evaluations',approved).as('catch')
        cy.visit('http://localhost:3000/camera')
        cy.get('.objective').click()
        cy.wait('@catch')
        cy.get('.objective').should('have.css','border', '2px solid rgb(105, 204, 139)')
        cy.get('.objective').click()
        cy.url().should('contain', 'Approved')
    });
    it("Border should be red if the ID is rejected", ()=>{
        cy.intercept('post','https://front-exercise.z1.digital/evaluations',rejected).as('catch')
        cy.visit('http://localhost:3000/camera')
        cy.get('.objective').click()
        cy.wait('@catch')
        cy.get('.objective').should('have.css','border', '2px solid rgb(192, 0, 0)')
        cy.get('.objective').click()
        cy.url().should('contain', 'TryAgain')
    });
})