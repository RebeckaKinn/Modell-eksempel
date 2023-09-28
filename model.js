/*
Før man begynner å kode på prosjektet er det viktig å planlegge. Å lage en modell i forkant
er akkurat det. 
Se på skjermbildene, ta utgangspunkt i det som er tegnet og legg det inn i modellen i sitt 
rettmessige hjem. 

Vi deler opp modellen vår i tre deler: 
- APP
- INPUT
- DATA

APP er det som håndterer siden. Her kan vi ha de forskjellige sidene som skal kunne bestemme hvilke "view" som skal brukes, 
    man kan ha document.getElementByID der som legger informasjon i hoved-div'en i HTML, hvilke språk skal vises, darkmode on/off, etc. 

INPUT er alt som BRUKEREN kan putte inn av informasjon (data). Har man et inputfelt, checkbokser, handlekurd for eksempel, så skal 
    det inn her. Her lagres data i mellomtiden før det blir sendt videre til enten DATA delen i modellen, eller for andre endringer 
    i modellen. (Eksempel: Ting i handekurven hadde endret butikkens beholdning). 
    Disse skal stå med tomme value, slik at man ikke starter med data i input-feltene. 

DATA skal fungere som en "dummy-database". Siden alt vi skriver her er "frontend" så vil ikke noe av det vi legger inn i input-feltene 
    langtidslagres. Det betyr at når dere "saver" koden så forsvinner alt av informasjon som dere skrev inn manuelt på siden deres. 
    Lag dermed noe "dummy-data" i listene man har i DATA-delen, slik at dere kan teste ut siden deres mens dere jobber. 
    Det er ofte det i DATA som skal vises, loopes, hentes eller endres. 
    Det er fast informasjon som for eksempel: Gjøremål, varer i butikk, oppskrifter, undersøkelser, o.l. Alt avhengig av hvilket 
    prosjekt man jobber med. 

*/




const model = {

    app:{

        //VISER OG VELGER HVILKEN VIEW SOM SKAL VISES
        site: [
                'frontPage',
                'allRecipies',
                'seachrecipient',
                'addRecipie',
                'showRecipie'
            ],
        
        //POP-UP INDIKATORER
        settingsMenu: false,
        difficultyMenu: false,
        idgredientMenu: false,
        categoryMenu: false,
    },


    input: {

        //VALUES FRA INPUTFEILT LEGGES TIL HER
        addFoodItem: {
            id: null,
            title: '',
            difficulty: null,
            durationInMinutes: 0,
            recipie: [
                {idgredient: '', amount: ''},
            ],
            category: [],
            approach: '',
            src: 'demoImg.png'
        },

    },


    data: {

        //INNEHOLDER ALLE KATEGORIENE SOM SKAL BLI VIST
        category: [
                'Middag', 
                'Frokost',
                'Bake', 
                'Gjester',
                'Barn'
        ],

        //LAGRINGSPLASS FOR OPPSKRIFTER, FUNGERER SOM EN DATABASE
        recipieList: [
            {
                id: 1,
                title: 'Kjøttkaker',
                difficulty: 3,
                durationInMinutes: 30,
                recipie: [
                    {idgredient: 'Kjøttdeig', amount: '1 500g pk'},
                    {idgredient: 'Salt', amount: '1 ts'},
                    {idgredient: 'Løk', amount: '1/2, hakket'},
                    {idgredient: 'Mel', amount: '2 ss'},
                    {idgredient: 'Egg', amount: '1 stor'},
                ],
                category: ['Kjøtt', 'Middag'],
                approach: 'Moser alt sammen i en stor bolle, slå på plata og bruk en spiseskje til å lage boller. Stek noen minutter per side.',
                src: 'kjøttkaker.png'
            },
            {
                id: 2,
                title: 'Pannekaker',
                durationInMinutes: 40,
                difficulty: 2,
                recipie: [
                    {idgredient: 'Mel', amount: '5 dl'},
                    {idgredient: 'Salt', amount: '1 ts'},
                    {idgredient: 'Egg', amount: '2'},
                    {idgredient: 'Melk', amount: '3 dl'},
                ],
                category: ['Bake', 'Middag', 'Frokost'],
                approach: 'Rør alt sammen og stek i panna. Flip når den begynner å se fast ut. ',
                src: 'pannekaker.png'
            },
        ],

    }

};