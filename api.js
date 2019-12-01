import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const ServiceKey = process.env.ServiceKey;
const CITY_CODE = 34010;

const url = `http://openapi.tago.go.kr/openapi/service/ArvlInfoInqireService/getSttnAcctoArvlPrearngeInfoList`;

export const getBusInfo = async nodeId => {
    try {
        await axios
            .get(url, {
                params: {
                    ServiceKey,
                    cityCode: CITY_CODE,
                    nodeId
                }
            })
            .then(response => {
                const results = response.data.response.body.items.item;
                console.log(results);
                return results;
            });
    } catch (error) {
        console.log(error);
    }
};
