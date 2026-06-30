'use client';
import { PlusOutlined } from '@ant-design/icons';
import { Table as AntTable, Button } from 'antd';
import type { TableProps } from 'antd';
import { useState } from 'react';
import AddModal from './AddModal';

export interface DataType {
  key: string;
  count: number;
  coinSign: string;
  coinName: string;
  vwap: number;
  change: number;
  marketCap: number;
  price: number;
}

export 

const data: DataType[] = [
  {
    key: '1',
    count: 1,
    coinSign: 'BTC',
    coinName: 'Bitcoin',
    vwap: 10000,
    change: 100,
    marketCap: 1000000000,
    price: 10000
  },
  {
    key: '2',
    count: 2,
    coinSign: 'BTC',
    coinName: 'Bitcoin',
    vwap: 10000,
    change: 100,
    marketCap: 1000000000,
    price: 10000
  },
  {
    key: '3',
    count: 3,
    coinSign: 'BTC',
    coinName: 'Bitcoin',
    vwap: 10000,
    change: 100,
    marketCap: 1000000000,
    price: 10000
  },
  {
    key: '4',
    count: 4,
    coinSign: 'BTC',
    coinName: 'Bitcoin',
    vwap: 10000,
    change: 100,
    marketCap: 1000000000,
    price: 10000
  },
  {
    key: '5',
    count: 5,
    coinSign: 'BTC',
    coinName: 'Bitcoin',
    vwap: 10000,
    change: 100,
    marketCap: 1000000000,
    price: 10000
  },
  {
    key: '6',
    count: 6,
    coinSign: 'BTC',
    coinName: 'Bitcoin',
    vwap: 10000,
    change: 100,
    marketCap: 1000000000,
    price: 10000
  },
  {
    key: '7',
    count: 7,
    coinSign: 'BTC',
    coinName: 'Bitcoin',
    vwap: 10000,
    change: 100,
    marketCap: 1000000000,
    price: 10000
  },
  {
    key: '8',
    count: 8,
    coinSign: 'BTC',
    coinName: 'Bitcoin',
    vwap: 10000,
    change: 100,
    marketCap: 1000000000,
    price: 10000
  },
  {
    key: '9',
    count: 9,
    coinSign: 'BTC',
    coinName: 'Bitcoin',
    vwap: 10000,
    change: 100,
    marketCap: 1000000000,
    price: 10000
  }
];

export default function Table({
  dataSource = data,
}: TableProps<DataType>) {

    const [openAddModal, setOpenAddModal] = useState(false);
    const [coinData, setCoinData] = useState<DataType | null>(null);
    const handleAddClick = (record: DataType) => {
        setCoinData(record);
        setOpenAddModal(true);
    }

    const columns: TableProps<DataType>['columns'] = [
        {
          title: 'No.',
          dataIndex: 'count',
          key: 'count',
        },
        {
          title: '',
          dataIndex: 'coinSign',
          key: 'coinSign',
        },
        {
          title: 'Name',
          dataIndex: 'coinName',
          key: 'coinName',
        },
        {
          title: 'VWAP',
          dataIndex: 'vwap',
          key: 'vwap',
        },
        {
          title: 'Change',
          dataIndex: 'change',
          key: 'change',
        },
        {
          title: 'Market Cap',
          dataIndex: 'marketCap',
          key: 'marketCap',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: '',
          key: 'addButton',
          render: (_, record) => (
              <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={(e) => {e.stopPropagation();
                   handleAddClick(record);
              }}
            />
          ),
        },
      ];
  return <>
    <AntTable dataSource={dataSource} columns={columns} />
    <AddModal open={openAddModal} onClose={() => setOpenAddModal(false)} coinData={coinData}/>
  </>;
}

