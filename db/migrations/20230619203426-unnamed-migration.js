'use strict';

const { CommentSchema, COMMENT_TABLE } = require('../models/comment.model')
const { CourseSchema, COURSE_TABLE } = require('../models/course.model')
const { LearningPathSchema, LEARNING_PATH_TABLE } = require('../models/learningPath.model')
const { ModuleSchema, MODEL_TABLE } = require('../models/module.model')
const { StudentSchema, STUDENT_TABLE } = require('../models/student.model')
const { TeacherSchema, TEACHER_TABLE } = require('../models/teacher.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(COMMENT_TABLE, CommentSchema);
    await queryInterface.createTable(COURSE_TABLE, CourseSchema);
    await queryInterface.createTable(LEARNING_PATH_TABLE, LearningPathSchema);
    await queryInterface.createTable(MODEL_TABLE, ModuleSchema);
    await queryInterface.createTable(STUDENT_TABLE, StudentSchema);
    await queryInterface.createTable(TEACHER_TABLE, TeacherSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(COMMENT_TABLE);
    await queryInterface.dropTable(COURSE_TABLE);
    await queryInterface.dropTable(LEARNING_PATH_TABLE);
    await queryInterface.dropTable(MODEL_TABLE);
    await queryInterface.dropTable(STUDENT_TABLE);
    await queryInterface.dropTable(TEACHER_TABLE);
  }
};
