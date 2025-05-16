export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherPhone: string;
  motherName: string;
  motherOccupation: string;
  motherPhone: string;
};

export type TStudent = {
  name: string;
  email: string;
  age: number;
  address: string;
  phone: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth?: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  emergencyContact: string;
  // guardian: {
  //   fatherName: string;
  //   fatherOccupation: string;
  //   fatherPhone: string;
  //   motherName: string;
  //   motherOccupation: string;
  //   motherPhone: string;
  // };

  guardian: TGuardian;
  profileImage?: string;
  isActive?: 'active' | 'inactive';
};
