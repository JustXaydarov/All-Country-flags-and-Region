const container = document.getElementById("container")

const request = new XMLHttpRequest()

request.open(
    "GET",
    "https://restcountries.com/v3.1/all?fields=name,flags,region,capital"
)

request.send()

request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText)

    data.forEach((country) => {
        const card = document.createElement("div")

        card.classList.add("card")

        card.innerHTML = `
      <img src="${country.flags.png}" alt="flag">
      <div class="card-body">
        <h3>${country.name.common}</h3>
        <p>
          <b>Region:</b> ${country.region}
        </p>
        <p>
          <b>Capital:</b> ${country.capital?.[0] || "No capital"}
        </p>
      </div>

    `
        container.appendChild(card)

    })

})

