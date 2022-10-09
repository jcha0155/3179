var spec2 = "js/week10trial.json";
vegaEmbed('#week10', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

    result.view
}).catch(console.error);