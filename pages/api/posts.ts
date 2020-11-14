import { NextApiRequest, NextApiResponse } from 'next'
import http from 'http'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'John Doe' })
  }
}