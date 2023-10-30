package com.natwest.hrauth.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class HR {
	
	@Id
	private int employeeId;
	private String firstName;
    private String lastName;
    private String email;
    private String department;
    private String jobTitle;
    private Date dateOfJoining;
    private Date dateOfBirth;
    private String phoneNo;
    private String address;
    private String hrPassword;
    
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
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getJobTitle() {
		return jobTitle;
	}
	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
	public Date getDateOfJoining() {
		return dateOfJoining;
	}
	public void setDateOfJoining(Date dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}
	public Date getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getHrPassword() {
		return hrPassword;
	}
	public void setHrPassword(String hrPassword) {
		this.hrPassword = hrPassword;
	}
	@Override
	public String toString() {
		return "HR [employeeId=" + employeeId + ", firstName=" + firstName + ", lastName=" + lastName + ", email="
				+ email + ", department=" + department + ", jobTitle=" + jobTitle + ", dateOfJoining=" + dateOfJoining
				+ ", dateOfBirth=" + dateOfBirth + ", phoneNo=" + phoneNo + ", address=" + address + ", hrPassword="
				+ hrPassword + "]";
	}
    
}
