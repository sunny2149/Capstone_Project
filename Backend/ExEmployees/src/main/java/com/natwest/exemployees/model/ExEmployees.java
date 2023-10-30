package com.natwest.exemployees.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="ex_employees")
public class ExEmployees {
	@Id
	private int employeeId;
    private String firstName;
    private String lastName;
    private String email;
    private Date lastWorkingDay;
    private boolean onNotice;
    
	public int getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(int employeeId) {
		this.employeeId = employeeId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Date getLastWorkingDay() {
		return lastWorkingDay;
	}
	public void setLastWorkingDay(Date lastWorkingDay) {
		this.lastWorkingDay = lastWorkingDay;
	}
	public boolean isOnNotice() {
		return onNotice;
	}
	public void setOnNotice(boolean onNotice) {
		this.onNotice = onNotice;
	}
	@Override
	public String toString() {
		return "ExEmployees [employeeId=" + employeeId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", email=" + email + ", lastWorkingDay=" + lastWorkingDay + ", onNotice=" + onNotice + "]";
	}
    
    
}
