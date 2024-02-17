const knex = require('../db/connection');

async function findBestResponse(req, res, next) {
    const input = req.body.data;
    try {
        console.log("findBestResponse: @ Try block start")
        const responses = await knex('chatbot').select('chat_id', 'keywords');
        let match = null;
        responses.forEach((response) => { 
            const keywordArray = response.keywords.split(','); 
            keywordArray.forEach((keyword) => {
                if (input.toLowerCase().includes(keyword.trim().toLowerCase())) {
                    match = response.chat_id; 
                }
            });
        });
        if (!match) {
            return res.status(404).json({ message: "Sorry I dont think I quite understand. Please try again or reach out directly to our customer service email: support@getneatfreakclean.com" });
        }
        req.match = match;
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = findBestResponse;
