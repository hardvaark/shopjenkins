package com.shopjenkins.api.controller;

import org.springframework.web.bind.annotation.*;

import com.shopjenkins.api.model.ArithmeticOperation;

@RestController
@RequestMapping("/api/arithmetic")
public class ArithmeticController {

 @PostMapping("/add")
 public double add(@RequestParam double term1, @RequestParam double term2) {
     ArithmeticOperation operation = new ArithmeticOperation(term1, term2);
     return operation.add();
 }

 @PostMapping("/subtract")
 public double subtract(@RequestParam double term1, @RequestParam double term2) {
     ArithmeticOperation operation = new ArithmeticOperation(term1, term2);
     return operation.subtract();
 }

 @PostMapping("/multiply")
 public double multiply(@RequestParam double term1, @RequestParam double term2) {
     ArithmeticOperation operation = new ArithmeticOperation(term1, term2);
     return operation.multiply();
 }

 @PostMapping("/divide")
 public double divide(@RequestParam double term1, @RequestParam double term2) {
     ArithmeticOperation operation = new ArithmeticOperation(term1, term2);
     return operation.divide();
 }
}
