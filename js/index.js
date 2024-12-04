const states = [
            { state: "Alabama", coal: 33.0, natural_gas: 40.0, nuclear: 22.0, renewables: 5.0 },
            { state: "Alaska", coal: 10.0, natural_gas: 50.0, nuclear: 0.0, renewables: 40.0 },
            { state: "Arizona", coal: 25.0, natural_gas: 30.0, nuclear: 35.0, renewables: 10.0 },
            { state: "Arkansas", coal: 40.0, natural_gas: 30.0, nuclear: 20.0, renewables: 10.0 },
            { state: "California", coal: 0.0, natural_gas: 40.0, nuclear: 5.0, renewables: 55.0 },
            { state: "Colorado", coal: 35.0, natural_gas: 30.0, nuclear: 0.0, renewables: 35.0 },
            { state: "Connecticut", coal: 1.0, natural_gas: 40.0, nuclear: 45.0, renewables: 14.0 },
            { state: "Delaware", coal: 10.0, natural_gas: 70.0, nuclear: 0.0, renewables: 20.0 },
            { state: "Florida", coal: 20.0, natural_gas: 60.0, nuclear: 15.0, renewables: 5.0 },
            { state: "Georgia", coal: 20.0, natural_gas: 40.0, nuclear: 30.0, renewables: 10.0 }
        ];

const width = 800;
const height = 400;
const margin = {top: 50, bottom: 50, left: 50, right: 50};

// Create scales
const xScale = d3.scaleBand()
    .domain(states.map(d => d.state))
    .range([margin.left, width - margin.right])
    .padding(0.1);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(states, d => d.coal)])
    .range([height - margin.bottom, margin.top]);



// Create the SVG container
const svg = d3.select('#d3-container')
    .append('svg')
    .attr('height', height)
    .attr('width', width);

// Create rectangles for coal emissions
svg.selectAll('.coal-rect')
    .data(states)
    .enter()
    .append('rect')
    .attr('class', 'coal-rect')
    .attr('x', d => xScale(d.state))
    .attr('y', d => yScale(d.coal))
    .attr('width', xScale.bandwidth())
    .attr('height', d => height - margin.bottom - yScale(d.coal))
    .attr('fill', 'steelblue')

