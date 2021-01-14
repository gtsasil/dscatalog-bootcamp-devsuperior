package com.gtsasil.DevSuperior.dscatalog.repositories;

import com.gtsasil.DevSuperior.dscatalog.entities.Category;
import com.sun.xml.bind.v2.model.core.ID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
