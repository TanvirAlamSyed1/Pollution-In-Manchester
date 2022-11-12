window.onload = () => {


    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000); // Change image every 2 seconds
    }

    // COLLAPSIBLE TEXT BUTTONS //
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

    window.addEventListener("resize", function(event) {
        for (i = 0; i < coll.length; i++) {
            if (coll[i].classList.contains("active")) {
                var content = coll[i].nextElementSibling;
                console.log(content)
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    }, true);



    ////////////
    // GRAPHS //
    ////////////
    const testElement = document.getElementById("chart-test");
    const testChart = new Chart(testElement, {
        type: 'doughnut',
        data: {
            labels: [
                'Road Transport',
                'Resuspension',
                'Commercial Cooking',
                'Construction',
                'Domestic Utilities',
                'Domestic Biomass',
                'Other'
            ],


            datasets: [{
                label: 'Testing numbers',
                data: [33, 14, 6, 28, 3, 10, 6],
                backgroundColor: [
                    '#D81B60',
                    '#22A8E2',
                    '#F9C21C',
                    '#41C176',
                    '#9343B9',
                    '#DA6CCB',
                    '#F18D3B'
                ],
                hoverOffset: 4

            }]
        },
        options: {
            responsive: false
        }

    });

    const element1 = document.getElementById("chart1-incineration");
    const chart1data = {
        labels: [
            '2010-11',
            '2011-12',
            '2012-13',
            '2013-14',
            '2014-15',
            '2015-16',
            '2016-17',
            '2017-18',
            '2018-19',
            '2019-20',
            '2020-21'
        ],

        datasets: [{
                label: 'Landfill',
                data: [55.5, 51.7, 46.0, 40.3, 31.8, 24.1, 24.3, 19.4, 12.6, 9.2, 9.2],
                borderColor: '#D83A74'
            },
            {
                label: 'Incineration',
                data: [1.9, 2.8, 5.5, 9.4, 17.9, 25.5, 27.0, 33.1, 38.4, 41.7, 43.7],
                borderColor: '#22A8E2'
            },
            {
                label: 'Recycled',
                data: [40.2, 42.9, 43.7, 45.5, 45.9, 46, 45.6, 44.8, 45.5, 45.8, 44.7],
                borderColor: '#F9C21C'
            },
            {
                label: 'Other treated disposal',
                data: [2.4, 2.6, 4.7, 4.7, 4.5, 4.5, 3.1, 2.8, 3.5, 3.4, 2.4],
                borderColor: '#D6D6D6'
            }

        ]

    }

    const chart1 = new Chart(element1, {
        type: 'line',
        data: chart1data,
        options: {
            responsive: false,
            plugins: {
                title: {
                    display: true,
                    text: "Destination of Waste"
                }
            }
        }
    });

    const element2 = document.getElementById("chart2-ewastedevices");
    const chart2data = {
        labels: ["Small Appliances", "Large Appliances", "Heating/Cooling Equipment", "Screens", "Small IT", "Lamps"],
        datasets: [{
            label: '% of E-Waste',
            data: [37, 22, 17, 14, 9, 1],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(255, 205, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(153, 102, 255, 0.4)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)'
            ],
            borderWidth: 1

        }]
    }
    const chart2 = new Chart(element2, {
        type: 'bar',
        data: chart2data,
        options: {
            responsive: false
        }
    });

}



//this should all be in dedicated js for charts only (for name schemes to be suitable)

//always set option:responsive to false, use the container for controlled responsive design