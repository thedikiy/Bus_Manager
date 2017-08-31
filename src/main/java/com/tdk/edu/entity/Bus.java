package com.tdk.edu.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "bus")
public class Bus {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;

  @Column(name = "bus_model")
  private String busModel;

  @Column(name = "registration_number")
  private String registrationNumber;

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getBusModel() {
    return busModel;
  }

  public void setBusModel(String busModel) {
    this.busModel = busModel;
  }

  public String getRegistrationNumber() {
    return registrationNumber;
  }

  public void setRegistrationNumber(String registrationNumber) {
    this.registrationNumber = registrationNumber;
  }
}
