/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package models;

/**
 *
 * @author Franz Flores
 */
public enum Types {
    SUMA("^([+])$"), RESTA("^([-])$"), MULTIPLICACION("^([*])$"), DIVISION("^([/])$"), 
    ASIGNACION("^([=])$"), 
    SEPARACION("^([;])$"),
    ENTERO("ENTERO"),
    ENTERO_POSITIVO("^([+])?([1-9])*?$"), 
    ENTERO_NEGATIVO("^([-])([1-9])*$"),
    VARIABLE("^([a-z])+([0-9])?$");
    public final String pattern;

    private Types(String pattern) {
        this.pattern = pattern;
    }
}
