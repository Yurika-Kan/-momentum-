// pages/api/mentors/match.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { findMentorMatch } from '@/services/groq';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { projectId } = req.body;
        try {
            const bestMatch = await findMentorMatch(projectId);
            res.status(200).json({ match: bestMatch });
        } catch (error) {
            res.status(500).json({ error: 'Failed to find mentor match' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
