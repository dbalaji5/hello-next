import React from 'react';
import { Map, TileLayer,Popup,LayersControl,GeoJSON } from "react-leaflet";
import {Spinner} from '@shopify/polaris';
import "leaflet/dist/leaflet.css";
import diss from '../data/Dissemination.json';
import '@shopify/polaris/styles.css';
import axios from "axios";
import './Maps.css';
// import dynamic from 'next/dynamic'

// const Compplot = dynamic(import('./CompPlot'),{
//     ssr:false
//   })
import Compplot from './CompPlot';
// L.Icon.Default.imagePath = '.';
// // OR
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

let numMapClicks=0

class MapsComp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:{},
            idata1:[],
            idata2:[],
            int1X:[],
            int2X:[],
            int1Y:[],
            int2Y:[],
            indname1:'',
            indname2:'',
            loading:false,
            ipopup:false,
            iloading:false,
            key:numMapClicks++,
            iposition:[],
            ititle:'',
            inBrowser:false
        }
    }

    componentDidMount(){
        this.setState({inBrowser:true});
    }

    componentDidUpdate(oldProps,oldState){
    
        
        if(this.props.data !== oldState.data || this.props.loading !== oldState.loading || this.props.idata1 !== oldState.idata1 || this.props.idata2 !== oldState.idata2){
          console.log(this.props.data);
        
            this.setState({
                data:this.props.data,
                idata1:this.props.idata1,
                idata2:this.props.idata2,
                indname1:this.props.indname1,
                indname2:this.props.indname2,
                loading:this.props.loading
            });
          
        }
       
    }
    getColor = (val) => {


        return val>=-1 && val < -0.8? '#a50026':
                val>=-0.8 && val < -0.6 ? '#d73027':
                val>=-0.6 && val < -0.4 ? '#f46d43':
                val>=-0.4 && val < -0.2 ? '#fdae61':
                val>=-0.2 && val < 0 ? '#fee08b':
                val>=0.01   &&  val <0.2 ? '#d9ef8b':
                val>=0.2 && val < 0.4 ? '#a6d96a':
                val>=0.4 && val < 0.6 ? '#66bd63':
                val>=0.6 && val < 0.8 ? '#1a9850':
                val >= 0.8 && val <= 1 ? '#006837':
                val>=0 && val <0.01 ? '#ffffff':
                                    '#000000';
  
      };

      onEachFeature2 = (feature,layer) => {
        //layer.setStyle({fillColor : this.state.color2 ,color:this.state.color2,opacity:this.state.opacity,fillOpacity:0.4,weight:0.4})
        if(this.state.idata1.length===0){
          this.setState({
              iLoading:false
          })
          }
          else{
              this.setState({
                  iLoading:true
              })
          }
        layer.on('click',(e)=>{
         
          if(this.state.iLoading){
                var data={}
                data['DAUID']=feature.properties.DAUID;
                data['indexname1']=this.state.indname1;
                data['indexname2']=this.state.indname2;
                this.setState({
                    cmpload:false,
                })
                axios.get('http://vav.research.cs.dal.ca/municipalitybackend/rest/compareprop/',{params:data})
                .then(result => {
        
                    
                    var rX=result.data['indices']['indx1'];
                    var rY=result.data['indices']['indy1'];
                
                    var iX=result.data['indices']['indx2'];
                    var iY=result.data['indices']['indy2'];
                
            
                    this.setState(
        
                    {
                        int1X:rX, 
                        int1Y:rY,
                        int2X:iX,
                        int2Y:iY,
                        cmpload:true
                    }
                    )
                });
            }
            this.setState({
                ipopup:true,
                iposition:e.latlng,
                key:numMapClicks++,
                ititle:feature.properties.DAUID
            });
        });
    }

      

    render(){

        if(!this.state.inBrowser){
            return null;
        }

        var style = (feature) => {
            var checkDauId=feature.properties.DAUID;
            if(Object.keys(this.state.data).length>0){
                if(checkDauId in this.state.data){
                    return ({
                        fillColor: this.getColor(this.state.data[checkDauId]),
                        color:this.getColor(this.state.data[checkDauId]),
                        opacity:1,
                        fillOpacity:0.3,
                        weight:0.5
                    });
                }
                return ({
                    opacity:0,
                    weight:0,
                    fillOpacity:0
                 });
            }
            else{
                return ({
                   opacity:0,
                   weight:0,
                   fillOpacity:0
                });
              }
        }
      
        return (
        
          <React.Fragment>
          {(this.state.loading===false)?(
          <Map center={[44.755113, -63.320488]} zoom={9} style={{ height: "90vh" }}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            // url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            />
         
          <LayersControl position="topright">
          
          <LayersControl.BaseLayer name="Indcmp" checked="true">
          <GeoJSON 
                // key={this.state.gkey}
                ref="geojson"
                data={diss}
                style={style}
                onEachFeature={(feature,layer)=>this.onEachFeature2(feature,layer)}
              />
              {this.state.ipopup && <Popup key={this.state.key} position={this.state.iposition} onClose={()=>{this.setState({ipopup:false})}}>
              <div style={{width:320+'px',height:240+'px'}}>
              {(this.state.iLoading && this.state.cmpload)?(<Compplot int1X={this.state.int1X} int1Y={this.state.int1Y} int2X={this.state.int2X} int2Y={this.state.int2Y} ititle={this.state.ititle}/>):(<Spinner accessibilityLabel="Spinner example" size="large" color="teal" />)}
              </div>
              </Popup>}
          </LayersControl.BaseLayer>
            
          </LayersControl>
          </Map>
          ):(<Spinner accessibilityLabel="Spinner example" size="large" color="teal" />)}
          </React.Fragment>
        );
    }

}

export default MapsComp;