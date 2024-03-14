
export const getUtcDateFromESTUnix = unixSecs => {
    const conversion = (4*60*60)+unixSecs;
    const date = new Date(conversion*1000);

    return date;
}

export const timeAndDateFormatReadable = ( value, timezone) => {
    const dateUtc = getUtcDateFromESTUnix(value);

    const formattedDate = new Intl.DateTimeFormat('en-US', {
                                dateStyle: 'full',
                                timeStyle: 'short',
                                timeZone: timezone,
                            }).format(dateUtc);
            
    return formattedDate?.split(/,*\s+a*t*\s*/);

}

export const getDateObj = (datesArray, timezone) => {
    const datesArr = datesArray?.flat();

    const startDateArray = timeAndDateFormatReadable(datesArr[0], timezone);
    const startDateEndTime = timeAndDateFormatReadable(datesArr[1], timezone);
    
    const dateObj = {
        "weekday": startDateArray[0],
        "month": startDateArray[1],
        "day": startDateArray[2],
        "year": startDateArray[3],
        "time": `${startDateArray[4]} ${startDateArray[5].toLocaleLowerCase()} - ${startDateEndTime[4]} ${startDateEndTime[5].toLowerCase()}`,
        "amOrpm": startDateArray[5],
    };

    if(datesArr.length > 2){
        const endDateArray = timeAndDateFormatReadable(datesArr[2]);
        dateObj.weekday = dateObj.weekday + ` & ${endDateArray[0]}`;
        dateObj.day = dateObj.day + ` & ${endDateArray[2]}`;
    }

    return dateObj;
}