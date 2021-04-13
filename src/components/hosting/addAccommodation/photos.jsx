import React, {Component} from 'react';
import {Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import { Upload, Modal as antdModal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {getBase64, getItem} from "../../util";
import {API_BASE_URL,API_UPLOAD_IMAGE_URL} from '../../constants';


class Photos extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [
        ],
    };


  handlePreview = async file => {
    if (file.originFileObj ) {
      let base46 = await getBase64(file.originFileObj);
      this.openBase64(base46)
    }
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  openBase64 =(data)=> {
        var image = new Image();
        image.src = data;

        var w = window.open("");
        w.document.write(image.outerHTML);
    }
    


    SaveFileListToSessionStorage=()=>{
      sessionStorage.setItem('add-villa-uploaded-photos', JSON.stringify(this.state.fileList));
    }

    loadFileList=()=>{
      this.setState({fileList:JSON.parse(sessionStorage.getItem('add-villa-uploaded-photos'))})
    }


    render() {
        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
        const uploadButton = (
            <div >
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <React.Fragment>
                <Modal.Header closeButton={true}>
                    Upload at least 3 photos of accommodation
                </Modal.Header>
                <Modal.Body>
                    <Upload
                        headers={{'Authorization':'Token '.concat(getItem('user-token'))}}
                        headers={{'Authorization':'Token 78e997f0da492bbe5ee02f1650ada77c0c8c8fcd'}}
                        // method={'post'}
                        accept={'image/*'}
                        action={'http://127.0.0.1:8000/api/villa/user/images/'}
                        listType="picture-card"
                        fileList={fileList}
                        // customRequest={(obj)=>this.rename(obj)}
                        // onSuccess={()=>console.log(this.state.fileList)}
                        onRemove={()=>console.log(this.state.fileList)}
                        onPreview={this.handlePreview}
                        onChange={this.handleChange}
                        >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    {/*<div className={'row m-2'} id={'categories'}>*/}
                    {/*    {this.state.categories.map((category=>*/}
                    {/*    <div key={category.id} className={'col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-4 '}*/}
                    {/*            onClick={()=>this.setState({selectedItem:category.id})} >*/}
                    {/*        <div className={'fade-in-overlay '}>*/}
                    {/*            <img className={'w-100 image'} id={'category-'.concat(category.id)}*/}
                    {/*                src={category.src}/>*/}
                    {/*            <div className={"overlay".concat(category.id===this.state.selectedItem?' selected border-success':'')}>*/}
                    {/*                {category.id===this.state.selectedItem?*/}
                    {/*                <React.Fragment>*/}
                    {/*                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"*/}
                    {/*                         fill="green" className=" mt-2 ml-2 bi bi-check-circle-fill"*/}
                    {/*                         viewBox="0 0 16 16">*/}
                    {/*                        <path*/}
                    {/*                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>*/}
                    {/*                    </svg>*/}
                    {/*                    <div className="text">*/}
                    {/*                        {category.label}*/}
                    {/*                    </div>*/}
                    {/*                </React.Fragment>:""}*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <label className={'text-center w-100'}>*/}
                    {/*            {category.label}*/}
                    {/*        </label>*/}
                    {/*    </div>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </Modal.Body>
                <Modal.Footer>
                    <Link to={'/hosting/addaccommodation/facilities/'} >
                        <button className={'ml-auto btn btn-outline-secondary'}>Back</button>
                    </Link>
                    <Link to={'/hosting/addaccommodation/documentations/'} >
                        <button className={'ml-auto btn btn-outline-primary'}>Next</button>
                    </Link>
                </Modal.Footer>
            </React.Fragment>
        );
    }
}


export default Photos;
