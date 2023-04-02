export const timeAgoText = (date) => {
    const currentDate = new Date();
    const postDate = new Date(date);

    const differenceInMs = currentDate.getTime() - postDate.getTime();

    const msInOneYear = 1000 * 60 * 60 * 24 * 365;
    const msInOneMonth = 1000 * 60 * 60 * 24 * 30;
    const msInOneWeek = 1000 * 60 * 60 * 24 * 7;
    const msInOneDay = 1000 * 60 * 60 * 24;
    const msInOneHour = 1000 * 60 * 60;
    const msInOneMin = 1000 * 60;
    const msInOneSec = 1000;

    if (differenceInMs / msInOneYear >= 1) {
        return (Math.floor(differenceInMs / msInOneYear) + "yr");
    }
    else if (differenceInMs / msInOneMonth >= 1) {
        return (Math.floor(differenceInMs / msInOneMonth) + "mo");
    }
    else if (differenceInMs / msInOneWeek >= 1) {
        return (Math.floor(differenceInMs / msInOneWeek) + "week");
    }
    else if (differenceInMs / msInOneDay >= 1) {
        return (Math.floor(differenceInMs / msInOneDay) + "day");
    }
    else if (differenceInMs / msInOneHour >= 1) {
        return (Math.floor(differenceInMs / msInOneHour) + "h");
    }
    else if (differenceInMs / msInOneMin >= 1) {
        return (Math.floor(differenceInMs / msInOneMin) + "min");
    }
    else if (differenceInMs / msInOneSec >= 1) {
        return (Math.floor(differenceInMs / msInOneSec) + "sec");
    }
    else {
        return ("now");
    }
}
