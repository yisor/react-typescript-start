
import React, { PureComponent } from 'react'


interface Props {
  name?: string;
}

export default class Button extends PureComponent<Props> {
  render() {
    return (
      <div>
        测试
      </div>
    )
  }
}
