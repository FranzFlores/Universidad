/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controlador;

import java.util.ArrayList;
import java.util.List;
import modelo.Tokens;

/**
 *
 * @author Smart
 */
public class Lexico {

    private Integer posicion = 0; //Posicion de la cadena
    private Integer estado = 0;
    private List<String> tokens = new ArrayList<String>();
    private List<String> lexemas = new ArrayList<String>();
    private String lexema = ""; //Se obtiene del recorrido de la cadena
    private String entrada;
    private Character caracter;
    private Utilidades u = new Utilidades();

    public Lexico(String entrada) {
        this.entrada = entrada;
    }

    public void imprimir() {
        System.out.println("Listo.........");
        for (int i = 0; i < tokens.size(); i++) {
            System.out.println("TOKEN: " + tokens.get(i) + " LEXEMA: " + lexemas.get(i));
        }
    }

    public void lexico1() {
        caracter = entrada.charAt(posicion);

        switch (estado) {
            case 0:
                if (u.verificarChar(u.operadoresAritmeticos(), String.valueOf(caracter))) {
                    if (caracter == '+') {
                        lexema += Character.toString(caracter);
                        estado = 2;
                    } else {
                        //Es un Producto
                        lexema += Character.toString(caracter);
                        estado = 0;
                        cargarLexema(lexema, Tokens.PRODUCTO.toString());
                        lexema = "";
                    }
                } else if (Character.isDigit(caracter)) {
                    estado = 5;
                    lexema += Character.toString(caracter);
                } else {
                    //No es ningun caracter valido
                    estado = 0;
                    lexema += Character.toString(caracter);
                    cargarLexema(lexema, Tokens.ERROR.toString());
                    lexema = "";
                }
                break;
            case 2:
                if (u.verificarChar(u.operadoresAritmeticos(), String.valueOf(caracter))) {
                    if (caracter == '+') {
                        lexema += Character.toString(caracter);
                        estado = 0;
                        cargarLexema(lexema, Tokens.INCREMENTO.toString());
                        lexema = "";
                    } else {
                        cargarLexema(lexema, Tokens.SUMA.toString());
                        lexema = "";
                        lexema += Character.toString(caracter);
                        estado = 0;
                        cargarLexema(lexema, Tokens.PRODUCTO.toString());
                        lexema = "";
                    }
                } else if (Character.isDigit(caracter)) {
                    cargarLexema(lexema, Tokens.SUMA.toString());
                    lexema = "";
                    estado = 5;
                    lexema += Character.toString(caracter);
                } else {
                    cargarLexema(lexema, Tokens.SUMA.toString());
                    lexema = "";
                    estado = 0;
                    lexema += Character.toString(caracter);
                    cargarLexema(lexema, Tokens.ERROR.toString());
                    lexema = "";
                }
                break;
            case 5:
                if (u.verificarChar(u.operadoresAritmeticos(), String.valueOf(caracter))) {
                    if (caracter == '+') {
                        cargarLexema(lexema, Tokens.ENTERO.toString());
                        lexema = "";
                        estado = 2;
                        lexema += Character.toString(caracter);
                    } else {
                        cargarLexema(lexema, Tokens.ENTERO.toString());
                        lexema = "";
                        lexema += Character.toString(caracter);
                        estado = 0;
                        cargarLexema(lexema, Tokens.PRODUCTO.toString());
                        lexema = "";
                    }
                } else if (Character.isDigit(caracter)) {
                    lexema += Character.toString(caracter);
                    estado = 5;
                } else {
                    cargarLexema(lexema, Tokens.ENTERO.toString());
                    lexema = "";
                    estado = 0;
                    lexema += Character.toString(caracter);
                    cargarLexema(lexema, Tokens.ERROR.toString());
                    lexema = "";
                }
                break;
            default: break;
        }
        posicion++;
        if(posicion >= entrada.length()) {
            if(estado == 2) {
                if(lexema.length() >= 2) {
                    cargarLexema(lexema, Tokens.INCREMENTO.toString());
                }else {
                    cargarLexema(lexema, Tokens.SUMA.toString());
                } 
            } else if(estado ==5) {
                cargarLexema(lexema, Tokens.ENTERO.toString());
            }
        } else {
            lexico1();
        } 
    }

    private void cargarLexema(String lexema, String token) {
        lexemas.add(lexema);
        tokens.add(token);
    }
    
    public static void main(String[] args) {
       String cadena =  "11++11";
       Lexico lexico = new Lexico(cadena);
       lexico.lexico1();
       lexico.imprimir();
    }
    
}
