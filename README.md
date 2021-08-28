# Project Title

303 QuesoFinder

## Description

SPA designed to showcase, rate, and point people in the direction of Denver’s best queso with links to each on google maps

### Motivation

Moving from Texas to Colorado I had a rude awakening when it came to gettng my queso fix.  Turns out it is not as much of a "thing" as it is in Texas. Having trouble finding restaurants with a quality product, I decided to create a web application to rate and provide links to find quesos around the city of Denver.

### Screenshot

<img align="left" alt="screenshot" src="https://media1.giphy.com/media/rlJoOwrleuwyweSr3q/giphy.gif?cid=790b7611630fbfe5d092ec6c7e8f8b9a84c3790e6a237cb2&rid=giphy.gif&ct=g" />

## Demo

![Demo]https://youtu.be/qJsuCL0xBF8

### Technology Used

<img align="left" alt="medium" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logocolor=black" />



### Code Example

```    const displayPrice = () => {
        if ((queso.price) <= 5){
            return  "🤑"
        }else if ((queso.price) >= 6 && (queso.price) <= 9){
            return "🤑🤑"
        }else if ((queso.price) >= 10){
            return  "🤑🤑🤑"}
    }
    const displaySpicy = () => {
        if ((queso.spicy) <= 3){
            return  "🔥"
        }else if ((queso.spicy) >= 4 && (queso.spicy) <= 6){
            return "🔥🔥"
        }else if ((queso.spicy) >= 7){
            return  "🔥🔥🔥"}
    }
```


### Deployed

![Site]https://hopeful-raman-70b1e5.netlify.app/

### How to Use

You can favorite and send your top queso picks to your plate by clicking anywhere on each card. You may also remove them from clicking on the card sitting on the plate.  Clicking on the button with the restaurant name will take you directly to a Google Map of the newarest locations.

### Restrictions

Formatted to be responsive to web browsers, however it is not formatted for mobile devices.











