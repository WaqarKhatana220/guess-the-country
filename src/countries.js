const countries = [
    {
        name: "Saudi Arabia",
        clues: [
            'Home to Islam’s two holiest cities, Mecca and Medina.',
            'The largest country in the Middle East by area.',
            'Rich in oil resources and a leading exporter of petroleum.',
            'Arabic is the official language.',
            'Famous for the annual pilgrimage, Hajj.'
        ]
    },
    {
        name: "Pakistan",
        clues: [
            'Home to the second-highest mountain, K2.',
            'Official language is Urdu.',
            'The Indus River flows through this country.',
            'Famous for its rich cultural history in Lahore.',
            'Shares a border with India.'
        ]
    },
    {
        name: "Afghanistan",
        clues: [
            'Contains the Wakhan Corridor, a narrow strip connecting it to China.',
            'It has been historically known as the "Graveyard of Empires."',
            'Buzkashi, played on horseback, is the national sport.',
            'Shares a long border with Pakistan along the Durand Line.',
            'Kabul is one of the highest capitals in the world.'
        ]
    },
    {
        name: "Algeria",
        clues: [
            'Home to the Ahaggar Mountains, a rugged and volcanic range in the Sahara.',
            'The Tassili n’Ajjer is famous for prehistoric cave art.',
            'It was once a part of the Ottoman Empire before French colonization.',
            'This country is the largest by area in Africa.',
            'Its capital is known as the "White City" due to its whitewashed buildings.'
        ]
    },
    {
        name: "Argentina",
        clues: [
            'The famous Perito Moreno Glacier is located in this country.',
            'It’s known for the indigenous Guaraní people in the northeastern region.',
            'It’s one of the top producers of beef, with its cuisine famous for asado (barbecue).',
            'The country’s official dance is the tango.',
            'Shares a long border with Chile along the Andes mountains.'
        ]
    },
    {
        name: "Australia",
        clues: [
            'Home to the Great Victoria Desert.',
            'The native Aboriginal people have lived here for over 60,000 years.',
            'It shares no land borders with any other country.',
            'It’s the only continent entirely in the Southern Hemisphere.',
            'Kangaroo Island is located off the southern coast of this country.'
        ]
    },
    {
        name: "Austria",
        clues: [
            'Famous for its stunning alpine scenery, especially in Tyrol.',
            'It is part of the Schengen Area and shares a border with 8 countries.',
            'The Danube River flows through this country’s capital.',
            'Its capital is known for its coffeehouses and classical music heritage.',
            'Shares a border with Germany to the north and Switzerland to the west.'
        ]
    },    
    {
        name: "Azerbaijan",
        clues: [
            'Home to the Gobustan National Park, known for its ancient rock carvings.',
            'Famous for its mud volcanoes, with the highest concentration in the world.',
            'The land is rich in oil and natural gas resources.',
            'It is known as the Land of Fire due to its natural gas fires and burning hills.',
            'It shares borders with Iran, Georgia, and Russia.'
        ]
    },   
    {
        name: "Bahrain",
        clues: [
            "Home to the world's first natural pearl diving industry.",
            "Arabic is the official language.",
            "Known as the 'Gateway to the Gulf' for its financial sector.",
            "Hosts the International Circuit for Formula One racing.",
            "Rich in cultural heritage, blending Arabian, Persian, and Indian influences."
        ]
    },
    {
        name: "Bangladesh",
        clues: [
            "Home to the Sundarbans, the largest mangrove forest in the world.",
            "Known for its vibrant textiles and the ready-made garment industry.",
            "The country has the longest natural sea beach, Cox's Bazar.",
            "The country is a leader in freshwater fish production globally.",
            "Bengali is the official language, spoken by the vast majority.",
        ]
    },
    {
        name: "Belgium",
        clues: [
            "Home to the Atomium, a unique building resembling an iron crystal.",
            "Known for its Battlefields of Flanders, significant in World War I.",
            "The country is the birthplace of surrealist artist René Magritte.",
            "It has three official languages: Dutch, French, and German.",
            "Its capital hosts the headquarters of the European Union.",
        ]
    },
    {
        name: "Brazil",
        clues: [
            "Home to the Amazon Rainforest, the largest tropical rainforest in the world.",
            "Known for the Pantanal, the world's largest tropical wetland area.",
            "Portuguese is the official language, the largest in the world.",
            "Famous for its diverse wildlife, including jaguars and capybaras.",
            "The country is the birthplace of samba music and dance."
        ]
    },
    {
        name: "Cambodia",
        clues: [
            "Home to Angkor Wat, the largest religious monument in the world.",
            "Known for the Khmer Rouge regime, which ruled from 1975 to 1979.",
            "The country has a unique dance form called Apsara.",
            "Renowned for its delicious cuisine, including dishes like Amok and Lok Lak.",
            "The official language is Khmer, spoken by the majority of the population."
        ]
    },
    {
        name: "Canada",
        clues: [
            "Home to the world’s largest coastline, stretching over 202,080 kilometers.",
            "Known for its maple syrup, producing around 71% of the world's supply.",
            "Famous for the historic site of the signing of the Treaty of Paris in 1763.",
            "The country is the birthplace of basketball, invented by James Naismith.",
            "French and English are both official languages."
        ]
    },
    {
        name: "Chile",
        clues: [
            "Home to the Atacama Desert, the driest non-polar desert in the world.",
            "It's the world's largest producer of copper, contributing significantly to the economy.",
            "The country experiences a unique phenomenon called 'El Niño,' affecting weather patterns.",
            "Home to the Torres del Paine National Park, known for its stunning landscapes.",
            "The capital city is surrounded by the Andes mountains."
        ]
    },
    {
        name: "China",
        clues: [
            "Birthplace of numerous inventions, including papermaking and the compass.",
            "Home to the ancient Silk Road, a trade route connecting East and West.",
            "Known for the Terracotta Army, a collection of thousands of life-sized sculptures.",
            "The country has the largest population in the world, exceeding 1.4 billion people.",
            "Mandarin is the official language, the most spoken language globally."
        ]
    },
    {
        name: "Colombia",
        clues: [
            "Home to the Amazon rainforest, contributing to its rich biodiversity.",
            "Known for producing high-quality coffee, often considered among the best in the world.",
            "The country has the second-highest number of bird species, after Peru.",
            "Famous for its historic city of Cartagena, a UNESCO World Heritage site.",
            "The capital city is Bogotá, located high in the Andes mountains."
        ]
    },
    {
        name: "Costa Rica",
        clues: [
            "Home to more than 5% of the world's biodiversity despite its small size.",
            "Known for its commitment to sustainability and eco-tourism.",
            "Famous for the Arenal Volcano, one of the most active volcanoes in the world.",
            "The country abolished its army in 1949, prioritizing education and healthcare.",
            "Spanish is the official language, with English widely spoken in tourist areas.",
        ]
    },
    {
        name: "Croatia",
        clues: [
            "Home to over 1,000 islands, with only about 50 inhabited.",
            "Known for its medieval architecture, particularly in cities like Dubrovnik.",
            "Famous for the stunning Plitvice Lakes National Park, a UNESCO World Heritage site.",
            "The country is famous for its truffles.",
            "It is the birthplace of the tie, originally worn by mercenaries.",
        ]
    },
    {
        name: "Cuba",
        clues: [
            "Home to the largest island in the Caribbean, known for its rich biodiversity.",
            "Famous for its classic cars, a relic from the pre-revolution era.",
            "Known for its rich history of cigar production and exports.",
            "The country has a universal healthcare system, which is highly regarded.",
            "The country is known for its revolutionary history and iconic figures like Che Guevara.",
        ]
    },
    {
        name: "Czech Republic",
        clues: [
            "The country has a rich history, being part of the Austro-Hungarian Empire.",
            "Known for the picturesque town of Český Krumlov, a UNESCO World Heritage site.",
            "Famous for its stunning castles, including Karlštejn and Český Krumlov Castle.",
            "The country is a leading producer of crystal glassware, particularly from Moser.",
            "The country has a rich literary tradition, with famous authors like Franz Kafka and Milan Kundera."
        ]
    },
    {
        name: "Egypt",
        clues: [
            "Home to the ancient city of Thebes.",
            "The country has a rich history of ancient civilization, including hieroglyphics and mummies.",
            "Known for its diverse ecosystems, including the Red Sea coral reefs and the Sahara Desert.",
            "Known for the Nile River which is the longest river in the world.",
            "Famous for the Pyramids of Giza, one of the Seven Wonders of the Ancient World."
        ]
    },
    {
        name: "Ethiopia",
        clues: [
            "Home to the ancient Kingdom of Aksum, known for its monumental obelisks.",
            "Famous for being one of the oldest nations in the world, with a history dating back thousands of years.",
            "The country is known for its unique calendar, which is approximately seven years behind the Gregorian calendar.",
            "Birthplace of coffee, with a rich culture surrounding its cultivation and consumption.",
            "The capital city hosts the African Union headquarters."
        ]
    },
    {
        name: "Finland",
        clues: [
            "Home to the indigenous Sámi people, known for their rich cultural heritage.",
            "The capital city is known for its design district and coastal archipelago.",
            "Famous for its vast number of lakes, with around 188,000 lakes in the country.",
            "The country is known for its education system, consistently ranked among the best in the world.",
            "The country has a unique sauna culture, with approximately two million saunas for a population of 5.5 million."
        ]
    },
    {
        name: "France",
        clues: [
            "Home to the Château de Chambord.",
            "The national motto is 'Liberté, Égalité, Fraternité' (Liberty, Equality, Fraternity).",
            "The country is known for its rich culinary heritage, including a wide variety of cheeses.",
            "The country is known for its fashion industry.",
            "The country has a rich history of art, with notable movements such as Impressionism."
        ]
    },
    {
        name: "Germany",
        clues: [
            "Home to the Brandenburg Gate, a symbol of reunification and peace.",
            "Famous for its fairy-tale castles, including Neuschwanstein Castle.",
            "Home to the world’s largest fairground, the Theresienwiese, hosting numerous events throughout the year.",
            "The country has a rich history of philosophy, being the birthplace of thinkers like Kant and Hegel.",
            "It has a strong automotive industry, featuring brands like BMW, Mercedes-Benz, and Volkswagen."
        ]
    },
    {
        name: "Iraq",
        clues: [
            "Home to ancient Mesopotamia, often called the 'Cradle of Civilization.'",
            "Famous for the ruins of Babylon, once a major city of the ancient world.",
            "The country has a rich history of contributions to mathematics and astronomy.",
            "Known for its diverse cultural heritage, including Arabic and Kurdish influences.",
            "The capital city is historically a center of learning and culture in the Islamic Golden Age."
        ]
    },
    {
        name: "India",
        clues: [
            "Famous for its diverse languages, with 22 officially recognized languages in the constitution.",
            "The country's cuisine is renowned for its variety and use of spices, including curry and garam masala.",
            "The country has a diverse landscape, from the Himalayas in the north to tropical beaches in the south.",
            "Birthplace of several major religions, including Hinduism, Buddhism, Jainism, and Sikhism.",
            "The Taj Mahal, a UNESCO World Heritage site, is one of the most famous monuments in the world."
        ]
    },
    {
        name: "Indonesia",
        clues: [
            "Home to the Komodo dragon, found on Komodo Island.",
            "Famous for its diverse culture, with over 300 ethnic groups and more than 700 languages spoken.",
            "The country is known for its stunning biodiversity, including some of the world's largest coral reefs.",
            "The country is the largest archipelago in the world, consisting of over 17,000 islands.",
            "The island of Java is the most populous island in the world."
        ]
    },
    {
        name: "Iran",
        clues: [
            "Home to the ancient ruins of Persepolis, a UNESCO World Heritage site.",
            "The country has a diverse landscape, from mountains to deserts to lush forests.",
            "The country is one of the world's largest producers of saffron, a prized spice.",
            "Famous for its beautiful carpets, renowned for their intricate designs and craftsmanship.",
            "Famous for its rich Persian heritage, including literature, art, and architecture."
        ]
    },
    {
        name: "Ireland",
        clues: [
            "Home to ancient sites like Newgrange, a prehistoric passage tomb older than Stonehenge.",
            "Famous for its rich folklore, including tales of leprechauns and the Banshee.",
            "The capital city is known for its historic architecture and lively cultural scene.",
            "The country has a vibrant literary heritage, producing writers like James Joyce and W.B. Yeats.",
            "Known for its stunning landscapes, including the Cliffs of Moher and the Ring of Kerry."
        ]
    },
    {
        name: "Italy",
        clues: [
            "Home to the ancient ruins of Pompeii, preserved by volcanic ash from Mount Vesuvius.",
            "The country is home to a variety of beautiful landscapes, from the Alps in the north to the Mediterranean coastline.",
            "The country has a strong automotive industry, with brands like Ferrari, Lamborghini, and Fiat.",
            "Famous for its art, being the birthplace of Renaissance masters like Michelangelo and Leonardo da Vinci.",
            "The country is known for its diverse cuisine, including pizza, pasta, and gelato."
        ]
    },
    {
        name: "Jordan",
        clues: [
            "Famous for the Wadi Rum desert, known for its stunning landscapes and rock formations.",
            "The country has a rich history as part of the ancient trade routes and the biblical land of Moab.",
            "Home to the ancient city of Petra, a UNESCO World Heritage site carved into rose-red cliffs.",
            "The capital city is known for its blend of modern and ancient history.",
            "The country is known for the Dead Sea, which is the lowest point on Earth’s surface.",
        ]
    },
    {
        name: "Japan",
        clues: [
            "Famous for its cherry blossoms, which bloom every spring and attract millions of visitors.",
            "The country is known for its unique blend of ancient traditions and modern technology.",
            "Home to the historic city of Kyoto, known for its traditional wooden houses and temples.",
            "Renowned for its cuisine, particularly sushi, ramen, and tempura.",
            "The country has a rich history of art and design, including ukiyo-e woodblock prints and origami."
        ]
    },
    {
        name: "North Korea",
        clues: [
            "Hosts the Arirang Festival, known for its mass games and performances.",
            "Home to the Koryo Museum, showcasing the history of the ancient kingdom of Koryo.",
            "The capital city is known for its monumental architecture and propaganda.",
            "Famous for the Demilitarized Zone (DMZ), one of the most heavily fortified borders in the world.",
            "The country has a unique political system centered around the ideology of Juche, emphasizing self-reliance."
        ]
    },
    {
        name: "South Korea",
        clues: [
            "Home to the ancient city of Gyeongju, known for its rich history and UNESCO World Heritage sites.",
            "The capital city is known for its modern skyline and traditional palaces.",
            "Known for its delicious cuisine, particularly dishes like kimchi, bulgogi, and bibimbap.",
            "The country celebrates its traditional holiday, Chuseok, a harvest festival similar to Thanksgiving.",
            "The country has a strong technology industry, being home to companies like Samsung and LG.",
        ]
    },
    {
        name: "Kuwait",
        clues: [
            "The country has a unique blend of modern and traditional architecture, including the Grand Mosque.",
            "Famous for its rich oil reserves, making it one of the wealthiest countries per capita.",
            "Known for its vibrant souks, where traditional crafts and spices are sold.",
            "It is home to one of the largest shopping malls in the region, the Avenues Mall, offering a mix of global brands.",
            "The country boasts beautiful waterfront areas, including the Arabian Gulf's pristine beaches.",
        ]
    },
    {
        name: "Russia",
        clues: [
            "Home to Lake Baikal, the deepest and oldest freshwater lake in the world.",
            "The country has a diverse geography, featuring tundra, forests, mountains, and vast plains.",
            "Famous for the Trans-Siberian Railway, the longest railway line globally, spanning over 9,000 kilometers.",
            "The capital city is known for the Red Square and the Kremlin.",
            "It is the largest country in the world by land area."
        ]
    },
    {
        name: "Syria",
        clues: [
            "Home to the ancient city of Palmyra, a UNESCO World Heritage site known for its Greco-Roman ruins.",
            "Famous for the Umayyad Mosque, one of the oldest and largest mosques in the world.",
            "Known for its diverse cultural heritage, with influences from Arabic, Kurdish, and Armenian traditions.",
            "The country has a rich history as a crossroads of various civilizations, including the Phoenicians and Romans.",
            "Syria has a rich literary tradition, with famous poets like Nizar Qabbani and Adunis."
        ]
    },
    {
        name: "Spain",
        clues: [
            "Home to the Alhambra, a stunning Moorish palace and fortress in Granada.",
            "It is the world's largest producer of olive oil.",
            "The country has a significant architectural heritage, including works by Antoni Gaudí, such as the Sagrada Família.",
            "Famous for its vibrant festivals, including La Tomatina and Running of the Bulls.",
            "The country has a rich artistic heritage, being the birthplace of painters like Picasso and Dalí."
        ]
    },
    {
        name: "Turkey",
        clues: [
            "Home to Göbekli Tepe, one of the oldest known archaeological sites in the world.",
            "One of the world's largest producers of hazelnuts, supplying a significant portion of the global market.",
            "Famous for its unique blend of cultures, bridging Europe and Asia throughout history.",
            "The country boasts the Hagia Sophia, a stunning architectural marvel that has served as a church and mosque.",
            "The country has a rich history, once being part of the Byzantine and Ottoman Empires.",
        ]
    },
    {
        name: "United Kingdom",
        clues: [
            "Home to the historic Stonehenge, a prehistoric monument with a mysterious origin.",
            "Famous for one of the oldest continuous monarchies in the world.",
            "The country has a rich literary heritage, being the birthplace of authors like Shakespeare and Jane Austen.",
            "The UK has a diverse culinary heritage, with dishes like fish and chips and afternoon tea.",
            "It is known for its iconic landmarks, including Big Ben and Buckingham Palace."
        ]
    },
    {
        name: "United States",
        clues: [
            "The country is home to the Great Basin.",
            "Known for its national parks, including Yellowstone and the Grand Canyon.",
            "It is a melting pot of cultures, with significant immigrant populations contributing to its diversity.",
            "The country has a rich history of innovation, being the birthplace of many technological advancements.",
            "The country has the world's largest economy and is known for its diverse industries."
        ]
    },
    {
        name: "Yemen",
        clues: [
            "Home to Socotra Island, known for its unique biodiversity and distinct flora.",
            "The capital city features traditional mud-brick skyscrapers.",
            "Famous for its coffee, often considered among the best in the world, known as 'Mocha.'",
            "Known for its stunning architecture, particularly in the old city of Shibam, often called the 'Manhattan of the Desert.'",
            "The country has a rich history, with ancient cities like Sana'a recognized as UNESCO World Heritage sites."
        ]
    }
    
        
    
    
    
    
    
    
    
        
];

export default countries;
