// $(document).ready(function(){
//     $("#search").on("keyup",function(){
//       var value = $(this).val().toLowerCase();
//       $("#card").filter(function(){
//        $(this).toggle($(this).text().toLowerCase().indexof(value)  > -1
       
//        );
//       });
//     });
// });



const search = document.getElementById("search");
const storeProudacts = document.querySelectorAll(".card");
search.addEventListener("keyup", (e) => {
    e.preventDefault();
    const searchValue = search.value.toLowerCase().trim();

    for(i = 0 ; i < storeProudacts.length; i++){
        if(storeProudacts[i].classList.contains(searchValue)){
            storeProudacts[i].style = "block";

        }else if(searchValue == ""){
            storeProudacts[i].style = "block";
        }else{
            storeProudacts[i].style = "none";
        }
    }
})



