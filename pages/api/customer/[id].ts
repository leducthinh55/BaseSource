import db from '../../../dbconnect/dbconnect';
import nc from 'next-connect';
import CustomerModel from '../../../models/CustomerModel';
import type { NextApiRequest, NextApiResponse } from 'next'
const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => {
    try {
        await db.connect();
        const { id } = req.body;
        const customer = await CustomerModel.findById(id);
        await db.disconnect();
        res.status(200).json({ success: true, data: customer });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error: error });
    }
});

export default handler;