/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controlador;

import java.util.StringTokenizer;

/**
 *
 * @author Smart
 */
public class EjercicioST {

    public static String linea;
    private static StringTokenizer tokenizer;
    private static String NUMERO = "NUMERO";
    private static String OPERADOR = "OPERADOR";
    private static String lexema;

    public static String getLinea() {
        return linea;
    }

    public static void setLinea(String linea) {
        EjercicioST.linea = linea;
        EjercicioST.tokenizer = new StringTokenizer(linea);
    }

    public static String lexico() {
        //Si hay mas tokens en el buffer de String
        if (tokenizer.hasMoreTokens()) {
            lexema = tokenizer.nextToken().trim();
        } else {
            lexema = null;
            return lexema;
        }

        if (lexema.equalsIgnoreCase("+")
                || lexema.equalsIgnoreCase("-")
                || lexema.equalsIgnoreCase("*")
                || lexema.equalsIgnoreCase("/")) {
            return OPERADOR;
        } else {
            try {
                Integer.parseInt(lexema);
                return NUMERO;
            } catch (Exception e) {
                return "Error";
            }
        }

    }

    public static void main(String[] args) {
        String analizar = "2 + 4 + 5";
        setLinea(analizar);
        String token = lexico();
        do {
            System.out.println("Token: " + token + " " + lexema);
            token = lexico();
        } while (token != null);
    }
}
