import db from '../../../dbconnect/dbconnect';
import nc from 'next-connect';
import OrderModel from '../../../models/OrderModel';
import type { NextApiRequest, NextApiResponse } from 'next'
const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req, res) => {
    await db.connect();
    const { id } = req.body;
    const order = await OrderModel.findByIdAndUpdate(id, {});
    await db.disconnect();
    res.status(200).json({ success: true, data: order });
});

export default handler;