package com.desafio;

public class Main {
    public static void main(String[] args) {

        Iphone iphone = new Iphone();
        System.out.println("App: Tocador de música");
        iphone.selecionarMusica("Beat it");
        iphone.tocar();
        iphone.pausar();
        System.out.println("----------------");
        System.out.println("App: Telefone");
        iphone.ligar();
        iphone.atender();
        iphone.iniciarCorreioVoz();
        System.out.println("----------------");
        System.out.println("App: navegador");
        iphone.exibirPagina();
        iphone.atualizarPagina();
        iphone.adicionarNovaAba();
    }
}