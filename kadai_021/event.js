
//ボタンがクリックされたら2秒後に文章を書き換えるプログラムを記述してください。
//作業手順は後述の各Stepを参考にしてください。

const text = document.getElementById('text');

const btn = document.getElementById('btn');

btn.addEventListener('click',() => {
    setTimeout(() => {
        text.textContent ='ボタンをクリックしました';
        }, 2000);
        });