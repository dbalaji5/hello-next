import React from 'react';
import { Map, TileLayer,Popup,LayersControl,GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import diss from '../data/Dissemination.json';
import '@shopify/polaris/styles.css';
import {Card,Layout,Spinner} from '@shopify/polaris';
import axios from 'axios';
import dynamic from 'next/dynamic';
import './Maps.css';
const Barplot = dynamic(import('./BarPlot'),{
  ssr:false
})



// L.Icon.Default.imagePath = '.';
// // OR
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });


let numMapClicks = 0
let geoMapClicks=0
let geoMapClicks2=0

  class Maps extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          inBrowser:false,
          weight: 0.5,
          opacity: 1,
          color: '#ffcc99',
          color2: '#ff66b2',
          gpopup: false,
          ipopup:false,
          position:[],
          iposition:[],
          gtitle:'',
          ititle:'',
          key:numMapClicks++,
          gkey:geoMapClicks++,
          ikey:geoMapClicks2,
          gLoading:false,
          iLoading:false,
          genres:{},
          intres:{},
          gendata:[],
          intdata:[],
          genX:[],
          genY:[],
          intX:[],
          intY:[],
          ajaxload:false,
          cmpload:false,
          iweight:{},
          ichecked:true,
          echecked:false
        };
      }
      componentDidMount(){
         this.setState({inBrowser:true});
      }
      componentDidUpdate(oldProps,oldState){
    
        
        if((this.props.genres !== oldState.genres && this.props.gendata!==oldState.gendata) || (this.props.intres !== oldState.intres && this.props.intdata!==oldState.intdata)  || (this.props.ajaxload!== oldState.ajaxload) || (this.props.iweight!== oldState.iweight)){
         
        
            this.setState({
                genres:this.props.genres,
                gendata:this.props.gendata,
                gkey:geoMapClicks,
                ikey:geoMapClicks2,
                intres:this.props.intres,
                intdata:this.props.intdata,
                weight:1,
                ajaxload:this.props.ajaxload,
                iweight:this.props.iweight,
                ichecked:this.props.ichecked,
                echecked:this.props.echecked
            });
          
        }
        // if(this.props.intres !== oldState.intres && this.props.intdata!==oldState.intdata){
        //    console.log(this.props.intres);
        //    this.setState({
        //      intres:this.props.intres,
        //      intdata:this.props.intdata
        //    })
        // }
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
      if(this.state.intdata.length===0){
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
        this.setState({
           cmpload:false
        })
        axios.get('http://vav.research.cs.dal.ca/municipalitybackend/rest/explainer/',{params:data})
        .then(result => {

          
          var rX=[]
          var rY=[]
          var rdata=result.data['exp'];
          for(var i=0;i<rdata.length;i++){
              rY.push(rdata[i][1])
              rX.push(rdata[i][0])
          }
     
          this.setState(

            {
               intX:rX,
               //support@refer.telus.com dexter hugo 
               intY:rY,
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
   

     onEachFeature = (feature,layer) => {


      var checkDauId=feature.properties.DAUID;
      layer.on('click',(e)=>{
          
          this.setState({
             gpopup:true,
             position:e.latlng,
             key:numMapClicks++,
             
          });
          if(this.state.gendata.length===0){
              this.setState({
                  gLoading:false
              })
          }
          else{
              this.setState({
                  gLoading:true
              })
          }
          if(this.state.gLoading){
            for(var i=0;i<this.state.gendata.length;i++){

                if(this.state.gendata[i].DAUID===checkDauId){
                    const title='Index:'+this.state.gendata[i].Index;
                    this.setState(

                      {
                         genX:this.state.gendata[i].X,
                         genY:this.state.gendata[i].Y,
                         gtitle:title
                      }
                    )
                    
                    break;
                }
            }
          }
      });
    if(this.state.gendata.length===0){
      this.setState({
          gLoading:false
      })
  }
  else{
      this.setState({
          gLoading:true
      })
  }
  // if(this.state.gLoading){
  //     layer.setStyle({fillColor : this.getColor(this.state.genres[checkDauId]) ,color:this.getColor(this.state.genres[checkDauId]),opacity:1,fillOpacity:0.3,weight:1})
  // }
  }
    render(){

       if(!this.state.inBrowser){
          return null;
       }

        

        var style = (feature) => {
            var checkDauId=feature.properties.DAUID;
            if(this.state.gendata.length>0){
                return ({
                    fillColor: this.getColor(this.state.genres[checkDauId]),
                    color:(this.state.iweight[checkDauId]==1)?this.getColor(this.state.genres[checkDauId]):'#021092',
                    opacity:1,
                    fillOpacity:0.3,
                    weight:this.state.iweight[checkDauId]
                });
            }
            else{
              return ({
                 opacity:0,
                 weight:0,
                 fillOpacity:0
              });
            }
          //   else{
          //   return ({
                
          //       weight: this.state.weight,
          //       opacity: this.state.opacity
          //     }
          //   );
          // }
    
        }
       
      var style2 = (feature) => {
        var checkDauId=feature.properties.DAUID;
        if(this.state.intdata.length>0){
            return ({
                fillColor: this.getColor(this.state.intres[checkDauId]),
                color:(this.state.iweight[checkDauId]==1)?this.getColor(this.state.intres[checkDauId]):'#021092',
                opacity:1,
                fillOpacity:0.3,
                weight:this.state.iweight[checkDauId]
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
      // const onEachFeature2 = (feature,layer) => {

      //     console.log(feature.properties["DAUID"]);
      //     layer.setStyle({fillColor : this.state.color2 ,color:this.state.color2,opacity:this.state.opacity,fillOpacity:0.4,weight:0.4})
      //     layer.on('click',(e)=>{
            
      //       this.setState({
      //          ipopup:true,
      //          iposition:e.latlng,
      //          key:numMapClicks++,
      //          ititle:feature.properties.DAUID
      //       });
      //   })
      // }
        return (
          
          <Layout.Section oneHalf>
          <Card title="Visualization">
          {(this.state.ajaxload==false)?(
            <Map center={[44.755113, -63.320488]} zoom={9} style={{ height: "60vh" }} >
            
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                // attribution= '&copy; 2020 &middot; <a href="https://maps.omniscale.com/">Omniscale</a> &middot; Map data: <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                // url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                // url="http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png"
                // url="https://maps.omniscale.net/v2/{id}/style.grayscale/{z}/{x}/{y}.png"
              />
             
              <LayersControl position="topright">
              
              <LayersControl.BaseLayer name="Index" checked={this.state.ichecked}>
              <GeoJSON 
                // key={this.state.gkey}
                ref="geojson2"
                data={diss}
                style={style}
                onEachFeature={(feature,layer)=>this.onEachFeature(feature,layer)}
              />
            
               {this.state.gpopup && <Popup key={this.state.key} position={this.state.position} onClose={()=>{this.setState({popup:false})}}>
               <div style={{width:320+'px',height:240+'px'}}>
               {(this.state.gLoading)?(<Barplot X={this.state.genX} Y={this.state.genY} title={this.state.gtitle}/>):(<Spinner accessibilityLabel="Spinner example" size="large" color="teal" />)}
                  </div>
                </Popup>
                
                }
            
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name="Interpret" checked={this.state.echecked}>
              <GeoJSON 
                key={this.state.ikey}
                ref="geojson"
                data={diss}
                style={style2}
                onEachFeature={(feature,layer)=>this.onEachFeature2(feature,layer)}
              />
              {this.state.ipopup && <Popup key={this.state.key} position={this.state.iposition} onClose={()=>{this.setState({ipopup:false})}}>
              <div style={{width:320+'px',height:240+'px'}}>
              {(this.state.iLoading && this.state.cmpload)?(<Barplot X={this.state.intX} Y={this.state.intY} title={this.state.ititle}/>):(<Spinner accessibilityLabel="Spinner example" size="large" color="teal" />)}
                  </div>
                </Popup>}
            
              </LayersControl.BaseLayer>
              </LayersControl>
              

            </Map>):
           <Spinner accessibilityLabel="Spinner example" size="large" color="teal" />}

      </Card>
      {/* <Card title="demo">
        <div id="te">

                 {(this.state.gLoading)?(<BarChart data={this.state.gendata}/>):<p>Waiting for Contents</p>}
        </div>
      </Card> */}
    </Layout.Section>
  );
    
  };
}

export default Maps;
