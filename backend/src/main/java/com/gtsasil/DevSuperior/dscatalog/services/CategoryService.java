package com.gtsasil.DevSuperior.dscatalog.services;

import com.gtsasil.DevSuperior.dscatalog.dto.CategoryDTO;
import com.gtsasil.DevSuperior.dscatalog.entities.Category;
import com.gtsasil.DevSuperior.dscatalog.exceptions.ResourceNotFoundException;
import com.gtsasil.DevSuperior.dscatalog.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    @Autowired
    public CategoryRepository repository;

    @Transactional(readOnly = true)
    public List<CategoryDTO> findAll(){
       List<Category> list = repository.findAll();
      return list.stream().map(x -> new CategoryDTO(x)).collect(Collectors.toList());
    /*
    *This expressio was replaced by the Lambda expression above

       List<CategoryDTO> listDto = new ArrayList<>();
       for (Category cat : list ){
           listDto.add(new CategoryDTO(cat));
       }
       * return listDto;
    */
    }


    @Transactional(readOnly = true)
    public CategoryDTO findById(Long id) {
        Optional<Category> obj = repository.findById(id);
        Category entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not Found"));
        return new CategoryDTO(entity);
    }

    @Transactional
    public CategoryDTO insert(CategoryDTO dto) {

        Category entity = new Category();
        entity.setName(dto.getName());
        entity = repository.save(entity);

        return new CategoryDTO(entity);
    }

    @Transactional
    public CategoryDTO update(Long id, CategoryDTO dto) {
        try{
            Category entity = repository.getOne(id);
            entity.setName(dto.getName());
            entity = repository.save(entity);
            return new CategoryDTO(entity);
        }
        catch (EntityNotFoundException e){
            throw new ResourceNotFoundException("Id not found" + id);
        }
    }
}
