// const knex = require('../db/connection');

// async function findBestResponse(req, res, next) {
//     const input = req.body.data;
//     try {
//         console.log("findBestResponse: @ Try block start")
//         const responses = await knex('chatbot').select('chat_id', 'keywords');
//         let match = null;
//         responses.forEach((response) => { 
//             const keywordArray = response.keywords.split(','); 
//             keywordArray.forEach((keyword) => {
//                 if (input.toLowerCase().includes(keyword.trim().toLowerCase())) {
//                     match = response.chat_id; 
//                     map[keyword].push(match)
//                     count += 1
//                     map[match]=count;
//                 }
//             });
//         });
//         if (!match) {
//             return res.status(404).json({ message: "Sorry I dont think I quite understand. Please try again or reach out directly to our customer service email: support@getneatfreakclean.com" });
//         }
//         req.match = match;
//         next();
//     } catch (error) {
//         next(error);
//     }
// }

// module.exports = findBestResponse;

const knex = require('../db/connection');

async function findBestResponse(req, res, next) {
    const input = req.body.data;
    try {
        console.log("findBestResponse: @ Try block start")
        const responses = await knex('chatbot').select('chat_id', 'keywords');
        let matchCounts = {}; // Object to store counts of matches for each chat_id
        responses.forEach((response) => {
            const keywordArray = response.keywords.split(',');
            keywordArray.forEach((keyword) => {
                if (input.toLowerCase().includes(keyword.trim().toLowerCase())) {
                    if (!matchCounts[response.chat_id]) {
                        matchCounts[response.chat_id] = 1; // Initialize if not already
                    } else {
                        matchCounts[response.chat_id]++; // Increment the count
                    }
                }
            });
        });

        // Find the chat_id with the highest count of keyword matches
        let maxCount = 0;
        let match = null;
        Object.keys(matchCounts).forEach((chat_id) => {
            if (matchCounts[chat_id] > maxCount) {
                maxCount = matchCounts[chat_id];
                match = chat_id;
            }
        });

        if (!match) {
            return res.status(404).json({ message: "Sorry, I don't think I quite understand. Please try again or reach out directly to our customer service email: support@getneatfreakclean.com" });
        }
        req.match = match;
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = findBestResponse;

