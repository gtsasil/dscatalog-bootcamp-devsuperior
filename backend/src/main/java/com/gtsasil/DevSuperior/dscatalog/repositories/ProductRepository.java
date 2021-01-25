package com.gtsasil.DevSuperior.dscatalog.repositories;

import com.gtsasil.DevSuperior.dscatalog.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
}
