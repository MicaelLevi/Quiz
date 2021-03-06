package com.micael.webservice.models;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ParseFile {
	public static List<Question> FileParser () throws FileNotFoundException {
		File file = new File("src/Questions.txt");
        Scanner reader = new Scanner(file, "utf-8");
        List<Question> questions = new ArrayList<Question>();
        Question question;
        
        while (reader.hasNextLine()) {
            question = new Question();

            question.setQuestion(reader.nextLine());
            for (int i = 0; i < 3; i++) {
                question.setIncorrectAnswers(reader.nextLine());
            }
            question.setCorrectAnswer(reader.nextLine());

            questions.add(question);
        }
        reader.close();
        
        return questions;
	}
}
