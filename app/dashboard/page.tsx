
import StorageCircle from "../components/StorageCircle";
import { dashDatas, monitor1Datas } from '@/config/data/sample';
import styles from './Dashboard.module.scss';

import Image from "next/image";
import { LineGraph, instances, subGraphs as monitor2Datas } from "../components/Graph";

const colors = ['#F80000', '#5360E4', '#2DD3DE', '#FF9900', '#00A1E0', '#FFFFFF', '#00FF87', '#2BB0FF',]
const detailColor = ['#2C2C2C', '#2C2C2C', '#2C2C2C', '#2C2C2C', '#2C2C2C', '#2C2C2C', '#2C2C2C', '#2C2C2C',]

const Label = ({ title, value }: any) =>
  <div className={styles.label}>
    <span className={styles['label-title']}>{title}</span>
    <span className={styles['label-value']}>{value}</span>
  </div>

const HostsDots = ({ cnt, color }: any) => <div className={styles.dots}>
  {Array.from(Array(cnt)).map((_, i) => <div key={`dot${i}${color}`} className={styles.dot} style={{ background: color }}></div>)}
</div>

const Dashboard = () => {
  return <div className={styles.container}>

    <div className={styles.wrap}>
      <span className={styles.title}>Cloud Analysis</span>
      <div className={`${styles.grid} ${styles.cloud}`}>
        <Label title={'Cloud Service Providers'} value={8} />
        <Label title={'Blockchain Cloud Hosts'} value={20} />
        <Label title={'Total Regions'} value={10} />
        <Label title={'This Month Costs'} value={'$ 15,678'} />
        <Label title={'Average CPU %'} value={'20.74%'} />
        <Label title={'Average IOpS'} value={'0.95 MB/s'} />
        <Label title={'Average Latency'} value={'2.53 ms'} />
        <Label title={'Average MBpS'} value={'0.93 MB/s'} />
      </div>
    </div>

    <div className={styles.wrap}>
      <span className={styles.title}>Storage Analysis</span>
      <div className={`${styles.rowbox} ${styles['shiny-border']}`}>
        <div className={`${styles.grid} ${styles.storage1wrap}`}>
          <div className={` ${styles.storage1}`}>
            <div className={`${styles.azure}`}><Image src='/dashboard/logos/azure.svg' alt='azure' width="80" height="23" /> &nbsp; 14%</div>
            <div className={`${styles.naver}`}><Image src='/dashboard/logos/naver.svg' alt='naver' width="43" height="33" /> &nbsp; 13%</div>
            <div className={`${styles.oracle}`}>10%  &nbsp; <Image src='/dashboard/logos/oracle.svg' alt='oracle' width="100" height="12" /></div>
            <div className={`${styles.ovh}`}>13%  &nbsp; <Image src='/dashboard/logos/ovh.svg' alt='ovh' width="100" height="15" /></div>
            <div className={`${styles.gcp}`}><Image src='/dashboard/logos/gcp.svg' alt='gcp' width="87" height="49" /> &nbsp;  11%</div>
            <div className={`${styles.sf}`}><Image src='/dashboard/logos/salesforce.svg' alt='salesforce' width="46" height="32" /> &nbsp;  12%</div>
            <div className={`${styles.ibm}`}>12%  &nbsp; <Image src='/dashboard/logos/ibm.svg' alt='ibm' width="76" height="47" /> </div>
            <div className={`${styles.aws}`}>15%  &nbsp; <Image src='/dashboard/logos/aws.svg' alt='aws' width="58" height="49" /> </div>
            <StorageCircle className={`${styles.circle}`} colors={colors} >
              <p>
                <span>Storage Usage</span>
                <span className={styles.big}>1,350 TB</span>
                <span>of 3950 TB</span>
              </p>
            </StorageCircle>
          </div>
        </div>
        <div className={`${styles.grid} ${styles.storage2}`}>
          <Label title={'Total Files'} value={'213 K'} />
          <Label title={'Stroage Usage'} value={'1,350 TB'} />
          <Label title={'Total Encrypted Data Pieces'} value={'624 M'} />
          <Label title={'Encryption Setting'} value={'10/20'} />
          <Label title={'Today Upload'} value={'5.2 K'} />
          <Label title={'Today Download'} value={'4.7 K'} />
        </div>
      </div>
    </div>

    <div className={styles.wrap}>
      <div className={`${styles.grid} ${styles['storage-detail']}`}>
        {dashDatas.map(data =>
          <div key={`dashs-${data.class}`} className={styles.detailbox}>
            <span className={styles.name}>{data.name}</span>
            <span className={styles.hosts}>{data.summary.hosts} Host{data.summary.hosts === 1 ? '' : 's'} running</span>
            <HostsDots cnt={data.summary.hosts} color={data.color} />

            <StorageCircle className={`${styles.circle}`}
              colors={detailColor.map((el, i) => i === colors.indexOf(data.color) ? data.color : el)}
              activeColor={data.color} borderless={true}
            >
              <p>
                <Image src={`/dashboard/detail/detail-${data.class}.png`} alt={data.class} width={158} height="127" />
                <span className={styles.storage}>{data.summary.storage}TB<span>/3950TB</span></span>
                <span className={styles.storageP} style={{ color: data.color }}>{data.summary.storageP}%</span>
              </p>
            </StorageCircle>
            <div className={styles.detail}>
              <Label title={'CPU Utilization'} value={`${data.summary.cpu} % `} />
              <Label title={'Throughput read'} value={`${data.summary.throughputRead.toFixed(2)} KB / s`} />
              <Label title={'IOPS read'} value={`${data.summary.iopsRead.toFixed(2)} / s`} />
              <Label title={'Storage Usage'} value={`${data.summary.usage} % `} />
              <Label title={'Throughput write'} value={`${data.summary.throughputWrite} KB / s`} />
              <Label title={'IOPS write'} value={`${data.summary.iopsWirte.toFixed(2)} / s`} />
            </div>
          </div>
        )}
        <div className={`${styles.detailbox} ${styles.add}`}>
          <Image src={`/dashboard/detail/detail-add.svg`} alt={'add'} width={78} height="78" />
          Add Cloud
        </div>
      </div>
    </div>

    <div className={styles.wrap}>
      <span className={styles.title}>Bloackchain</span>
      <div className={`${styles.rowbox} ${styles['shiny-border']}`}>

        <div className={`${styles.grid} ${styles.chain} `}>
          <Label title={'Blockchain ID'} value={'did:infra:01:PUB_K1_7spiSqWFNiybB5LBJXW4svEbujHMKKgbqYeBfARCf3e2WUWm3'} />
          <Label title={'Network'} value={'InfraBlockchain Mainnet'} />
          <Label title={'Balance'} value={'$52,845'} />
          <Label title={'Blocks'} value={'353,092,790'} />
          <Label title={'Connected Nodes'} value={'12'} />
        </div>
      </div>
    </div>

    <div className={styles.wrap}>
      <span className={styles.title}>Monitoring</span>
      <div className={`${styles.rowbox} ${styles.index}`}>
        {dashDatas.map(data =>
          <div key={`monitoring-dash-${data.class}`}>
            <Image src={`/dashboard/icons/icon-${data.class}.svg`} alt={`icon-${data.class}`} width={24} height={24} />
            <span>
              {data.name}
              <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect y="0.5" width="16" height="1" fill={data.color} /></svg>
            </span>
          </div>
        )}

      </div>
      <div className={`${styles.grid} ${styles.monitor1}`}>
        {monitor1Datas.map((data, i) =>
          <LineGraph key={`mon1-graph-${i}`} colors={colors} data={data} />
        )}
      </div>
    </div>

    <div className={styles.wrap}>
      <div className={`${styles.grid} ${styles.monitor2}`}>
        {monitor2Datas}
      </div>
    </div>

    <div className={styles.wrap}>
      <div className={`${styles.grid} ${styles.instance}`}>
        {instances}
      </div>
    </div>


  </div >
}

export default Dashboard;
