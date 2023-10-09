package mx.edu.itcelaya.apirest.controller;

import mx.edu.itcelaya.apirest.model.Car;
import mx.edu.itcelaya.apirest.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
public class CarController {

    @Autowired
    private CarRepository carRepository;

    @GetMapping("/")
    private @ResponseBody List<Car> getAllCars(){
        return carRepository.findAll();
    }

    @PostMapping(value="/add", produces = MediaType.APPLICATION_JSON_VALUE)
    public Car addCar(Car car){
        return carRepository.save(car);
    }

    @PutMapping(value="/update")
    public Car updateCar(Car car){
        if(carRepository.findById(car.getId()).isPresent()){
            return carRepository.save(car);
        }
        return null;
    }

    @DeleteMapping(value="/delete/{car_id}")
    public String deleteCar(@PathVariable Integer car_id){
        if(carRepository.findById(car_id).isPresent()){
            carRepository.deleteById(car_id);
            return "Car eliminated.";
        }
        return "Error, car not found.";
    }
}
