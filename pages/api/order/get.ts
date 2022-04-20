import db from '../../../dbconnect/dbconnect';
import nc from 'next-connect';
import OrderModel from '../../../models/OrderModel';
import type { NextApiRequest, NextApiResponse } from 'next'
const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => {
    try {
        const orders = await OrderModel.find({});
        await db.disconnect();
        res.status(200).json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error: error });
    }
});

export default handler;