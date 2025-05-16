import { TStudent } from './student.interface';
import { studentModel } from './student.model';

const createStudentIntoDB = async (student: TStudent) => {
  const result = await studentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await studentModel.find();
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  const result = await studentModel.findById(id);
  return result;
};
const updateSingleStudentsFromDB = async (
  id: string,
  updateStudent: Partial<TStudent>,
) => {
  const result = await studentModel.findByIdAndUpdate(id, updateStudent, {
    new: true,
  });
  return result;
};

const deleteSingleStudentsFromDB = async (id: string) => {
  const result = await studentModel.findByIdAndDelete(id);
  return result;
};

export const studentService = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  updateSingleStudentsFromDB,
  deleteSingleStudentsFromDB,
};
