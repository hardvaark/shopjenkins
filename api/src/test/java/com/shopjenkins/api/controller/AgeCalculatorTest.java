package com.shopjenkins.api.controller;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.shopjenkins.api.controller.AgeCalculatorController;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDate;

@SpringBootTest
public class AgeCalculatorTest {

    @Test
    public void testCalculateAge_CurrentYearBirth() {
        int birthYear = LocalDate.now().getYear();
        int expectedAge = 0;
        int actualAge = new AgeCalculatorController().calculateAge(birthYear);
        assertEquals(expectedAge, actualAge);
    }

    @Test
    public void testCalculateAge_PastYearBirth() {
        int birthYear = 1990;
        int expectedAge = LocalDate.now().getYear() - birthYear;
        int actualAge = new AgeCalculatorController().calculateAge(birthYear);
        assertEquals(expectedAge, actualAge);
    }
}
