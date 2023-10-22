package com.desafio;

public class Iphone implements ReprodutorMusical, NavegadorInternet, AparelhoTelefonico{
    public Iphone() {
    }
    @Override
    public void tocar() {
        System.out.println("Tocando música");
    }
    @Override
    public void pausar() {
        System.out.println("Pausando música");
    }
    @Override
    public void selecionarMusica(String musica) {
        System.out.println("Selecionada musica: " + musica);
    }

    @Override
    public void adicionarNovaAba() {
        System.out.println("Nova aba Adicionada");
    }

    @Override
    public void atualizarPagina() {
        System.out.println("Pagina atualizada");
    }

    @Override
    public void exibirPagina() {
        System.out.println("Pagina carregada!");
    }

    @Override
    public void ligar() {
        System.out.println("Ligando...");
    }

    @Override
    public void atender() {
        System.out.println("Alô");    }

    @Override
    public void iniciarCorreioVoz() {
        System.out.println("Voce tem 1 mensagem no correio de voz!");;
    }
}

