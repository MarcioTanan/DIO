package me.dio.domain.repository;

import me.dio.domain.model.cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<cliente, Long> {

    boolean existsByAccountNumber(String accountNumber);
}