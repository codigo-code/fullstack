package com.utn.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.utn.modelo.User;

@RestController
public class LoginService {

	@Autowired
	private Gson gson;

	@Autowired
	User user;

	@CrossOrigin
	@GetMapping(value = "login.do")
	public ResponseEntity validaUser(@RequestParam("user") String user, @RequestParam("password") String pass) {
		System.out.println(user);
		System.out.println(pass);

		if (user == "ramon" && pass == "don") {
			ResponseEntity.ok("OK");
			System.out.println("entro");
		} else {
			return (ResponseEntity) ResponseEntity.status(403);
		}
		return null;

	}

	@CrossOrigin
	@GetMapping(value = "test.do", produces = "application/json; charset=UTF-8")
	public User test() {

		user.setName("pepe");
		user.setPassword("12345asd");
		return user;
	}

}
