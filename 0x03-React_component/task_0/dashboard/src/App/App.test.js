import { shallow, mount } from 'enzyme';
import App from './App';
import React from 'react';
import "../../config/setupTests";
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
// import { expect } from 'chai';
import CourseList from '../CourseList/CourseList';

describe("<App>", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it("<App /> is rendered without crashing", () => {
		expect(wrapper.exists()).toBe(true);
	});

    it("<App /> is rendering <Header /> componet", () => {
        expect(wrapper.contains(<Header />)).toEqual(true);
    });

    it("<App /> is rendering <Notification /> componet", () => {
        expect(wrapper.contains(<Notifications displayDrawer={true}/>)).toEqual(false);
    });

    it("<App /> is rendering <Login /> componet", () => {
        expect(wrapper.contains(<Login />)).toEqual(true);
    });

    it("<App /> is rendering <Footer /> componet", () => {
        expect(wrapper.contains(<Footer />)).toEqual(true);
    });

    it("<App /> is not rending <CourseList /> componet", () => {
        expect(wrapper.exists(CourseList)).toEqual(false);
    });

})

describe("<App />", () => {
    let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App isLoggedIn={true}/>);
	});

    it("Tests App when is logged in to see logged in componet", () => {
        expect(wrapper.exists(Login)).toEqual(false);
    });

    it("Tests App when logged in to see that CourseList exists", () => {
        expect(wrapper.exists(CourseList)).toEqual(true);
    })
})

describe("<App /> ", () => {
    it("Mocks Alert('Logging you out') when pressing Ctrl + h", () => {
        let events = {};
        const myLogOut = jest.fn(() => undefined);

        document.addEventListener = jest.fn((event, cb) => {
            events[event] = cb;
        });
        window.alert = jest.fn();
        shallow(<App logOut={myLogOut} />);

        events.keydown({ key: "h", ctrlKey: true })
        expect(myLogOut).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Logging you out");
        // const myLogOut = jest.fn(() => undefined);

        // const appComp = mount(<App logOut={myLogOut} />);
        // const log = jest.spyOn(console, 'log');
        
        // expect(appComp.props.logOut);
        // expect(log);
    
        jest.restoreAllMocks();    
        
    })
})
