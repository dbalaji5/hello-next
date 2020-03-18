import React from 'react';
import '@shopify/polaris/styles.css';
import {AppProvider,Card,Layout,Button,Stack,Scrollable, TextStyle, Page} from '@shopify/polaris';
import App from './App.js'
import Loader from './Loader.js'
import Interpreter from './Interpreter.js';
import {ArrowUpMinor} from '@shopify/polaris-icons';
import axios from 'axios'
import Setting from './Setting.js'
import MethodSetting from './MethodSetting.js';
import Ranger from './Ranger.js'
import dynamic from 'next/dynamic'
// import Maps from './Maps'
const Rankplot = dynamic(import('./RankPlot'),{
  ssr:false
})
const Maps = dynamic(import('./Maps'),{
  ssr:false
})
class DashBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             idisplay: [],
             idbdata: [],
             icategory: [],
             display: [],
             dbdata: [],
             source: [],
             category: [],
             src:[],
             range:[],
             gendic:[],
             gresult:{},
             iresult:{},
             gdata:[],
             idata:[],
             stat:"generate",
             chartX:[],
             chartY:[],
             ajaxLoading:false,
             ajaxLoading2:true,
             indexWeight:{},
             method:'lc',
             datefrom:2005,
             dateto:2017
        }
    }

    componentDidMount(){

        
    }

    // handleClick(a,b){
    //    console.log(a,b);
    // }
    
    storeDisplay = (disval,dbval,cat) => {

        if(this.state.stat==="generate"){
    
            const dbdata2=this.state.dbdata;
            const flag=dbdata2.some(val => val === dbval);
            //console.log(flag);

            
            if(!flag){
              const dbdata=this.state.dbdata;
              dbdata.push(dbval);
              const source=this.state.source;
              source.push(ArrowUpMinor)
              const display=this.state.display;
              display.push(disval);
              const category2=this.state.category;
              category2.push(cat);
              const src=this.state.src;
              src.push(1);
              const range=this.state.range;
              range.push(0);
              this.setState({
                  display: display,
                  dbdata: dbdata,
                  source:source,
                  src:src,
                  category:category2,
                  range:range
              });
          }
      }
      else{
          
          const idbdata=this.state.idbdata;
          const flag2=idbdata.some(val => val === dbval);
          if(!flag2){
              const idbdata=this.state.idbdata;
              idbdata.push(dbval);
              const idisplay=this.state.idisplay;
              idisplay.push(disval);
              const icategory=this.state.icategory;
              icategory.push(cat);
              this.setState({
                 idbdata:idbdata,
                 idisplay:idisplay,
                 icategory:icategory
              });
          }
          

      }
      
     
    };
    clearArray = () =>{
       
       const display=[];
       const dbdata=[];
       const source=[];
       const category=[];
       const src=[];
       const range=[];
       const gresult={};
       const gdata=[];
       this.setState({display:display,dbdata:dbdata,source:source,category:category,src:src,range:range,gresult:gresult,gdata:gdata});
    };

    clearArray2 = () => {

        const idbdata=[];
        const idisplay=[];
        const icategory=[];
        this.setState({idbdata:idbdata,idisplay:idisplay,icategory:icategory})
    }

    generateArray = () => {
      
   
      var res={};
      for(var i=0;i<this.state.dbdata.length;i++){
          res[this.state.dbdata[i]]=(this.state.range[i])*(this.state.src[i]);
      }
      
      // console.log(res);
      var cat="index";
      if(this.state.category[0]=="crime"){
        res['d1']=this.state.datefrom+'/01/01'
        res['d2']=this.state.dateto+'/12/31'
      }
      if(this.state.category[0]==="incident"){
          cat="incident"
      }
      if(this.state.category[0]==="demographics"){
          cat="dindex"
      }
      this.setState({
          ajaxLoading:true,
          ajaxLoading2:true
      })
      if(this.state.method==='lc'){
        axios.get('http://vav.research.cs.dal.ca/municipalitybackend/rest/'+cat+'/',{params:res})
        .then(result => {
          //console.log(result.data['resu2']);
          var res=result.data['sums'].sort((a,b) => {
            return a.Index-b.Index
          })

          var indexWeight={}
          res.map((r)=>{indexWeight[r.DAUID]=1})
          var sx=res.map((r)=>r.DAUID)
          console.log(indexWeight,sx);

          this.setState(

            {
               ajaxLoading:false,
               ajaxLoading2:false,
               gresult:result.data['resu2'],
               gdata:result.data['sums'],
               indexWeight:indexWeight,
               chartX:res.map((a)=>a.DAUID),
               chartY:res.map((b)=>b.Index)
            }
            
          )
        
        })
      }
      else{
        console.log("in crimepca method")

        axios.get('http://vav.research.cs.dal.ca/municipalitybackend/rest/crimepca/',{params:res})
        .then(result => {
          //console.log(result.data['resu2']);
          var res=result.data['sums'].sort((a,b) => {
            return a.Index-b.Index
          })

          var indexWeight={}
          res.map((r)=>{indexWeight[r.DAUID]=1})
          var sx=res.map((r)=>r.DAUID)
          console.log(indexWeight,sx);

          this.setState(

            {
               ajaxLoading:false,
               ajaxLoading2:false,
               gresult:result.data['resu2'],
               gdata:result.data['sums'],
               indexWeight:indexWeight,
               chartX:res.map((a)=>a.DAUID),
               chartY:res.map((b)=>b.Index)
            }
            
          )
        
        })


      }

    };

    interpretArray = () => {
      var result={};
      for(var j=0;j<this.state.idbdata.length;j++){

          result[this.state.idbdata[j]]=1;

      }
      var cat1="interpreter3";
      if(this.state.icategory[0]==="incident"){
          cat1="interpreter2"
      }
      if(this.state.icategory[0]==="demographics"){
          cat1="interpreter1"
      }
      this.setState({
        ajaxLoading:true
      })
      axios.get('http://vav.research.cs.dal.ca/municipalitybackend/rest/'+cat1+'/',{params:result})
        .then(result => {

          var res=result.data['sums'].sort((a,b) => {
            return a.Index-b.Index
          })
         
          this.setState({

              ajaxLoading:false,
              iresult:result.data['pred'],
              idata:result.data['sums'],
              chartX:res.map((a)=>a.DAUID),
              chartY:res.map((b)=>b.Index)
          });

        })

    };

    mutateSource =(src) => {

      this.setState({
        source:src
      });
    }
    mutateRange =(range) => {

       this.setState({
          range:range
       });
    }

    setStat = (value) => {
      const stat=value;
     
       this.setState({
          stat:stat
       });
    }

    methodStat = (value) => {

        console.log(value,this.state.stat);
        if(value==="PCA"){
            this.setState({
              method:'pca'
            })
        }
        else{
          this.setState({
              method:'lc'
          })
        }
    }
    handleHover = (data) => {
       console.log(data.points[0].value);
       console.log(data.points[0].x);
       console.log(this.state.chartX[data.points[0].x]);
       var cdauid=this.state.chartX[data.points[0].x];
       var indexWeight=this.state.indexWeight
       for (var key in indexWeight){
           indexWeight[key]=1
           if(key==cdauid){
              indexWeight[key]=6
           }
       }
       this.setState({
          indexWeight:indexWeight
       })
       console.log(this.state.indexWeight[cdauid]);
    }
    handleDateChange= (value) => {

        this.setState({
           datefrom:value
        })
       
    }
    handleDate2= (value) => {
      this.setState({
          dateto:value
      })
      console.log(value);
    }

  render(){
   
   return(
  <AppProvider>
  <Page fullWidth={true} separator>
  <Layout>
  <Layout.Section secondary>
    
    <Card title="Variables">
      <Card.Section>
        <TextStyle variation="subdued">Choose Indicators</TextStyle>
        
        
        <Setting onClick={(value)=>this.setStat(value)}/>
        <MethodSetting onClick={(methodvalue)=>this.methodStat(methodvalue)}/>
        <TextStyle variation="subdued">Date From</TextStyle>
        <Ranger min={2005} max={2017} onChange={(value)=>this.handleDateChange(value)}/>
        <TextStyle variation="subdued">Date To</TextStyle>
        <Ranger min={2005} max={2017} onChange={(value)=>this.handleDate2(value)} />
      </Card.Section>
      <Card.Section title="Items">
      <Scrollable shadow style={{height: '40vh'}}>
          <App onValueChange={(disval,dbval,cat)=>this.storeDisplay(disval,dbval,cat)}/>
       </Scrollable>
      </Card.Section>
    </Card>
  </Layout.Section>
  <Layout.Section primary>
  <Maps genres={this.state.gresult} gendata={this.state.gdata} ajaxload={this.state.ajaxLoading} intres={this.state.iresult} intdata={this.state.idata} iweight={this.state.indexWeight}/>

  </Layout.Section>
  <Layout.Section>
    <Stack>
    <Card title="Composite Indicators">
      <Card.Section>
        <Stack spacing="loose">
        <Button primary onClick={this.generateArray}>Generate</Button>
        <Button primary onClick={this.clearArray}>Clear</Button>
        </Stack>
      </Card.Section>
      <Card.Section>
       <Scrollable shadow style={{height: '20vh',width:'45vh'}}>
         <Loader data={this.state.display} src={this.state.source} cat={this.state.category} source={this.state.src} range={this.state.range} onSourceChange={(src)=>this.mutateSource(src)} onRangeChange={(range)=> this.mutateRange(range)}/>
       </Scrollable>
      </Card.Section>
    </Card>
    <Card title="Rank Chart">
      <Scrollable shadow style={{height: '32vh',width:'59vh'}}>
      {(!this.state.ajaxLoading2)?(<Rankplot chartY={this.state.chartY} ititle={this.state.ititle} onHover={(data)=>this.handleHover(data)}/>):(<h1>Waiting for the selection</h1>)}
      </Scrollable>
      </Card>
    <Card title="Explainers">
      <Card.Section>
        <Stack spacing="loose">
        <Button primary onClick={this.interpretArray}>Interpret</Button>
        <Button primary onClick={this.clearArray2}>clear</Button>
        </Stack>
      </Card.Section>
      <Card.Section>
      <Scrollable shadow style={{height: '20vh',width:'45vh'}}>
          <Interpreter data={this.state.idisplay} cat={this.state.icategory} />
       </Scrollable>
      </Card.Section>
    </Card>
      
  </Stack>
  </Layout.Section>
  {/* <Maps genres={this.state.gresult} gendata={this.state.gdata} ajaxload={this.state.ajaxLoading} intres={this.state.iresult} intdata={this.state.idata}/> */}
     
</Layout>
</Page>
</AppProvider>
   );
  }
}

export default DashBoard;