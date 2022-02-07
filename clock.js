const container = document.querySelector('.container');

const clock = () => {
    
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();


    html = `
    <div class="clock">
    <span class="hour">
        ${hours}
    </span>
    <span class="minute">
        ${minutes}
    </span>
    <span class="seconds">
        ${seconds}
    </span>
</div>
    `;

    container.innerHTML = html;

    

};

setInterval(clock, 1000);
