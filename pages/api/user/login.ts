import db from '../../../dbconnect/dbconnect';
import nc from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next'
const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req, res) => {
    try {
        await db.connect();        
        await db.disconnect();

        const { username, password } = req.body;
        if(username === "thinh" && password === "123456") {
            res.status(200).json({ success: true, data: "access-token" });
        }
        res.status(200).json({ success: false });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error: error });
    }
});

export default handler;