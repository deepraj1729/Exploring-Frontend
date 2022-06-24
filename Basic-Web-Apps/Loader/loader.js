let runLoader = ()=>{
    let loading, contents;

    loading = document.getElementById("loader");
    contents = document.querySelector(".contents");

    setTimeout(function changeState(){
        loading.style.display = 'none';
        contents.style.display = 'block';
        }, 2000);
}

runLoader();