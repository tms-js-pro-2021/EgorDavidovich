import { getDateBirthday} from './getAgeInDays';


describe('getAgeInDays', () => {

    it("find my age", () => {
        const birthYear = 1994;
        const birthMonth = 5;
        const birthDay = 3;
        const result = getDateBirthday(birthYear, birthMonth, birthDay);
        expect(result).toBe(27);       

    })
})