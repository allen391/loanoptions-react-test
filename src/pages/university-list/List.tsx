import React from 'react';
import { IUniItem } from '../../shared/types';
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

export interface IUniProps {
  uniList: IUniItem[];
}

// define the table column structure
const columns: ColumnsType<IUniItem> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <div>{text}</div>,
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
    render: (text) => <div>{text ? text : 'Not Available'}</div>,
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Country Code',
    dataIndex: 'alpha_two_code',
    key: 'countryCode',
  },
  {
    title: 'Web Page',
    dataIndex: 'web_pages',
    key: 'webPages',
    render: (_, { web_pages }) => (
      <>
        {web_pages.map((webPage) => {
          return <Tag key={webPage}>{webPage}</Tag>;
        })}
      </>
    ),
  },
  {
    title: 'Domains',
    key: 'domains',
    dataIndex: 'domains',
    render: (_, { domains }) => (
      <>
        {domains.map((domain) => {
          return <Tag key={domain}>{domain}</Tag>;
        })}
      </>
    ),
  },
];

const ListItem = ({ uniList }: IUniProps) => {
  return <Table dataSource={uniList} columns={columns} />;
};

export default ListItem;
