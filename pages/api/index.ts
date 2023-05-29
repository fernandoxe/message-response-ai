// next api routes
import { getResponseText } from '@/services';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;
  if(method !== 'POST') return res.status(405).json({message: 'Method not allowed'});

  const { message } = JSON.parse(req.body);

  try {
    const result = await getResponseText(message);
    res.status(200).json({result});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Internal server error', error});
  }
};
