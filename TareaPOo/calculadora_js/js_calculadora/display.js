class Display{
    constructor(Displayvalor1,Displayvalor2){
        this.Displayvalor1=Displayvalor1
        this.Displayvalor2=Displayvalor2
        this.calcular= new Calculadora();
        this.tipo_op=undefined
        this.tipo_op_r=undefined
        this.valor1='';
        this.valor2='';
        this.signos={suma:"+",resta:"-",multiplicar:"*",dividir:"/",residuo:"%",division_entera:"//",exponente:"^"}
        }
        borrar_todo() {
            this.valor1 = ''; 
            this.valor2 = '';
            this.tipo_op = undefined; 
            this.imprimir_num();
         
            
        }
        borrar(){
            this.valor1=this.valor1.toString().slice(0,-1);
            this.imprimir_num();
        }
        agregar_num(numero){
            if(numero === "." && this.valor1.includes('.'))return;
            this.valor1=this.valor1.toString() + numero.toString() ;
            this.imprimir_num();
        }
        imprimir_num(){
            this.Displayvalor2.textContent=this.valor2;
            this.Displayvalor1.textContent=`${this.valor1} ${this.signos[this.tipo_op] || '' }`;
   
           }
           calculo() {
            const valor1 = parseFloat(this.valor1);
            const valor2 = parseFloat(this.valor2);
            if (isNaN(valor1) || isNaN(valor2)) return;
            this.valor1 = this.calcular  [this.tipo_op]  (valor2, valor1);

            this.valor1=this.valor1.toString();
          }
          
    resolver(tipo){
        this.tipo_op !== "igual" && this.calculo();
        this.tipo_op= tipo;
        this.valor2=this.valor1 || this.valor2;
        this.valor1='';
        this.imprimir_num()
    }
    resolver_1(tipo) {
    
        if (tipo === "raiz_cuadrada") {
            const valor1 = parseFloat(this.valor1);
            if (isNaN(valor1)) return;
            this.valor1 = this.calcular.raiz_cuadrada(valor1);
        }

        
        else if(tipo==="factos"){
            const valor1 = parseFloat(this.valor1);
            if (isNaN(valor1)) return;
            this.valor1 = this.calcular.factos(valor1);
        }
        else if(tipo=="divisores"){
            const valor1 = parseFloat(this.valor1);
            if (isNaN(valor1)) return;
            this.valor1 = this.calcular.divisores(valor1);
        }

      this.reset();
    }
   reset(){
    this.valor2=this.valor1
    this.valor1=''
   this.imprimir_num();
   this.valor2=''
   }
}