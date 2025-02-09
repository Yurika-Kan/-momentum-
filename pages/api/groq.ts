import type { NextApiRequest, NextApiResponse } from "next";
import { findMentorMatch } from "@/services/groq";
import { Router } from "lucide-react";

/**
 * API route handler for processing chat requests.
 * @param {NextApiRequest} req - Incoming HTTP request.
 * @param {NextApiResponse} res - Outgoing HTTP response.
 */

//Router.route.get{https://localhost/findmentor, handler(req , res)}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Only process POST requests
    if (req.method === 'POST') {
        // Extract the prompt message from the request body
        const { projectId } = req.body;

        try {
            // Call the Groq API with the provided prompt
            const bestMentor = await findMentorMatch(projectId);

            // Send back the response from Groq API to the client
            res.status(200).json({bestMentor});
        } catch (error) {
            console.error('API error:', error);
            // If there's an error, return a 500 error with the message
            res.status(500).json({ error: 'Failed to fetch response from Groq API' });
        }
    } else {
        // Handle invalid request methods (non-POST)
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}