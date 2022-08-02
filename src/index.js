import _ from 'lodash';

function component() {
    let element = document.createElement('div');

    //lodash 引入通过import
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());