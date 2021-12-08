/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controlador;

import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import modelo.Tipos;

/**
 *
 * @author Smart
 */
public class AnalizadorLexico {
    
    public static List<Token> lexico(String input) {
        
        List<Token> tokens = new ArrayList<Token>();
        StringTokenizer tokenizer = new StringTokenizer(input);
     
        while(tokenizer.hasMoreElements()) {
            String palabra = tokenizer.nextToken();
            boolean matched = false;
            for (Tipos tokenTipo: Tipos.values()) {
                Pattern patron = Pattern.compile(tokenTipo.patron);
                Matcher matcher = patron.matcher(palabra);
                if (matcher.find()) {
                    Token token = new Token();
                    token.setTipos(tokenTipo);
                    token.setValor(palabra);
                    tokens.add(token);
                    matched = true;
                    break;
                }
            }
            if (!matched) {
                throw new RuntimeException("TOKEN INVALIDO " + palabra);
            }
        }
        return tokens;
    }
    
    public static void main(String[] args) {
        String input = "2 * 5 / 6 -4 * 8";
        List<Token> lista = lexico(input);
        for (Token token: lista) {
            System.out.println(token.getTipos().toString() + " " + token.getValor());
        }
    }
}
