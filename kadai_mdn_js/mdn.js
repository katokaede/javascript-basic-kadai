
//年、月、日をそれぞれDateクラスの関数を使って取得して、
//文字列としてconsole.logで出力します。
const today = new Date();

const date =() => {
    console.log(today.getFullYear()+'年', today.getMonth()+1+'月',today.getDate()+'日');
}

date();

