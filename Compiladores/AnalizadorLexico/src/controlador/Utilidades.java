/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controlador;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;

/**
 *
 * @author Smart
 */
public class Utilidades {

    private static String CARPETA = "data";
    private static String FILE = CARPETA + File.separatorChar + "lexico.properties";
    private Properties properties;

    public Utilidades() {
        this.cargarLoad();
    }

    public void cargarLoad() {
        try {
            Properties prop = new Properties();
            InputStream in = new FileInputStream(FILE);
            prop.load(in);
            properties = prop;
            in.close();
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Error al cargar datos" + e);
        }
    }

    public String[] operadoresAritmeticos() {
        return properties.getProperty("aritmeticos").split(",");
    }
    
    public String[] obtenerSignos() {
        return properties.getProperty("signos").split(",");
    }

    //Si el caracter ingresado por el usuario es válido
    public boolean verificarChar(String[] data, String caracter) {
        return Arrays.asList(data).contains(caracter);
    }

    public static void main(String[] args) {
        Utilidades u = new Utilidades();
        System.out.println(u.operadoresAritmeticos().length);
        System.out.println(u.verificarChar(u.operadoresAritmeticos(),"+"));
    }
}
