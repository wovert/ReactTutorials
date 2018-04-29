import React from 'react';

export default function Qibinglian(props) {
  return (
    <div>
      <h3>骑兵连连长{props.boss}, 冲啊!</h3>
      <blockquote>团部命令：{props.message}</blockquote>
    </div>
  );
}
