class Termino {

  constructor() {
    this.mp = [];
    this.fp = [];
    this.used = false;
  }

  add_mp(item){
    this.mp.push(item);
  }
  add_fp(item){
    this.fp.push(item);
  }
}

function contarUnos(numero) {
  var contador = 0;
  while (numero) {
    numero &= (numero-1);
    contador++;
  }
  return contador;
}

function esPotencia2(n) {
	return n && (n & (n - 1)) === 0;
}

function addTerm(t,item,pos){
  if(item[pos] == null){
    /*This array is were our terms with
    n numbers of one are saved*/
    item[pos] = [];
    item[pos].push(t)
  }else{
      item[pos].push(t)
  }
}

function fp_equals(fp1,fp2) {
  for(let i = 0 ; i < fp1.length; i++)
    if(fp1[i] != fp2[i])
      return false;
  return true;
}

function diffsPotencia2(mp1,mp2) {
  diff = []
  for (let i = 0; i < mp1.length; i++) {
    diff.push(mp2[i] - mp1[i])
    if (!esPotencia2(diff[i])) {
      return false;
    }
  }
  if(diff.every( (val, i, arr) => val === arr[0] ))
    return true;
  else
    return false;
}

function searchForIPE(iterations) {
  let ipe = [];
  for (var x in iterations)
    for (var y in iterations[x])
      for (var z in iterations[x][y])
        console.log(iterations[x][y][z]);
  return ipe;
}
