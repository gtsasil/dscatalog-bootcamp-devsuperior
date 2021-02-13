package com.gtsasil.DevSuperior.dscatalog.repositories;

import com.gtsasil.DevSuperior.dscatalog.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
