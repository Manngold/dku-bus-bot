const caffeine = () => {
    app.get("/", caffeineHandler);
};

const caffeineHandler = (req, res) => {
    console.log("Wake Up! 🚀");
    res.status(200).end();
};

export default caffeine;
