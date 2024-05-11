let diceNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let eventButton = document.getElementById('eventButton');
let eventText = document.getElementById('eventText');
let enemyButton = document.getElementById('enemyButton');
let enemyText = document.getElementById('enemyText');


function randomEventRoller(event) {
    eventText.textContent = "Rolling...";
    setTimeout(function() {
        let diceRoll = Math.floor(Math.random() * diceNumbers.length);
        eventNumber = diceNumbers[diceRoll];
        console.log(eventData[eventNumber]);
        eventText.textContent = `${eventData[eventNumber]}`
        if (diceRoll > 4) {
            diceNumbers.splice(diceRoll, 1);
        }
        console.log(diceRoll)
        console.log(diceNumbers)
    }, 1000); 
}

function enemyRoller(event) {
    enemyText.classList.remove("roll-text");
    enemyText.classList.add("rolling-text");
    enemyText.textContent = "Rolling...";

    setTimeout(function() {
        enemyText.classList.remove("rolling-text");
        enemyText.classList.add("roll-text");
        
        let rolli = Math.ceil(Math.random() * 6);
        switch(rolli) {
            case 1:
                enemyText.textContent = "Kobold";
                break;
            case 2:
                enemyText.textContent = "Cultist (lue: ryöstelijä)";
                break;
            case 3:
                enemyText.textContent = "Ambush Drake";
                break;
            case 4:
                enemyText.textContent = "Guard";
                break;
            case 5:
                enemyText.textContent = "Greenest acolyte";
                break;
            case 6:
                enemyText.textContent = "Kobold & Cultist (Paitsi jos x4, tällöin valitse jompi kumpi)";
                break;
            default:
                enemyText.textContent = "No valid roll";
        }
    }, 1000); 
}


eventButton.addEventListener('click', randomEventRoller);
enemyButton.addEventListener('click', enemyRoller);


// EVENT DATA


const eventData = {
    "1": "Kuulet kauhunhuutoja pohjoiseen.",
    "2": "Kuulet kauhunhuutoja itään.",
    "3": "Kuulet kauhunhuutoja etelään.",
    "4": "Kuulet kauhunhuutoja länteen.",
    "5": "Rakennusten välissä näet kaksi ihmistä juoksemassa kohti linnaa, takaa-ajajanaan näyttävästi [Enemy Roll Table] x 1. Nimi: Hunvark Simplehorn - Ihmismies - 21 Nimi: Erdeth Silverash - Ihmismies - 18",
    "6": "Kuulet hiljaista vikinää vieressä olevasta rakennuksesta. Nimi: Rorma Simplehorn - Ihmistyttö - 25 Bonus-XP jos ryhmä yhdistää veljen ja sisaren.",
    "7": "Kuulet lähestyvien kavioiden kopsetta. Kaksi hevosta juoksee pelon vallassa vetäen tulipaloista vaunua perässään.",
    "8": "Näet 1 miespuolisen kääpiön ja 1 naispuolisen kääpiön kohdanneen [Enemy Roll Table] x 1. Mies pitää miekkaa ja nainen tikaria, he näyttävät osaavan käyttää aseitaan. DC 10 Perception, Heidän takanaan on 2 haltialasta lasta piiloutuneena pienen tynnyrin taakse. Nimi: Hesdric Minebuster - Miespuolinen kääpiöfighter,  Nimi: Dalognore Minebuster - Naispuolinen kääpiörogue",
    "9": "Kulkiessasi tulipalossa olevan rakennuksen alla kuulet suuren räsähdyksen, kun palava katto sortuu. DC 10 Dex väistääksesi tieltä. 1d6 bludgeoning damage jos osuu ja pelaaja jää puristuksiin. Jos DC on 5 tai alle, heihin osuu palava osa katosta. Lisää 1d4 fire dmg joka kierroksella (jälkeen jokaisen epäonnistuneen strength check) DC 12 strength check katon nostamiseksi.",
    "10": "Näet pienen ihmis- ja kääpiöryhmän rynnänneen läheiseen rakennukseen varmistaen, ettei heitä seurata. Yksi kääpiö huomaa sinut ja viittoo teitä kiireellisesti luokseen. Päähenkilö - Naispuolinen kääpiöpappi Nimi: Morgola Kragguard Langettaa [Mass Heal] koko ryhmälle tarvittaessa - 700HP jaetaan alhaisimmasta hp:stä korkeimpaan.",
    "11": "Näet suuren joukon [Enemy Roll Table] x 4 ja Ambush Drake kuljeskelevan kaduilla huolettomasti. He näyttävät etsivän ihmisiä tappaakseen eivätkä osoita pelon merkkejä tai kiirettä. DC 10 Stealth - epäonnistuessaan yksi Ambush Drake haistaa sinut ja alkaa lähestyä. Muu joukko seuraa perässä. PC:t voivat helposti paeta, jos juoksevat pois, koska alueella on paljon muita hajuja.",
    "12": "Näet kaksi pientä ihmislapsia piiloutuneena palavan rakennuksen vieressä olevan pienen vaunun alle. Vaunu on myös tulessa. Lapset ovat liian peloissaan juostakseen pois. Nimi: Melma Blazetail - tyttö - ikä 10 Nimi: Brazol Blazetail - poika - ikä 9",
    "13": "Näet nuoren ihmisen istuvan rakennuksen seinää vasten, pitäen sylissään toisen ihmisen kuollutta ruumista ja itkien. Näyttää olevan täysin tietämätön ympäristöstä. DC 10 perception - näet heidän käsissään vihkisormukset - tiedät, että se on hänen aviomiehensä Nainen - Joyce Whitebash Mies - Hozem Whitebash",
    "14": "Kuulet jonkun huutavan apua yhdestä edessäpäin olevista rakennuksista, joista kaikki ovat tulessa. Henkilö on rakennuksen toisessa kerroksessa. Jos rakennukseen mennään, DC 10 Constitution tarkistetaan joka minuutti tai kärsit 1d6 poison damage. Henkilö on 15-vuotias ihmismies. Hänen vasen jalkansa on jumissa romahtaneen katon kannen alla. DC 15 strength nostamaan kantta. Mies ei voi kävellä ilman apua. Nimi: Terry Moltengleam räätälin poika, isä Barry Moltengleam",
    "15": "Näet kauppiaan vaunun kaatuneena, kuolleen uroshaltian makaavan vaunun vieressä. Esineet: Ruumiilla: 10 kultakolikkoa Maassa 2 x [Scroll of Vicious Mockery] 5 x [Scroll of Healing Word] 2 ehjää [Potion of Healing]",
    "16": "Käännyt kadulle ja näet jotain, mikä näyttää olleen kellotorni, tien tukkeena. DC 15 Perception - Kellotaulun takana on 2 lasta ja 4 aikuista piilossa. Yksi aikuinen puhuu, muut ovat liian peloissaan - Nimi: Pimmik - Kääpiömies",
    "17": "Kuulet pienen kahakan lähistöllä, kun yhtäkkiä eksynyt nuoli suhahtaa ohi. Satunnaisesti valitse yksi PC, DC 10 Dexterity check väistääksesi nuolen. Jos epäonnistut - 1d6 piercing damage osumasta. Näet 4 kääpiökaartilaista rakennuksessa, joka ei ole vielä syttynyt palamaan. He puolustavat asemaansa, mutta he tähtäävät surkeasti.",
    "18": "Kuulet kahden ryöstäjän väittelevän siitä, kumpi saa ottaa löydetyn aarteen. DC 10 Perception - näyttää siltä, ettei ketään muuta ole ympärillä / DC 15 Perception - Näet kuolleen ihmisenaisen makaavan maassa tynnyrin takana. Aarre on hopeinen riipus - arvoltaan 10 kultakolikkoa",
    "19": "Kaksi kääpiöitä kiitää ohitsennee ratsastaen Ambush Drakeilla. Ambush draket näyttävät yrittävän heittää kääpiöitä selästään, kun taas kääpiöt vaikuttavat nauttivan tilanteesta! DM:n heitto - DC 15 - Kääpiö pysyy draken selässä. Jos kääpiö putoaa draken selästä, draket hyökkäävät toisen kääpiön kimppuun, tiputtaen sen toisen draken selästä. Molemmat draket sitten tappavat kääpiöt. Thori Blackbender ja Tori Blackbender (Use Guard Stat Block)",
    "20": "Näet 10 koboldia juoksevan itään päin ja he vaikuttavat peloissaan. Sekunteja myöhemmin kuulet huutoa ja näet 5 kääpiötä täydessä sotavarustuksessa jahtaamassa heitä, välittämättä mistään muusta"
}

