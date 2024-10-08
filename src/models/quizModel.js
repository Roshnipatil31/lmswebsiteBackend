// src/models/quizModel.js

const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    option_id: {
        type: Number,
        required: true,
    },
    option_text: {
        type: String,
        required: true,
    },
});


const questionSchema = new mongoose.Schema({
    question_number: {
        type: Number,
        required: true,
    },
    question_text: {
        type: String,
        required: true,
    },
    options: [optionSchema],
    correct_option_id: {
        type: Number,
        required: true,
    },
    is_answer_valid: {
        type: Boolean,
        default: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});


const quizSchema = new mongoose.Schema({
    quiz_title: {
        type: String,
        required: true,
    },
    teacher_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher', // Reference to the Teacher model
        required: true,
    },
    batch_index: {
        type: Number,
        required: true,
    },

    class_level: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class', // Reference to the Teacher model
        required: true,
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject', // Reference to the Subject model
        required: true,
    },
    questions: [questionSchema],
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Quiz', quizSchema);