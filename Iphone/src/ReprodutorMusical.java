package com.desafio;

public interface ReprodutorMusical {
    public default void tocar(){};
    public default void pausar(){};
    public default void selecionarMusica(){};

    void selecionarMusica(String musica);
}
