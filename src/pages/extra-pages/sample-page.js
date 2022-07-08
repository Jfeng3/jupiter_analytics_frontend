// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import {BarChartOutlined} from "@ant-design/icons";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import React, { Component } from 'react';
import ReactDOM from "react-dom";

import "@carbon/styles/css/styles.css";

import "@carbon/charts/styles.css";
import { PieChart } from "@carbon/charts-react";

// ==============================|| SAMPLE PAGE ||============================== //
const columns = [
  { field: 'timestamp', headerName: 'timestamp', width: 150 },
  { field: 'type', headerName: 'type', width: 150 },
  { field: 'ip', headerName: 'ip', width: 150 },
  { field: 'path', headerName: 'path', width: 150 },
  { field: 'referrer', headerName: 'referrer', width: 150 },
  { field: 'visitor', headerName: 'visitor', width: 150 }
]

// 'id', 'anonymousId', 'messageId', 'originalTimestamp', 'receivedAt', 'sentAt', 'timestamp', 'type', 'context', 'visitor'

class SamplePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {rows: [{ id: 1, col1: 'Hello', col2: 'World' }],
    data: [
      {
        "group": "2V2N 9KYPM version 1",
        "value": 20000
      },
      {
        "group": "L22I P66EP L22I P66EP L22I P66EP",
        "value": 65000
      },
      {
        "group": "JQAI 2M4L1",
        "value": 75000
      },
      {
        "group": "J9DZ F37AP",
        "value": 1200
      },
      {
        "group": "YEL48 Q6XK YEL48",
        "value": 10000
      },
      {
        "group": "Misc",
        "value": 25000
      }
    ],
        options: {
      "title": "Pie",
      "resizable": true,
      "height": "400px"
    }
    };
  }


  componentDidMount() {

    fetch(`https://jupiter-analytics-backend.herokuapp.com/api/page-views`, { //send to http:localhost:3000/api
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => res.json())
      .then(json => this.setState({
          rows: json.map((item, index, array) => {
            return {
              id: item.id,
              timestamp: item.timestamp,
              ip: item.context.ip,
              type: item.type,
              path: item.context.page.path,
              referrer: item.context.page.referrer || "direct",
              visitor: item.visitor
            };
          }),
          data: Object.values(
            json.map((item, index, array) => {
              return {
                id: item.id,
                timestamp: item.timestamp,
                ip: item.context.ip,
                type: item.type,
                path: item.context.page.path,
                referrer: item.context.page.referrer || "direct",
                visitor: item.visitor
              };
            })
            .reduce((c, {referrer}) => {
            c[referrer] = c[referrer] || {group: referrer,value: 0};
            c[referrer].value++;
            return c;
          }, {}))
        })
      )
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
        <div>
      	<PieChart
			data={this.state.data}
			options={this.state.options}>
		</PieChart>

        </div>
      </MainCard>

    )
  }
}

export default SamplePage;
