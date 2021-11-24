/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controlador;

import java.util.ArrayList;
import java.util.List;
import modelo.TokensTC;
/**
 *
 * @author Franz Flores
 */
public class LexicoTC {
    
    private Integer posicion = 0; //Posicion de la cadena
    private Integer estado = 0;
    private List<String> tokens = new ArrayList<String>();
    private List<String> lexemas = new ArrayList<String>();
    private String lexema = ""; //Se obtiene del recorrido de la cadena
    private String entrada;
    private Character caracter;
    private Utilidades u = new Utilidades();

    public LexicoTC(String entrada) {
        this.entrada = entrada;
    }
    
    public void imprimir() {
        System.out.println("Listo.........");
        for (int i = 0; i < tokens.size(); i++) {
            System.out.println("TOKEN: " + tokens.get(i) + " LEXEMA: " + lexemas.get(i));
        }
    }
    
    public void proceso() {
        //Obtener caracter de la entrada
        caracter = entrada.charAt(posicion);
        
        switch(estado) {
            case 0: 
                if(u.verificarChar(u.obtenerSignos(),String.valueOf(caracter))) {
                    lexema += Character.toString(caracter);
                    estado = 0;
                    if (caracter == '+') {
                        cargarLexema(lexema, TokensTC.SUMAR.toString());
                        lexema = "";
                    } else if(caracter == '-') {
                        cargarLexema(lexema, TokensTC.RESTAR.toString());
                        lexema = "";                        
                    } else if(caracter == '='){
                        cargarLexema(lexema, TokensTC.ASIGNAR.toString());
                        lexema = "";  
                    }
                } else if(Character.isDigit(caracter)) {
                    if(caracter == '0') {
                       estado = 0;
                       lexema += Character.toString(caracter);
                       cargarLexema(lexema, TokensTC.ERROR.toString());
                       lexema = ""; 
                    } else {
                       estado = 4;
                       lexema += Character.toString(caracter);
                    }
                } else if(Character.isLetter(caracter)) {
                    if(caracter == 'p'){
                        estado = 8;
                        lexema += Character.toString(caracter);   
                    } else {
                        estado = 6;
                        lexema += Character.toString(caracter);
                    }
                } else if(!Character.isSpaceChar(caracter)) {
                    estado = 0;
                    lexema += Character.toString(caracter);
                    cargarLexema(lexema, TokensTC.ERROR.toString());
                    lexema = ""; 
                }             
            break;
            case 4:
            if(u.verificarChar(u.obtenerSignos(),String.valueOf(caracter))) {
                definirSigno(TokensTC.ENTERO.toString());
            } else if(Character.isDigit(caracter)) {
                lexema += Character.toString(caracter);
                estado = 4;
            } else if(Character.isLetter(caracter)) {
                cargarLexema(lexema, TokensTC.ENTERO.toString());
                lexema = "";
                if (caracter == 'p') {
                    estado = 8;
                    lexema += Character.toString(caracter);
                } else {
                    estado = 6;
                    lexema += Character.toString(caracter);
                } 
            } else if(!Character.isSpaceChar(caracter)) {
                cargarLexema(lexema, TokensTC.ENTERO.toString());
                estado = 0;
                lexema = ""; 
                lexema += Character.toString(caracter);
                cargarLexema(lexema, TokensTC.ERROR.toString());
                lexema = ""; 
            } 
            break;
            case 6:
            if(u.verificarChar(u.obtenerSignos(),String.valueOf(caracter))) {
                definirSigno(TokensTC.LETRA.toString());
            }else if(Character.isDigit(caracter)){
                lexema += Character.toString(caracter);
                cargarLexema(lexema, TokensTC.LETRA.toString());
                estado = 4;
                lexema = "";
            } else if(Character.isLetter(caracter)){
                lexema += Character.toString(caracter);
                 if(caracter == 'p'){
                    estado = 8;
                } else {
                    estado = 6;
                }
            } else if(!Character.isSpaceChar(caracter)) {
                cargarLexema(lexema, TokensTC.LETRA.toString());
                estado = 0;
                lexema = ""; 
                lexema += Character.toString(caracter);
                cargarLexema(lexema, TokensTC.ERROR.toString());
                lexema = ""; 
            } 
            break;
            case 8:  
            if(u.verificarChar(u.obtenerSignos(),String.valueOf(caracter))) {
                definirSigno(TokensTC.LETRA.toString());
            } else if(Character.isDigit(caracter)) {
                cargarLexema(lexema, TokensTC.LETRA.toString());
                lexema = "";
                lexema += Character.toString(caracter);
                estado = 4;
            } else if(Character.isLetter(caracter)) {
                 lexema += Character.toString(caracter);
                if(caracter == 'r') {
                    estado = 9;
                } else {
                    estado = 6;
                }  
            } else if(!Character.isSpaceChar(caracter)) {
                cargarLexema(lexema, TokensTC.LETRA.toString());
                estado = 0;
                lexema = ""; 
                lexema += Character.toString(caracter);
                cargarLexema(lexema, TokensTC.ERROR.toString());
                lexema = ""; 
            } 
            break;
            case 9:
             if(u.verificarChar(u.obtenerSignos(),String.valueOf(caracter))) {
                definirSigno(TokensTC.LETRA.toString());
            } else if(Character.isDigit(caracter)) {
                cargarLexema(lexema, TokensTC.LETRA.toString());
                lexema = "";
                lexema += Character.toString(caracter);
                estado = 4;
            } else if(Character.isLetter(caracter)) {
                 lexema += Character.toString(caracter);
                if(caracter == 'i') {
                    estado = 10;
                } else {
                    estado = 6;
                }  
            } else if(!Character.isSpaceChar(caracter)) {
                cargarLexema(lexema, TokensTC.LETRA.toString());
                estado = 0;
                lexema = ""; 
                lexema += Character.toString(caracter);
                cargarLexema(lexema, TokensTC.ERROR.toString());
                lexema = ""; 
            } 
            break;
            case 10:
            if(u.verificarChar(u.obtenerSignos(),String.valueOf(caracter))) {
                definirSigno(TokensTC.LETRA.toString());
            } else if(Character.isDigit(caracter)) {
                cargarLexema(lexema, TokensTC.LETRA.toString());
                lexema = "";
                lexema += Character.toString(caracter);
                estado = 4;
            } else if(Character.isLetter(caracter)) {
                 lexema += Character.toString(caracter);
                if(caracter == 'n') {
                    estado = 11;
                } else {
                    estado = 6;
                }  
            } else if(!Character.isSpaceChar(caracter)) {
                cargarLexema(lexema, TokensTC.LETRA.toString());
                estado = 0;
                lexema = ""; 
                lexema += Character.toString(caracter);
                cargarLexema(lexema, TokensTC.ERROR.toString());
                lexema = ""; 
            } 
            break; 
            case 11:
            if(u.verificarChar(u.obtenerSignos(),String.valueOf(caracter))) {
                definirSigno(TokensTC.LETRA.toString());
            } else if(Character.isDigit(caracter)) {
                cargarLexema(lexema, TokensTC.LETRA.toString());
                lexema = "";
                lexema += Character.toString(caracter);
                estado = 4;
            } else if(Character.isLetter(caracter)) {
                 lexema += Character.toString(caracter);
                if(caracter == 't') {
                    cargarLexema(lexema, TokensTC.IMPRIMIR.toString());
                    estado = 0; 
                    lexema = "";
                } else {
                    estado = 6;
                }  
            } else if(!Character.isSpaceChar(caracter)) {
                cargarLexema(lexema, TokensTC.LETRA.toString());
                estado = 0;
                lexema = ""; 
                lexema += Character.toString(caracter);
                cargarLexema(lexema, TokensTC.ERROR.toString());
                lexema = ""; 
            } 
            break;  
            default:break;
        }
        posicion++;
        if(posicion >= entrada.length()) {
            if(estado == 4) {
                cargarLexema(lexema, TokensTC.ENTERO.toString());
            } else if (estado == 6 || estado == 8 || estado == 9 || estado == 10 || estado == 11) {
                cargarLexema(lexema, TokensTC.LETRA.toString());
            } 
        } else {
            proceso();
        }    
    }
    
    private void cargarLexema(String lexema, String token) {
       lexemas.add(lexema);
       tokens.add(token);
    }
    
    private void definirSigno(String tipoToken) {
        if (caracter == '+') {
            cargarLexema(lexema, tipoToken);
            estado = 0;
            lexema = "";
            lexema += Character.toString(caracter);
            cargarLexema(lexema,TokensTC.SUMAR.toString());
            lexema = ""; 
        } else if(caracter == '-') {
            cargarLexema(lexema, tipoToken);
            estado = 0;
            lexema = "";
            lexema += Character.toString(caracter);
            cargarLexema(lexema, TokensTC.RESTAR.toString());
            lexema = "";                      
        } else if(caracter == '='){
            cargarLexema(lexema, tipoToken);
            estado = 0;
            lexema = "";
            lexema += Character.toString(caracter);
            cargarLexema(lexema, TokensTC.ASIGNAR.toString());
            lexema = "";
        }
    }
    
    public static void main(String args[]) {
        String cadena = "var a = 9/8 + 56 print a";
        LexicoTC lexico = new LexicoTC(cadena);
        lexico.proceso();
        lexico.imprimir();
    }
}
