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
                    if (caracter == '+') {
                        lexema += Character.toString(caracter);
                        estado = 0;
                        cargarLexema(lexema, TokensTC.SUMAR.toString());
                        lexema = "";
                    } else if(caracter == '-') {
                        lexema += Character.toString(caracter);
                        estado = 0;
                        cargarLexema(lexema, TokensTC.RESTAR.toString());
                        lexema = "";                        
                    } else if(caracter == '='){
                        lexema += Character.toString(caracter);
                        estado = 0;
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
                }                 
            break;
            case 4:
            if(u.verificarChar(u.obtenerSignos(),String.valueOf(caracter)) || Character.isLetter(caracter)) {
                cargarLexema(lexema, TokensTC.ENTERO.toString());
                lexema = "";
                estado = 0;
                lexema += Character.toString(caracter);
            } else if(Character.isDigit(caracter)) {
                lexema += Character.toString(caracter);
                estado = 4;
            }
            break;
            case 6:
            if(u.verificarChar(u.obtenerSignos(),String.valueOf(caracter)) || Character.isDigit(caracter)) {
                if (caracter == '+') {
                        
                        estado = 0;
                        cargarLexema(lexema, TokensTC.SUMAR.toString());
                        lexema = "";
                    } else if(caracter == '-') {
                        lexema += Character.toString(caracter);
                        estado = 0;
                        cargarLexema(lexema, TokensTC.RESTAR.toString());
                        lexema = "";                        
                    } else if(caracter == '='){
                        lexema += Character.toString(caracter);
                        estado = 0;
                        cargarLexema(lexema, TokensTC.ASIGNAR.toString());
                        lexema = "";  
                    }
            }else if(caracter == 'p'){
                estado = 8;
                lexema += Character.toString(caracter);
            } else {
                estado = 6;
                lexema += Character.toString(caracter);
            }
            break;
            case 8:
            if(caracter == 'r') {
                estado = 9;
                lexema += Character.toString(caracter);
            } else if(Character.isLetter(caracter)) {
                estado = 6;
                lexema += Character.toString(caracter);
            } else {
                cargarLexema(lexema, TokensTC.LETRA.toString());
                lexema = "";
                estado = 0;
                lexema += Character.toString(caracter);
            }
            break;
            case 9:
            if(caracter == 'i') {
                estado = 10;
                lexema += Character.toString(caracter);
            } else if(Character.isLetter(caracter)) {
                estado = 6;
                lexema += Character.toString(caracter);
            } else {
                cargarLexema(lexema, TokensTC.LETRA.toString());
                lexema = "";
                estado = 0;
                lexema += Character.toString(caracter);
            }
            break;
            case 10:
            if(caracter == 'n') {
                estado = 11;
                lexema += Character.toString(caracter);
            } else if(Character.isLetter(caracter)) {
                estado = 6;
                lexema += Character.toString(caracter);
            } else {
                cargarLexema(lexema, TokensTC.LETRA.toString());
                lexema = "";
                estado = 0;
                lexema += Character.toString(caracter);
            }
            break; 
            case 11:
            if(caracter == 't') {
                lexema += Character.toString(caracter);
                cargarLexema(lexema, TokensTC.IMPRIMIR.toString());
                lexema = "";
                estado = 0;       
                lexema += Character.toString(caracter);
            } else if(Character.isLetter(caracter)) {
                estado = 6;
                lexema += Character.toString(caracter);
            } else {
                cargarLexema(lexema, TokensTC.LETRA.toString());
                lexema = "";
                estado = 0;
                lexema += Character.toString(caracter);
            }
            break;  
            default:break;
        }
        posicion++;
        if(posicion >= entrada.length()) {
            
        } else {
            proceso();
        } 
    }
    
    private void cargarLexema(String lexema, String token) {
       lexemas.add(lexema);
       tokens.add(token);
    }
        
    public static void main(String args[]) {
        // TODO code application logic here
        String cadena = "var x = 1";
        LexicoTC lexico = new LexicoTC(cadena);
        lexico.proceso();
        lexico.imprimir();
    }
}
