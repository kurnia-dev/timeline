fetch("timeline.json")
    .then(res => res.json())
    .then(d => loadTimeline(d))


function loadTimeline(data) { 
    const timeline = document.querySelector('.timeline')
    
    for (key in data) {
        let wrapper = document.createElement('div')
        wrapper.classList.add('timeline-poin-wrapper')

        let content = document.createElement('div')
        content.classList.add('timeline-poin')
          
        let title = document.createElement('h2')
        title.innerHTML = key

        content.append(title)

        let ul =  document.createElement('ul')
        for (i in data[key]) {
            let li = document.createElement('li')
            li.innerHTML = `<b>${i}</b> : ${data[key][i]}`
            ul.append(li)
        }
        
        content.append(ul)

        wrapper.append(content)
        timeline.append(wrapper)
    }
}