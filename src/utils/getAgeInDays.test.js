import { getDateBirthday} from './getAgeInDays';


jest.mock('../utils/date', () => ({
    __esModule: true,
    getDateNow: () => 1625741349667,

}))

describe('getDateBirthday', () => {

    it("найти количество дней с дня рождения", () => {
        expect(getDateBirthday()).toBe(9928);       
    })
})
