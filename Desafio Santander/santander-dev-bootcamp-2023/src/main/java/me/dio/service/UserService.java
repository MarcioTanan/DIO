package me.dio.service;

import me.dio.domain.model.cliente;

public interface UserService {

    cliente findById(Long id);

    cliente create(cliente userToCreate);
}
