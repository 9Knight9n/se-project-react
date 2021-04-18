import React, {Component} from 'react';
import {Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import { Upload, Modal as antdModal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {getBase64, getItem, saveCredentials, showMemoryVariables} from "../../util";
import {toast} from "react-toastify";
import {
    API_BASE_URL,
    API_CHECK_DOC_URL,
    API_ADD_VILLA_URL,
    API_LOGIN_URL, API_SEARCH_USER_URL,
    API_UPLOAD_DOC_URL,
    API_UPLOAD_DOC_RESIDANCE_URL,
    API_UPLOAD_IMAGE_URL
} from "../../constants";
import axios from "axios";


class Documentations extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = {
        identityProvided:false,
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList1: [],
        fileList2: [],
    };

    getPhotoList=(input)=>
    {
        let array = []
        let temp = JSON.parse(sessionStorage.getItem(input))
        for (let k=0;k<temp.length;k++)
        {
        array = [...array,temp[k].response.image_id]
        }
        return array
    }

    async handleSubmit (event){
        event.preventDefault();
        this.SaveFileListToSessionStorage();
        let FormData = require('form-data');
        let data = new FormData();
        data.append('type', sessionStorage.getItem('add-villa-selected-category'));
        console.log('category : ', sessionStorage.getItem('add-villa-selected-category'));

        data.append('name', sessionStorage.getItem('add-villa-placeName'));
        console.log('place name : ', sessionStorage.getItem('add-villa-placeName'));

        data.append('description', sessionStorage.getItem('add-villa-description'));
        console.log('des : ', sessionStorage.getItem('add-villa-description'));

        data.append('area', sessionStorage.getItem('add-villa-area'));
        console.log('area : ', sessionStorage.getItem('add-villa-area'));

        data.append('price_per_night', sessionStorage.getItem('add-villa-price'));
        console.log("price : ", sessionStorage.getItem('add-villa-price'));

        data.append('capacity', JSON.parse(sessionStorage.getItem('add-villa-amentities')).normalCapacity);
        console.log('normal : ', JSON.parse(sessionStorage.getItem('add-villa-amentities')).normalCapacity);

        data.append('max_capacity', JSON.parse(sessionStorage.getItem('add-villa-amentities')).maximumCapacity);
        console.log('max : ', JSON.parse(sessionStorage.getItem('add-villa-amentities')).maximumCapacity);

        data.append('number_of_bedrooms', JSON.parse(sessionStorage.getItem('add-villa-amentities')).bedrooms);
        console.log('bedrooms : ', JSON.parse(sessionStorage.getItem('add-villa-amentities')).bedrooms);

        data.append('number_of_double_beds', JSON.parse(sessionStorage.getItem('add-villa-amentities')).doubleBeds);
        console.log('doubleBeds : ', JSON.parse(sessionStorage.getItem('add-villa-amentities')).doubleBeds);

        data.append('number_of_Single_beds', JSON.parse(sessionStorage.getItem('add-villa-amentities')).singleBeds);
        console.log('singleBeds : ', JSON.parse(sessionStorage.getItem('add-villa-amentities')).singleBeds);

        data.append('number_of_bathrooms', JSON.parse(sessionStorage.getItem('add-villa-amentities')).bathrooms);
        console.log('bathrooms : ', JSON.parse(sessionStorage.getItem('add-villa-amentities')).bathrooms);

        data.append('number_of_showers', JSON.parse(sessionStorage.getItem('add-villa-amentities')).showers);
        console.log('showers : ', JSON.parse(sessionStorage.getItem('add-villa-amentities')).showers);

        data.append('facilities_list', JSON.parse(sessionStorage.getItem('add-villa-selected-facilities-label')));
        console.log('facilities_list : ', JSON.parse(sessionStorage.getItem('add-villa-selected-facilities-label')));

        data.append('country', sessionStorage.getItem('add-villa-selected-country'));
        console.log('country : ', sessionStorage.getItem('add-villa-selected-country'));

        data.append('state', sessionStorage.getItem('add-villa-selected-state'));
        console.log('state : ', sessionStorage.getItem('add-villa-selected-state'));

        data.append('city', sessionStorage.getItem('add-villa-selected-city'));
        console.log('city : ', sessionStorage.getItem('add-villa-selected-city'));

        data.append('postal_code', sessionStorage.getItem('add-villa-postalCode'));
        console.log('postal_code : ', sessionStorage.getItem('add-villa-postalCode'));

        
        data.append('address', sessionStorage.getItem('add-villa-fullAddress'));
        console.log('address : ', sessionStorage.getItem('add-villa-fullAddress'));
        
        data.append('image_id_list', this.getPhotoList('add-villa-uploaded-photos'));
        console.log('image_id_list : ', this.getPhotoList('add-villa-uploaded-photos'));

        data.append('doc_id_list', this.getPhotoList('add-villa-uploaded-doc-residence'));
        console.log('doc_id_list : ', this.getPhotoList('add-villa-uploaded-doc-residence'));



        await axios.post(API_ADD_VILLA_URL,data,
        {
            headers: {
                'Authorization': 'Token '.concat(getItem('user-token'))
            }
        })                
        .then(res => {
            if (res.status===205)
            {
                console.log("edit was ok")
                // showMemoryVariables()
            }
            else
            {
                console.log("unknown status")
            }
        }).catch(error =>{
                console.log(error)
        })
        toast.success("Villa added")
    }

    async componentDidMount() {
        if(sessionStorage.getItem('add-villa-uploaded-doc-residence') || sessionStorage.getItem('add-villa-uploaded-doc-person'))
        {
           this.loadFileList()
        }

        let config = {
            method: 'get',
            url: API_CHECK_DOC_URL,
            headers: { 'Authorization': 'Token '.concat(getItem('user-token')),}
        };

        console.log(config)

        let response = await axios(config)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                return false
            });
        this.setState({identityProvided:response})

    }

    handlePreview = async file => {
        if (file.originFileObj ) {
            try {
                let base46 = await getBase64(file.originFileObj);
                this.openBase64(base46)
            }
            catch (TypeError) {
                return toast.info('We don\'t have access to this file on your machine,so it can not be previewed ,but it\'s uploaded to our server and you can continue on your operation without any problem. ')
            }
        }
      };

    handleChange1 = ({ fileList }) => this.setState({ fileList1:fileList });
    handleChange2 = ({ fileList }) => this.setState({ fileList2:fileList });

    openBase64 =(data)=> {
        let image = new Image();
        image.src = data;
        let w = window.open("");
        w.document.write(image.outerHTML);
    }



    SaveFileListToSessionStorage=()=>{
        sessionStorage.setItem('add-villa-uploaded-doc-residence', JSON.stringify(this.state.fileList1));
        // sessionStorage.setItem('add-villa-uploaded-doc-person', JSON.stringify(this.state.fileList2));
    }

    loadFileList=()=>{
        if(sessionStorage.getItem('add-villa-uploaded-doc-residence'))
            this.setState({fileList1:JSON.parse(sessionStorage.getItem('add-villa-uploaded-doc-residence'))})
        if(sessionStorage.getItem('add-villa-uploaded-doc-person'))
            this.setState({fileList2:JSON.parse(sessionStorage.getItem('add-villa-uploaded-doc-person'))})
    }

    getNumOfUploaded=(number)=>{
        let num = 0;
        if(number===1)
        {
            for (let k = 0;k<this.state.fileList1.length;k++)
            {
              if(this.state.fileList1[k].status==='done')
                  num++;
            }
            return num;
        }
        else
        {

            for (let k = 0;k<this.state.fileList2.length;k++)
            {
              if(this.state.fileList2[k].status==='done')
                  num++;
            }
            return num;
        }
    }

    showSubmit=()=>{
        if (this.state.identityProvided)
        {
             return (this.getNumOfUploaded(2)>0)
        }
        else
        {
            return ((this.getNumOfUploaded(1)>0) && (this.getNumOfUploaded(2)>0))
        }
    }

    render() {
        const uploadButton = (
            <div >
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <React.Fragment>
                <Modal.Header closeButton={true}>
                    <h4>Upload some documentations</h4>
                </Modal.Header>
                <Modal.Body>
                    <div className={'d-flex row pl-4 pr-4'}>
                        {this.state.identityProvided?"":
                        <div className={'col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'}>
                            <div className={'mt-2 mb-2 d-flex flex-column p-3 border-secondary rounded'} style={{border:"2px dotted"}}>
                                <label>Prove your identity by providing your id card, driving licence or ...(upload at least one photo)</label>
                                <Upload
                                    headers={{'Authorization':'Token '.concat(getItem('user-token'))}}
                                    // headers={{'Authorization':'Token 78e997f0da492bbe5ee02f1650ada77c0c8c8fcd'}}
                                    // method={'post'}
                                    // accept={'image/*'}
                                    action={API_BASE_URL+API_UPLOAD_DOC_URL}
                                    listType="picture-card"
                                    fileList={this.state.fileList1}
                                    // customRequest={(obj)=>this.rename(obj)}
                                    // onSuccess={()=>console.log(this.state.fileList)}
                                    onRemove={()=>console.log(this.state.fileList)}
                                    onPreview={this.handlePreview}
                                    onChange={this.handleChange1}
                                    >
                                    {this.state.fileList1.length >= 3 ? null : uploadButton}
                                </Upload>
                            </div>
                        </div>}
                        <div className={'col-12 col-sm-12 col-md-12 '.concat(this.state.identityProvided?'col-lg-12 col-xl-12':'col-lg-6 col-xl-6')}>
                            <div className={'mt-2 mb-2 ml-auto d-flex flex-column p-3 border-secondary rounded'} style={{border:"2px dotted"}}>
                                <label>Prove your ownership of accommodation by any means.(upload at least one photo)</label>
                                <Upload
                                    headers={{'Authorization':'Token '.concat(getItem('user-token'))}}
                                    // headers={{'Authorization':'Token 78e997f0da492bbe5ee02f1650ada77c0c8c8fcd'}}
                                    // method={'post'}
                                    // accept={'image/*'}
                                    action={API_BASE_URL+API_UPLOAD_DOC_RESIDANCE_URL}
                                    listType="picture-card"
                                    fileList={this.state.fileList2}
                                    // customRequest={(obj)=>this.rename(obj)}
                                    // onSuccess={()=>console.log(this.state.fileList)}
                                    onRemove={()=>console.log(this.state.fileList)}
                                    onPreview={this.handlePreview}
                                    onChange={this.handleChange2}
                                    >
                                    {this.state.fileList2.length >= 3 ? null : uploadButton}
                                </Upload>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Link to={'/hosting/addaccommodation/photos/'} className={'mr-auto'}>
                        <button className={'btn btn-outline-secondary'}>Back</button>
                    </Link>
                    <Link to={''} >
                        <button onClick={this.handleSubmit} disabled={!this.showSubmit()} className={'ml-auto btn btn-primary'}>Submit</button>
                    </Link>
                    <Link id={'go-to-hosting-page-from-add-villa'} to={'/hosting/'}/>
                </Modal.Footer>
            </React.Fragment>
        );
    }
}

export default Documentations;
