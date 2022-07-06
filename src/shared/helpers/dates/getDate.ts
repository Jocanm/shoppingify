import dayjs from 'dayjs';

export const getDate = (date: string, format: string = "ddd, D/M/YYYY") => {

    const myDate = dayjs(date).format(format);

    return myDate;

}