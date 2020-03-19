import Plot from 'react-plotly.js';

export default function PiePlot(props) {

    return(
        <Plot
            data={[
            {type: 'pie',
            values: props.weight,
            labels: props.variable,
            textinfo: "label+percent",
            textposition: "inside",
            automargin: true
            }
            ]}
            layout={ {width: 350, height: 320,margin: {"t": 0, "b": 0, "l": 0, "r": 0},
            showlegend: false, title: props.title} }
       />
    )
}