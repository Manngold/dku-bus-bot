import { getBusInfo } from "./api";
import nodeId from "./nodeId";

export const dankook = async (req, res) => {
    const { dankook } = nodeId;
    const results = getBusInfo(dankook);
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text
                    }
                }
            ]
        }
    };
    res.status(200).send(responseBody);
};

export const sangmyung = async (req, res) => {
    const { sangmyung } = nodeId;
    const results = getSangmyung(sangmyung);
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text
                    }
                }
            ]
        }
    };
    res.status(200).send(responseBody);
};

export const yawoori = async (req, res) => {
    const { yawoori } = nodeId;
    const yawoori = getYawoori(yawoori);
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text
                    }
                }
            ]
        }
    };
    res.status(200).send(responseBody);
};

export const cheonan = async (req, res) => {
    const { cheonan } = nodeId;
    const results = getCheonan(cheonan);
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text
                    }
                }
            ]
        }
    };
    res.status(200).send(responseBody);
};

export const doojeong = async (req, res) => {
    const { doojeong } = nodeId;
    const results = getDoojeong(doojeong);
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text
                    }
                }
            ]
        }
    };
    res.status(200).send(responseBody);
};
