function openOrSenior(data) {
    var SenStat;

    for (var i = 0; i < data.length; i++) {
        for (var x = 0; x < data[i].length; x++) {

        }
        if (data[i] < 55)

        {
            SenStat.push("Open");
            i++;
            return;
        } else if (data[i] > 55 && data[0][i] > 7) {
            SenStat.push("Senior");
        }
    }
    return SenStat;
}

openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]);