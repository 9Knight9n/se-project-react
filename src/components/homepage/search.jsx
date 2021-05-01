import React, {Component} from 'react';
import {Button, Select, Tooltip} from 'antd';
import './search.css'
import {SearchOutlined} from "@ant-design/icons";
import csc from 'country-state-city';


const { Option } = Select;


class Search extends Component {
    constructor(props) {
        super(props);
        this.handleCountrySelect = this.handleCountrySelect.bind(this);
        this.handleStateSelect = this.handleStateSelect.bind(this);
        this.handleCitySelect = this.handleCitySelect.bind(this);
    }

        state = {
        countries:csc.getAllCountries(),
        sCountry:null,
        sCountryCode:null,
        states:[],
        sState:null,
        sStateCode:null,
        cities:[],
        sCity:null,
        sCityCode:null,
    }


    handleCountrySelect(value){
        let sCountryCode = null
        for(let k=0;k<this.state.countries.length;k++)
        {
            if (this.state.countries[k].name===value)
            {
                sCountryCode = this.state.countries[k].isoCode
                break;
            }
        }
        let states = csc.getStatesOfCountry(sCountryCode)
        if (states.length===0)
        {
            this.setState({sCountry:value,sCountryCode:sCountryCode,sStatesCode:null,sCity:null,sCityCode:null,states:[],sState:null,cities:csc.getCitiesOfCountry(sCountryCode)})
        }
    else
        this.setState({sCountry:value,sCountryCode:sCountryCode,sState:null,sStateCode:null,sCity:null,sCityCode:null,cities:[],states:states});
    }


    handleStateSelect(value){
        let sStateCode = null
        for(let k=0;k<this.state.states.length;k++)
        {
            if (this.state.states[k].name===value)
            {
                sStateCode = this.state.states[k].isoCode
                break;
            }
        }
        this.setState({sState:value,sStateCode:sStateCode,sCity:null,sCityCode:null,cities:csc.getCitiesOfState(this.state.sCountryCode,sStateCode)});
    }

    handleCitySelect(value){
        let sCityCode = null
        for(let k=0;k<this.state.cities.length;k++)
        {
            if (this.state.cities[k].name===value)
            {
                sCityCode = this.state.cities[k].isoCode
                break;
            }
        }
        this.setState({sCity:value,sCityCode:sCityCode});

    }

    render() {
        return (
            <div className={'mt-auto mb-auto ml-auto mr-auto'} style={{width:"fit-content"}}>
                <div className={'pr-5 pl-4 pt-4 pb-4'} style={{backgroundColor:'#ffffff70',borderRadius:'1rem'}}>
                    <h4  style={{fontFamily:'cursive',width:'fit-content'}}>
                        Tell us where:
                    </h4>
                     <div className={'row'} >
                      <Select size={'large'} value={this.state.sCountry} autoFocus className={'placeholder-visible mr-auto ml-auto'} showSearch bordered={false}
                          placeholder={'Country'}  style={{ width: 200 }} notFoundContent={null}
                            onChange={this.handleCountrySelect}>
                    {this.state.countries.map(country => (
                      <Option key={country.name}>{country.name}</Option>
                    ))}
                  </Select>
                  <Select size={'large'} value={this.state.sState}
                          disabled={this.state.states.length===0} notFoundContent={null}
                          className={'placeholder-visible mr-auto ml-auto'} showSearch bordered={false} style={{ width: 200 }}
                          placeholder={'State'}  onChange={this.handleStateSelect}>
                    {this.state.states.map(state => (
                      <Option key={state.name} >{state.name}</Option>
                    ))}
                  </Select>
                    <div className={'d-flex flex-row mr-auto ml-auto'} style={{ width: 232,left:'16px',position:'relative'}} >
                        <Select size={'large'} disabled={this.state.cities.length===0} value={this.state.sCity}
                                notFoundContent={null} className={'placeholder-visible'}
                            showSearch bordered={false} style={{ width: 200 }} placeholder={'City'}
                            onChange={this.handleCitySelect}>
                    {this.state.cities.map(city => (
                      <Option key={city.name}>{city.name}</Option>
                    ))}
                  </Select>
                    <Tooltip title="search">
                      <Button style={this.state.sCountry?null:{cursor:'not-allowed'}} type="primary" shape="circle"><SearchOutlined style={{verticalAlign: '0'}}/></Button>
                    </Tooltip>
                    </div>
                     </div>
                </div>
            </div>
        );
    }
}


export default Search;
