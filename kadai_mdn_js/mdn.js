
//年、月、日をそれぞれDateクラスの関数を使って取得して、
//文字列としてconsole.logで出力します。
const today = new Date();

const date =() => {
    console.log(today.getFullYear());
    console.log(today.getMonth());
    console.log(today.getDate());
}

date();

