# Data-Scraping-using-Node.JS

This backend API can scarp the data of e-commerce(example: Flipkart) and will give information like Title, Price,Rating, etc.

## Demonstration using POSTMAN(DATAVIO)

### 1. Signup

First user need to signup to make Scrape Request. The field that is required for signup is **Name,Email and Password**
![signup](https://github.com/Dharansh-Neema/Data-Scraping-using-Node.JS/blob/main/Images/Signup.png)
After signup the user automtically get logged in or if he/she wants to login later he/she can use login routes

> Password Stored in **Hashed** format.

### 2. Login

The Login route required two field **Email and Password**
![login](https://github.com/Dharansh-Neema/Data-Scraping-using-Node.JS/blob/main/Images/login.png)

### Cookies and token

After signup/login a unique token is generated using jsonwebtoken(JWT) which is stored in cookie and the token contains informartion of logged in user
![cookieToken](https://github.com/Dharansh-Neema/Data-Scraping-using-Node.JS/blob/main/Images/cookieTokenValue.png)

### 3. Scraping the data using URL

To scrape the data pass the URL in body and send POST to /scrape  
Just like this:
![scraped data](https://github.com/Dharansh-Neema/Data-Scraping-using-Node.JS/blob/main/Images/scrapedData%20.png)

The Scrape route will extract information such as title,price,rating,etc.

### Error when the user is not LoggedIn

If the user is not LoggedIn and try to make request to Scrape the data the following error will shown:  
![loggedInerror](https://github.com/Dharansh-Neema/Data-Scraping-using-Node.JS/blob/main/Images/ErrorwhenuserisnotloggedIn.png)

### 4. Logout

To logout
![logout](https://github.com/Dharansh-Neema/Data-Scraping-using-Node.JS/blob/main/Images/Logout.png)

## DB Storage looks like

### user:

![user-db-storage](https://github.com/Dharansh-Neema/Data-Scraping-using-Node.JS/blob/main/Images/Users%20stored%20in%20DB.png)

### product:

![product-db=-storage](https://github.com/Dharansh-Neema/Data-Scraping-using-Node.JS/blob/main/Images/Products%20stored%20in%20DB.png)
