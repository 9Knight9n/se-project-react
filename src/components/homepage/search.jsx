import React, {Component} from 'react';
import { Select } from 'antd';
import './search.css'


const { Option } = Select;
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

const SearchSelect = () => {
  const [cities, setCities] = React.useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = React.useState(cityData[provinceData[0]][0]);

  const handleProvinceChange = value => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = value => {
    setSecondCity(value);
  };

  return (
    <div className={'ml-5'}>
        <h4 className={'ml-2'} style={{fontFamily:'cursive'}}>
            Tell us where:
        </h4>
      <Select size={'large'} autoFocus className={'placeholder-visible'} showSearch bordered={false} placeholder={'Country'}  style={{ width: 120 }} onChange={handleProvinceChange}>
        {provinceData.map(province => (
          <Option key={province}>{province}</Option>
        ))}
      </Select>
      <Select size={'large'} disabled={true} className={'placeholder-visible'} showSearch bordered={false} style={{ width: 120 }} placeholder={'State'}  onChange={onSecondCityChange}>
        {cities.map(city => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
        <Select size={'large'} disabled={true} className={'placeholder-visible'} showSearch bordered={false} style={{ width: 120 }} placeholder={'City'}  onChange={onSecondCityChange}>
        {cities.map(city => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
    </div>
  );
};

class Search extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={'mt-auto mb-auto ml-auto mr-auto'} style={{width:"fit-content"}}>
                <SearchSelect/>
            </div>
        );
    }
}


export default Search;
