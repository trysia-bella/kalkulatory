
function insert (num, persen){
    document.form.textarea.value =document.form.textarea.value + num; 
    var result = num * persenvalue / 100;
    return result;
}

function equal(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = eval(hasil);
}


function clean(){
    document.form.textarea.value ="";
}


function back(){
    var hasil = document.form.textarea.value;
    document.form.textarea.value = hasil .substring(0,hasil.length-1);

}

