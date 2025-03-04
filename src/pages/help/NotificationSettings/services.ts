import request from '@/utils/request';
import { RequestMethod } from '@/store/common';
import { WebhookType, ScriptType, ChannelType } from './types';

export const getWebhooks = function (): Promise<WebhookType[]> {
  return request('/api/n9e/webhooks', {
    method: RequestMethod.Get,
  }).then((res) => {
    return res.dat;
  });
};

export const putWebhooks = function (data: WebhookType[]) {
  return request('/api/n9e/webhooks', {
    method: RequestMethod.Put,
    data,
  });
};

export const getNotifyScript = function (): Promise<ScriptType> {
  return request('/api/n9e/notify-script', {
    method: RequestMethod.Get,
  }).then((res) => {
    return res.dat;
  });
};

export const putNotifyScript = function (data: ScriptType) {
  return request('/api/n9e/notify-script', {
    method: RequestMethod.Put,
    data,
  });
};

export const getNotifyChannels = function (): Promise<ChannelType[]> {
  return request('/api/n9e/notify-channel', {
    method: RequestMethod.Get,
  }).then((res) => {
    return res.dat;
  });
};

export const putNotifyChannels = function (data: ChannelType[]) {
  return request('/api/n9e/notify-channel', {
    method: RequestMethod.Put,
    data,
  });
};

export const getNotifyContacts = function (): Promise<ChannelType[]> {
  return request('/api/n9e/notify-contact', {
    method: RequestMethod.Get,
  }).then((res) => {
    return res.dat;
  });
};

export const putNotifyContacts = function (data: ChannelType[]) {
  return request('/api/n9e/notify-contact', {
    method: RequestMethod.Put,
    data,
  });
};

export const getNotifyConfig = function (ckey: 'smtp_config' | 'ibex_server'): Promise<string> {
  return request('/api/n9e/notify-config', {
    method: RequestMethod.Get,
    params: { ckey },
  }).then((res) => {
    return res.dat;
  });
};

export const putNotifyConfig = function (data: { ckey: 'smtp_config' | 'ibex_server'; cvalue: string }) {
  return request(`/api/n9e/notify-config`, {
    method: RequestMethod.Put,
    data,
  });
};
