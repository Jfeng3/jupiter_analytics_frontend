// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import {BarChartOutlined} from "@ant-design/icons";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import React, { Component } from 'react';

// ==============================|| SAMPLE PAGE ||============================== //
const columns = [
  { field: 'anonymousId', headerName: 'anonymousId', width: 150 },
  { field: 'messageId', headerName: 'messageId', width: 150 },
  { field: 'originalTimestamp', headerName: 'originalTimestamp', width: 150 },
  { field: 'receivedAt', headerName: 'receivedAt', width: 150 },
  { field: 'sentAt', headerName: 'sentAt', width: 150 },
  { field: 'timestamp', headerName: 'timestamp', width: 150 },
  { field: 'type', headerName: 'type', width: 150 },
  { field: 'context', headerName: 'context', width: 150 },
  { field: 'visitor', headerName: 'visitor', width: 150 },
]

// 'id', 'anonymousId', 'messageId', 'originalTimestamp', 'receivedAt', 'sentAt', 'timestamp', 'type', 'context', 'visitor'

class SamplePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {rows: [{ id: 1, col1: 'Hello', col2: 'World' }]
       };
  }

  componentDidMount() {

    fetch(`https://jupiter-analytics-backend.herokuapp.com/api/page-views`, { //send to http:localhost:3000/api
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => res.json())
      .then(json => this.setState({ rows: json }))
      .catch(err => console.log(err))
  }


  componentWillUnmount() {
  }

  render() {
    console.log(Object.keys(this.state.rows[0]));

    return (
    <MainCard title="Sample Card">
      <div style={{height: 300, width: '100%'}}>
        {<DataGrid rows={this.state.rows} columns={columns}/>}
      </div>
    </MainCard>
    )
  }
}

export default SamplePage;
