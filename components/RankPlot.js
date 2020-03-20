import Plot from 'react-plotly.js';

export default function RankPlot(props) {

    return(
    <Plot
        data={[
            {type: 'bar',
                    y: props.chartY,
                    marker: {
                        color: '#C8A2C8',
                        line: {
                            width: 2.5
                            }
                    }
            }
        ]}
        layout={ {width: '30vh', height: '50vh', title: props.ititle}
            }
            // onHover={(data)=>props.onHover(data)}
            onClick={(data)=>props.onClick(data)}
        />
    )
}