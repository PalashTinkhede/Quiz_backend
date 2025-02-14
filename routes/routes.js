// const express = require("express");
import express from 'express';
import { adminMiddleware, authMiddleware } from '../middleware/Auth.js';
import {
  createQuiz,
    updateQuiz,
    deleteQuiz,
    getAllQuizzes,
    getQuizById,
    attemptQuiz,
    getUserAttempts,
    getAdminQuizes,
    getQuizAttempts,
    
  } from './../controllers/quizController.js'

import {
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getQuizQuestions,
} from './../controllers/questionController.js'

const router = express.Router();
// const { authMiddleware, adminMiddleware } = require("../middleware/Auth");

// Import Controllers
// const {
//   createQuiz,
//   updateQuiz,
//   deleteQuiz,
//   getAllQuizzes,
//   getQuizById,
//   attemptQuiz,
//   getUserAttempts,
//   getAdminQuizes,
//   getQuizAttempts,
// } = require("../controllers/quizController");

// const {
//   createQuestion,
//   updateQuestion,
//   deleteQuestion,
//   getQuizQuestions,
// } = require("../controllers/questionController");

// const { login, register } = require("../controllers/userController");
import {login , register} from './../controllers/userController.js'
// User Authentication
router.post("/login", login);
router.post("/register", register);

// Quiz routes
router.get("/admin-quizzes", authMiddleware, adminMiddleware, getAdminQuizes);
router.get("/attempts/:id", authMiddleware, adminMiddleware, getQuizAttempts);
router.post("/quizzes", authMiddleware, adminMiddleware, createQuiz);
router.put("/quizzes/:id", authMiddleware, adminMiddleware, updateQuiz);
router.delete("/quizzes/:id", authMiddleware, adminMiddleware, deleteQuiz);

// question routes
router.get("/questions/:id", authMiddleware, getQuizQuestions);
router.post("/questions", authMiddleware, adminMiddleware, createQuestion);
router.put("/questions/:id", authMiddleware, adminMiddleware, updateQuestion);
router.delete(
  "/questions/:id",
  authMiddleware,
  adminMiddleware,
  deleteQuestion
);

// data routes
router.get("/quizzes", authMiddleware, getAllQuizzes);
router.get("/quizzes/:id", authMiddleware, getQuizById);
router.post("/quizzes/:id/attempt", authMiddleware, attemptQuiz);
router.get("/attempts", authMiddleware, getUserAttempts);

export default router;
