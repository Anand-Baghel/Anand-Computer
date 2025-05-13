import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, lastName, email, password } = req.body;
  if (!name || !lastName || !email || !password) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const client = await clientPromise;
  const db = client.db();
  const users = db.collection('users');

  const existing = await users.findOne({ email });
  if (existing) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await users.insertOne({
    name,
    lastName,
    email,
    password: hashedPassword,
    createdAt: new Date(),
  });

  return res.status(201).json({ user: { id: user.insertedId, email } });
}
