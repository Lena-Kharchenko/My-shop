
// функція, яка вішає подію click на всі категорії з класом category-tools-item  


const handleClickOnElements = document.querySelectorAll(".category-tools-item");

for (let handleClickOnElement of handleClickOnElements) { 

    handleClickOnElement.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Element was clicked", event.currentTarget);


        //  відслідковую id кожного елемента категорії
        
        
        const categoryId = event.currentTarget.getAttribute('id');
        console.log(categoryId);
        
    });

}



