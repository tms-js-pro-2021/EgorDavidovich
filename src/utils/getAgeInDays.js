import { getDateNow } from "./date";

export const getDateBirthday = () => {
    const date = new Date(1994, 4, 4).getTime();
    const result = Math.round((getDateNow() - date) / 1000 / 60 / 60 / 24);
    return result;
}
