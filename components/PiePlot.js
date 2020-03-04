import Plot from 'react-plotly.js';

export default function PiePlot(props) {

    return(
        <Plot
            data={[
            {type: 'pie',
            values: props.weight,
            labels: props.variable

            }
            ]}
            layout={ {width: 400, height: 320, title: props.title} }
       />
    )
}