import { shallow } from 'enzyme';
import React from 'react';
import "../../config/setupTests"
import { expect } from 'chai'
import CourseListRow from './CourseListRow.js'

describe("Testing the <CourseListRow /> componet renders", () => {

    it("Tests to see if header is True and contains col", () => {
        let props = {
			isHeader: true,
			textFirstCell: 'dumbstring',
		};
        const wrapper = shallow(<CourseListRow {...props} />);

        expect(wrapper.find("th").get(0).props.colSpan).to.equal(2);
    });

    it("Tests that renders two cells then textSecondCell is present", () => {
        let props = {
			isHeader: true,
			textFirstCell: 'dumbstring',
            textSecondCell: 'dumbstring'
		};
        const wrapper = shallow(<CourseListRow {...props} />);

        expect(wrapper.find("tr").children()).to.have.lengthOf(2);
    })

    it("Tests that two td element render inside of tr", () => {
        const wrapper = shallow(
            <CourseListRow
              isHeader={false}
              textFirstCell="one"
              textSecondCell="two"
            />
          );
          const item = wrapper.find("tr");
      
          expect(item).to.have.lengthOf(1);
          expect(item.children("td")).to.have.lengthOf(2);
        });
})
