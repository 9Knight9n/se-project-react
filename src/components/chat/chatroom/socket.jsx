import ReconnectingWebSocket from 'reconnecting-websocket';
import {  message } from 'antd';


let rws ;
const key = 'updatable';

export const connect= async (url,showMessage)=>{
    if(showMessage)
        message.loading({ content: 'Connecting...', key });
    const options = {
        // WebSocket: WS, // custom WebSocket constructor
        connectionTimeout: 1000,
        // maxRetries: 10,
    };
    rws = new ReconnectingWebSocket(url,[],options);
    if(showMessage)
        message.success({ content: 'Connected', key, duration: 2 });
}
export const listen= async (evtName,func)=>{

    rws.addEventListener(evtName,evt => func(JSON.parse(evt.data)));
}

export const send= async (obj)=>{

    rws.send(JSON.stringify(obj));
}