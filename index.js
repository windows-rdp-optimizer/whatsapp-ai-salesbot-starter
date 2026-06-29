// index.js - Basic Boilerplate for WhatsApp AI Bot
require('dotenv').config();
const { OpenAI } = require('openai');

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Placeholder for WhatsApp Webhook / Client connection
console.log("Starting WhatsApp AI Sales Bot...");

async function handleIncomingMessage(userMessage) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {"role": "system", "content": "You are a helpful sales assistant."},
                {"role": "user", "content": userMessage}
            ],
        });
        
        const botReply = response.choices[0].message.content;
        console.log("Bot says:", botReply);
        // Add logic here to send 'botReply' back via WhatsApp API
        
    } catch (error) {
        console.error("Error communicating with OpenAI:", error);
    }
}

// Example Trigger
handleIncomingMessage("What are your pricing plans?");
