const displayInfo = document.getElementById('root');
function info(){
    return `
    <div class="container">
    <span>NAME:</span> <h2> Victory Omowumi Balogun</h2>
    <span>HEIGHT:</span><h3>  5'5</h3>
    <span>COUNTRY:</span>  <h3> Nigeria</h3>
    </div>
    `
}
displayInfo.innerHTML = info();