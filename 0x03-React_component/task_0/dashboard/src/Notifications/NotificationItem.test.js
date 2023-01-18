import { shallow } from 'enzyme';
import NotificationItem from "./NotificationItem.js";
import React from 'react';
import "../../config/setupTests"
import { expect } from 'chai'

describe("Testing the <NotificationItem /> componet renders", () => {

    it("Tests to see <Li componet was rendered", () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.render()).to.not.be.an("undefined")
    });

    it("Tests to see if props are passed along and rendered", () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.props()['data-notification-type']).to.equal('default');
        expect(wrapper.props()['children']).to.equal('test');
    });
})
