import db from '../../dbconnect/dbconnect';
import CustomerModel from '../../models/CustomerModel';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    switch(req.method) {
      case 'POST': 
          await db.connect();
          const custom = await CustomerModel.create(req.body);
          await db.disconnect();
          res.status(200).json({success: true, data: custom});
        break;
      case 'GET':
        try {
          const customs = await CustomerModel.find({});
          await db.disconnect();
          res.status(200).json({success: true, data: customs});
        } catch (error) {
          console.log(error);
          res.status(400).json({success: false, error: error});
        }
        break;
      default: 
      break;
    }
  }