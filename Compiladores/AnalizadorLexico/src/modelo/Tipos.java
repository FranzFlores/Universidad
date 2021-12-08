/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo;

/**
 *
 * @author Smart
 */
public enum Tipos {
    NUMERO("[0-9]+$"),
    OPERADOR_ARITMETICO("[*|/|+|-]$");
    public final String patron;
    
    private Tipos(String patron) {
        this.patron = patron;
    }
    
}
