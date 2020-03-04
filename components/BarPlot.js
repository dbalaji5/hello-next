import Plot from 'react-plotly.js';

export default function BarPlot(props) {

    return(
        <Plot
        data={[
          {type: 'bar',
                  x: props.X,
                  y: props.Y,
                  marker: {
                      color: '#74C67A',
                      line: {
                          width: 2.5
                            }
                   }
           }
        ]}
        layout={ {width: 320, height: 240, title: props.title} }
   />
    )
}