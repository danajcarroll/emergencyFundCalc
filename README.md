# Emergency Fund Calculator

This is a calculator that allows you to create an emergency fund using your monthly expenses.

![FoodFind in Mobile and Desktop](/appImage.png?raw=true "Apps in Devices")

## Project Status

Production is almost finished with this app. I want to add an info box to let users know what an emergency fund is, and how to navigate the app itself.

## Description

With this app users are able to choose how long they would like their emergency fund to last, and can add the amounts of all their monthly expenses to see how much they would need to save for it!

### Technologies Used

- HTML/CSS
- Vanilla JavaScript (forEach loops, DOM Manipulation, array methods, event listeners)
- Chart.js API

### Challenges

Inputs - Taking inputs and using the values was tricky at first. Understanding that the value would be taken as a string and then would need to be parsed to a number

Updating Automatically - Using the 'change' event listener was a first for me. But it really came in handy. I wanted to avoid having the user click a submit button every time they added a value, so this event listener made that possible.

Chart.js API - This part was fun! I was inspired by another emergency fund calculator online, I'd heard of the Chart.js API but had never tried it out. I chose to use a pie chart that displays each monthly total as a percentage. This proved challenging once any of the 4 values reached 1000+. I asked my first StackOverflow question and got the answer to my problem! My chart was using value = context.formattedValue, but I wasn't aware that formattedValue takes the number values as a string with commas (1,000 or 10,000). So using context.parsed was the way to go so it could read bigger numbers.

DRY Code - I can't wait to look back at this project, I can see now that there are parts that aren't very dry... For each tab there's a forEach function which is repeated 4 times! I'm still thinking about how I could go about this differently, maybe the this keyword could be used next time.

Final Value Display - Fun little thing I did by myself was adding commas between numbers over 1,000. I thought it made the final values look a bit more professional, talked myself through it and was able to get it done!

## Live Demo

[Check it out here!](https://danacarroll.com/eCalc)
