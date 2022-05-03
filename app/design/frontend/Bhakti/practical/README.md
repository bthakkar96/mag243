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

### Add a logo to store
Navigate to **Content -> Design -> Themes -> edit store -> header -> logo**.

### Add a product description 
Navigate to **Catalog -> Product -> open product -> content ->  Short Description**.

### Add a product image
Navigate to **Catalog -> Product -> open product -> content ->  Images And Videos**.
### Preview
Desktop: https://www.awesomescreenshot.com/image/26612970?key=eba684b666df3d6c1b110d49417e0a2b
Mobile: https://www.awesomescreenshot.com/image/26612985?key=ee914e8acec5cf4f6fb1fc620350c862
```

