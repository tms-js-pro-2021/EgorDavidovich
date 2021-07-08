import { getDateNow } from './date';
import { getDateBirthday} from './getAgeInDays';


jest.mock('../utils/date', () => ({
    __esModule: true,
    getDateNow: () => 1625741349667,

}))

describe('getAgeInDays', () => {

    it("найти количество дней с дня рождения", () => {
        const result = Math.round((getDateNow() - getDateBirthday())/1000/60/60/24)
        expect(result).toBe(9928);       
    })
})
