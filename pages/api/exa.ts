import { get } from 'http'
import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const project = getProject()
    const result = await opeanai.chat.completions.create()
    const users = findUsersWithTags(tags)
    const user = getUser()
    res.status(200).json({ result })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}