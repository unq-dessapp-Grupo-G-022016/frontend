'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('BotoneraCtrl', function ($scope, bundleService, apiService, createEventService, dataService, $window, $location) {




        $scope.test = "bind";

        $scope.addUsers = function () {
            //$window.location.href = 'http://www.google.com';
            $window.location.href = apiService.url() + 'rest/user/addUsers';
        };

        $scope.viewUsers = function () {
            //$window.location.href = 'http://www.google.com';
            $window.location.href = apiService.url() + 'rest/user/users';
        };

        $scope.viewEvents = function () {
            //$window.location.href = 'http://www.google.com';
            $window.location.href = apiService.url() + 'rest/event/events';
        };

        $scope.addEvents = function () {
            //$window.location.href = 'http://www.google.com';
            $window.location.href = apiService.url() + 'rest/event/addEvents';
        };



        /*
                $scope.viewEventsJSON = function () {
                    bundleService.get().then(function (response) {
                        var jsonBundle = response.data;
                        $scope.datta = jsonBundle;
                    },
                        function (error) {
                            console.log(error);
                        });
                };
        */




        //DEMO EVENTS
        var ev1 =
            {
                address: "Avenida Corrientes 80",
                name: "SEP7IMO DIA Soda Stereo / Cirque du Soleil",
                price: { ammount: 0 },
                endTime: "2016-12-06T15:33:19.432",
                attenders: { maxCapacity: 1500, recommendedMinGroup: 1, recommendedMaxGroup: 25 },
                details: "Hace dos años que el equipo del Cirque du Soleil trabaja junto a Pop Art Music y Soda Stereo, en el proceso creativo del show inspirado en la música y la historia del grupo, que contendrá material inédito.",
                profile: {
                    categories: [{ "name": "Rock" }, { "name": "Music" }, { "name": "Circo" }]
                },
                startTime: "2016-12-06T15:33:19.432",
                strictSchedule: true,
                imageUrl: "http://www.lunapark.com.ar/images/eventos/eventos/septimo-dia-soda-cirque.jpg"
            };

        var ev2 =
            {
                address: "Lebensohn 387",
                name: "Entrega Final dessApp",
                price: { ammount: 0 },
                endTime: "2016-12-06T15:33:19.432",
                attenders: { maxCapacity: 1500, recommendedMinGroup: 1, recommendedMaxGroup: 25 },
                details: "4ta Demo Desarrollo de aplicaciones",
                profile: {
                    categories: [{ "name": "POO" }, { "name": "Spring" }, { "name": "Angular" }, { "name": "Hibernate" }, { "name": "Auth0" }]
                },
                startTime: "2016-12-06T15:33:19.432",
                strictSchedule: true,
                imageUrl: "http://media.diariopopular.com.ar/adjuntos/143/imagenes/000/969/0000969603.JPG"
            };

        var ev3 =
            {
                address: "Lebensohn 387",
                name: "Open Source para la Innovación en Desarrollo Tecnológico",
                price: { ammount: 0 },
                endTime: "2016-12-06T15:33:19.432",
                attenders: { maxCapacity: 1500, recommendedMinGroup: 1, recommendedMaxGroup: 25 },
                details: "Jon 'Maddog' Hall, Director Ejecutivo de Linux International, dará una conferencia en la Universidad nacional de Quilmes (UNQ), en el Salón Auditorio.",
                profile: {
                    categories: [{ "name": "Código Abierto" }, { "name": "Software " }, { "name": "Tecnológico" }, { "name": "Linux" }]
                },
                startTime: "2016-12-06T15:33:19.432",
                strictSchedule: true,
                imageUrl: "http://www.aporrea.org/imagenes/2012/gente/john-hall-maddog-na-linux-magazine.jpg"
            };

        var ev4 =
            {
                address: "Lebensohn 387",
                name: "Conferencia de Gilles Dowek sobre la enseñanza de la computación",
                price: { ammount: 0 },
                endTime: "2016-12-06T15:33:19.432",
                attenders: { maxCapacity: 1500, recommendedMinGroup: 1, recommendedMaxGroup: 25 },
                details: "Se trata de la experiencia francesa de crear una currícula para la enseñanza de la computación desde el nivel inicial hasta el fin del secundario.",
                profile: {
                    categories: [{ "name": "Computación" }, { "name": "educación" }]
                },
                startTime: "2016-12-06T15:33:19.432",
                strictSchedule: true,
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Gilles_Dowek.jpg/260px-Gilles_Dowek.jpg"
            };

        var ev5 =
            {
                address: "Lebensohn 387",
                name: "Inscripción a carreras de grado para el año lectivo 2017",
                price: { ammount: 0 },
                endTime: "2016-12-06T15:33:19.432",
                attenders: { maxCapacity: 1500, recommendedMinGroup: 1, recommendedMaxGroup: 25 },
                details: "La Universidad Nacional de Quilmes (UNQ) abre la inscripción para el primer cuatrimestre de su ciclo lectivo 2017. Mediante Resolución 1648/16,",
                profile: {
                    categories: [{ "name": "Inscripción" }, { "name": "Cuatrimestre" }]
                },
                startTime: "2016-12-06T15:33:19.432",
                strictSchedule: true,
                imageUrl: "http://www.unq.edu.ar/advf/imagenes/57dfefcce627b_1397x339.jpg"
            };

        var ev6 =
            {
                address: "Avenida Corrientes 80",
                name: "DAMAS GRATIS",
                price: { ammount: 0 },
                endTime: "2016-12-06T15:33:19.432",
                attenders: { maxCapacity: 1500, recommendedMinGroup: 1, recommendedMaxGroup: 25 },
                details: "PABLO LEZCANO VIENE AL LUNA PARK A FESTEJAR SU CUMPLEAÑOS Y CERRAR EL AÑO CON TODO!!!! DAMAS GRATIS HARA UN SHOW ESPECTACULAR RECORRIENDO TODOS SUS EXITOS. NO TE LO PODES PERDER.",
                profile: {
                    categories: [{ "name": "Cumbia" }, { "name": "Music" }]
                },
                startTime: "2016-12-06T15:33:19.432",
                strictSchedule: true,
                imageUrl: "http://www.lunapark.com.ar/images/eventos/eventos/damas-gratis.jpg"
            };

        var ev7 =
            {
                address: "Avenida Corrientes 80",
                name: "JOE SATRIANI - Surfing to Shockwave 2016 Tour Latinoamérica",
                price: { ammount: 0 },
                endTime: "2016-12-06T15:33:19.432",
                attenders: { maxCapacity: 1500, recommendedMinGroup: 1, recommendedMaxGroup: 25 },
                details: "Ganador del premio “The Maestro” en la 11a Ceremonia Anual de los premios Classic Rock Roll of Honour.",
                profile: {
                    categories: [{ "name": "Rock" }, { "name": "Music" }]
                },
                startTime: "2016-12-06T15:33:19.432",
                strictSchedule: true,
                imageUrl: "http://music.raccoonknows.com/wp-content/uploads/2015/02/joe-satriani-Raccoon-Knows.jpg"
            };

        var ev8 =
            {
                address: "Avenida Corrientes 80",
                name: "Comic-Con",
                price: { ammount: 0 },
                endTime: "2016-12-06T15:33:19.432",
                attenders: { maxCapacity: 1500, recommendedMinGroup: 1, recommendedMaxGroup: 25 },
                details: "Llega una nueva edición de la franquicia de las convenciones más importante de Comics  de  Estado unidos. Comic Con tendrá nuevos invitados del mundo del dibujo, aunque también artistas de la cultura pop",
                profile: {
                    categories: [{ "name": "Comic" }]
                },
                startTime: "2016-12-06T15:33:19.432",
                strictSchedule: true,
                imageUrl: "http://www.elobjetivo.com/principal/images/NOTAS/14-04-2015/1.jpg"
            };

        var ev9 =
            {
                address: "Av. Costanera Rafael Obligado 1221",
                name: "Caix",
                price: { ammount: 0 },
                endTime: "2016-12-06T15:33:19.432",
                attenders: { maxCapacity: 1500, recommendedMinGroup: 1, recommendedMaxGroup: 25 },
                details: "Ubicado dentro del popular complejo Costa Salguero, a metros del río y del aeroparque Jorge Newbery, Caix reúne desde hace años a gran cantidad de jóvenes de la noche porteña.",
                profile: {
                    categories: [{ "name": "Boliche" }]
                },
                startTime: "2016-12-06T15:33:19.432",
                strictSchedule: true,
                imageUrl: "http://cdn01.ib.infobae.com/adjuntos/162/imagenes/014/722/0014722252.jpg"
            };

        var ev10 =
            {
                address: "Av.Cnel.Roca 6922",
                name: "Creamfields",
                price: { ammount: 0 },
                endTime: "2016-12-06T15:33:19.432",
                attenders: { maxCapacity: 1500, recommendedMinGroup: 1, recommendedMaxGroup: 25 },
                details: "Creamfields es un festival de música electrónica celebrado anualmente cada mes de agosto en Liverpool desde 1998, organizado por los responsables del club nocturno Cream.",
                profile: {
                    categories: [{ "name": "Boliche" }]
                },
                startTime: "2016-12-06T15:33:19.432",
                strictSchedule: true,
                imageUrl: "http://www.creamfields.com/2013/files/Anthony-Mooney-Creamfields-063-1050x350.png"
            };

        var ev11 =
            {
                address: "Brown 687, Quilmes, Buenos Aires",
                name: "Blend",
                price: { ammount: 0 },
                endTime: "2016-12-06T15:33:19.432",
                attenders: { maxCapacity: 1500, recommendedMinGroup: 1, recommendedMaxGroup: 25 },
                details: "Este poderoso trío se presenta en concierto en Blend Pub. Un Trío de lujo para darle un cierre a un año cargado de energía, buena música y buenos amigos que han pasado por el ciclo de Blend.",
                profile: {
                    categories: [{ "name": "Bar" }]
                },
                startTime: "2016-12-06T15:33:19.432",
                strictSchedule: true,
                imageUrl: "http://elvocerito.com/sitio2013/wp-content/uploads/2014/05/martes-de-Jazz-600x399.jpg"
            };

        var ev12 =
            {
                address: "Colón 215, Quilmes, Buenos Aires",
                name: "Antares",
                price: { ammount: 0 },
                endTime: "2016-12-06T15:33:19.432",
                attenders: { maxCapacity: 1500, recommendedMinGroup: 1, recommendedMaxGroup: 25 },
                details: "Fábrica Antares: cerveza artesanal Argentina desde 1998. Somos una cervecería artesanal. Abrimos nuestras puertas el 19 de diciembre de 1998 en Mar del Plata y desde entonces nuestro objetivo es hacer las mejores cervezas.",
                profile: {
                    categories: [{ "name": "Bar" }]
                },
                startTime: "2016-12-06T15:33:19.432",
                strictSchedule: true,
                imageUrl: "http://www.emprendedorxxi.coop/ImagenesWeb/antaresmdp.jpg"
            };

        var ev13 =
            {
                address: "Nicolás Videla 342 Quilmes",
                name: "Yuppies",
                price: { ammount: 0 },
                endTime: "2016-12-06T15:33:19.432",
                attenders: { maxCapacity: 1500, recommendedMinGroup: 1, recommendedMaxGroup: 25 },
                details: "Caracterizado siempre por su inigualable variedad en cervezas tanto artesanales como internacionales, Yuppies cuenta con un menú único a la hora de degustar las mejores bebidas.",
                profile: {
                    categories: [{ "name": "Bar" }]
                },
                startTime: "2016-12-06T15:33:19.432",
                strictSchedule: true,
                imageUrl: "http://yuppiesbar.com.ar/wp-content/uploads/2013/12/cropped-logo-yuppies2.png"
            };












        //DEMO EVENTS
        $scope.addDemoEvents = function () {
            //e1
            createEventService.save(ev1).then(function (response) {
                console.log("add e1 ok");
            },
                function (error) {
                    console.log("add e1 fail");
                });

            //e2
            createEventService.save(ev2).then(function (response) {
                console.log("add e2 ok");
            },
                function (error) {
                    console.log("add e2 fail");
                });

            //e3
            createEventService.save(ev3).then(function (response) {
                console.log("add e3 ok");
            },
                function (error) {
                    console.log("add e3 fail");
                });

            //e4
            createEventService.save(ev4).then(function (response) {
                console.log("add e4 ok");
            },
                function (error) {
                    console.log("add e4 fail");
                });

            //e5
            createEventService.save(ev5).then(function (response) {
                console.log("add e5 ok");
            },
                function (error) {
                    console.log("add e5 fail");
                });

            //e6
            createEventService.save(ev6).then(function (response) {
                console.log("add e6 ok");
            },
                function (error) {
                    console.log("add e6 fail");
                });

            //e7
            createEventService.save(ev7).then(function (response) {
                console.log("add e7 ok");
            },
                function (error) {
                    console.log("add e7 fail");
                });

            //e8
            createEventService.save(ev8).then(function (response) {
                console.log("add e8 ok");
            },
                function (error) {
                    console.log("add e8 fail");
                });

            //e9
            createEventService.save(ev9).then(function (response) {
                console.log("add e9 ok");
            },
                function (error) {
                    console.log("add e9 fail");
                });

            //e10
            createEventService.save(ev10).then(function (response) {
                console.log("add e10 ok");
            },
                function (error) {
                    console.log("add e10 fail");
                });

            //e11
            createEventService.save(ev11).then(function (response) {
                console.log("add e11 ok");
            },
                function (error) {
                    console.log("add e11 fail");
                });

            //e12
            createEventService.save(ev12).then(function (response) {
                console.log("add e12 ok");
            },
                function (error) {
                    console.log("add e12 fail");
                });

            //e13
            createEventService.save(ev13).then(function (response) {
                console.log("add e13 ok");
            },
                function (error) {
                    console.log("add e13 fail");
                });




        };




    });
