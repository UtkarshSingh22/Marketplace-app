export function convertDate(inputFormat) {
    function pad(s) {
        return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join("-");
}

export function convertDateToNormalFormat(input) {
    let date = new Date(input).toISOString().split("T")[0];

    let parts = date.split("-");
    let finalDate = `${parts[2]}-${parts[1]}-${parts[0]}`;

    return finalDate;
}
