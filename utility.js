function a(s) {
    for (const e of document.styleSheets[0].rules) {
        if (e.selectorText == s) {
            return e.cssText.slice(e.cssText.indexOf(' ') + 1);
        }
    }
    return undefined;
}

function b(str) {
    return str.split(' ').filter(word => word !== '');
}

function getObject(s) {
    let t  = [];
    for (const e of b(s)) {
        t.push(a('.' + e));
    }
    return t;
}
