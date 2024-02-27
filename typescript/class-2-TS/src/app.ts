const button = document.querySelector("button")!;

function log(data: string) {
    console.log("click" + data)
}

// log("hello")
button.addEventListener("click", log.bind(null, "hello"))