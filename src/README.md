I created a e-commerce-system folder similar to this folder structure
e-commerce-system/
├── src/
│   ├── models/
│   │   ├── Product.ts
│   ├── services/
│   │   └── apiService.ts
│   ├── utils/
│   │   ├── discountCalculator.ts
│   │   ├── errorHandler.ts
│   │   └── taxCalculator.ts
│   └── main.ts
└── tsconfig.json

after this, type body of the Product with properties and fuctions. exported it.

apiService.ts uses this class to create instance and populate the array of products with the help of api link it gets from called method  or another class. This class catches an error when fetching, if there is any issue with fetching, calls a error class(not a system type). If no error, with the .map method pulls the element, creates instances each time and  populates array. this function returns the promise of Product array as it has used asign and await. 


index.ts imports all the classes and has properties products and newPriceWithTaxAndDiscount where both of these are arrays and url which as api url as string.  fetchData function has try and catch, try calls fetchData function and url as argument, and with this products array is populated. inside the same try newPriceWithTaxAndDiscount gets the products with calculated discount and tax with the help of .map used in products and assigns  priceAferTaxAndDiscount as new price with return of new product each time .map uses. catches if erro is caught.
calls fetchAllData() outside the function. used forEach on newPriceWithTaxAndDiscount to log the element in this array to show the products with new discount and tax applied.

