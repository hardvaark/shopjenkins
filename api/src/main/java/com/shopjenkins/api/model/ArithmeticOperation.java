package com.shopjenkins.api.model;

public class ArithmeticOperation {
 private double term1;
 private double term2;

 public ArithmeticOperation(double term1, double term2) {
     this.term1 = term1;
     this.term2 = term2;
 }

 public double add() {
     return term1 + term2;
 }

 public double subtract() {
     return term1 - term2;
 }

 public double multiply() {
     return term1 * term2;
 }

 public double divide() {
     if (term2 == 0) {
         throw new IllegalArgumentException("Cannot divide by zero");
     }
     return term1 / term2;
 }
}
