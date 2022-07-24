


const OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'eea403dc87mshb27d8ebb8b6799ap171de7jsn32b243bee4a4',
      'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
    }
  };

const fetchInfo = ip =>{
  return  fetch( `https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
    .then(res => res.json())
    .catch(err => console.error(error))
}

const from = document.getElementById("from")
const input = document.getElementById("input")
const btn = document.getElementById("btn")
const result = document.getElementById("result")


from.addEventListener("submit", async (e) => {
    e.preventDefault()
    const {value} = input
    if(!value) return

    btn.setAttribute("disabled", "")
    btn.setAttribute("aria-busy", "true")


    const ipInfo = await fetchInfo(value)

    if(ipInfo){
        result.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    btn.removeAttribute("disabled", "")
    btn.removeAttribute("aria-busy")
})