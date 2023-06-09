class Calculadora{
    suma(n1,n2){
        return n1+n2;
    }
    resta(n1,n2){
        return n1-n2;
    }
    multiplicar(n1,n2){
        return n1*n2;
    }
    dividir(n1,n2){
        return n1/n2;
    }
    residuo(n1,n2){
        return n1%n2;
    }
    division_entera(n1,n2){
        return Math.floor(n1 / n2);
        }
    raiz_cuadrada(n1){
        return Math.sqrt(n1) ;
        }
    exponente(n1,n2){
        return Math.pow(n1,n2);
    }
    factos(n1){
       let res=1;
    for(let i=1;i<=n1;i++){
        res*=i;
        
        }
        
        return(res)
    }
    divisores(n1){
        let rec=[];
        for(let i=1;i<=n1;i++){
            if((n1%i)===0){
               rec.push(i)
            }
        }
         return rec;
}
}