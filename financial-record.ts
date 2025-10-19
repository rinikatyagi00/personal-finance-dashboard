import mongoose from 'mongoose'
import { FinancialRecordForm } from '../pages/dashbboard/financial-record-form';

interface FinancialRecord{
userId: string;
date: Date;
description: string;
amount: number;
category: string;
paymentMethod: string;
}
const financialRecordSchema = new mongoose.Schema<.({
userId: {type: String, required: true},
date: {type: Date, required: true},
description: {type: String, required: true},
amount: {type: Number, required: true},
category: {type: String, required: true},
paymentMethod: {type: String, required: true},
});

const financialRecordModel = mongoose.model<financialRecord>{
"FinancialRecord",
financialRecordSchema
};

export default FinancialRecordModel;
