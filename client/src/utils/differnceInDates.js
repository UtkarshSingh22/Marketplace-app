export const differenceInDates = (from, to) => {
    // let fromDate = from.split("T")[0];
    // let toDate = to.split("T")[0];

    const day = 24 * 2600 * 1000;
    const start = new Date(from);
    const end = new Date(to);

    const diff = Math.round(Math.abs((start - end) / day));

    return diff;
};
