/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import models.Types;

/**
 *
 * @author Franz Flores
 */
public class LexicalAnalyzer {

    public static List<Token> lexical(String input) {
        List<Token> tokens = new ArrayList<>();
        //Separar el símbolo de separación para que pueda ser reconocido como token
        if (input.contains(";")) {
          input = input.replace(";"," ;");
        }
        StringTokenizer tokenizer = new StringTokenizer(input);

        while (tokenizer.hasMoreElements()) {
            String word = tokenizer.nextToken();
            boolean matched = false;
            
            for (Types tokenType : Types.values()) {
                Pattern pattern = Pattern.compile(tokenType.pattern);
                Matcher matcher = pattern.matcher(word);
                if (matcher.find()) {
                    Token token = new Token();
                    token.setType(tokenType);
                    token.setValue(word);
                    tokens.add(token);
                    matched = true;
                    break;
                }
            }
            if (!matched) {
                throw new RuntimeException("TOKEN INVALIDO " + word);
            }
        }

        return tokens;
    }
    public static void main(String[] args) {
        String input = "ENTERO aux = -34; \n ENTERO b = 56; \n ENTERO c = aux * b; \n ENTERO suma = 34 / 45"; 
        List<Token> list = lexical(input);
        list.forEach(token -> {
            System.out.println(token.getType().toString() + ":" + token.getValue());
        });
    }
}
