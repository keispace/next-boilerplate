'use client'
import { instanceDatas, monitor1Datas, subGraphDatas } from '@/config/data/sample';
import styles from './Graph.module.scss';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, BarChart, Bar, ScatterChart, Scatter, AreaChart, Area, Legend, Label, LabelList } from 'recharts';

const PlusBox = () => <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="9.5" width="9" height="1" rx="0.5" fill="#D9D9D9" />
  <rect x="9" y="14.5" width="9" height="1" rx="0.5" transform="rotate(-90 9 14.5)" fill="#D9D9D9" />
  <rect x="0.5" y="1" width="17" height="17" stroke="#B1B1B1" />
</svg>

const MinusBox = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="9" width="9" height="1" rx="0.5" fill="#D9D9D9" />
  <rect x="0.5" y="0.5" width="17" height="17" stroke="#B1B1B1" />
</svg>

const DownArrow = () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.3636 13.1364C6.71508 13.4879 7.28492 13.4879 7.6364 13.1364L13.364 7.40883C13.7154 7.05736 13.7154 6.48751 13.364 6.13604C13.0125 5.78457 12.4426 5.78457 12.0912 6.13604L7 11.2272L1.90883 6.13604C1.55736 5.78457 0.987511 5.78457 0.636039 6.13604C0.284567 6.48751 0.284567 7.05736 0.636039 7.40883L6.3636 13.1364ZM6.1 0.5L6.1 12.5L7.9 12.5L7.9 0.5L6.1 0.5Z" fill="#AEAEAE" />
</svg>


const Table = ({ data }: { data: { title: string, sub: string, headers: string[], rows: string[][] } }) =>
  <div className={`${styles.container} ${styles.tablewrap}`}>
    <span className={styles['graph-title']}>{data.title}</span>
    <span className={styles['graph-sub-title']}>{data.sub}</span>
    <ResponsiveContainer width="100%" height="100%">
      <div className={styles.table}>
        {data.headers.map((el, i) =>
          i === 0 ?
            <div key={`${data.title} header-${i}`}><MinusBox /> &nbsp;&nbsp;&nbsp; {el} &nbsp;<DownArrow /></div>
            : <div key={`${data.title} header-${i}`}>{el}</div>
        )}
        {data.rows.map((row, i) =>
          <>{row.map((el, j) =>
            j === 0 ?
              <div key={`${data.title} key-${i}-${j}`}><PlusBox /> &nbsp;&nbsp;&nbsp; t3.medium (8)</div>
              : <div key={`${data.title} key-${i}-${j}`}>{el}</div>
          )}
          </>
        )}
      </div>
    </ResponsiveContainer>
  </div>

export interface LineGraphOptions {
  colors: string[],
  data: typeof monitor1Datas[number],
}
export const LineGraph = ({ colors, data }: LineGraphOptions) => {

  return <div className={styles.container}>
    <span className={styles['graph-title']}>{data.title}</span>
    <span className={styles['graph-unit']}>{data.unit}</span>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data.lines} margin={{ top: 20, right: 5, left: -30, bottom: 0 }}>
        {colors.map((color, i) =>
          <Line key={`${data.title}linegraph${color}`} type="linear" dataKey={`v${i}`} dot={false} stroke={color} />
        )}
        <CartesianGrid stroke="#383838" />
        <XAxis dataKey="x" ticks={data.axisX} padding={{ right: 30 }} style={data.style.axisX} />
        <YAxis ticks={data.axisY} style={data.style.axisY} />
      </ LineChart>
    </ResponsiveContainer>
  </div>
}
<svg xmlns="http://www.w3.org/2000/svg" width="83" height="15" viewBox="0 0 83 15" fill="none">
  <path d="M0.9375 15 H82.9375 V0 H0.9375 V15 Z" fill="#FF9A01" fill-opacity="0.13" />

  <path d="M5.9375 10 H82.9375 V5 H5.9375 V10 Z" fill="#FF9900" />
</svg>



export const LinearGraph = () => {
  const data = [
    { x: 1, AWS: 15, Azure: 14, OVH: 13, NCloud: 13, "Sales...": 12, "IBM C..": 12, GCP: 11, OCI: 10, rest: 99 }
  ]
  const meta = [
    ['AWS', '#FF9900'],
    ['OVH', "#5360E4"],
    ['NCloud', "#00FF87"],
    ['Sales...', "#00A1E0"],
    ['IBM C..', "#2DD3DE"],
    ['GCP', "#FFFFFF"],
    ['OCI', "#F80000"],
    ['rest', '#4F4F4F']
  ]
  const getPath = (x: number, y: number, width: number, height: number) => {
    return `M${x},${y} h${width} v${height} h-${width} Z`
  };

  const BarPath = (props: any, i: number, last: boolean) => {
    const { fill, x, y, width, height } = props;
    return <>
      {i === 0 ? <path d={getPath(x - 10, y - 5, width + 10, height + 10)} fill={fill} fillOpacity="0.13" /> :
        last ? <path d={getPath(x, y - 5, width + 10, height + 10)} fill={fill} fillOpacity="0.13" /> :
          <path d={getPath(x, y - 5, width, height + 10)} fill={fill} fillOpacity="0.13" />}
      <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
    </>
  }

  return <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} layout='vertical' margin={{ left: 50 }}>
      <XAxis type='number' hide />
      <YAxis dataKey="x" hide type='category' />
      <Legend />
      {meta.map((el, i) =>
        <Bar key={`store-linear${i}`} dataKey={el[0]} stackId="1" barSize={5} shape={(props) => BarPath(props, i, meta.length - 1 === i)} fill={el[1]} legendType={meta.length - 1 === i ? 'none' : 'circle'}>
          {meta.length - 1 === i ? null : <LabelList dataKey={el[0]} position="bottom" offset={20} formatter={(v: string) => v + '%'} style={{ fill: el[1] }} />}
        </Bar>
      )}
    </BarChart>
  </ResponsiveContainer>
}
export const subGraphs = [
  <div className={styles.container}>
    <span className={styles['graph-title']}>Count of Process in each Cloud Provider</span>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={subGraphDatas.processCntLine} layout="vertical" margin={{ top: 20, right: 5, left: -30, bottom: 0 }} barSize={20}>
        <Bar dataKey="uv" fill="#6680DB" layout="vertical" />
        <CartesianGrid stroke="#383838" horizontal={false} />
        <XAxis type="number" ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000]} tickFormatter={(v => v > 0 ? `${v / 1000}K` : v)} style={{ fill: '#fff', fontSize: '10px' }} />
        <YAxis type="category" dataKey="name" width={180} style={{ fill: '#9BBFFF', fontSize: '12px' }} />
      </ BarChart>
    </ResponsiveContainer>
    <span className={styles['graph-x-label']}>Processors</span>
  </div>,

  <div className={styles.container}>
    <span className={styles['graph-title']}>Instances Performance</span>
    <span className={styles['graph-unit']}>Latency - Total (ms)</span>
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart margin={{ top: 20, right: 5, left: -30, bottom: 0 }} barSize={20}>
        <Scatter data={subGraphDatas.instancePerfomance} fill="#397BF3" stroke='#DEDEDE' />
        <CartesianGrid stroke="#383838" horizontal={false} />
        <XAxis dataKey="x" type="number" ticks={[0, 250, 500, 750, 1000, 1250, 1500, 1750]} style={{ fill: '#fff', fontSize: '12px' }} />
        <YAxis dataKey="y" type="number" ticks={[0, 0.5, 1]} style={{ fill: '#fff', fontSize: '12px' }} />

      </ ScatterChart>
    </ResponsiveContainer>
    <span className={styles['graph-x-label']}>IOPS - Total(IO/s)</span>
  </div>,

  <div className={styles.container}>
    <span className={styles['graph-title']}>Instances Throughput</span>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={subGraphDatas.instancesThroughput} margin={{ top: 20, right: 5, left: -30, bottom: 0 }}>

        <Line type="linear" dataKey={`v0`} dot={false} stroke={'#FFF492'} />
        <Line type="linear" dataKey={`v1`} dot={false} stroke={'#FF6C2E'} />
        <Line type="linear" dataKey={`v2`} dot={false} stroke={'#00E933'} />
        <Line type="linear" dataKey={`v3`} dot={false} stroke={'#009898'} />

        <CartesianGrid stroke="#383838" />
        <XAxis dataKey="x"
          ticks={['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']}
          padding={{ right: 30 }} style={{ fill: '#C5C5D3', fontSize: '10px' }}
        />
        <YAxis ticks={[0, 100, 200]} style={{ fill: '#C5C5D3', fontSize: '10px' }} />
      </ LineChart>
    </ResponsiveContainer>
  </div>,

  <div className={`${styles.container}`} >
    <span className={styles['graph-title']}>Count of Process in each Cloud Provider</span>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={subGraphDatas.processCntArea} margin={{ top: 20, right: 5, left: -30, bottom: 0 }}>

        <Area type="linear" dataKey={`v0`} name="Oracle / QEMU" dot={false} stroke={'#2F3F8F'} fill={'#2F3F8F'} />
        <Area type="linear" dataKey={`v2`} name="Microsoft Azure Computer OS" dot={false} stroke={'#E15845'} fill={'#E15845'} />
        <Area type="linear" dataKey={`v1`} name="Amazon AWS EC2" dot={false} stroke={'#529B6D'} fill={'#529B6D'} />
        <Area type="linear" dataKey={`v3`} name="Google Compute" dot={false} stroke={'#F2B071'} fill={'#F2B071'} />

        <Legend wrapperStyle={{ fontSize: "12px" }} iconType='square' iconSize={10} />
        <CartesianGrid stroke="#383838" />
        <XAxis dataKey="x"
          type="number"
          tickFormatter={(v => `${(v / 100).toString().padStart(2, '0')}:00`)}
          ticks={[200, 600, 1000, 1400, 1800, 2200]}
          padding={{ right: 30 }} style={{ fill: '#C5C5D3', fontSize: '10px' }}
        />
        <YAxis ticks={[0, 50, 100]} style={{ fill: '#C5C5D3', fontSize: '10px' }} />
      </ AreaChart>
    </ResponsiveContainer>
  </div>,

  <div className={styles.container}>
    <span className={styles['graph-title']}>Avg VM CPU % by Process Count</span>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={subGraphDatas.avgVMcpu} layout="vertical" margin={{ top: 20, right: 5, left: -30, bottom: 0 }} barSize={20}>
        <Bar dataKey="uv" fill="#6680DB" layout="vertical" />
        <CartesianGrid stroke="#383838" horizontal={false} />
        <XAxis type="number" ticks={[0, 25, 50, 75, 100, 125]}
          style={{ fill: '#96C4EE', fontSize: '10px' }} />
        <YAxis type="category" dataKey="name" style={{ fill: '#96C4EE', fontSize: '12px' }} />
      </ BarChart>
    </ResponsiveContainer>
    <span className={styles['graph-x-label']}>CPU Utolization - Total (%)</span>
  </div>,

  <div className={`${styles.container}`} >
    <span className={styles['graph-title']}>Capacity in the Public Cloud</span>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={subGraphDatas.capacityPubvlicCloud} margin={{ top: 20, right: 5, left: -30, bottom: 0 }}>

        <Area dataKey={`v0`} name="Oracle" dot={false} stroke={'#2F3F8F'} fill={'#2F3F8F'} fillOpacity={1} />
        <Area dataKey={`v1`} name="Google Cloud" dot={false} stroke={'#E15845'} fill={'#E15845'} fillOpacity={1} />
        <Area dataKey={`v2`} name="AWS EC2" dot={false} stroke={'#529B6D'} fill={'#529B6D'} fillOpacity={1} />

        <Legend wrapperStyle={{ fontSize: "12px" }} iconType='square' iconSize={10} />
        <CartesianGrid stroke="#383838" />
        <XAxis dataKey="x"
          type="category"
          tickFormatter={(v => v > 1199 ? `${(v / 100).toString().padStart(2, '0')}:00` : '0')}
          ticks={[1100, 1200, 1300, 1400, 1500, 1600, 1700]}
          style={{ fill: '#96C4EE', fontSize: '10px' }}
        />
        <YAxis ticks={[0, 50, 100, 150, 200, 250]} unit='k' style={{ fill: '#96C4EE', fontSize: '10px' }} />
      </ AreaChart>
    </ResponsiveContainer>
  </div>,

  <div className={styles.container}>
    <span className={styles['graph-title']}>Total Memory Allocated to each Cloud Provider</span>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={subGraphDatas.memoryAlloc} layout="vertical" margin={{ top: 20, right: 5, left: -30, bottom: 0 }} barSize={40}>
        <Bar dataKey="uv" fill="#6680DB" layout="vertical" />
        <CartesianGrid stroke="#383838" horizontal={false} />
        <XAxis type="number" ticks={[0, 2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25]} unit='k'
          style={{ fill: '#fff', fontSize: '10px' }} />
        <YAxis type="category" dataKey="name" width={180} style={{ fill: '#fff', fontSize: '12px' }} />
      </ BarChart>
    </ResponsiveContainer>
    <span className={styles['graph-x-label']}>Memory(GB)</span>
  </div>,

  <div className={styles.container}>
    <span className={styles['graph-title']}>Cloud Performance</span>
    <div className={styles['cloud-performance']}>
      <span className={styles.top}>1.01 <span className={styles.unit}>ms</span></span>
      <span className={styles.bottom}>Latency-Total</span>
    </div>
  </div>,

  <div className={styles.container}>
    <span className={styles['graph-title']}>Cloud Safety</span>
    <div className={styles['cloud-safety']}>
      <span>safety</span>
      <span><span className={styles.big}>9.3</span> /10</span>
      <span>Total Score</span>
    </div>
  </div >,
]

export const instances = [
  <div className={styles.container}>
    <span className={styles['graph-title']}>Latency by Instance</span>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={instanceDatas.latency} layout="vertical" margin={{ top: 20, right: 5, left: -30, bottom: 0 }} barSize={13}>
        <Bar dataKey="uv" fill="#6680DB" layout="vertical" />
        <CartesianGrid stroke="#383838" horizontal={false} />
        <XAxis type="number" ticks={[0, 2.5, 5, 7.5, 10, 12.5, 15]} style={{ fill: '#fff', fontSize: '10px' }} />
        <YAxis type="category" dataKey="name" width={120} style={{ fill: '#9BBFFF', fontSize: '12px' }} />
      </ BarChart>
    </ResponsiveContainer>
    <span className={styles['graph-x-label']}>Latency - Total (ms)</span>
  </div>,

  <div className={styles.container}>
    <span className={styles['graph-title']}>Large Instance IOPs Trending</span>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={instanceDatas.iopsTrending} margin={{ top: 20, right: 5, left: -30, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" ticks={[12, 14, 16, 18, 20, 22, 24]} unit=":00 PM" style={{ fill: '#fff', fontSize: '10px' }} />
        <YAxis ticks={[0, 12]} unit='k' style={{ fill: '#fff', fontSize: '10px' }} />
        <Legend wrapperStyle={{ fontSize: "12px" }} iconType='square' iconSize={10} />

        <Line type="monotone" dataKey="v0" name="r5.2xlarge" stroke="#4D629E" dot={false} />
        <Line type="monotone" dataKey="v1" name="r4.16xlarge" stroke="#CE2A96" dot={false} />
        <Line type="monotone" dataKey="v2" name="m4.4xlarge" stroke="#78289D" dot={false} />
        <Line type="monotone" dataKey="v3" name="m4.xlarge" stroke="#EAA961" dot={false} />
        <Line type="monotone" dataKey="v4" name="t2.medium" stroke="#D8573C" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>,

  <div className={styles.container}>
    <span className={styles['graph-title']}>MBpS by Instance</span>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={instanceDatas.mbps} layout="vertical" margin={{ top: 20, right: 5, left: -30, bottom: 0 }} barSize={13}>
        <Bar dataKey="uv" fill="#6680DB" layout="vertical" />
        <CartesianGrid stroke="#383838" horizontal={false} />
        <XAxis type="number" ticks={[0, 5, 10, 15, 20]} style={{ fill: '#fff', fontSize: '10px' }} />
        <YAxis type="category" dataKey="name" width={120} style={{ fill: '#9BBFFF', fontSize: '12px' }} />
      </ BarChart>
    </ResponsiveContainer>
    <span className={styles['graph-x-label']}>Throughput - Total (MB/s)</span>
  </div>,

  <div className={styles.container}>
    <span className={styles['graph-title']}>Large Instamce Latency Trending</span>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={instanceDatas.latencyTrending} margin={{ top: 20, right: 5, left: -30, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" ticks={[12, 14, 16, 18, 20, 22, 24]} unit=":00 PM" style={{ fill: '#fff', fontSize: '10px' }} />
        <YAxis ticks={[0, 400]} style={{ fill: '#fff', fontSize: '10px' }} />
        <Legend wrapperStyle={{ fontSize: "12px" }} iconType='square' iconSize={10} />

        <Line type="monotone" dataKey="v0" name="t2.micro" stroke="#4D629E" dot={false} />
        <Line type="monotone" dataKey="v1" name="r4.16xlarge" stroke="#CE2A96" dot={false} />
        <Line type="monotone" dataKey="v2" name="m4.4xlarge" stroke="#78289D" dot={false} />
        <Line type="monotone" dataKey="v3" name="m4.xlarge" stroke="#EAA961" dot={false} />
        <Line type="monotone" dataKey="v4" name="t2.medium" stroke="#D8573C" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>,


  <div className={styles.container}>
    <span className={styles['graph-title']}>IOPS by Instance</span>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={instanceDatas.iops} layout="vertical" margin={{ top: 20, right: 5, left: -30, bottom: 0 }} barSize={13}>
        <Bar dataKey="uv" fill="#6680DB" layout="vertical" />
        <CartesianGrid stroke="#383838" horizontal={false} />
        <XAxis type="number" ticks={[0, 250, 500, 750, 1000]} style={{ fill: '#fff', fontSize: '10px' }} />
        <YAxis type="category" dataKey="name" width={120} style={{ fill: '#9BBFFF', fontSize: '12px' }} />
      </ BarChart>
    </ResponsiveContainer>
    <span className={styles['graph-x-label']}>IOPS - Total (IO/s)</span>
  </div>,

  <div className={styles.container}>
    <span className={styles['graph-title']}>Large Instance MBps Trending</span>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={instanceDatas.mpbsTranding} margin={{ top: 20, right: 5, left: -30, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" ticks={[12, 14, 16, 18, 20, 22, 24]} unit=":00 PM" style={{ fill: '#fff', fontSize: '10px' }} />
        <YAxis ticks={[0, 480]} style={{ fill: '#fff', fontSize: '10px' }} />
        <Legend wrapperStyle={{ fontSize: "12px" }} iconType='square' iconSize={10} />

        <Line type="monotone" dataKey="v0" name="Standard_DS3_v2" stroke="#4D629E" dot={false} />
        <Line type="monotone" dataKey="v1" name="Standard_DS4_v2" stroke="#CE2A96" dot={false} />
        <Line type="monotone" dataKey="v2" name="r4.16xlarge" stroke="#78289D" dot={false} />
        <Line type="monotone" dataKey="v3" name="m5.2xlarge" stroke="#EAA961" dot={false} />
        <Line type="monotone" dataKey="v4" name="m5.4xlarge" stroke="#D8573C" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>,

  <Table data={instanceDatas.awsInstances} />,
  <Table data={instanceDatas.azureInstances} />,
  <Table data={instanceDatas.gcpInstances} />,
  <Table data={instanceDatas.ociInstances} />,
  <Table data={instanceDatas.naverInstances} />,
]
