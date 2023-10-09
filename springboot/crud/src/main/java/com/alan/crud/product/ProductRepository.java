package com.alan.crud.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    //@Query("SELECT * FROM product p WHERE p.name=?1")
    Optional<Product> findProductByName(String name);
}
