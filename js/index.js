class CssClass {
  constructor(params) {
    this._name = params.name;
    this._style = params.style;
  }

  addStyle(el) {
    this._style.push(el);
  }

  deleteStyle(el) {
    let tmp = this._style.indexOf(el);
    this._style.splice(tmp, 1);
  }

  consructStyle() {
    let str = "";
    for (let i = 0; i < this._style.length; i++) {
      str += this._style[i] + "; ";
    }
    return str;
  }

  getCSS() {
    let str = `.${this._name} {${this.consructStyle()}}`;
    return str;
  }
}

let objWrap = {
  name: "wrap",
  style: ["display: flex"],
};

objWrapStyle = new CssClass(objWrap);

let objBlock = {
  name: "block",
  style: ["width: 300px", "margin: 10px"],
};

objBlockStyle = new CssClass(objBlock);

let objImg = {
  name: "img",
  style: ["width: 100%"],
};

objImgStyle = new CssClass(objImg);

let objText = {
  name: "text",
  style: ["qwerty"],
};

objTextStyle = new CssClass(objText);
objTextStyle.addStyle("text-align: justify"); //додавання стилю в масив стилей
objTextStyle.deleteStyle("qwerty"); //видалення стилю з масиву стилей

let strStyle = `${objWrapStyle.getCSS()} ${objBlockStyle.getCSS()} ${objImgStyle.getCSS()} ${objTextStyle.getCSS()}`;
