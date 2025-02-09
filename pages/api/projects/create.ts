// pages/api/projects/create.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { createProject } from '@/services/user.service'; // Import Prisma logic

// API Route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { id, title, description, duration, user, techStackArray} = req.body;
            const project = await createProject(id, title, description, duration, user, techStackArray);
            res.status(200).json(project); // Respond with the created project
        } catch (error) {
            res.status(500).json({ error: 'Failed to create project' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
