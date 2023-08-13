//define URL to read in 'samples.json'
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  });

//Initialize the dashboard and create the default plots
function dashboard() {

    //Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset")

   // Fetch the JSON data and console log it
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        //define and create an array of id names
        let names = data.names;

        //loop through the names array
        names.forEach((name) => {

            //console log the id value for each iteration
            console.log(name.id);

            //append each name as an item in the dropdown menu with value equal to a name from the array
            dropdownMenu.append("option").text(name).property("value",name);
        });

        //Assign the first sample from the list
        let first_sample = names[0];

        //Build initial plots
        buildMetaData(first_sample);
        buildBarChart(first_sample);
        buildBubbleChart(first_sample);
        buildGaugeChart(first_sample);

    });
};

// Function that populates metadata
function buildMetaData(sample) {

    //Use D3 to retrieve the data
    d3.json(url).then((data) => {

        //Retrieve the metadata
        let metadata = data.metadata;

        //Filter based on the sample name
        let metaValue = metadata.filter((result) => result.id ==sample);

        //Log the array of metadata objects after they have been filtered
        console.log(metaValue);

        //Get the first index from the array
        let valueData = metaValue[0];

        //Clear out the extisting metdata in div with id sample-metadata
        d3.select("#sample-metadata").html("");

        //Use Object.entries to add each key/value pair to the panel
        Object.entries(valueData).forEach(([key, value]) => {

            //Log the individual key/value pairs as they are being appended to the panel
            console.log(key, value);

            //append them to the panel
            d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`);
        });

    });
};

//Build the function for the bar chart
function buildBarChart(sample) {

    //Use D3 to retrieve the data
    d3.json(url).then((data) => {

        //Retrieve the sample data
        let sampledata = data.samples;

        //Filter based on the sample name
        let sampleValue = sampledata.filter((result) => result.id ==sample);

        //Log the array of metadata objects after they have been filtered
        console.log(sampleValue);

        //Get the first index from the array
        let valueData = sampleValue[0];

        //Get the otu_ids, labels and sample values
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;
        
        //Console log the data
        console.log(otu_ids, otu_labels, sample_values);

        // Set top ten items to display in descending order
        let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse();
        let xticks = sample_values.slice(0,10).reverse();
        let labels = otu_labels.slice(0,10).reverse();
        
        // Set up the trace for the bar chart
        let trace = {
            x: xticks,
            y: yticks,
            text: labels,
            type: "bar",
            orientation: "h"
        };

        // Setup the layout
        let layout = {
            title: "Top 10 OTUs Present"
        };

        // Call Plotly to plot the bar chart
        Plotly.newPlot("bar", [trace], layout)
    });
};

//Build the function for the bubble chart
function buildBubbleChart(sample) {

    //Use D3 to retrieve the data
    d3.json(url).then((data) => {

        //Retrieve the sample data
        let sampledata = data.samples;

        //Filter based on the sample name
        let sampleValue = sampledata.filter((result) => result.id ==sample);

        //Log the array of metadata objects after they have been filtered
        console.log(sampleValue);

        //Get the first index from the array
        let valueData = sampleValue[0];

        //Get the otu_ids, labels and sample values
        let otu_ids = valueData.otu_ids;
        let otu_labels = valueData.otu_labels;
        let sample_values = valueData.sample_values;
        
        //Console log the data
        console.log(otu_ids, otu_labels, sample_values);

        // Set up the trace for the bubble chart
        let trace1 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        };

        // Setup the layout
        let layout = {
            title: "Bacteria per Sample",
            hovermode: "closest",
            xaxis: {title: "OTU ID"},
        };

        // Call Plotly to plot the bubble chart
        Plotly.newPlot("bubble", [trace1], layout)
    });
};

//Build the function for the gauge chart (bonus)
function buildGaugeChart(sample) {

    //Use D3 to retrieve the data
    d3.json(url).then((data) => {

        //Retrieve all the metadata
        let sampledata = data.metadata;

        //Filter based on the sample name
        let sampleValue = sampledata.filter((result) => result.id ==sample);

        //Log the array of metadata objects after they have been filtered
        console.log(sampleValue);

        //Get the first index from the array
        let valueData = sampleValue[0];

        //define the wash frequency
        let washFreq = Object.values(valueData)[6];

        //Console log the data
        console.log(washFreq);

        // Set up the trace for the gauge chart
        let trace2 = {
            value: washFreq,
            domain: {x: [0,1], y: [0,1]},
            title: {
                text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
                font: {color: "black", size: 20}
            },
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: {range: [0,10], tickmode: "linear", tick0: 2, dtick: 2},
                bar: {color: "blue"},
                steps: [
                    {range: [0, 1], color: "rgb(123,247,69)"},
                    {range: [1, 2], color: "rgb(111,227,61)"},
                    {range: [2, 3], color: "rgb(92,196,47)"},
                    {range: [3, 4], color:  "rgb(80,173,40)"},
                    {range: [4, 5], color:  "rgb(67,148,33)"},
                    {range: [5, 6], color: "rgb(45,102,20)"},
                    {range: [6, 7], color: "rgb(34,79,15)"},
                    {range: [7, 8], color:  "rgb(25,61,10)"},
                    {range: [8, 9], color: "rgb(20,54,6)"},
                    {range: [9, 10], color: "rgb(12,36,2)"},
                ]
            } 
        };

        // Set up the Layout
        let layout = {
            width: 400, 
            height: 400,
            margin: {t: 0, b:0}
        };

        // Call Plotly to plot the gauge chart
        Plotly.newPlot("gauge", [trace2], layout)
    });
};

//Create function for changing plots when a new name is selected
function optionChanged(sample) {

    //Log the new sample
    console.log(sample);

    //Call all the plots
    buildMetaData(sample);
    buildBarChart(sample);
    buildBubbleChart(sample);
    buildGaugeChart(sample);
};

//Call the dashboard function
dashboard();