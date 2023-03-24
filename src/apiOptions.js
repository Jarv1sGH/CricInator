const apiKey = process.env.REACT_APP_CRICBUZZ_API_KEY;
const options = {
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
};

export default options ;