import styles from './Storage.module.scss';
import { LinearGraph } from '../components/Graph';
import Image from "next/image";
import Uploader from '../components/Uploader';

const Label = ({ title, value }: any) =>
  <div className={styles.label}>
    <span className={styles['label-title']}>{title}</span>
    <span className={styles['label-value']}>{value}</span>
  </div>


const FolderItem = ({ title, cnt }: { title: string, cnt: number }) => <div className={styles.folder}>
  <Image src={`/storage/icons/icon-${title.toLowerCase()}.svg`} alt={`icon-${title}`} width={60} height={60} />
  <div className={styles.label}>
    <span className={styles['label-title']}>{title}</span>
    <span className={styles['label-value']}>{cnt} File{cnt === 1 ? '' : 's'}</span>
  </div>
</div>

const mock_Files = [
  {
    file_name: 'prescription-2023-SMC.pdf',
    status: 'Encrypted',
    date: 'Tue, 11 July 2023',
    size: 503.6
  },
  {
    file_name: 'prescription-2023-SMC.pdf',
    status: 'Encrypted',
    date: 'Tue, 11 July 2023',
    size: 821
  },
  {
    file_name: 'CT-Chest-071123-24.dcm',
    status: 'Encrypted',
    date: 'Tue, 11 July 2023',
    size: 6144
  },
  {
    file_name: 'CT-Brain-071123-40.dcm',
    status: 'Encrypted',
    date: 'Tue, 11 July 2023',
    size: 1228.8
  },
  {
    file_name: 'CT-Brain-071123-39.dcm',
    status: 'Encrypted',
    date: 'Tue, 11 July 2023',
    size: 912
  }
]

const Storage = () => {
  return <div className={styles.container}>

    <div className={styles.wrap}>
      <span className={styles.title}>Storage Analysis</span>
      <div className={`${styles.grid} ${styles.analysis}`}>
        <Label title={'Used Storage / Total Storage'} value={'1,350 / 3,950 TB'} />
        <div>33% Used</div>

        <div><LinearGraph /></div>
        <Label title={'Total Files'} value={'213K'} />
        <Label title={'Total Encrypted Data Pieces'} value={'624M'} />
        <Label title={'Cloud Service Providers'} value={'8'} />
        <Label title={'Encryption Setting'} value={'10 / 20'} />
        <Label title={'Today Upload'} value={'5'} />
        <Label title={'Today Download'} value={'4'} />
      </div>
    </div>

    <div className={styles.wrap}>
      <span className={styles.title}>Folder</span>
      <div className={`${styles.rowbox}`}>
        <FolderItem title="Documents" cnt={221} />
        <FolderItem title="Images" cnt={170} />
        <FolderItem title="Videos" cnt={120} />
        <FolderItem title="Audio" cnt={320} />
        <FolderItem title="Etc" cnt={455} />

      </div>
    </div>

    <div className={styles.wrap}>
      <div className={`${styles.colbox}`}>
        <div>category</div>
        <Uploader />
        <div>file list</div>

      </div>
    </div>


  </div >
}

export default Storage;
