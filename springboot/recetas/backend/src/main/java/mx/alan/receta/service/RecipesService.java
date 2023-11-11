package mx.alan.receta.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mx.alan.receta.model.Recipes;
import mx.alan.receta.repository.RecipesRepository;

@Service
public class RecipesService {
    @Autowired
    RecipesRepository repo;

    public List<Recipes> getAll(String titulo) {
        return repo.findByTitulo(titulo);    
    }

    public Optional<Recipes> getOne(String id) {
        return repo.findById(id);
    }

    public boolean add(Recipes receta) {
        repo.save(receta);
        return true;
    }

    public boolean update(String id, Recipes receta) {
        Optional<Recipes> result = repo.findById(id);
        if (result.isPresent()) {
            receta.setId(id);
            System.out.println("Antes de la actualización: " + result.get());
            System.out.println("Objeto a actualizar: " + receta);

            repo.save(receta);
            System.out.println("Después de la actualización: " + repo.findById(id).orElse(null));
            return true;
        }
        return false;
    }

    public boolean delete(String id) {
        Optional<Recipes> result = repo.findById(id);
        if (result.isPresent()) {
            repo.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}