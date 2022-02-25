export const getTimeStamp = (date = new Date()) => Math.floor(Number(date) / 1000);

export function formatTime(date, fmtString) {
    const formatNumber = (n) => {
        const s = String(n);
        return s.length > 1 ? s : `0${s}`;
    };
    const map = {
        YYYY: date.getFullYear(),
        MM: date.getMonth() + 1,
        DD: date.getDate(),
        HH: date.getHours(),
        mm: date.getMinutes(),
        ss: date.getSeconds(),
        SSS: date.getMilliseconds(),
    };
    let ret = fmtString;
    const keys = Object.keys(map);
    keys.forEach((key) => {
        ret = ret.replace(new RegExp(key, 'g'), formatNumber(map));
    });
    return ret;
}

export const serializeTimeStamp = (secondTimestamp) => {
    return formatTime(new Date(secondTimestamp * 1000), 'YYYY.MM.DD');
};

export const serializeTimeOfChinese = (secondTimestamp) => {
    console.log(secondTimestamp, 'secondTimestamp');
    return formatTime(new Date(secondTimestamp * 1000), 'YYYY年MM月DD日');
};