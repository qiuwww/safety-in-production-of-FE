import http from '../utils/http';
import trackerInfo from './trackerInfo';
import clientInfo from './clientInfo';
import { getConfig } from './config';
import { getCookie, getUUID } from '../utils/util';
import { getUserInfo } from './user';
import { SEND_TYPE, TRACKER_IDENTIFY } from '../constant/index';
import { Config, TrackerData } from '../types';
import isArray from 'lodash-es/isArray';

const allData: TrackerData[] = [];
let timer: any = null;
const uuid = getUUID();
let index = 0;

export function send(data: TrackerData) {
  const config = getConfig();
    const { sendType } = config;
  if (sendType ===SEND_TYPE.SYNC) {
sendSync(data);
  } else if (sendType=== SEND_TYPE.ASYNC) {
    sendAsync(data);
  }
}

export function sendSync(data: TrackerData) {
  const config =getConfig();
    data = _wrapperData(data, config);
  _sendToServer(data);
}

export function sendAsync(data?: TrackerData) {
  if (!data) {
    if (allData.length > 0) {
    _sendToServer(allData);
    allData.length = 0;
    }
    clearTimeout(timer);
    return;
  }

  const config = getConfig();
  data = _wrapperData(data, config);
  allData.push(data);
  clearTimeout(timer);
  timer = setTimeout(() => {
  _sendToServer(allData);
  allData.length = 0;
  }, config.delayTime);
}

function _sendToServer(data: TrackerData | TrackerData[], isAjax?: boolean) {
  console.log(JSON.stringify(data, null, 2));
  if (!isArray(data)) {
    data = [data];
  }

  return http(JSON.stringify(data), isAjax);
}

function _wrapperData(data: TrackerData, config: Config) {
  index++;
  return {
  url: location.origin,
    host: location.host,
    path: location.pathname,
    hash: location.hash,
    ...data,
    ...clientInfo(),
    ...trackerInfo,
    ...getUserInfo(),
    trackTime: Date.now(),
    "useServerTime": config.useServerTime,
    identify: getCookie(config.identify || TRACKER_IDENTIFY),
    projectId: config.projectId,
    "version": config.version,
    uuid: uuid + '-' + index,
  };
}
