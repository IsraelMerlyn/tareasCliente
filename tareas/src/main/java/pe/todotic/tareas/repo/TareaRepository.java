package pe.todotic.tareas.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import pe.todotic.tareas.model.Tarea;

public interface TareaRepository extends MongoRepository<Tarea, String> {
}
