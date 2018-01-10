document.getElementById('file-js').innerText = 'Self file JS does work.';

function tryFetchMaliciousURL () {
  document.head.innerHTML = '<meta http-equiv="Content-Security-Policy" content="">';
  fetch('//example.com').then(v => console.info(v));
}

function tryLoadMaliciousImage() {
  document.head.innerHTML = '<meta http-equiv="Content-Security-Policy" content="">';
  document.body.innerHTML = '<img src="http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg" width="50%" />';
}