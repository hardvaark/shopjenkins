package com.shopjenkins.api.model;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ArithmeticOperationTests {

    @Test
    public void testAddition() {
        ArithmeticOperation operation = new ArithmeticOperation(5.0, 3.0);
        double expectedResult = 8.0;
        double result = operation.add();
        assertEquals(expectedResult, result);
    }

    @Test
    public void testSubtraction() {
        ArithmeticOperation operation = new ArithmeticOperation(5.0, 3.0);
        double expectedResult = 2.0;
        double result = operation.subtract();
        assertEquals(expectedResult, result);
    }

    @Test
    public void testMultiplication() {
        ArithmeticOperation operation = new ArithmeticOperation(5.0, 3.0);
        double expectedResult = 15.0;
        double result = operation.multiply();
        assertEquals(expectedResult, result);
    }

    @Test
    public void testDivision() {
        ArithmeticOperation operation = new ArithmeticOperation(6.0, 2.0);
        double expectedResult = 3.0;
        double result = operation.divide();
        assertEquals(expectedResult, result);
    }

    @Test
    public void testDivisionByZero() {
        ArithmeticOperation operation = new ArithmeticOperation(6.0, 0.0);
        assertThrows(IllegalArgumentException.class, operation::divide);
    }
}
