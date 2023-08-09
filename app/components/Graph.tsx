'use client'
import { monitor1Datas, subGraphDatas } from '@/config/data/sample';
import styles from './Graph.module.scss';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, BarChart, Bar, ScatterChart, Scatter, AreaChart, Area, Legend } from 'recharts';


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
          <Line type="linear" dataKey={`v${i}`} dot={false} stroke={color} />
        )}
        <CartesianGrid stroke="#383838" />
        <XAxis dataKey="x" ticks={data.axisX} padding={{ right: 30 }} style={data.style.axisX} />
        <YAxis ticks={data.axisY} style={data.style.axisY} />
      </ LineChart>
    </ResponsiveContainer>
  </div>
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
      <BarChart data={subGraphDatas.memoryAlloc} layout="vertical" margin={{ top: 20, right: 5, left: -30, bottom: 0 }} barSize={20}>
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
    <div>
      <span className={styles['graph-title']}>Cloud Performance</span>
      <span>1.01 <span>ms</span></span>
      <span>Latency-total</span>
    </div>
  </div>,

  <div className={styles.container}>
    <span className={styles['graph-title']}>Cloud Safety</span>

    <div style={{
      flex: '1',
      width: '100%',
      background: 'url("/dashboard/safety.svg") center / contain no-repeat',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <span>safety</span>
      <span>9.3 <span>/10</span></span>
      <span>Total Score</span>
    </div>
  </div>,
]