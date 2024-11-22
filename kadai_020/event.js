//画面から取得したHTML要素が定数に代入されている
//ボタンをクリックした際に正しく文字変更がされている

const text = document.getElementById('text');

const btn = document.getElementById('btn');
 

 btn.addEventListener('click', () => {
   text.textContent = 'ボタンをクリックしました';
   console.log('ボタンをクリックしました');
 });