
let information = [
    {
        date: 'Apr.18,2023',
        heading: 'Employees Enjoy Q&A With New Management Team: Nothing Off Limits',
        img: './pic/sider image 02.jpg',
        para: 'There was a policy briefing for employees before the press had their chance, and the Q&A was unscripted and uncensored. The eight executives in attendance shared their true feelings with the crowd.',
    },
    {
        date: 'Apr.17,2023',
        heading: '"Lets change the future of cars!" Press Q&A Helps Illuminate Two New Principles',
        img: './pic/sider image 03.jpg',
        para: 'The questions and answer session at a recent conference dug deeper into two ideas expressed by the new management team: "carbon neutrality" and "expanding the value of mobility."',
    },
    {
        date: 'Apr.14,2023',
        heading: 'Accelerating the shift to a Mobility Company: President Sato Talks about Toyota`s F',
        img: './pic/sider image 04.jpg',
        para: 'The eyes of the world were on a recent briefing about Toyotas new management structure. There, new President Koji Sato explained the journey of transformation into a mobility company.',
    },
    {
        date: 'Apr.14,2023',
        heading: 'Koji Satos "First Job as President"--A Carmakers Ceremony for 1,440 New Recruits',
        img: './pic/sider image 05.jpg',
        para: 'What was President Satos message at Toyotas first entrance ceremony under its new leadership team? And what special surprise did the carmaker have in store?',
    },
    {
        date: 'Apr.12,2023',
        heading: 'Whooping with Delight--Behind the Scenes of RZ Development',
        img: './pic/sider image 06.jpg',
        para: 'Yuta Tomikawa gets his turn in the car that had Chairman Akio Toyoda and President Koji Sato whooping with delight. A report on the RZ development teams travails leading up to the launch.',
    },

]

var aboutDate = document.querySelector('.date')
var aboutHeading = document.querySelector('.heading')
var aboutImg = document.querySelector('.siderImg')
var aboutInfo = document.querySelector('.para02')
var dots = document.getElementsByClassName('dot')

dots[0].addEventListener('click', ()=>{
    aboutDate.textContent = information[0].date;
    aboutHeading.textContent = information[0].heading;
    aboutImg.src= information[0].img;
    aboutInfo.textContent = information[0].para;

})

dots[1].addEventListener('click', ()=>{
    aboutDate.textContent = information[1].date;
    aboutHeading.textContent = information[1].heading;
    aboutImg.src= information[1].img;
    aboutInfo.textContent = information[1].para;

})

dots[2].addEventListener('click', ()=>{
    aboutDate.textContent = information[2].date;
    aboutHeading.textContent = information[2].heading;
    aboutImg.src= information[2].img;
    aboutInfo.textContent = information[2].para;

})

dots[3].addEventListener('click', ()=>{
    aboutDate.textContent = information[3].date;
    aboutHeading.textContent = information[3].heading;
    aboutImg.src= information[3].img;
    aboutInfo.textContent = information[3].para;

})

dots[4].addEventListener('click', ()=>{
    aboutDate.textContent = information[4].date;
    aboutHeading.textContent = information[4].heading;
    aboutImg.src= information[4].img;
    aboutInfo.textContent = information[4].para;

})
