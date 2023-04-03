let slideIndex = 0;
const cartData = localStorage.getItem("cartData") ? JSON.parse(localStorage.getItem("cartData")) :
    [
        {
            line1: " Mumbai",
            line2: "2 Nights, 2 Flights, Meals, Tea/Coffee, Hotel, Volvo, Sightseeing",
            price: "$900.00",
            image: "images/mumbai.jpg",
            quantity: 1,
            total: "$900.00"
        },
    ]
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides.length > 0 && dots.length > 0) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

const loginHandler = (signUp) => {
    if (signUp) {
        document.getElementsByClassName("confirm-password")[0].style.display = 'block'
        document.getElementsByClassName("login-button")[0].textContent = 'SignUp and Login'
    } else {
        document.getElementsByClassName("confirm-password")[0].style.display = 'none'
    }
    if (document.getElementsByClassName('lg_btn 1')[0].textContent === "Login") {
        document.getElementById('id01').style.display = 'block'
    } else {
        document.getElementsByClassName('lg_btn 1')[0].textContent = 'Login'
        document.getElementsByClassName("lg_btn 2")[0].style.display = 'inline-flex'
        document.getElementsByClassName("cart")[0].style.display = 'none'
    }
}

const popUpLoginHandler = () => {
    const userName = document.getElementsByName("uname")[0].value
    const password = document.getElementsByName("psw")[0].value
    const signUp = document.getElementsByClassName("login-button")[0].textContent === 'SignUp and Login'
    const confirmPassword = document.getElementsByName("psw")[1].value

    if (signUp) {
        if (userName.length > 0 &&
            isValidPasswordPattern(password) &&
            password === confirmPassword) {
            document.getElementsByClassName("alert")[0].style.display = 'none'
            document.getElementsByClassName("alert")[1].style.display = 'none'
            document.getElementsByClassName("alert")[2].style.display = 'none'
            document.getElementsByClassName("alert")[3].style.display = 'none'
            document.getElementsByClassName("alert")[4].style.display = 'none'
            document.getElementsByClassName("alert")[5].style.display = 'none'
            document.getElementsByClassName("lg_btn 1")[0].textContent = "Logout"
            document.getElementsByClassName("lg_btn 2")[0].style.display = 'none'
            document.getElementsByClassName("cart")[0].style.display = 'inline-flex'
            document.getElementById('id01').style.display = 'none'
        } else {
            if (password === confirmPassword) {
                document.getElementsByClassName("alert")[5].style.display = 'none'
            } else {
                document.getElementsByClassName("alert")[5].style.display = 'block'
            }
            if (userName.length > 0) {
                document.getElementsByClassName("alert")[0].style.display = 'none'
            } else {
                document.getElementsByClassName("alert")[0].style.display = 'block'
            }
            if (password.length > 7) {
                document.getElementsByClassName("alert")[1].style.display = 'none'
            } else {
                document.getElementsByClassName("alert")[1].style.display = 'block'
            }
            if (/\d/.test(password)) {
                document.getElementsByClassName("alert")[2].style.display = 'none'
            } else {
                document.getElementsByClassName("alert")[2].style.display = 'block'
            }
            if (/[A-Z]/.test(password)) {
                document.getElementsByClassName("alert")[3].style.display = 'none'
            } else {
                document.getElementsByClassName("alert")[3].style.display = 'block'
            }
            if (/[@$!%*?^&#]/.test(password)) {
                document.getElementsByClassName("alert")[4].style.display = 'none'
            } else {
                document.getElementsByClassName("alert")[4].style.display = 'block'
            }
        }
    } else {
        if (userName.length > 0 &&
            isValidPasswordPattern(password)) {
            document.getElementsByClassName("alert")[0].style.display = 'none'
            document.getElementsByClassName("alert")[1].style.display = 'none'
            document.getElementsByClassName("alert")[2].style.display = 'none'
            document.getElementsByClassName("alert")[3].style.display = 'none'
            document.getElementsByClassName("alert")[4].style.display = 'none'
            document.getElementsByClassName("lg_btn 1")[0].textContent = "Logout"
            document.getElementsByClassName("lg_btn 2")[0].style.display = 'none'
            document.getElementsByClassName("cart")[0].style.display = 'inline-flex'
            document.getElementById('id01').style.display = 'none'
        } else {
            if (userName.length > 0) {
                document.getElementsByClassName("alert")[0].style.display = 'none'
            } else {
                document.getElementsByClassName("alert")[0].style.display = 'block'
            }
            if (password.length > 7) {
                document.getElementsByClassName("alert")[1].style.display = 'none'
            } else {
                document.getElementsByClassName("alert")[1].style.display = 'block'
            }
            if (/\d/.test(password)) {
                document.getElementsByClassName("alert")[2].style.display = 'none'
            } else {
                document.getElementsByClassName("alert")[2].style.display = 'block'
            }
            if (/[A-Z]/.test(password)) {
                document.getElementsByClassName("alert")[3].style.display = 'none'
            } else {
                document.getElementsByClassName("alert")[3].style.display = 'block'
            }
            if (/[@$!%*?^&#]/.test(password)) {
                document.getElementsByClassName("alert")[4].style.display = 'none'
            } else {
                document.getElementsByClassName("alert")[4].style.display = 'block'
            }
        }
    }
}

const packageOpenHandler = (h3, h4, price, image) => {
    document.getElementsByClassName("page1")[0].style.display = 'none'
    document.getElementsByClassName("page2")[0].style.display = 'block'
    document.getElementById("heading3").textContent = h3
    document.getElementById("heading4").textContent = h4
    document.getElementById("P1").textContent = price
    document.getElementById("imageP2").src = image
    localStorage.setItem("line1", h3)
    localStorage.setItem("line2", h4)
    localStorage.setItem("price", price)
    localStorage.setItem("image", image)
}

const homeClick = () => {
    document.getElementsByClassName("page1")[0].style.display = 'block'
    document.getElementsByClassName("page2")[0].style.display = 'none'
}

const handleBookNow = () => {
    cartData.push({
        line1: document.getElementById("heading3").textContent,
        line2: document.getElementById("heading4").textContent,
        price: document.getElementById("P1").textContent,
        image: document.getElementById("imageP2").src,
        quantity: 1,
        total: document.getElementById("P1").textContent
    })
    localStorage.setItem("cartData", JSON.stringify(cartData))
}

if (window.location.href.split('/')[3] === "cart.html") {
    window.onload = () => {
        let htmlElements = ''
        let currentCartData = localStorage.getItem("cartData") ? JSON.parse(localStorage.getItem("cartData")) : cartData
        currentCartData.map((item, index) => {
            let variable = '' +
                '<div class="product">' +
                '<div class="product-image">' +
                '            <img id="cart-image" src="' + item.image + '">' +
                '        </div>' +
                '        <div class="product-details">' +
                '            <div class="product-title" id="line1">' + item.line1 + '</div>' +
                '            <p class="product-description" id="line2">' + item.line2 + '</p>' +
                '        </div>' +
                '        <div class="product-price" id="price">' + item.price + '</div>' +
                '        <div class="product-quantity">' +
                '            <input type="number" value="' + item.quantity + '" min="1" onchange="handleOnChange(event.target.value, ' + index + ')">' +
                '        </div>' +
                '        <div class="product-removal">' +
                '            <button class="remove-product" onclick="removeItem(' + index + ')">' +
                '                Remove' +
                '            </button>' +
                '        </div>' +
                '        <div class="product-line-price" id="total' + index + '">' + item.total + '</div>' +
                '        </div>' +
                ''
            htmlElements = htmlElements + variable
        })
        document.getElementById("product").innerHTML = htmlElements
        calculateGrandTotal()
    }
}

const handleOnChange = (quantity, index) => {
    const currentData = localStorage.getItem("cartData") ? JSON.parse(localStorage.getItem("cartData")) : cartData
    currentData[index].total = '$' + quantity * (currentData[index].price).split('$')[1]
    currentData[index].quantity = quantity
    localStorage.setItem("cartData", JSON.stringify(currentData))
    document.getElementById("total" + index).textContent = '$' + quantity * (currentData[index].price).split('$')[1]
    calculateGrandTotal()
}

const removeItem = (index) => {
    const currentData = localStorage.getItem("cartData") ? JSON.parse(localStorage.getItem("cartData")) : cartData
    const updatedCurrentData = currentData.filter((data) => data !== currentData[index])
    localStorage.setItem("cartData", JSON.stringify(updatedCurrentData))
    location.reload()
}

const calculateGrandTotal = () => {
    let grandTotal = 0
    const currentData = localStorage.getItem("cartData") ? JSON.parse(localStorage.getItem("cartData")) : cartData
    currentData.map((item) => {
        grandTotal = grandTotal + parseInt(item.total.split('$')[1])
    })
    document.getElementById("grand-total").textContent = '$' + grandTotal
}

const isValidPasswordPattern = (passwordText) => {
    return /.{8,}/.test(passwordText)
        && /\d/.test(passwordText)
        && /[A-Z]/.test(passwordText)
        && /[@$!%*?^&#]/.test(passwordText)
}

const pay = () => {
    window.alert("PAYMENT COMPLETED")
    localStorage.setItem("cartData", JSON.stringify([]))
}

const burgerClick = (burger) => {
    if (burger) {
        document.getElementsByClassName("nav_bar")[0].style.display = "none"
        document.getElementsByClassName("burger")[0].style.display = "grid"
        document.getElementsByClassName("burger")[1].style.display = "none"
    } else {
        document.getElementsByClassName("nav_bar")[0].style.display = "block"
        document.getElementsByClassName("burger")[0].style.display = "none"
        document.getElementsByClassName("burger")[1].style.display = "grid"
    }
}
