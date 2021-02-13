package com.gtsasil.DevSuperior.dscatalog.repositories;

import com.gtsasil.DevSuperior.dscatalog.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
}
