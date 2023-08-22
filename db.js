// Садово-паркова техніка
// Електроінструмент
// Акумуляторний інструмент
// Зварювальна техніка
// Компресори
// Мотоблоки та культиватори
// Бетонозмішувачі
// Запчастини та аксесуари

export const products = [
  // ============================ Категорія: Садово-паркова техніка ==============================

  //  Газонокосарки ===============================================================================
  {
    articule: 1000001,
    category: "Садово-паркова техніка",
    img: ".assets/products/photo_2023-08-10_18-39-40.jpg",
    name: "Газонокосарка",
    brand: "Sturm",
    model: "PL 4615S",
    description:
      "Газонокосарка Sturm PL4615S призначена для газонів та має функцію мульчування. При мульчуванні трава зрізається за один робочий прохід, потім дрібно нарізається і повертається на ґрунт як природне добриво.",
    character: [
      {
        Тип: "бензинова",
        "Потужність двигуна": "2.8 кВт",
        "Ширина скошування": "46 см",
        "Тип пересування": "самохідна",
        "Країна-виробник": "Китай",
      },
    ],
    price: "15000",
    available: true
  },
  {
    articule: 1000002,
    category: "Садово-паркова техніка",
    img: "./assets/products/gk35380.jpg",
    name: "Газонокосарка",
    brand: "Енергомаш",
    model: "ГК-35380",
    description:
      "Газонокосарка електрична Енергомаш ГК-35380 - Простий в експлуатації, досить компактний, не складний для освоєння садовий інструмент побутового призначення. Оптимально підходить для догляду за ділянками з невеликою площею. до 1000 кв.",
    character: [
      {
        Тип: "електрична",
        "Потужність двигуна": "2 кВт",
        "Ширина скошування": " 38 см",
        "Тип пересування": "несамохідна",
        "Країна-виробник": "Китай",
      },
    ],
    price: "9000",
    available: false
  },

  {
    articule: 1000003,
    category: "Садово-паркова техніка",
    img: "./assets/products/FEM1400M.jpeg",
    name: "Газонокосарка",
    brand: "Forte",
    model: "FEM-1400M",
    description:
      "Газонокосарка електрична FEM-1400M Forte - якісна модель потужністю Потужність 1400 Вт. Висоту зрізу можна регулювати. Газонокосарка відрізняється колесами великого діаметру, а також збільшеним травосборником об'ємом 35 л. Важливим плюсом моделі є складна рукоятка.",
    character: [
      {
        Тип: "електрична",
        "Потужність двигуна": "1.4 кВт",
        "Ширина скошування": " 32 см",
        "Тип пересування": "несамохідна",
        "Країна-виробник": "Китай",
      },
    ],
    price: "3643",
  },

  {
    articule: 1000004,
    category: "Садово-паркова техніка",
    img: "./assets/products/ALKO46.jpg",
    name: "Газонокосарка",
    brand: "Al-Ko",
    model: "46.0 SP-A",
    description:
      "Газонокосарка бензинова AL-KO Comfort 46.0 SP-A стрижка газону стане справжнісіньким задоволенням. З шириною різу 46 см бензинова газонокосарка Comfort 46.0 SP-A гарантує швидке просування вперед, навіть у садах середнього розміру (площею до 1100 кв.м.). Регулювання висоти різу виконується централізовано, в 7 ступенів, від 30 мм до 80 мм.",
    character: [
      {
        Тип: "бензинова",
        "Потужність двигуна": "2 кВт",
        "Ширина скошування": " 46 см",
        "Тип пересування": "самохідна",
        "Країна-виробник": "Австрія",
      },
    ],
    price: "19499",
  },

  //  Бензо,- електрокоси =========================================================================

  {
    articule: 1000005,
    category: "Садово-паркова техніка",
    img: "./assets/products/sparta25.jpg",
    name: "Бензокоса",
    brand: "Oleo-Mac",
    model: "Sparta 25",
    description:
      "Бензокоса Sparta 25 - хороший старт для роботи, флагман продажу в Європі мотокоса Sparta 25, потужністю в одну кінську силу.",
    character: [
      {
        Потужність: "0.8 кВТ",
        "Країна-виробник": "Китай",
        Вага: "6.2 кг",
      },
    ],
    price: "8994",
  },

  {
    articule: 1000006,
    category: "Садово-паркова техніка",
    img: "./assets/products/bk5225a.jpg",
    name: "Бензокоса",
    brand: "Vitals",
    model: "BK 5225a",
    description:
      "Побутова бензокоса Vitals BK 5225a — зручний садовий інструмент. За його допомогою можна косити траву, бур’ян, підрізати чагарник і навіть зелені гілки молодих дерев. Зручна для обкошування дерев, кущів, парканів, стінок, стовпів.",
    character: [
      {
        Потужність: "1.4 кВТ",
        "Країна-виробник": "Китай",
        Вага: "9 кг",
      },
    ],
    price: "3943",
  },

  {
    articule: 1000007,
    category: "Садово-паркова техніка",
    img: "./assets/products/ЗТС1800.jpg",
    name: "Електрокоса",
    brand: "Зеніт",
    model: "ЗТС-1800",
    description:
      "Електрокоса ЗЕНІТ ЗТС-1800 – це надійний інструмент, призначений для робіт на присадибних ділянках, в садах і парках: для підстригання країв газону і скошування трави у важкодоступних місцях, скошування бур'яну та дрібного чагарнику з товщиною гілок до 10 мм.",
    character: [
      {
        Потужність: "1.8 кВт",
        "Країна-виробник": "Китай",
      },
    ],
    price: "3890",
  },

  {
    articule: 1000008,
    category: "Садово-паркова техніка",
    img: "./assets/products/BCE2020.jpeg",
    name: "Електрокоса",
    brand: "Gartner",
    model: "BCE-2020",
    description:
      "Електрокоса Gartner ВСЕ-2020 підходить для використання в побутових умовах на присадибних ділянках, в садах і парках. За допомогою даної моделі можна підстригати краї газону і скошувати траву у важкодоступних місцях, а також скошувати бур’ян і дрібний чагарник з товщиною гілок до 10 мм.",
    character: [
      {
        Потужність: "2 кВт",
        "Країна-виробник": "Китай",
      },
    ],
    price: "3485",
  },

  {
    articule: 1000009,
    category: "Садово-паркова техніка",
    img: "./assets/products/GT750.jpeg",
    name: "Електрокоса",
    brand: "ProCraft",
    model: "GT-750",
    description:
      "Електрокоса Procraft GT750 - компактний і легкий пристрій призначений для покосу трави на присадибній ділянці. Ергономічна конструкція тримера і простота управління дозволяють стригти траву, як на рівній поверхні, так і в важкодоступних місцях.",
    character: [
      {
        Потужність: "0.75 кВт",
        "Країна-виробник": "Китай",
      },
    ],
    price: "1900",
  },

  // Бензо-, електропили ===================================================================

  {
    articule: 1000010,
    category: "Садово-паркова техніка",
    img: "./assets/products/MS180.jpg",
    name: "Бензопила",
    brand: "STIHL",
    model: "MS 180",
    description:
      "Легендарна бензопила STIHL MS 180 у новому дизайні, з покращеним фільтром та боковим натягуванням ланцюга! Ця надійна, легка й зручна в керуванні бензинова мотопила незамінна для заготівлі дров і майстрування з дерева. Шина бензопили довжиною 35 см дозволяє розпилювати колоди діаметром до 30 см.",
    character: [
      {
        "Робочий об'єм циліндра двигуна": "31.8 куб. см",
        "Довжина шини": "35 см",
        Потужність: "1.5 кВт",
        Вага: "2.7 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "7669",
  },

  {
    articule: 1000011,
    category: "Садово-паркова техніка",
    img: "./assets/products/БП5225ТН.jpg",
    name: "Бензопила",
    brand: "Кентавр",
    model: "БП 5225ТН",
    description:
      "Надійна і потужна бензопила Кентавр БП-5225ТН призначена для швидкого та ефективного спилювання сухостою, кущів, гілок, а також валки невеликих дерев і розпилювання їх на колоди.",
    character: [
      {
        "Робочий об'єм циліндра двигуна": "52куб. см",
        "Довжина шини": "45 см",
        Потужність: "2.5 кВт",
        Вага: "6.7 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "2551",
  },

  {
    articule: 1000012,
    category: "Садово-паркова техніка",
    img: "./assets/products/K1800.jpg",
    name: "Електропила",
    brand: "ProCraft",
    model: "K1800",
    description:
      "Ланцюгова пила PROCRAFT K1800 з бічним розташуванням електродвигуна призначена для роботи в саду і розпилу колод невеликого діаметру. Завдяки невеликій вазі і продуманій ергономіці, пила підійде для роботи однією рукою на висоті.",
    character: [
      {
        "Довжина шини": "35 см",
        Потужність: "1.8 кВт",
        Вага: "4.2 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "2105",
  },

  // ================================= Категорія: Електроінструмент ========================================
  {
    articule: 2000001,
    category: "Електроінструмент",
    img: "./assets/products/BM280T.jpeg",
    name: "Дриль-шурупокрут",
    brand: "DWT",
    model: "BM-280T",
    description:
      "DWT BM-280 T - мережевий дриль-шуруповерт, напів-професійного класу (Semi-Pro), з двоступінчастим редуктором, системою електронного контролю швидкості",
    character: [
      {
        Потужність: "280 Вт",
        "Число оборотів холостого ходу": "0-350 / 0-1400 минˉ¹",
        "Тип патрона": "швидкозажимний патрон",
        "Діапазон затиску свердлильного патрона": "0,8-10 мм",
        Вага: "1.36 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "1099",
  },
  {
    articule: 2000002,
    category: "Електроінструмент",
    img: "./assets/products/HR2470.jpg",
    name: "Перфоратор",
    brand: "Makita",
    model: "HR2470",
    description:
      "Перфоратор Makita HR2470 – найбільш популярна модель серед українських покупців, які займаються ремонтом та демонтажем у будівельних роботах.",
    character: [
      {
        Потужність: "780 Вт",
        "Кількість ударів уд/хв": "0-4500",
        "Тип патрона": "SDS-plus",
        Вага: "2.6 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "6455",
  },
  {
    articule: 2000003,
    category: "Електроінструмент",
    img: "./assets/products/bs8585.jpg",
    name: "Стрічкова шліфмашина",
    brand: "Sturm",
    model: "BS8585",
    description:
      "Стрічкова шліфувальна машина Sturm BS8585 потужністю 850 Вт гарантує високу продуктивність та призначена для виконання різних шліфувальних робіт",
    character: [
      {
        Потужність: "850 Вт",
        "Розмір підошви, мм": "76х457",
        Вага: "2.9 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "2277",
  },
  {
    articule: 2000004,
    category: "Електроінструмент",
    img: "./assets/products/4329.jpg",
    name: "Лобзик",
    brand: "Makita",
    model: "4329",
    description:
      "Лобзик Makita 4329 призначений для швидкого, гладкого і акуратного розпилювання професійного рівня. Лобзик оснащений механічною системою противаги для зниження рівня вібрації.",
    character: [
      {
        Потужність: "450 Вт",
        "Частота холостого ходу": "500 - 3100 об./хв",
        "Товщина матеріалу (дерево)": "65 мм",
        "Товщина матеріалу (сталь/алюміній)": "6 мм",
        Вага: "1.9 кг",
        "Країна-виробник": "Румунія",
      },
    ],
    price: "3008",
  },
  {
    articule: 2000005,
    category: "Електроінструмент",
    name: "Кутова шліфмашина",
    brand: "Makita",
    model: "GA5030",
    description:
      "Болгарка Makita GA5030 - це компактна і потужна кутова шліфувальна машина, пристосована для роботи однією рукою.",
    character: [
      {
        Потужність: "720 Вт",
        "Частота холостого ходу": "11000 об./хв",
        "Діаметр шліфувального диска": "125 мм",
        Вага: "1.8 кг",
        "Країна-виробник": "Румунія",
      },
    ],
    price: "2673",
  },

  // ========================== Категорія: Акумуляторний інструмент ====================================
  {
    articule: 3000001,
    category: "Акумуляторний інструмент",
    img: "./assets/products/cs4030.jpg",
    name: "Акумуляторна пила",
    brand: "Al-Ko",
    model: "CS 4030",
    description:
      "Безшумна, без вихлопних газів і без кабелю, з потужним акумулятором 36 V",
    character: [
      {
        Напруга: "36 В",
        "Довжина шини": "30 см",
        "Мах час роботи батареї 5.0 А год": "30 хв",
        Вага: "4.45 кг",
        Комплектація: "АКБ та зарядний пристрій у комплект не входять",
        "Країна-виробник": "Австрія",
      },
    ],
    price: "6999",
  },
  {
    articule: 3000002,
    category: "Акумуляторний інструмент",
    img: "./assets/products/akg1823p.jpg",
    name: "Акумуляторний кущоріз",
    brand: "Vitals",
    model: "AKG 1823p SmartLine",
    description:
      "Акумуляторний кущоріз Vitals Master AKG 1823p SmartLine — легкий та надійний інструмент, призначений для догляду за садами й парками, швидкого та чистого підстригання живоплотів і кущів.",
    character: [
      {
        Напруга: "18 В",
        "Довжина леза": "52 cм",
        "Мах час роботи батареї 5.0 А год": "30 хв",
        "Максимальний діаметр гілок": "15 мм",
        Вага: "2.8 кг",
        Комплектація: "АКБ та зарядний пристрій у комплект не входять",
        "Країна-виробник": "Китай",
      },
    ],
    price: "2099",
  },

  {
    articule: 3000003,
    category: "Акумуляторний інструмент",
    img: "./assets/products/gt3530cl.jpg",
    name: "Акумуляторна коса",
    brand: "Sturm",
    model: "GT 3530CL",
    description:
      "Акумуляторна коса Sturm GT3530CL - відмінне рішення, яке дозволить з легкістю впоратися з високою травою, а завдяки диску (у комплекті) можна різати великий чагарник. Це напівпрофесійна мотокоса, яка чудово підійде для ведення дачного господарства.",
    character: [
      {
        Напруга: "36 В",
        "Ріжучий елемент": "ліска/ніж",
        "Максимальна кількість обертів": "7500 об/хв",
        Вага: "4.5 кг",
        Комплектація: "АКБ та зарядний пристрій у комплект не входять",
        "Країна-виробник": "Китай",
      },
    ],
    price: "4983",
  },

  //  =============================== Категорія: Зварювальна техніка ========================================

  {
    articule: 4000001,
    category: "Зварювальна техніка",
    img: "./assets/products/sa97i240p.jpg",
    name: "Зварювальний інвертор",
    brand: "Енергомаш",
    model: "СА-97І240П 240А",
    description:
      "Зварювальний інвертор Енергомаш СА-97І240П є потужним інструментом для побутового використання. Апарат має широкий діапазон зварювання і працює з електродами товщиною від 1,6-4 мм. Пристрій відрізняються невеликою вагою та зручними габаритами",
    character: [
      {
        "Номінальна споживана потужність": "7 кВА",
        "Діапазон регулювання зварювального струму": "15 - 240 А",
        "Діаметр електрода, що використовується": "1.6 - 4.0 мм",
        "Тип електрода": "сталь, чавун, нержавіюча сталь",
        Вага: "2.6 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "3228",
  },

  {
    articule: 4000002,
    category: "Зварювальна техніка",
    img: "./assets/products/paton.jpeg",
    name: "Зварювальний інвертор",
    brand: "Патон",
    model: "ECO-160",
    description:
      "Зварювальний апарат PATON ECO-160 призначений для ручного дугового зварювання (РДЗ «MMA») постійним струмом. PATON ECO-160 - це досить компактний апарат, який справляється з великою кількістю завдань і задовольняє потреби навіть досвідчених користувачів, надаючи можливість працювати на номінальному струмі до 160А. ",
    character: [
      {
        "Номінальна споживана потужність": "4.4 кВА",
        "Діапазон регулювання зварювального струму": "20 - 190 А",
        "Діаметр електрода, що використовується": "1.6 - 4.0 мм",
        "Тип електрода": "сталь, чавун, нержавіюча сталь",
        Вага: "3.3 кг",
        "Країна-виробник": "Україна",
      },
    ],
    price: "5499",
  },

  {
    articule: 4000003,
    category: "Зварювальна техніка",
    img: "./assets/products/mig305.jpeg",
    name: "Зварювальний напівавтомат",
    brand: "Kaiser",
    model: "MIG-305",
    description:
      "Зварювальний напівавтомат інверторний 2в1 Kaiser MIG-305 - це напівавтоматичний інвертор для зварювання металів.  ",
    character: [
      {
        "Номінальна споживана потужність": "4.4 кВА",
        "Максимальний струм": "305 А",
        "Діаметр електрода, що використовується": "1.6 - 5.0 мм",
        "Діаметр дроту, що використовується": "0.6 - 1.0 мм",
        Вага: "13 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "12465",
  },

  // ================================  Категорія: Компресори ===================================

  {
    articule: 5000001,
    category: "Компресори",
    img: "./assets/products/fl50.jpg",
    name: "Компресор",
    brand: "Forte",
    model: "FL-50",
    description:
      "Надійний поршневий компресор FORTE FL-50, найчастіше використовується для підкачки автомобільних шин, фарбування поверхонь, продувки повітрям, піскоструминного очищення металевих поверхонь і т.д. ",
    character: [
      {
        Потужність: "1500 Вт",
        "Об'єм ресивера": "50 л",
        Охолодження: "повітряне",
        Продуктивність: "200 л/хв",
        "Тип компресора": "поршневий",
        Вага: "29 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "8739",
  },

  {
    articule: 5000002,
    category: "Компресори",
    img: "./assets/products/VBM2T0.4100.jpeg",
    name: "Компресор",
    brand: "Werk",
    model: "VBM-2T0.4-100",
    description:
      "Повітряний компресор Werk VBM-0.4-100 - потужна енергетична машина для підвищення тиску і переміщення газоподібних речовин, неймовірно продуктивний і витривалий, що особливо важливо при промислових роботах.",
    character: [
      {
        Потужність: "2200 Вт",
        "Об'єм ресивера": "100 л",
        Охолодження: "повітряне",
        Продуктивність: "420 л/хв",
        "Тип компресора": "поршневий",
        Вага: "68 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "22586",
  },

  {
    articule: 5000003,
    category: "Компресори",
    img: "./assets/products/procraft24.jpg",
    name: "Компресор",
    brand: "ProCraft",
    model: "24",
    description:
      "Повітряний компресор ProCraft 24л - це високопродуктивний і надійний агрегат, призначений для подачі стисненого повітря під високим тиском. ",
    character: [
      {
        Потужність: "1800 Вт",
        "Об'єм ресивера": "24 л",
        Охолодження: "повітряне",
        Продуктивність: "206 л/хв",
        "Тип компресора": "поршневий",
        Вага: "13 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "5830",
  },

  // ========================= Категорія: Мотоблоки ==============================================

  {
    articule: 6000001,
    category: "Мотоблоки",
    img: "./assets/products/MB1080DE.jpg",
    name: "Мотоблок",
    brand: "Кентавр",
    model: "МБ1080ДЕ",
    description: "Дизельний мотоблок із водяним охолодженням",
    character: [
      {
        Потужність: "8 к.с.",
        "Система запуску двигуна": "електричний стартер",
        "Робочий об'єм двигуна": "452 куб.см",
        Охолодження: "водяне",
        "Кількість передач": "6/2",
        "Транспортні колеса": "6.00-12",
        "Вага на колесах/на фрезах": "241/309 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "52088",
  },

  {
    articule: 6000002,
    category: "Мотоблоки",
    img: "./assets/products/MB2061D.jpg",
    name: "Мотоблок",
    brand: "Кентавр",
    model: "МБ2061Д",
    description: "Дизельний мотоблок із повітряним охолодженням",
    character: [
      {
        Потужність: "6 к.с.",
        "Система запуску двигуна": "ручний стартер",
        "Робочий об'єм двигуна": "296 куб.см",
        Охолодження: "повітряне",
        "Кількість передач": "2/1",
        "Транспортні колеса": "4.00-10",
        "Вага на колесах/на фрезах": "118/125 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "28763",
  },

  {
    articule: 6000003,
    category: "Мотоблоки",
    img: "./assets/products/MB2070B.jpg",
    name: "Мотоблок",
    brand: "Кентавр",
    model: "МБ2070Б",
    description: "Бензиновий мотоблок із повітряним охолодженням",
    character: [
      {
        Потужність: "7 к.с.",
        "Система запуску двигуна": "ручний стартер",
        "Робочий об'єм двигуна": "208 куб.см",
        Охолодження: "повітряне",
        "Кількість передач": "2/1",
        "Транспортні колеса": "4.00-10",
        "Вага на колесах/на фрезах": "88/95 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "19538",
  },

  {
    articule: 6000004,
    category: "Мотоблоки",
    img: "./assets/products/EPT1400.jpg",
    name: "Культиватор",
    brand: "Forte",
    model: "EPT-1400",
    description:
      "Електрокультиватор Forte ЕРТ-1400 — чудовий помічник для садівників та власників невеликих ділянок. Основний вид роботи цього культиватора — переорювання невеликих грядок і перемішування землі з різними добривами",
    character: [
      {
        Потужність: "1400 Вт",
        "Система запуску двигуна": "ручний стартер",
        "Оберти двигуна": "230 об/хв",
        Охолодження: "повітряне",
        "Кількість передач": "1",
        Вага: "12 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "4865",
  },

  //  ========================== Категорія: Бетонозмішувачі ===========================================

  {
    articule: 7000001,
    category: "Бетонозмішувачі",
    img: "./assets/products/EW2125P.jpg",
    name: "Бетонозмішувач",
    brand: "Forte",
    model: "EW2125P",
    description:
      "Бетонозмішувач Forte EW2125P - професійний інструмент, призначений для приготування бетонних сумішей і будівельних розчинів за короткий проміжок часу. ",
    character: [
      {
        Потужність: "550 Вт",
        "Об'єм барабана": "125 л",
        "Об'єм суміші": "95 л",
        "Тип передачі": "вінцевий",

        Вага: "48 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "7406",
  },

  {
    articule: 7000002,
    category: "Бетонозмішувачі",
    img: "./assets/products/SB9180P.jpg",
    name: "Бетонозмішувач",
    brand: "Orange",
    model: "СБ 9180П",
    description:
      "Бетонозмішувач Orange СБ 9180П - якісна сталево-чавунна машина для заготівельних робіт. ",
    character: [
      {
        Потужність: "650 Вт",
        "Об'єм барабана": "180 л",
        "Об'єм суміші": "135 л",
        "Тип передачі": "вінцевий",

        Вага: "62.3 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "10019",
  },

  {
    articule: 7000003,
    category: "Бетонозмішувачі",
    img: "./assets/products/EW1230.jpg",
    name: "Бетонозмішувач",
    brand: "Forte",
    model: "EW1230",
    description:
      "Бетонозмішувач Forte EW1230 - призначена для приготування бетонних сумішей і будівельних розчинів на будівельних майданчиках, при індивідуальному і дачному будівництві. ",
    character: [
      {
        Потужність: "550 Вт",
        "Об'єм барабана": "230 л",
        "Об'єм суміші": "130 л",
        "Тип передачі": "редукторний",

        Вага: "57 кг",
        "Країна-виробник": "Китай",
      },
    ],
    price: "19823",
  },
];

// module.exports = products;
