import https from "https";

export const caffeine = () => {
    https.get("https://immense-stream-62259.herokuapp.com/", res => {
        const { statusCode } = res;

        if (statusCode == 200) {
            return;
        }
    });
};

export const caffeineHandler = (req, res) => {
    console.log("Wake Up! 🚀");
    res.status(200).end();
};
