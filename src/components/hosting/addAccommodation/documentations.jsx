import React, {Component} from 'react';
import {Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import 'antd/dist/antd.css';
import { Upload, Modal as antdModal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {getBase64, getItem} from "../../util";


class Documentations extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        identityProvided:true,
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList1: [],
        fileList2: [],
    };

    handlePreview = async file => {
        if (file.originFileObj ) {
            let base46 = await getBase64(file.originFileObj);
            this.openBase64(base46)
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
        sessionStorage.setItem('add-villa-uploaded-photos', JSON.stringify(this.state.fileList1));
    }

    loadFileList=()=>{
        this.setState({fileList1:JSON.parse(sessionStorage.getItem('add-villa-uploaded-photos'))})
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
                    Upload some documentations
                </Modal.Header>
                <Modal.Body>
                    <div className={'d-flex row pl-4 pr-4'}>
                        {this.state.identityProvided?"":
                        <div className={'col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'}>
                            <div className={'mt-2 mb-2 d-flex flex-column p-3 border-secondary rounded'} style={{border:"2px dotted"}}>
                                <label>Prove your identity by providing your id card, driving licence or ...(upload at least one photo)</label>
                                <Upload
                                    // headers={{'Authorization':'Token '.concat(getItem('user-token'))}}
                                    headers={{'Authorization':'Token 78e997f0da492bbe5ee02f1650ada77c0c8c8fcd'}}
                                    // method={'post'}
                                    accept={'image/*'}
                                    action={'http://127.0.0.1:8000/api/villa/user/images/'}
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
                                    // headers={{'Authorization':'Token '.concat(getItem('user-token'))}}
                                    headers={{'Authorization':'Token 78e997f0da492bbe5ee02f1650ada77c0c8c8fcd'}}
                                    // method={'post'}
                                    accept={'image/*'}
                                    action={'http://127.0.0.1:8000/api/villa/user/images/'}
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

export default Documentations;
