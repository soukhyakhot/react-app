import styles from "./Para.module.css";
import React, {useState, useRef, useEffect} from "react";
import * as d3 from 'd3';

function Para(){
    const [noOfCustomers] = useState([
        100, 500, 1000, 1200, 1500, 1900, 2100, 2400, 3000, 3500, 3900, 4500, 5500,
        500, 600, 2000, 8000, 10000,
      ]);
      
      const [showPercentageChange, setShowPercentageChange] = useState(false);
      const svgRef = useRef();
  
      useEffect(() => {
        const w = 715;
        const h = 115;
        const margin = { top: 20, right: 30, bottom: 30, left: 20 };
    
        const svg = d3
          .select(svgRef.current)
          .attr("width", w + margin.left + margin.right)
          .attr("height", h + margin.top + margin.bottom)
          .style("background", "rgb(222, 225, 228)")
          .append("g")
          .attr("transform", `translate(${margin.left}, ${margin.top})`);

    
        const xScale = d3
          .scaleLinear()
          .domain([0, noOfCustomers.length - 1])
          .range([0, w]);
    
        const yScale = d3
          .scaleLinear()
          .domain([0, d3.max(noOfCustomers)])
          .range([h, 0]);
    
        const generateScaledLine = d3
          .line()
          .x((d, i) => xScale(i))
          .y((d) => yScale(d))
          .curve(d3.curveCardinal);
    
        svg
          .selectAll(".line")
          .data([noOfCustomers])
          .join("path")
          .attr("class", "line")
          .attr("d", generateScaledLine)
          .attr("fill", "none")
          .attr("stroke", "rgb(0, 89, 119)") // Green line
          .attr("stroke-width", 2.);
    
        const xAxis = d3
          .axisBottom(xScale)
          .ticks(noOfCustomers.length)
          .tickFormat((d, i) => 2007 + i);
    
        svg
          .append("g")
          .attr("transform", `translate(0, ${h})`)
          .call(xAxis)

    
        const yAxis = d3.axisLeft(yScale).tickSize(0).tickFormat('');
    
        svg
          .append("g")
          .call(yAxis)
 
    
        svg
          .selectAll(".data-label")
          .data(noOfCustomers)
          .join("text")
          .attr("class", "data-label")
          .attr("x", (d, i) => xScale(i))
          .attr("y", (d) => yScale(d) - 10)
          .attr("font-size", "8px")
          .attr("fill", "#000")
          .text((d) => d);
    
        svg
          .selectAll(".circle")
          .data(noOfCustomers)
          .join("circle")
          .attr("cx", (d, i) => xScale(i))
          .attr("cy", (d) => yScale(d))
          .attr("r", 3)
          .attr("fill", "rgb(1, 49, 65)") // Orange points

          
      }, [noOfCustomers]);
    
    return(
    <>
        <div className={styles.card1}>
            <p>We experienced steady growth until 2019, but 2020 saw a sharp decline due to the impact of the COVID-19 pandemic. However, from 2021 onward, there was a strong recovery, with customer numbers surpassing pre-pandemic levels, showcasing the industry's resilience and growing demand for travel.</p>
        </div>
        <div className={styles.card2}>
            <h3>Customer Growth Over Time</h3>
            <svg ref = {svgRef}></svg>
        </div>
        </>
    )
}

export default Para