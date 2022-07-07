import dayjs, { OpUnitType } from 'dayjs';

export const getDate = (date: string, format: string = "ddd, D/M/YYYY") => {

    const myDate = dayjs(date).format(format);

    return myDate;

}

export const getFirstDay = (unit: OpUnitType = "year") => {

    const date = dayjs().startOf(unit);

    return date.toISOString();

}

export const getActualDate = (format: string = "ddd, D/M/YYYY") => {

    const date = dayjs().format(format);
    return date;

}