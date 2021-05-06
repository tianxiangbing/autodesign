/*
 * @Descripttion: 
 * @Author: tianxiangbing
 * @Date: 2019-03-20 10:40:24
 * @LastEditTime: 2021-05-06 14:34:48
 * @github: https://github.com/tianxiangbing
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Dnd from '../../src/dnd/view/main/';
import Tabs from 'xui-tabs';
import 'xui-tabs/lib/index.css';
import all from './all';
import '../../src/index';
import '../../src/_index';
import './_index';

class App extends React.Component {
  render() {
    return (
      <div className="studio">
        <Tabs className="workbench">
          <Tabs.TabPane tab="Auto design" key="0">
            <Dnd json={[]} id="demo" components={all} update={this.update}></Dnd>
          </Tabs.TabPane>
        </Tabs>
      </div>
    )
  }
}
var appElement = document.getElementById('main');
ReactDOM.render(<App />, appElement);