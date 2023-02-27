const picArray = ['403.webp', '403_1.png', '403_2.gif', '404_1.jpg', '404_2.png', 'Login.png', 'about-bg.jpg', 
                  'accepted.png', 'background.jpg', 'confirm.webp', 'contact-bg.jpg', 'create-post.jpg', 'decline.png', 
                  'del_button.jpg', 'del_button.png', 'delete.gif', 'delete.jpg', 'erase.jpg', 'home-bg.jpg', 'ico.png', 
                  'post-bg.jpg', 'post-sample-image.jpg', 'response.webp', 'signin.jpg', 'signin.png', 'signup.jpg']

let fileName = 0 // first element

// get buttons
const btnPrevious = document.getElementById('btnPrevious')
const btnNext = document.getElementById('btnNext')

// handler for button "Previous"
function fnPreviuos() {
    // deactivate button "Previous" if first element
    if (fileName === 0) {
        btnPrevious.disabled = true;  
    }
    else {
        fileName -= 1
        getPicture()
        // activate button "Next"
        btnNext.disabled = false;  
    }
}

function fnNext() {
    // deactivate button "Next" if last element
    if (fileName === picArray.length-3) {
        btnNext.disabled = true;  
    }
    else {
        fileName += 1
        getPicture()
        // activate button "Previous"
        btnPrevious.disabled = false;  
    }
}

//get div with photos
const customDiv = document.getElementById("main-view")
    
// screen builder handler
function getPicture() {
    customDiv.innerHTML = `
    <p><img class="slideRight" src="asset/${picArray[fileName]}" alt="picture"></p>
    <p><img class="slide" src="asset/${picArray[fileName+1]}" alt="picture"></p>
    <p><img class="slideLeft" src="asset/${picArray[fileName+2]}" alt="picture"></p>`

}

// buttons EventListeners - onclick event
btnPrevious.addEventListener("click", fnPreviuos)
btnNext.addEventListener("click", fnNext)
