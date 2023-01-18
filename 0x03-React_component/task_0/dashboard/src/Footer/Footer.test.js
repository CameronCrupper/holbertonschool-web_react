import Footer from './Footer.js'
import { shallow } from 'enzyme';
import React from 'react';
import "../../config/setupTests"
import { expect } from 'chai';


describe("Testing the <Footer /> componet", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />)
    })
    it("Footer componet loads", () => {
        expect(wrapper.render()).to.not.be.an("undefined")
    });

    it("Footer componet has text", () => {
        expect(wrapper.text().includes('Copyright')).to.equal(true);
    });
});
