package com.tdk.edu.service;

import com.tdk.edu.entity.Bus;
import com.tdk.edu.repository.BusRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BusService {


  BusRepository busRepository;

  @Autowired
  public BusService(BusRepository busRepository) {
    this.busRepository = busRepository;
  }

  public List<Bus> getAllBuses() {
    return busRepository.findAll();
  }

  public Bus saveBus(Bus bus) {
    return busRepository.save(bus);
  }

  public void deleteBus(Integer id){
    busRepository.delete(id);
  }
}


