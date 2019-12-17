import { getBusInfo } from "./api";
import nodeId from "./nodeId";
import textEditor from "./feature/textEditor";

export const dankook = async (req, res) => {
    const { dankook } = nodeId;
    const results = await getBusInfo(dankook);
    console.log(results);
    const text = textEditor(results);
    console.log(text);
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
    const results = await getBusInfo(sangmyung);
    const text = textEditor(results);
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
    const results = await getBusInfo(yawoori);
    const text = textEditor(results);
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
    const results = await getBusInfo(cheonan);
    const text = textEditor(results);
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
    const results = await getBusInfo(doojeong);
    const text = textEditor(results);
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
