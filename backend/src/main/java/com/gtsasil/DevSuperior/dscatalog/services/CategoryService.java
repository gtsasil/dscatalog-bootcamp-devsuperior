package com.gtsasil.DevSuperior.dscatalog.services;

import com.gtsasil.DevSuperior.dscatalog.entities.Category;
import com.gtsasil.DevSuperior.dscatalog.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    public CategoryRepository repository;

    @Transactional
    public List<Category> findAll(){
        return repository.findAll();

    }
}
