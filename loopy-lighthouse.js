for(let i = 100; i <= 200; i++) {
  let loopy = "";
  let lighthouse = "";

  if(i % 3 === 0) {
    loopy = "Loopy";
  }
  if(i % 4 === 0) {
    lighthouse = "Lighthouse"
  }
  if(i % 3 !== 0 && i % 4 !== 0) {
    console.log(i);
  } else {
    console.log(loopy + lighthouse);
  }
}