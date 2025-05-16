import { Schema, model } from 'mongoose';
import { TStudent } from './student.interface';

const studentSchema = new Schema<TStudent>(
  {
    name: { type: String, required: true },
    // custome validation with function

    // name: { type: String, required: true,
    //   validate: {
    //     validator: (value: string) => {
    //       const name = value.charAt(0).toUpperCase() + value.slice(1);
    //       return name === value;
    //     },
    //     message: 'Name must contain only letters and spaces',
    //   },
    //  },
    // if we use trim its remove before after space
    // name: { type: String, trim:true, required: true },
    // if we want use limite text we can use
    // name: {
    //   type: String,
    //   minlength: [6, 'Too few low'],
    //   maxlength: [6, 'Too few highe'],
    //   required: true,
    // },
    // build in validation
    // name: { type: String, required: [true, "Name is required"] },

    // if we want unique email means akai email doibar hoibo na ta hoile
    // email: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
    },
    // build in validation for enum
    // gender: {
    //   type: String,
    //   enum:{
    //     values:['male', 'female', 'other'],
    //     message: '{VALUE} is not supported',
    //   },
    // },
    dateOfBirth: { type: String },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    emergencyContact: { type: String, required: true },
    guardian: {
      fatherName: { type: String, required: true },
      fatherOccupation: { type: String, required: true },
      fatherPhone: { type: String, required: true },
      motherName: { type: String, required: true },
      motherOccupation: { type: String, required: true },
      motherPhone: { type: String, required: true },
    },
    profileImage: { type: String },
    isActive: { type: String, enum: ['active', 'inactive'], default: 'active' },
  },
  {
    timestamps: true,
  },
);

export const studentModel = model<TStudent>('student', studentSchema);
