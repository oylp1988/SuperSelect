import React from "react";

import { Select } from "antd";
import SuperSelect from "./SuperSelect";
import NpmSelect from "antd-virtual-select";
// import SuperSelect from "antd-virtual-select";
const Option = Select.Option;
import "antd/dist/antd.css";
import "./styles.css";

const children = [];

for (let i = 0; i < 100; i++) {
  children.push(
    <Option value={i + "aab"} key={i}>
      {i + "aab"}
    </Option>
  );
}

class App extends React.Component {
  onChange = v => {
    console.log(v, "onChange");
  };
  onSearch = v => console.log(v);

  render() {
    return (
      <div className="App">
        <div style={{ width: "300px" }}>
          superSelect: 所有用法同 antd 原 Select, 只是替换 Select 为 SuperSelect
          <SuperSelect
            showSearch
            allowClear
            // mode="multiple"
            // mode={Select.SECRET_COMBOBOX_MODE_DO_NOT_USE}
            dropdownClassName="test-drop"
            onChange={this.onChange}
            autoClearSearchValue
            onSearch={this.onSearch}
            style={{ width: "300px" }}
            notFoundContent={<div>nonono</div>}
            // optionHeight={60}
          >
            {children}
          </SuperSelect>
        </div>
        <div style={{ width: "300px" }}>
          Ant Select:
          <Select
            showSearch
            allowClear
            // mode="multiple"
            notFoundContent={<div>nonono</div>}
            onChange={this.onChange}
            onSearch={this.onSearch}
            style={{ width: "300px" }}
          >
            {children}
          </Select>
        </div>
      </div>
    );
  }
}

export default App;
