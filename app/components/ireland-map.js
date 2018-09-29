import Component from '@ember/component';
import d3 from 'd3';
import topojson from "topojson-client";

export default Component.extend({

    didInsertElement() {
        this._super(...arguments);
        var width = 960,
            height = 960;

        var projection = d3.geo.albers()
            .center([0, 52.14])
            .rotate([7.69, 0])
            .parallels([50, 60])
            .scale(1200 * 5)
            .translate([width / 2, height / 2]);

        var path = d3.geo.path()
            .projection(projection);

        var svg = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height);

        d3.json(`http://localhost/d3map/ie.json`, (error, ie) => {
            svg.append("path")
                .datum(topojson.feature(ie, ie.objects.counties))
                .attr("d", path);
            svg.selectAll(".counties")
                .data(topojson.feature(ie, ie.objects.counties).features)
                .enter().append("path")
                .attr("class", function (d) {
                    //console.log(d);
                    //console.log("county" + d.id)
                    return "county " + d.id;
                })
                .attr("d", path)
                .on('mousedown.log', (d) => {
                    this.send("goToCounty", d.id);
                });
        });
    },

    actions: {
        goToCounty(county) {
            alert(`You ${county} bastid`);
        }
    }

});
