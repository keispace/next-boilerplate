'use client'
import { Upload } from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import styles from './Uploader.module.scss';
import { Icon_Upload } from './Icons';
import Image from "next/image";
import { useState } from 'react';
import { defaultFileList } from '@/config/data/sample';
const { Dragger } = Upload;


const FileRow = ({ file }: { file: UploadFile<any> }) => {
  const ext = file.name.split('.')[1];
  const Icon = () => {
    switch (ext) {
      case 'dcm': return <Image src='/storage/icons/ext-dcm.svg' width={24} height={24} alt="dcm icon" />
      case 'jpg': case 'svg': case 'png': case 'jpeg': return <Image src='/storage/icons/ext-img.svg' width={24} height={24} alt="img icon" />
      default: return <Image src='/storage/icons/ext-doc.svg' width={24} height={24} alt="doc icon" />
    }
  }
  const setSize = (size = 0, depth = 0): string => {
    const unit = [' B', ' KB', ' MB', ' GB', ' TB']
    const nextSize = size / 1024
    if (nextSize < 1) { return size.toFixed(1) + unit[depth] }
    return setSize(nextSize, depth + 1)
  }
  return <>
    <div className={styles.headerrow}>
      <div>File name</div>
      <div>Status</div>
      <div>Date</div>
      <div>Size</div>
      <div> </div>
    </div>
    <div className={styles.filerow}>
      <div><Icon />&nbsp;{file.name}</div>
      <div>{(file as any)['encrypt']}</div>
      <div>{(file as any)['date']}</div>
      <div>{setSize(file.size)}</div>
      <div><Image src='/storage/icons/file-set.svg' width={88} height={24} alt="file-set icon" /></div>
    </div>
  </>
}




const Uploader = () => {
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList)

  const onChange: UploadProps['onChange'] = ({ file, fileList }) => {
    const newFile = (fileList.find(el => el.uid === file.uid) as any)
    newFile.encrypt = 'Encrypted';
    newFile.date = new Date().toLocaleDateString('en-uk', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
    setFileList(fileList);
  }

  return <div className={styles.container}>
    <Dragger className={styles.uploader}
      fileList={fileList.sort((a, b) => b.uid > a.uid ? 1 : -1)}
      onChange={onChange}
      multiple={true}
      itemRender={(_, file) => <FileRow file={file} />}
    >
      <p className={styles.icon}>
        <Icon_Upload />

      </p>
      <p className={styles.text}>Drop files to upload them to your files</p>
    </Dragger>
  </div >
}

export default Uploader;