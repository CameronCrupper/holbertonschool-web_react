import { shallow } from 'enzyme';
import Notifications from "./Notifications";
import React from 'react';
import "../../config/setupTests"
import NotificationItem from './NotificationItem';
import { expect } from 'chai';
import { getLatestNotification } from "../utils/utils";
 
describe("Testing the <Notifications /> componet", () => {
    let listNotifications;
    let latestNotification;
    beforeEach(() => {
        latestNotification = getLatestNotification();
        listNotifications = [
          { id: 1, type: "default", value: "New course available" },
          { id: 2, type: "urgent", value: "New resume available" },
          { id: 3, type: "urgent", html: { __html: latestNotification } },
        ];
      });

    it("test Notifications Render", () => {
        const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications}/>);
        expect(wrapper.exists()).to.equal(true);
    });

    it("Tests to see if <Notifications />  has three componets", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        expect(wrapper.find("NotificationItem")).to.not.have.lengthOf(3);
    });

    it("Tests to see if <Notifications /> has correct html", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.find('ul')
        .childAt(0).html())
        .to
        .equal('<li data-notification-type="default" class="default">New course available</li>');
    });

    it("Tests the <Notifications /> p tag", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
        expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
    });

    it("Tests the that menuItem is displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={false}/>);
        expect(wrapper.find("div.menuItem").exists()).to.equal(true);
    });

    it("Tests that div.Notifications is not displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find("div.Notifications").exists()).to.equal(false);
    })

    it("Tests menuItem is displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>); 
        expect(wrapper.find("div.menuItem").exists()).to.equal(true);
    });

    it("Tests that div.Notifications is being displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
        expect(wrapper.find("div.Notifications").exists()).to.equal(true);
    })

    it("Tests that Notifications renders correctly  if you pass an empty array", () => {
        const wrapper = shallow(<Notifications listNotifications={[]}/> )
        expect(wrapper.exists()).to.equal(true);
    })
})

describe("Test", () => {
    let listNotifications;
    let latestNotification;
    beforeEach(() => {
        latestNotification = getLatestNotification();
        listNotifications = [
          { id: 1, type: "default", value: "New course available" },
          { id: 2, type: "urgent", value: "New resume available" },
          { id: 3, type: "urgent", html: { __html: latestNotification } },
        ];
      });

      it("Notifications renders Notification Items and items have correct html", () => {
        const wrapper = shallow(
          <Notifications displayDrawer listNotifications={listNotifications} />
        );
        expect(wrapper.exists());
        wrapper.update();
        const listItems = wrapper.find("NotificationItem");
        expect(listItems.exists()).to.equal(true);
        expect(listItems).to.have.lengthOf(3);
        expect(listItems.at(0).html()).to.equal(
            "<li data-notification-type=\"default\" class=\"default\">New course available</li>"
        );
        expect(listItems.at(1).html()).to.equal(
          '<li data-notification-type="urgent" class="urgent">New resume available</li>'
        );
        expect(listItems.at(2).html()).to.equal(
          `<li data-notification-type="urgent" class="urgent">${latestNotification}</li>`
        );
      });
})
