package com.micael.webservice.models;

import java.util.ArrayList;
import java.util.List;

public class Question {
	private String question;
    private List<String> incorrectAnswers = new ArrayList<String>();
    private String correctAnswer;
    
    public void setQuestion(String question) {
        this.question = question;
    }

    public void setIncorrectAnswers(String incorrectAnswers) {
        this.incorrectAnswers.add(incorrectAnswers);
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public String getQuestion() {
        return question;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public List<String> getIncorrectAnswers() {
        return incorrectAnswers;
    }
}
