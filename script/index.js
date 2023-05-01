//

//var btn=document.getElementById('id_btn')


var flg_color=0

//btn.addEventListener('click',btnClicked)

function btnClicked(){

    alert('button clicked.')
    alert('flg is '+flg_color.toString)
    //var btn=document.getElementById('id_btn')
    //var main_back=document.getElementById('id_main')
    var body_back=document.getElementById('id_body')

    if (flg_color==0) {

        flg_color=1
        
        //main_back.style.backgroundColor='blue'
        body_back.style.backgroundColor='black'
    }
    if (flg_color==1) {
        
        flg_color=0

        //main_back.style.backgroundColor='red'
        body_back.style.backgroundColor='red'
    }
}