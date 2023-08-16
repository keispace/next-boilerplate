'use client'
import { Button, Collapse, CollapseProps, Divider, Dropdown, MenuProps, Select, Space, Switch, Tabs, TabsProps } from 'antd';
import styles from './Sample.module.scss';
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { PieGraph } from '../components/Graph';


const accordionItems: CollapseProps['items'] = [
  {
    key: '0',
    label: 'This is panel header 1',
    children: <p>panel 1</p>,
    showArrow: false,
  },
  {
    key: '1',
    label: 'This is panel header 2',
    children: <p>panel 2</p>,
    showArrow: false,
  },
  {
    key: '2',
    label: 'This is panel header 3',
    children: <p>panel 3</p>,
    showArrow: false,
  },
];

const tabItems: TabsProps['items'] = [
  {
    key: '0',
    label: `Data`,
    children: `Content of Tab Data`,
  },
  {
    key: '1',
    label: `Setting`,
    children: `Content of Tab Pane Setting`,
  },
];


const Sample = () => {
  const [collapse, setCollapse] = useState(0);
  const [tabs, setTabs] = useState(0);
  const [switchs, setSwitchs] = useState(false);

  return <div className={styles.container}>
    <h1>Component Sample Page</h1>
    <h2>Button</h2>
    <Button type="primary">Primary </Button>
    <Button type="primary" block>Primary + block</Button>
    <Button type="primary" ghost>Primary + ghost</Button>
    <Button type="primary" disabled>Primary disabled</Button>

    <Button type="default">Default</Button>
    <Button type="default" disabled>Default</Button>
    <Button type="dashed">dashed</Button>

    <Button type="link">Link</Button>
    <Button type="text">Text</Button>

    <Divider />
    <h2>Accordion</h2>
    <Button type="primary" onClick={() => setCollapse((collapse + 1) % accordionItems.length)}>change panel</Button>
    <Collapse className={`${styles.collapse}`} accordion items={accordionItems} activeKey={collapse} />


    <Divider />
    <h2>Switch = {switchs ? 'on' : 'off'}</h2>
    <Switch checked={switchs} onChange={(c) => setSwitchs(c)} />

    <Divider />
    <h2>Select</h2>

    <Select
      defaultValue="Jack"
      bordered={false}
    // suffixIcon={null}
    >
      <Select.Option value="Jack">Jack</Select.Option>
      <Select.Option value="jack">jack</Select.Option>
    </Select>

    <Divider />
    <h2>Tabs</h2>
    <Tabs activeKey={tabs.toString()} items={tabItems}
      onChange={(k) => setTabs(+k)} />
    <Divider />
    <div className={styles.graph}>

      <PieGraph />
    </div>
  </div>

}

export default Sample;
