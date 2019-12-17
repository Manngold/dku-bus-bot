import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const SERVICE_KEY = process.env.ServiceKey;
const CITY_CODE = 34010;

const url = `http://openapi.tago.go.kr/openapi/service/ArvlInfoInqireService/getSttnAcctoArvlPrearngeInfoList?ServiceKey=${SERVICE_KEY}`;

export const getBusInfo = async nodeId => {
    try {
        return await axios
            .get(url, {
                params: {
                    cityCode: CITY_CODE,
                    nodeId
                }
            })
            .then(response => {
                console.log(response.data.response);
                const {
                    data: {
                        response: {
                            body: {
                                items: { item }
                            }
                        }
                    }
                } = response;
                console.log(item);
                return item;
            });
    } catch (error) {
        console.log(error);
    }
};
