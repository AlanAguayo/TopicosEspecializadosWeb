package mx.alan.receta.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Data
@JsonInclude(JsonInclude.Include.NON_EMPTY)
@Document("recipes")
public class Recipes {
    @Id
    private String id;

    private String titulo;

    private List<Object> ingredientes;

    private String tiempo;

    private String dificultad;

    private String imagen;
    
    private String video;
}
