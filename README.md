**Belly Button Biodiversity**

**Overview**

This is an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Demographics information is dynamically populated based upon a user-selected test subject ID. A bar chart, bubble chart and a bonus gauge chart also update once the ID is changed. Code has been written using Plotly, JavaScript, HTML, and D3.js.

![Dashboard overview](https://github.com/jmpealy/belly-button-challenge/assets/128240129/9291317f-93a6-44c1-98ce-fee1874ee925)

**Dashboard Features**

Drop Down Menu
Select the Test Subject ID No. with the drop down menu to toggle the visualizations (bar, gauge, bubble charts)

![Dropdown menu](https://github.com/jmpealy/belly-button-challenge/assets/128240129/667e88e8-29f8-480b-bc92-6cfd8c776ac4)

**Demographic Info Panel**

This Panel shows the demographics information of the chosen test subject.
The panel displays each key-value pair from the metadata JSON object.

![Demographic Info](https://github.com/jmpealy/belly-button-challenge/assets/128240129/878bd7b0-471e-4cd2-9193-023bcac9c418)


**Horizontal Bar Graph**

A bar chart is generated whenever a test subject is selected on the drop menu
The top 10 OTUs found in that test subject will be displayed in bars, where the sample_values are presented as the values for the bar chart and the otu_ids presented as the labels for the chart.
When a user hover over a bar, the otu_labels are presented as the hovertext for the chart

![Bar Chart](https://github.com/jmpealy/belly-button-challenge/assets/128240129/ab39d1c6-0dc0-4ef8-9ccc-3cf309535354)

**Bubble Chart**

A bubble chart is generated when a test subject is selected on the drop menu
Each sample will be display as a bubble, where the larger the sample value is the larger the bubble size
On the chart, the x values are the otu_ids, the y values are the sample_values
The colors of the bubbles are based on otu_ids, and the hovertext are the otu_labels

![Bubble Chart](https://github.com/jmpealy/belly-button-challenge/assets/128240129/9e68c49a-deda-4fab-845b-2d4b392d0692)


**Gauge Chart**

A gauge chart is generated when a test subject is selected on the drop menu
The value of the number of scrubs per week is displayed as a blue bar on the gauge chart.

![gauge chart](https://github.com/jmpealy/belly-button-challenge/assets/128240129/7d83dce3-2445-485a-8ed7-718a66186da2)


**Tools and useful links**

* Plotly

* Javascript

* HTML

* D3.js

* JSON

* https://www.javatpoint.com/how-to-create-dropdown-list-using-javascript
    I used this in conjunction with classroom examples for creating my dropdown box

* https://www.appsloveworld.com/d3js/100/8/how-to-append-option-into-select-combo-box-in-d3
    I used this as a reference for appending the dropdown list

* https://plotly.com/javascript/bar-charts/
    Used as a reference for the bar chart layout

* https://www.w3schools.com/js/js_loop_for.asp
    Used to brush up on loop syntax in JS

* https://phppot.com/javascript/gauge-chart-js/
    I used this in conjunction with the plotly documentation (link below) for gauge chart creation.

* https://plotly.com/javascript/indicator/


* https://www.w3schools.com/colors/colors_picker.asp
    I used this for picking my color scheme for the gauge chart.

Acknowledgments
Hulcr, J. et al.(2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/
