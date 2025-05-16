import { Request, Response } from 'express';
import { studentService } from './student.service';

// controller all control request or response

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await studentService.createStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create student',
      error: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch students',
      error: error,
    });
  }
};

const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await studentService.getSingleStudentsFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Student fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch students',
      error: error,
    });
  }
};

const updateSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateStudent = req.body;
    const result = await studentService.updateSingleStudentsFromDB(
      id,
      updateStudent,
    );
    res.status(200).json({
      success: true,
      message: 'Student data update successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch students',
      error: error,
    });
  }
};

const deleteSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await studentService.deleteSingleStudentsFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Student delete successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch students',
      error: error,
    });
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudents,
  updateSingleStudent,
  deleteSingleStudent,
};
