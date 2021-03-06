package com.micael.webservice.controllers;

import java.io.FileNotFoundException;
import java.util.Collections;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.micael.webservice.models.ParseFile;
import com.micael.webservice.models.Question;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class QuizController {
	
	@GetMapping("/quiz")
	List<Question> QuizRenponse() throws FileNotFoundException {
		List<Question> response = ParseFile.FileParser();
		Collections.shuffle(response);
		return response;
	}
}
