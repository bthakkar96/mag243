# Bhakti's Theme

### Technicalities

* The theme inherits from the Magento Luma theme.
* The theme itself is declared in theme.xml. This file is a necessity for all Magento 2 themes and contains information about inheritance.
* The composer.json file contains the dependency information required for this theme.

### Installation

Add theme folder in app/design/frontend folder

Run the following command if the project is in **developer mode**
php bin/magento s:up && php bin/magento s:s:d -f && php bin/magento c:f && php bin/magento c:c

Run the following command if the project is in **default mode**
php bin/magento s:up && php bin/magento s:s:d && php bin/magento c:f && php bin/magento c:c

After installing the theme, you can verify that the installation succeeded by going to the Magento 2 back-end and navigating to **Content -> Design -> Themes**. If it listed there, you should be happy.

To set this theme for development purposes on the storefront, go to: **Content -> Design -> Configuration** and set the theme on the Store View you wish to use. Do not forget to flush the cache afterwards.


### Create a multi-language store

Inside Magento 2 admin go to Stores – Configuration – All store and please follow steps bellow and create new store view.
https://tinyurl.com/ydzy9ws9

Magento 2 admin go to Stores – Configuration – (select scope france) 

Go to general -> general
1) Country Options -> select france
2) Locale Options -> Locale -> select french(france)

### Create a multi-currency 
Go to currency setup ->  Currency Options -> Allowed Currencies (select the currencies you want)


### Backend cms block changes
I've attached html file with the email. please add it in backend and block id will be file name.

1) To add header top bar, go to content -> blocks -> add new block and then add block content given in the mail and keep the id header-top-bar

### Backend language change for navigation menu

1) Go to Catalog -> categories 
2) change Scope: France
3) unselect Use Default Value in Category Name
4) Add the name in french


### Video link
https://www.awesomescreenshot.com/video/8338432?key=00309a55697429acedb6fe1546cb264d

```

