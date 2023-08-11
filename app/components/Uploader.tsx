'use client'
import { Upload } from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import styles from './Uploader.module.scss';
import { ExtIcons, Icon_Upload } from './Icons';
import Image from "next/image";
import { useState } from 'react';
import { defaultFileList } from '@/config/data/sample';
import { ModalUpload } from './Modal';

const { Dragger } = Upload;

const setSize = (size = 0, depth = 0): string => {
  const unit = [' B', ' KB', ' MB', ' GB', ' TB']
  const nextSize = size / 1024
  if (nextSize < 1) { return size.toFixed(1) + unit[depth] }
  return setSize(nextSize, depth + 1)
}

const FileRow = ({ file, setProxyUploadOpen }: { file: UploadFile<any>, setProxyUploadOpen: (v: UploadFile) => void }) => {
  return <>
    <div className={styles.headerrow}>
      <div>File name</div>
      <div>Status</div>
      <div>Date</div>
      <div>Size</div>
      <div> </div>
    </div >
    <div className={styles.filerow} onClick={() => setProxyUploadOpen(file)}>
      <div ><ExtIcons ext={file.name.split('.')[1]} />&nbsp;{file.name}</div>
      <div>{(file as any)['encrypt']}</div>
      <div>{(file as any)['date']}</div>
      <div>{setSize(file.size)}</div>
      <div><Image src='/storage/icons/file-set.svg' width={88} height={24} alt="file-set icon" /></div>
    </div>
  </>
}


const Uploader = () => {
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList)
  const [proxyUploadOpen, setProxyUploadOpen] = useState<UploadFile | null>(null)

  const FileModalBackground = ({ children }: { children: any }) =>
    <div className={styles.modal} onClick={() => setProxyUploadOpen(null)}>
      {children}

    </div>

  const onChange: UploadProps['onChange'] = ({ file, fileList }) => {
    const newFile = (fileList.find(el => el.uid === file.uid) as any)
    newFile.encrypt = 'Encrypted';
    newFile.date = new Date().toLocaleDateString('en-uk', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
    setFileList(fileList);
  }

  return <div className={styles.container}>
    {proxyUploadOpen ? <FileModalBackground>
      <ModalUpload file={proxyUploadOpen} />
    </FileModalBackground> : null}
    <Dragger className={styles.uploader}
      fileList={fileList.sort((a, b) => b.uid > a.uid ? 1 : -1)}
      onChange={onChange}
      multiple={true}
      itemRender={(_, file) => <FileRow file={file} setProxyUploadOpen={setProxyUploadOpen} />}
    >
      <p className={styles.icon}>
        <Icon_Upload />

      </p>
      <p className={styles.text}>Drop files to upload them to your files</p>
    </Dragger>
  </div >
}

export default Uploader;