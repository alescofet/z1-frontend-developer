/* eslint-disable no-undef */
///<reference types="Cypress" />
import Camera from "../../src/components/Camera";
import Approved from "../../src/components/Approved";
import TryAgain from "../../src/components/TryAgain";
import { mount } from '@cypress/react'
const { url } = require("inspector");

describe("Test rendering of intro",() =>{
    it("Should be able to submit a successful submission via contact-us form", ()=>{
        mount(<Camera />)
        cy.get('h1').should('have.text', 'Take picture')
        cy.get('.text').should('contain','Fit your ID card inside the frame.')
        cy.get('.objective').click()
        cy.get('scanner')
        cy.get('.accepted').should('have.css','border', '2px solid rgb(105, 204, 139)')
        cy.get('.rejected').should('have.css','border', '2px solid rgb(192, 0, 0)')
    });
})