console.log("jestem w module notes");

//console.log('exports', exports);
//console.log(exports === module.exports);
//console.log('dirname', __dirname);
//console.log('filename', __filename);
//console.log('require', require);
console.log('module', module);
setTimeout(()=>{
  console.log('module', module.loaded);
}, 2000);


module.exports = {
  txt: "coś zwrócone z modułu notes"
}