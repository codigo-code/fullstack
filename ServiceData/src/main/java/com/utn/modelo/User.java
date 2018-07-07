package com.utn.modelo;

import java.io.Serializable;

import org.springframework.stereotype.Component;

@Component
public class User implements Serializable{

	private String name;
	private String password;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
}
