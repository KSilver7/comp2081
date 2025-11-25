// we don't need the path this time, we need the height

let bar = document.querySelector("svg #chart");
// rect doesn't have a total legnth option. Instead we need to get the max height, with base 10 for the parse

let maxHeight = parseInt(bar.getAttribute("height"), 10);


// select the text in the svg
let percent = document.querySelector("svg text").textContent;

// change the percentages from string to integers combinging parce and the replacement in one line
percent = parseInt(percent.replaceAll("%", ""), 10);

// since ours isnt a pie... hm instead we want the percent of the bar
percent = (percent / 100) * maxHeight;

// the bar kept going the wrong way from top to bottom, going to try this to see if it works by taking away the height from the total height instead
let barStart = maxHeight - percent;
// that didn't really work, now it just reduces from the bottom. oh maybe i can rotate it...

const ruleList = document.styleSheets[0].cssRules;
console.log(ruleList);

// now we create the loop to get the rule we want
let svgActiveR;
for (let i = 0; i < ruleList.length; i++) {
    if(ruleList[i].selectorText === "svg:active #chart") {
        //this is the one
        svgActiveR = ruleList[i];
    }
}

// now we need the new style property height is equivalent to the stroke-dasharray, and percent is equal to pieWidth...
svgActiveR.style.setProperty("height", percent);

// i tried adding an event listener to have it stay selected, but it just wasn't working.