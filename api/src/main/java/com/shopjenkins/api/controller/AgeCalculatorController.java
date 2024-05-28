package com.shopjenkins.api.controller;

import java.time.LocalDate;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class AgeCalculatorController {

    @GetMapping("/age/{birthYear}")
    public int calculateAge(@PathVariable int birthYear) {
        LocalDate today = LocalDate.now();
        return today.getYear() - birthYear;
        //return today.getYear() - 2000; // Error scenario
    }
}


