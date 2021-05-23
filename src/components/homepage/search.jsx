import React, {Component} from 'react';
import {Modal, Button, Select, Tooltip, Drawer, DatePicker, Space} from 'antd';
import './search.css'
import {SearchOutlined} from "@ant-design/icons";
import csc from 'country-state-city';
import {Link} from "react-router-dom";
import moment from "moment";


const { Option } = Select;
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const { size } = 20;
const now = new Date();


class Search extends Component {
    constructor(props) {
        super(props);
        this.handleCountrySelect = this.handleCountrySelect.bind(this);
        this.handleStateSelect = this.handleStateSelect.bind(this);
        this.handleCitySelect = this.handleCitySelect.bind(this);
        this.search = this.search.bind(this);
        this.loadOptions1 = this.loadOptions1.bind(this);
        this.loadOptions2 = this.loadOptions2.bind(this);
        this.loadOptions3 = this.loadOptions3.bind(this);
    }

        state = {
        showDatePicker:true,
        checkIn: new Date().toLocaleString(),
        checkOut: new Date().toLocaleString(),
        currentDate:null,
        size:null,
        searchPage:false,
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

    componentDidMount() {
        this.loadOptions1()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props)
            this.loadOptions1()
        if (prevState.states !== this.state.states || prevState.sCountryCode !== this.state.sCountryCode)
            this.loadOptions2()
        if (prevState.cities !== this.state.cities)
            this.loadOptions3()
    }


    loadOptions1()
    {
        if (this.props.country)
            this.handleCountrySelect(this.props.country)
        this.setState({searchPage:this.props.country,newLoad : true})
    }

    loadOptions2()
    {
        if (this.props.state && this.state.newLoad)
            this.handleStateSelect(this.props.state)
    }

    loadOptions3()
    {
        if (this.props.city && this.state.newLoad)
            this.handleCitySelect(this.props.city)
        this.setState({newLoad : false})
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

    showDrawer = () => {
        this.setState({
            showDatePicker: true,
        });
    };

    onClose = () => {
        this.setState({
            showDatePicker: false,
        });
    };

    onDateChange = (range) =>{
        if (range !== null){
            let startDate = range[0].format();
            let endDate = range[1].format();
            let a = moment(startDate);
            let b = moment(endDate);
            b.diff(a, 'days')  // =1
            console.log('duration  ',b.diff(a, 'days'));
            // let Difference_In_Time = endDate.getTime() - startDate.getTime();
            // let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
            console.log('start date  ',startDate);
            console.log("end date  ",endDate);
        }
    }

    disabledDate = current => {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }

    search(){
        // if (this.state.sCountry)
        if (this.props.search)
            this.props.search(this.state.sCountry, this.state.sState, this.state.sCity)
        else
            document.getElementById('search-button').click()
    }

    render() {
        return (
            <div className={'mt-auto mb-auto ml-auto mr-auto'} style={{width:"fit-content"}}>
                <div className={'pr-5 pl-4 pt-4 pb-4'} style={{backgroundColor:'#ffffff70',borderRadius:'1rem',overflow:"hidden",position:"relative"}}>
                    <h4  style={{fontFamily:'cursive',width:'fit-content'}}>
                        {this.state.searchPage?'Showing search results for:':'Tell us where:'}
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
                      <Button onClick={this.showDrawer} style={this.state.sCountry?null:{cursor:'not-allowed'}} type="primary" shape="circle"><SearchOutlined style={{verticalAlign: '0'}}/></Button>
                    </Tooltip>
                    </div>
                     </div>
                    <Drawer
                        // title="Basic Drawer"
                        placement="right"
                        width={"90%"}
                        closable={true}
                        onClose={this.onClose}
                        visible={this.state.showDatePicker}
                        getContainer={false}
                        style={{ position: 'absolute',overflow:"hidden" }}
                    >
                        <h4  style={{fontFamily:'cursive',width:'fit-content'}}>
                            Almost there!
                        </h4>
                        <div >
                            <Space className="w-100" direction="vertical" size={12} bordered={false}>
                                <RangePicker disabledDate={current => this.disabledDate(current)} format={dateFormat} onChange={this.onDateChange} size={20} />
                            </Space>
                        </div>
                    </Drawer>
                </div>
                <Link id={'search-button'} to={'/search/?'+(this.state.sCountry?('country='+this.state.sCountry):'')+
                (this.state.sState?('&state='+this.state.sState):'')+
                (this.state.sCity?('&city='+this.state.sCity):'')}/>
            </div>
        );
    }
}


export default Search;
