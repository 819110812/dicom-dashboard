import {Component} from "react";
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';



class MainPage extends Component{


    render() {
        const { Dragger } = Upload;
        const props = {
            name: 'file',
            multiple: true,
            action: 'http://localhost:5985',
            onChange(info) {
                const { status } = info.file;
                if (status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully.`);
                } else if (status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
            onDrop(e) {
                console.log('Dropped files', e.dataTransfer.files);
            },
        };
        return (
            <Dragger {...props}>
                <p className="ant-upload-drag-ic    on">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                </p>
            </Dragger>
        )
    }
}

export default MainPage;