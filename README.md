# API Automation Test Suite

This project contains a comprehensive suite of **REST API test cases** for the [DMoney](https://dailyfinance.roadtocareer.net) system. It includes automated tests for positive and negative flows involving User Management, Deposits, Withdrawals, Money transfers, Payments, and Balance verification.

---

## 📌 Project Overview

This project tests the following user and transaction flows:

- Admin creates an **Agent**, **2 Customers**, and a **Merchant**
- SYSTEM deposits money to Agent
- Agent deposits to a Customer
- Customers send money to each other
- Customer withdraws to Agent
- Customers and Merchant check balance and transaction statements

---

## Prerequisites
- Postman

- Valid credentials for Admin Login

- DMoney base URL: ``` https://dailyfinance.roadtocareer.net ```
- nodeJs, VS Code for Report Generation
  

## 📚 API Documentation

 https://documenter.getpostman.com/view/42772182/2sB2qfAzYg


## ✅ Reports


#### 📄 Test Case Report

https://docs.google.com/spreadsheets/d/1uYOGxkH9KDhhFZkamPL2e_NOk8wRrOP7Bc6ICIfsp2A/edit?usp=sharing

#### 🐞 Bug & Improvement Report

https://docs.google.com/spreadsheets/d/1E08rJUQ4X_ca4DH9LTLOdQEnrGRRusWxHqAgf0LpGtc/edit?usp=sharing

#### 📈 Newman Test Report

<img width="418" alt="newman" src="https://github.com/user-attachments/assets/2c9c493f-d18e-4fc1-9e7a-ceb74dec7cbf" />


## 🚀 How to Use This Project

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/afsanakashpia/Postman_API_Testing
cd Postman_API_Testing
```
#### 2️⃣ Open in Postman
- Import postman/DMoney_API_Test_Collection.json
- Set Admin credentials and token generation
- Follow the test case order 

 #### 3️⃣ Run Collection
- Click Runner in Postman
- Choose the DMoney collection and environment
- Click Run


