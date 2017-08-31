package com.tdk.edu.controller;

import com.tdk.edu.entity.Bus;
import com.tdk.edu.service.BusService;
import java.util.List;
import javax.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/**")
public class BusController {

  BusService busService;

  @Autowired
  public BusController(BusService busService) {
    this.busService = busService;
  }

  @GetMapping(value = "/buses")
  public List<Bus> getAllBuses() {
    return busService.getAllBuses();
  }

  @PostMapping(value = "/buses")
  public Bus createBus(@RequestBody Bus bus) {
    return busService.saveBus(bus);
  }

  @PutMapping(value = "/buses/{id}")
  public Bus updateBus(@RequestBody Bus bus, @PathVariable Integer id) {
    bus.setId(id);
    return busService.saveBus(bus);
  }

  @DeleteMapping(value = "/buses/{id}")
  public void deleteBus(@PathVariable Integer id) {
    busService.deleteBus(id);
  }
}
