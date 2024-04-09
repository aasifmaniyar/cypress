# Feature: Verify Cart functionality

#     Background:
#         Given navigate to page "https://www.saucedemo.com/"
#         When user enters "standard_user" in "Username"
#         And user enters "secret_sauce" in "Password"
#         And user clicks on "Login" button
#         Then "Products" are "visible"

#     Scenario: TC2: verification of product details on cart page
#         When user selects "Price(low to high)" from dropdown
#         And user adds "First" listed product to cart
#         And user adds "Last" listed product to cart
#         And user clicks on "Cart" button
#         Then verify "Product description" is "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."
#         And verify "product price" is "29.99"
#         Then verify "Product description" is "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton."
#         And verify "product price" is "15.99"

#     Scenario: TC3: verification of order dispatched
#         When user adds "First" listed product to cart
#         And user clicks on "Cart" button
#         And user clicks on "Checkout" button
#         When user enters "user" in "First Name"
#         When user enters "sirname" in "Last Name"
#         When user enters "411057" in "Postal code"
#         And user clicks on "Continue" button
#         Then verify "Payment Information" is "SauceCard #31337"
#         Then verify "Shipping Information" is "Free Pony Express Delivery!"
#         Then verify "Price Total" is "49.66"
#         And user clicks on "Finish" button
#         Then verify "Success message" is "Thank you for your order!" 
