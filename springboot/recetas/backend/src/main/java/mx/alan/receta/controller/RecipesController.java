package mx.alan.receta.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import mx.alan.receta.model.Recipes;
import mx.alan.receta.service.RecipesService;

@RestController
@CrossOrigin
@RequestMapping("/recetas")
public class RecipesController {
    @Autowired
    RecipesService ser;

    @GetMapping("")
    public List<Recipes> getByName(@RequestParam(required = false, defaultValue = "") String titulo){
        return ser.getAll(titulo);
    }

    @GetMapping("/{id}")
    public Optional<Recipes> getOne(@PathVariable String id){
        return ser.getOne(id);
    }

    @PostMapping("")
    public String add(@RequestBody Recipes body){
        ser.add(body);
        return "Receta agregada";
    }

    @PutMapping("/{id}")
    public String update(@PathVariable String id, @RequestBody Recipes body) {
        if(ser.update(id, body)){
            return "Receta editada";
        };
            return "Error: No se pudo editar la receta";
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable String id) {
            if(ser.delete(id)){
                return "Receta eliminada";
            }
            else{
                return "Error, receta no encontrada";
            }
    }
}
