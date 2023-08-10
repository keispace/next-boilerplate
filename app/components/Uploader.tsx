'use client'
import { Upload } from 'antd';
import type { UploadProps } from 'antd';
import styles from './Uploader.module.scss';
import { Icon_Upload } from './Icons';

const { Dragger } = Upload;
export interface uploadOptions {

  className?: string
}
const uploadProps: UploadProps = {
  name: 'file',
  multiple: true,
  action: (file) => {
    console.log('action', file);
    return 'a'
  },
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      console.log(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      console.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
const Uploader = () => {
  return <div className={styles.container}>
    <Dragger className={styles.uploader} {...uploadProps}>
      <p className={styles.icon}>
        <Icon_Upload />

      </p>
      <p className={styles.text}>Drop files to upload them to your files</p>
    </Dragger>
  </div>
}

export default Uploader;