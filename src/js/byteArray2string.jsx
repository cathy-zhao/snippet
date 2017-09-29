import React, {Component} from 'react'
import {kmsFetch} from '../../../../../utils'
import { Buffer } from 'buffer'

export default class JRYW extends Component{

    componentDidMount() {
        kmsFetch("index/informationDetail.json", {"ls_id": "126"}).then(rep=>{
            let result = rep.results[0].content
            console.log("请求响应result: ", result)

            // https://nodejs.org/api/buffer.html#buffer_class_method_buffer_from_array
            const buf = Buffer.from(result)
            console.log("buf:", buf)

            // https://nodejs.org/api/buffer.html#buffer_buf_tostring_encoding_start_end
            var content = buf.toString()
            console.log("结果content:", content)
            this.setState({content})
        })
    }

    state={
        content: null
    }

    componentDidUpdate(prevProps, prevState) {
        document.getElementById("div").innerHTML = this.state.content;
    }

    parseToDOM(str){
        var div = document.getElementById("div")
        if(typeof str == "string")
            div.innerHTML = str;
        return div.childNodes;
    }

    render(){
        return  <div id="div"></div>
    }
}
