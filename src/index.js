import _ from 'lodash';
import PrintMe from "./print";
import './style.css';
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

let element = component(); // 存储 element，以在 print.js 修改时重新渲染
document.body.appendChild(element);
if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
        document.body.appendChild(element);
    })
}