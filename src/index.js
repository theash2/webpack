import _ from 'lodash';
import PrintMe from "./print";
function component() {
    let element = document.createElement('div');

    //lodash 引入通过import
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    let btn = document.createElement('button');
    btn.innerHTML = '点击打印事件';
    btn.onclick = PrintMe;
    element.append(btn);
    return element;
}

document.body.appendChild(component());