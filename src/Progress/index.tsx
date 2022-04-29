import React from 'react';
import { IComponentProps } from '../common/interface';
import BaseProgress from './BaseProgress';
import styles from './style.less';

enum progressType {
  line,
  bar,
  block,
  particle,
  circle,
}

interface IProgress extends IComponentProps {
  type: progressType,
  current: number,
  total: number,
}

export default (props: IProgress) => {
  switch (props.type) {
    case progressType.line: return <BaseProgress {...props} />;
  }
};
