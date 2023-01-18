import { getFullYear, getFooterCopy, getLatestNotification } from "./utils"
describe("getFullYear", () => {
    it("returns correct year", () => {
        expect(getFullYear()).toEqual(new Date().getFullYear());
    });
});

describe("getFooterCopy", () => {
    it("When passed true", () => {
        expect(getFooterCopy(true)).toEqual("Holberton School");
    });

    it("When passed false", () => {
        expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
    });
});

describe("getLatestNotification", () => {
    it("getting string back", () => {
        expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
    });
});
