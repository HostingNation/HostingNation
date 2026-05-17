import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  source?: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
    phone: { type: String, trim: true, maxlength: 30 },
    company: { type: String, trim: true, maxlength: 150 },
    service: { type: String, trim: true, maxlength: 80 },
    budget: { type: String, trim: true, maxlength: 60 },
    message: { type: String, required: true, trim: true, maxlength: 4000 },
    source: { type: String, trim: true, maxlength: 80, default: 'website' }
  },
  { timestamps: true }
);

const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
