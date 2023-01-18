import Login from './Login.js'
import { shallow } from 'enzyme';
import React from 'react';
import "../../config/setupTests"
import { expect } from 'chai';


describe("Testing the <Login /> componet", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login />)
    })
    it("Login componet loads", () => {
        expect(wrapper.render()).to.not.be.an("undefined")
    });

    it("Login componet has img", () => {
        expect(wrapper.find("input")).to.have.lengthOf(2);
    });

    it("Login componet has h1", () => {
        expect(wrapper.find("label")).to.have.lengthOf(2);
    });
});
