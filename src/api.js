import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const CITY_CODE = 34010;

const url = `http://openapi.tago.go.kr/openapi/service/ArvlInfoInqireService/getSttnAcctoArvlPrearngeInfoList?ServiceKey=zV8r1Gpj5ywiMiuWL%2F49HVJX33pia01Eg%2F3qlvACcEax7t3NODbr9Pjmc6gSUUnhSmR4n1caaiBN5XlKfOQNVw%3D%3D}`;

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
