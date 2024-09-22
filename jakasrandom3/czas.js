function updateTime() {
  
    const now = new Date();


    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const year = now.getFullYear();


    const formattedDateTime = `Czas: ${hours}:${minutes}:${seconds} ${day}.${month}.${year}`;


    document.getElementById('time-display').textContent = formattedDateTime;
}

setInterval(updateTime, 10);