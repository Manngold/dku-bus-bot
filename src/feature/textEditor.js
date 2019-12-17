const textEditor = data => {
    let text = "";
    if (data === undefined) {
        text += "도착 예정 정보가 없습니다.😭";
    } else {
        const { nodenm: stationName } = data[0];
        text += `${stationName} 정류장의 버스 도착예정시간입니다 🚌\n`;
        for (let obj of data) {
            const {
                routeno: busNum,
                arrprevstationcnt: leftStation,
                arrtime
            } = obj;
            text += `${busNum}번 - ${
                arrtime / 60 < 1 ? `곧 도착` : `${Math.round(arrtime / 60)}분`
            }, ${leftStation}정류장 전\n`;
        }
    }
    return text;
};

export default textEditor;
