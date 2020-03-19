import Plot from 'react-plotly.js';

export default function CompPlot(props) {

    return(
        <Plot
        data={[
            {type: 'bar',
                    x: props.int1X,
                    y: props.int1Y,
                    name: 'Index A',
                    marker: {
                        color: '#000080',
                        line: {
                            width: 2.5
                              }
                     }
             },
             {
              type: 'bar',
              x: props.int2X,
              y: props.int2Y,
              name: 'Index B',
              marker: {
                  color: '#0F52BA',
                  opacity: 0.4,
                  line: {
                      width: 2.5
                        }
               }
             }
          ]}
          layout={ {barmode:'overlay',bargap:0.01,width: 320, height: 240, title: props.ititle} }
   />
    )
}