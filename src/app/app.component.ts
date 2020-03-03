import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parkway';

  
  constructor() { }

  ngOnInit() {
    this.runSuffix('ababa', 'aba')
    this.runPrefix('ababa', 'aba')
    this.leng('ababa', 'aba')
  }
  suffix = this.runSuffix('ababa', 'aba');
  prefix = this.runPrefix('ababa', 'aba');
  sulength = this.leng('ababa', 'aba')

  div1="I am div 1"
  div2="I am div 2"
  div3="I am div 3"

  all:any[];
  real:any[];
  x:any;
  runSuffix(ababa:string, newWord: string){
    let x= 0;
    let y = 0;
    let suff = []
    this.all =ababa.split("");
    this.real =newWord.split("");
 

    for(x; x <= this.all.length-1; x++){
      for(y; y<= this.real.length-1; y++){
        if(this.all[x] = this.real[y]){
          console.log( this.all[x] +" "+ this.real[y])
          // return ababa[x];
          suff.push(this.all[x])
        }
        else{
          console.log(" none")
          // return " ";
        }

        
      }

      suff.push(this.all[x])
      
    }
    console.log(suff)
    return suff

  }
  runPrefix(ababa:string, newWord: string){
    let x= 0;
    let y = 0;
    let m = this.all.length -1
    let n = this.real.length -1
    let pref= [];

    this.all =ababa.split("");
    this.real =newWord.split("");


    for(m; m >= x; m--){
      for(n; n>= y; n--){
        if(this.all[m] = this.real[n]){
          console.log( this.all[m] +" "+ this.real[n])
          pref.push(this.all[m])
          // return ababa[x];
        }
        else{
          console.log(" none")
          // return " ";
        }
      }
      

    }
    console.log(pref)
    return pref;
  }


  leng(a:string,b:string){
    let first = this.runSuffix(a,b)
    let second = this.runPrefix(a,b)

    if(first = second){
      console.log(second.length)
      return second.length;
    }
    else{
      console.log(0)
      return 0;
    }
  }


  click1(){

    alert('div1')
  }
  click(d){

    alert(d)
  }

  click2(){

    alert('div2')
  }

  click3(){

    alert('div3')
  }
}


