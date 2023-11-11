package mx.alan.receta.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import mx.alan.receta.model.Recipes;

public interface RecipesRepository extends MongoRepository<Recipes, String>{
    @Query("{'titulo': {$regex: ?0, $options: 'i'}}")
    List<Recipes> findByTitulo(String titulo);
} 
