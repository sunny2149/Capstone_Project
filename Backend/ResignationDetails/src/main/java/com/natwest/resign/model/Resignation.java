package com.natwest.resign.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employees")
public class Resignation {
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
    private String empPassword;
    private String AdpPortalAccess;
    private String OutlookAccess;
    private String WorkdayAccess;
    private String SharedDriveAccess;
    private String LiveEngageAccess;
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
	public String getEmpPassword() {
		return empPassword;
	}
	public void setEmpPassword(String empPassword) {
		this.empPassword = empPassword;
	}
	public String getAdpPortalAccess() {
		return AdpPortalAccess;
	}
	public void setAdpPortalAccess(String adpPortalAccess) {
		AdpPortalAccess = adpPortalAccess;
	}
	public String getOutlookAccess() {
		return OutlookAccess;
	}
	public void setOutlookAccess(String outlookAccess) {
		OutlookAccess = outlookAccess;
	}
	public String getWorkdayAccess() {
		return WorkdayAccess;
	}
	public void setWorkdayAccess(String workdayAccess) {
		WorkdayAccess = workdayAccess;
	}
	public String getSharedDriveAccess() {
		return SharedDriveAccess;
	}
	public void setSharedDriveAccess(String sharedDriveAccess) {
		SharedDriveAccess = sharedDriveAccess;
	}
	public String getLiveEngageAccess() {
		return LiveEngageAccess;
	}
	public void setLiveEngageAccess(String liveEngageAccess) {
		LiveEngageAccess = liveEngageAccess;
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
		return "Resignation [employeeId=" + employeeId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", email=" + email + ", department=" + department + ", jobTitle=" + jobTitle + ", dateOfJoining="
				+ dateOfJoining + ", dateOfBirth=" + dateOfBirth + ", phoneNo=" + phoneNo + ", address=" + address
				+ ", empPassword=" + empPassword + ", AdpPortalAccess=" + AdpPortalAccess + ", OutlookAccess="
				+ OutlookAccess + ", WorkdayAccess=" + WorkdayAccess + ", SharedDriveAccess=" + SharedDriveAccess
				+ ", LiveEngageAccess=" + LiveEngageAccess + ", lastWorkingDay=" + lastWorkingDay + ", onNotice="
				+ onNotice + "]";
	}
	   
    
	
	
    
}