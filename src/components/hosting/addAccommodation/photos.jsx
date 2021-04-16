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
