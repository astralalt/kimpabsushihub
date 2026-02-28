// ============ TELEGRAM BOT CONFIG ============
// To set up notifications:
// 1. Open Telegram, find @BotFather
// 2. Send /newbot, follow prompts, copy the token
// 3. Create a group chat, add your bot to it
// 4. Send a message in the group, then open:
//    https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates
//    Find "chat":{"id":-XXXXXXXXX} — that's your CHAT_ID
// 5. Paste both values below:
const TELEGRAM_BOT_TOKEN = '8393290071:AAF5S2cihG4xEFGcaDorvhjSM0ir84Fw3lw';
const TELEGRAM_CHAT_ID = '-1003816920318';
// ==============================================

// ============ GOOGLE SHEETS MENU ============
const MENU_SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSf-17HWfz1R7iNxL2YRfsvLaVDOMXqj9MV_E6hNq2fW0qH44EN_fVl2GraH0abRx55AL_7UnluyO6_/pub?output=csv';
// =============================================

// Menu Data - fallback if Google Sheets is unavailable
let menuData = [
    // SUSHI (СУШИ)
    {
        id: 1,
        nameRU: "Суши лосось",
        nameEN: "Salmon Sushi",
        nameKR: "연어 초밥",
        descriptionRU: "Классические суши с лососем",
        descriptionEN: "Classic salmon sushi",
        descriptionKR: "기본 연어 초밥",
        price: 4000,
        category: "sushi",
        portionRU: "2шт",
        portionEN: "2pcs",
        portionKR: "2개",
        image: "pic/photo_8_2026-02-10_18-12-04.jpg"
    },
    {
        id: 2,
        nameRU: "Суши гребешок",
        nameEN: "Scallop Sushi",
        nameKR: "가리비 초밥",
        descriptionRU: "Нежный гребешок",
        descriptionEN: "Tender scallop",
        descriptionKR: "부드러운 가리비",
        price: 5000,
        category: "sushi",
        portionRU: "2шт",
        portionEN: "2pcs",
        portionKR: "2개",
        image: "pic/photo_4_2026-02-10_18-12-04.jpg"
    },
    {
        id: 3,
        nameRU: "Гункан лосось спайси",
        nameEN: "Spicy Salmon Gunkan",
        nameKR: "매콤 연어 군함",
        descriptionRU: "Острый лосось с икрой тобико",
        descriptionEN: "Spicy salmon with tobiko roe",
        descriptionKR: "매운 연어와 토비코",
        price: 5000,
        category: "sushi",
        portionRU: "2шт",
        portionEN: "2pcs",
        portionKR: "2개",
        image: "pic/photo_3_2026-02-10_18-12-04.jpg"
    },
    {
        id: 4,
        nameRU: "Суши креветка",
        nameEN: "Shrimp Sushi",
        nameKR: "새우 초밥",
        descriptionRU: "Сладкая креветка",
        descriptionEN: "Sweet shrimp",
        descriptionKR: "달콤한 새우",
        price: 4000,
        category: "sushi",
        portionRU: "2шт",
        portionEN: "2pcs",
        portionKR: "2개",
        image: "placeholder-shrimp-sushi.jpg"
    },
    {
        id: 5,
        nameRU: "Суши кальмар",
        nameEN: "Squid Sushi",
        nameKR: "오징어 초밥",
        descriptionRU: "Свежий кальмар",
        descriptionEN: "Fresh squid",
        descriptionKR: "신선한 오징어",
        price: 5000,
        category: "sushi",
        portionRU: "2шт",
        portionEN: "2pcs",
        portionKR: "2개",
        image: "pic/photo_9_2026-02-10_18-12-04.jpg"
    },
    {
        id: 6,
        nameRU: "Гункан тобико Филадельфия",
        nameEN: "Tobiko Philadelphia Gunkan",
        nameKR: "토비코 필라델피아 군함",
        descriptionRU: "Икра тобико с сыром",
        descriptionEN: "Tobiko roe with cream cheese",
        descriptionKR: "토비코와 치즈",
        price: 5000,
        category: "sushi",
        portionRU: "2шт",
        portionEN: "2pcs",
        portionKR: "2개",
        image: "pic/photo_1_2026-02-10_18-12-04.jpg"
    },
    {
        id: 7,
        nameRU: "Гункан тобико спайси",
        nameEN: "Spicy Tobiko Gunkan",
        nameKR: "매운 토비코 군함",
        descriptionRU: "Острая икра тобико",
        descriptionEN: "Spicy tobiko roe",
        descriptionKR: "매운 토비코",
        price: 5000,
        category: "sushi",
        portionRU: "2шт",
        portionEN: "2pcs",
        portionKR: "2개",
        image: "pic/photo_1_2026-02-10_18-12-04.jpg"
    },
    {
        id: 8,
        nameRU: "Суши угорь",
        nameEN: "Eel Sushi",
        nameKR: "장어 초밥",
        descriptionRU: "Копчёный угорь",
        descriptionEN: "Smoked eel",
        descriptionKR: "훈제 장어",
        price: 4000,
        category: "sushi",
        portionRU: "2шт",
        portionEN: "2pcs",
        portionKR: "2개",
        image: "pic/photo_5_2026-02-10_18-12-04.jpg"
    },
    {
        id: 9,
        nameRU: "Суши авокадо",
        nameEN: "Avocado Sushi",
        nameKR: "아보카도 초밥",
        descriptionRU: "Вегетарианские суши",
        descriptionEN: "Vegetarian sushi",
        descriptionKR: "채식 초밥",
        price: 3000,
        category: "sushi",
        portionRU: "2шт",
        portionEN: "2pcs",
        portionKR: "2개",
        image: "pic/photo_6_2026-02-10_18-12-04.jpg"
    },
    {
        id: 10,
        nameRU: "Тунец сашими",
        nameEN: "Tuna Sashimi",
        nameKR: "참치 사시미",
        descriptionRU: "Свежий тунец",
        descriptionEN: "Fresh tuna",
        descriptionKR: "신선한 참치",
        price: 15000,
        category: "sushi",
        portionRU: "100г",
        portionEN: "100g",
        portionKR: "100g",
        image: "placeholder-tuna-sashimi.jpg"
    },
    {
        id: 11,
        nameRU: "Суши тунец",
        nameEN: "Tuna Sushi",
        nameKR: "참치 초밥",
        descriptionRU: "Классический тунец",
        descriptionEN: "Classic tuna",
        descriptionKR: "기본 참치 초밥",
        price: 4000,
        category: "sushi",
        portionRU: "2шт",
        portionEN: "2pcs",
        portionKR: "2개",
        image: "placeholder-tuna-sushi.jpg"
    },
    {
        id: 12,
        nameRU: "Гункан тунец спайси",
        nameEN: "Spicy Tuna Gunkan",
        nameKR: "매콤 참치 군함",
        descriptionRU: "Острый тунец",
        descriptionEN: "Spicy tuna",
        descriptionKR: "매운 참치",
        price: 5000,
        category: "sushi",
        portionRU: "2шт",
        portionEN: "2pcs",
        portionKR: "2개",
        image: "pic/photo_2_2026-02-10_18-12-04.jpg"
    },
    {
        id: 13,
        nameRU: "Лосось сашими",
        nameEN: "Salmon Sashimi",
        nameKR: "연어 사시미",
        descriptionRU: "Свежий лосось",
        descriptionEN: "Fresh salmon",
        descriptionKR: "신선한 연어",
        price: 15000,
        category: "sushi",
        portionRU: "100г",
        portionEN: "100g",
        portionKR: "100g",
        image: "placeholder-salmon-sashimi.jpg"
    },

    // BAKED ROLLS (ЗАПЕЧЁННЫЕ РОЛЛЫ)
    {
        id: 35,
        nameRU: "Запечённый ролл",
        nameEN: "Baked Roll",
        nameKR: "베이크 롤",
        descriptionRU: "Лосось, угорь, авокадо, огурец, сыр Филадельфия, сырная шапочка",
        descriptionEN: "Salmon, eel, avocado, cucumber, cream cheese, baked cheese topping",
        descriptionKR: "연어, 장어, 아보카도, 오이, 크림치즈(필라델피아), 치즈 토핑",
        price: 13000,
        category: "baked",
        portionRU: "8шт",
        portionEN: "8pcs",
        portionKR: "8개",
        image: "pic/baked_roll.jpg"
    },
    {
        id: 36,
        nameRU: "Запечённый ролл острый",
        nameEN: "Spicy Baked Roll",
        nameKR: "스파이시 베이크 롤",
        descriptionRU: "Лосось, угорь, авокадо, огурец, сыр Филадельфия, сырная шапочка спайс",
        descriptionEN: "Salmon, eel, avocado, cucumber, cream cheese, spicy cheese topping",
        descriptionKR: "연어, 장어, 아보카도, 오이, 크림치즈(필라델피아), 스파이시 치즈 토핑",
        price: 13000,
        category: "baked",
        portionRU: "8шт",
        portionEN: "8pcs",
        portionKR: "8개",
        image: "pic/baked_roll_spicy.jpg"
    },
    {
        id: 14,
        nameRU: "Запечённые роллы — собери сам",
        nameEN: "Baked Roll — Build Your Own",
        nameKR: "베이크 롤 — 직접 만들기",
        descriptionRU: "Выберите начинку и топпинг",
        descriptionEN: "Choose your filling and topping",
        descriptionKR: "속 재료와 토핑을 선택하세요",
        price: 10000,
        category: "baked",
        portionRU: "8шт",
        portionEN: "8pcs",
        portionKR: "8개",
        image: "pic/photo_24_2026-02-10_18-12-04.jpg",
        isBakedBuilder: true
    },

    // CLASSIC ROLLS (КЛАССИЧЕСКИЕ РОЛЛЫ)
    {
        id: 16,
        nameRU: "Ролл с лососем",
        nameEN: "Salmon Roll",
        nameKR: "연어 롤",
        descriptionRU: "Простой ролл с лососем",
        descriptionEN: "Simple salmon roll",
        descriptionKR: "기본 연어 롤",
        price: 5000,
        category: "classic",
        portionRU: "6шт",
        portionEN: "6pcs",
        portionKR: "6개",
        image: "pic/photo_31_2026-02-10_18-12-04.jpg"
    },
    {
        id: 17,
        nameRU: "Ролл с угрём",
        nameEN: "Eel Roll",
        nameKR: "훈제 장어 롤",
        descriptionRU: "Копчёный угорь",
        descriptionEN: "Smoked eel",
        descriptionKR: "훈제 장어",
        price: 6000,
        category: "classic",
        portionRU: "6шт",
        portionEN: "6pcs",
        portionKR: "6개",
        image: "pic/photo_29_2026-02-10_18-12-04.jpg"
    },
    {
        id: 18,
        nameRU: "Ролл с тунцом",
        nameEN: "Tuna Roll",
        nameKR: "참치 롤",
        descriptionRU: "Свежий тунец",
        descriptionEN: "Fresh tuna",
        descriptionKR: "신선한 참치",
        price: 6000,
        category: "classic",
        portionRU: "6шт",
        portionEN: "6pcs",
        portionKR: "6개",
        image: "pic/photo_30_2026-02-10_18-12-04.jpg"
    },
    {
        id: 19,
        nameRU: "Ролл с гребешком",
        nameEN: "Scallop Roll",
        nameKR: "가리비 롤",
        descriptionRU: "Нежный гребешок",
        descriptionEN: "Tender scallop",
        descriptionKR: "부드러운 가리비",
        price: 6000,
        category: "classic",
        portionRU: "6шт",
        portionEN: "6pcs",
        portionKR: "6개",
        image: "placeholder-scallop-cucumber.jpg"
    },
    {
        id: 20,
        nameRU: "Ролл с огурцом",
        nameEN: "Cucumber Roll",
        nameKR: "오이 롤",
        descriptionRU: "Вегетарианский",
        descriptionEN: "Vegetarian",
        descriptionKR: "채식",
        price: 3500,
        category: "classic",
        portionRU: "6шт",
        portionEN: "6pcs",
        portionKR: "6개",
        image: "pic/photo_32_2026-02-10_18-12-04.jpg"
    },
    {
        id: 21,
        nameRU: "Авокадо ролл",
        nameEN: "Avocado Roll",
        nameKR: "아보카도 롤",
        descriptionRU: "Свежее авокадо",
        descriptionEN: "Fresh avocado",
        descriptionKR: "신선한 아보카도",
        price: 4000,
        category: "classic",
        portionRU: "6шт",
        portionEN: "6pcs",
        portionKR: "6개",
        image: "pic/photo_33_2026-02-10_18-12-04.jpg"
    },

    // ROLLS (РОЛЛЫ)
    {
        id: 22,
        nameRU: "Калифорния с лососем",
        nameEN: "California Salmon",
        nameKR: "연어 캘리포니아 롤",
        descriptionRU: "Лосось, авокадо, огурец, майонез, икра тобико",
        descriptionEN: "Salmon, avocado, cucumber, mayo, tobiko roe",
        descriptionKR: "연어, 아보카도, 오이, 마요네즈, 날치알(토비코)",
        price: 10000,
        category: "rolls",
        portionRU: "8шт",
        portionEN: "8pcs",
        portionKR: "8개",
        image: "pic/photo_14_2026-02-10_18-12-04.jpg"
    },
    {
        id: 23,
        nameRU: "Ролл Креветка темпура",
        nameEN: "Shrimp Tempura Roll",
        nameKR: "새우 텐푸라 롤",
        descriptionRU: "Креветка в кляре, авокадо, огурец, сыр Филадельфия, панировка фурикаке",
        descriptionEN: "Tempura shrimp, avocado, cucumber, cream cheese, furikake coating",
        descriptionKR: "튀김 새우, 아보카도, 오이, 크림치즈, 후리카케",
        price: 13000,
        category: "rolls",
        portionRU: "8шт",
        portionEN: "8pcs",
        portionKR: "8개",
        image: "pic/photo_12_2026-02-10_18-12-04.jpg"
    },
    {
        id: 24,
        nameRU: "Калифорния с крабом",
        nameEN: "California Crab",
        nameKR: "게살 캘리포니아 롤",
        descriptionRU: "Крабовые палочки, авокадо, огурец, майонез, икра тобико",
        descriptionEN: "Crab sticks, avocado, cucumber, mayo, tobiko roe",
        descriptionKR: "게살, 아보카도, 오이, 마요네즈, 날치알",
        price: 10000,
        category: "rolls",
        portionRU: "8шт",
        portionEN: "8pcs",
        portionKR: "8개",
        image: "pic/photo_19_2026-02-10_18-12-04.jpg"
    },
    {
        id: 25,
        nameRU: "Горячий ролл с лососем",
        nameEN: "Hot Salmon Roll",
        nameKR: "연어 핫 롤",
        descriptionRU: "Лосось, авокадо, огурец, сыр Филадельфия",
        descriptionEN: "Salmon, avocado, cucumber, cream cheese",
        descriptionKR: "연어, 아보카도, 오이, 크림치즈",
        price: 13000,
        category: "rolls",
        portionRU: "8шт",
        portionEN: "8pcs",
        portionKR: "8개",
        image: "pic/photo_11_2026-02-10_18-12-04.jpg"
    },
    {
        id: 26,
        nameRU: "Фурикаке",
        nameEN: "Furikake Roll",
        nameKR: "연어 후리카케 롤",
        descriptionRU: "Лосось в кляре, авокадо, огурец, спайси соус, хрустящий лук, панировка фурикаке",
        descriptionEN: "Tempura salmon, avocado, cucumber, spicy sauce, crispy onion, furikake coating",
        descriptionKR: "튀김 연어, 아보카도, 오이, 스파이시 소스, 양파, 후리카케",
        price: 10000,
        category: "rolls",
        portionRU: "8шт",
        portionEN: "8pcs",
        portionKR: "8개",
        image: "pic/photo_13_2026-02-10_18-12-04.jpg"
    },
    {
        id: 27,
        nameRU: "Горячий ролл с угрём",
        nameEN: "Hot Eel Roll",
        nameKR: "훈제 장어 핫 롤",
        descriptionRU: "Угорь, авокадо, огурец, сыр Филадельфия",
        descriptionEN: "Eel, avocado, cucumber, cream cheese",
        descriptionKR: "훈제 장어, 아보카도, 오이, 크림치즈",
        price: 13000,
        category: "rolls",
        portionRU: "8шт",
        portionEN: "8pcs",
        portionKR: "8개",
        image: "pic/photo_10_2026-02-10_18-12-04.jpg"
    },
    {
        id: 28,
        nameRU: "Филадельфия",
        nameEN: "Philadelphia Roll",
        nameKR: "필라델피아 롤",
        descriptionRU: "Лосось, сыр Филадельфия, огурец, авокадо",
        descriptionEN: "Salmon, cream cheese, cucumber, avocado",
        descriptionKR: "연어, 크림치즈, 오이, 아보카도",
        price: 13000,
        category: "rolls",
        portionRU: "8шт",
        portionEN: "8pcs",
        portionKR: "8개",
        image: "pic/photo_21_2026-02-10_18-12-04.jpg"
    },
    {
        id: 29,
        nameRU: "Канада ролл",
        nameEN: "Canada Roll",
        nameKR: "캐나다 롤",
        descriptionRU: "Угорь, лосось, сыр Филадельфия, авокадо, соус терияки, кунжут",
        descriptionEN: "Eel, salmon, cream cheese, avocado, teriyaki sauce, sesame",
        descriptionKR: "장어, 연어, 크림치즈, 아보카도, 데리야키 소스, 참깨",
        price: 13000,
        category: "rolls",
        portionRU: "8шт",
        portionEN: "8pcs",
        portionKR: "8개",
        image: "pic/photo_20_2026-02-10_18-12-04.jpg"
    },

    // SETS (СЕТЫ)
    {
        id: 30,
        nameRU: "Мини сет с лососем",
        nameEN: "Mini Salmon Set",
        nameKR: "미니 연어 세트",
        descriptionRU: "Филадельфия 8шт, суши лосось 2шт",
        descriptionEN: "Philadelphia 8pcs, salmon sushi 2pcs",
        descriptionKR: "필라델피아 8개, 연어 초밥 2개",
        price: 15000,
        category: "sets",
        portionRU: "10шт",
        portionEN: "10pcs",
        portionKR: "10개",
        image: "pic/photo_35_2026-02-10_18-12-04.jpg"
    },
    {
        id: 32,
        nameRU: "Лосось сет",
        nameEN: "Salmon Set",
        nameKR: "연어 세트",
        descriptionRU: "Филадельфия 8шт, лосось ролл 6шт, суши лосось 3шт, сашими лосось 110г",
        descriptionEN: "Philadelphia 8pcs, salmon roll 6pcs, salmon sushi 3pcs, salmon sashimi 110g",
        descriptionKR: "필라델피아 8개, 연어 롤 6개, 연어 초밥 3개, 연어 사시미 110g",
        price: 40000,
        category: "sets",
        portionRU: "17шт + сашими",
        portionEN: "17pcs + sashimi",
        portionKR: "17개 + 사시미",
        image: "pic/photo_36_2026-02-10_18-12-04.jpg"
    },
    {
        id: 33,
        nameRU: "Лучший сет роллов",
        nameEN: "Best Roll Set",
        nameKR: "베스트 롤 세트",
        descriptionRU: "Филадельфия 8шт, Канада 8шт, Калифорния с крабом 8шт",
        descriptionEN: "Philadelphia 8pcs, Canada 8pcs, California Crab 8pcs",
        descriptionKR: "필라델피아 8개, 캐나다 8개, 게살 캘리포니아 8개",
        price: 35000,
        category: "sets",
        portionRU: "24шт",
        portionEN: "24pcs",
        portionKR: "24개",
        image: "pic/photo_34_2026-02-10_18-12-04.jpg"
    },
    {
        id: 34,
        nameRU: "Специальный сет роллов",
        nameEN: "Special Roll Set",
        nameKR: "스페셜 롤 세트",
        descriptionRU: "Филадельфия 8шт, Канада 8шт, Калифорния с крабом 8шт, Фурикаке 8шт, Запечённый 4шт, Запечённый острый 4шт, Горячий лосось 4шт, Горячий угорь 4шт",
        descriptionEN: "Philadelphia 8pcs, Canada 8pcs, California Crab 8pcs, Furikake 8pcs, Baked 4pcs, Spicy Baked 4pcs, Hot Salmon 4pcs, Hot Eel 4pcs",
        descriptionKR: "필라델피아 8개, 캐나다 8개, 게살 캘리포니아 8개, 후리카케 8개, 구운 롤 4개, 매운 구운 롤 4개, 연어 핫 롤 4개, 장어 핫 롤 4개",
        price: 70000,
        category: "sets",
        portionRU: "48шт",
        portionEN: "48pcs",
        portionKR: "48개",
        image: "pic/photo_37_2026-02-10_18-12-04.jpg"
    }
];

// Baked Roll Builder options (fallback — overridden by Google Sheet data)
let bakedFillings = [
    { id: 'лосось', nameRU: 'Лосось с огурцом', nameEN: 'Salmon & Cucumber', nameKR: '연어 오이', image: 'pic/photo_25_2026-02-10_18-12-04.jpg' },
    { id: 'угорь', nameRU: 'Угорь с огурцом', nameEN: 'Eel & Cucumber', nameKR: '장어 오이', image: 'pic/photo_27_2026-02-10_18-12-04.jpg' },
    { id: 'тунец', nameRU: 'Тунец с огурцом', nameEN: 'Tuna & Cucumber', nameKR: '참치 오이', image: 'pic/photo_30_2026-02-10_18-12-04.jpg' },
    { id: 'гребешок', nameRU: 'Гребешок с огурцом', nameEN: 'Scallop & Cucumber', nameKR: '가리비 오이', image: 'pic/photo_4_2026-02-10_18-12-04.jpg' }
];

let bakedToppings = [
    { id: 'крабовая', nameRU: 'Крабовая с чесноком', nameEN: 'Crab & Garlic', nameKR: '크랩 갈릭', image: 'pic/photo_23_2026-02-10_18-12-04.jpg' },
    { id: 'терияки', nameRU: 'Терияки', nameEN: 'Teriyaki', nameKR: '테리야키', image: 'pic/photo_23_2026-02-10_18-12-04.jpg' },
    { id: 'спайс', nameRU: 'Спайс', nameEN: 'Spicy', nameKR: '스파이시', image: 'pic/photo_22_2026-02-10_18-12-04.jpg' },
    { id: 'унаги', nameRU: 'Унаги', nameEN: 'Unagi', nameKR: '우나기', image: 'pic/photo_22_2026-02-10_18-12-04.jpg' },
    { id: 'ассорти', nameRU: 'Ассорти (4 вкуса)', nameEN: 'Assorted (4 flavors)', nameKR: '모듬 (4가지 맛)', image: 'pic/photo_24_2026-02-10_18-12-04.jpg' }
];

// Cart state
let cart = [];
let currentLanguage = 'ru';

// Trilingual helper — returns text for current language
function t(ru, en, kr) {
    if (currentLanguage === 'en') return en;
    if (currentLanguage === 'kr') return kr;
    return ru;
}

// Get localized field from an item object (name, description, portion)
function itemField(item, field) {
    if (currentLanguage === 'en') return item[field + 'EN'] || item[field + 'RU'];
    if (currentLanguage === 'kr') return item[field + 'KR'];
    return item[field + 'RU'];
}
let currentCategory = 'all';

// Customer info localStorage
function saveCustomerInfo() {
    const info = {
        name: document.getElementById('customerName').value,
        phone: document.getElementById('customerPhone').value,
        address: document.getElementById('deliveryAddress').value,
        flat: document.getElementById('deliveryFlat').value,
        entranceCode: document.getElementById('deliveryEntranceCode').value
    };
    localStorage.setItem('customerInfo', JSON.stringify(info));
}

function loadCustomerInfo() {
    const saved = localStorage.getItem('customerInfo');
    if (saved) {
        try {
            const info = JSON.parse(saved);
            if (info.name) document.getElementById('customerName').value = info.name;
            if (info.phone) document.getElementById('customerPhone').value = info.phone;
            if (info.address) document.getElementById('deliveryAddress').value = info.address;
            if (info.flat) document.getElementById('deliveryFlat').value = info.flat;
            if (info.entranceCode) document.getElementById('deliveryEntranceCode').value = info.entranceCode;
        } catch (e) {
            // Ignore corrupted data
        }
    }
}

// CSV parser (handles quoted fields with commas)
function parseCSV(text) {
    var lines = text.trim().split('\n');
    var headers = parseCSVLine(lines[0]);
    var result = [];
    for (var i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        var values = parseCSVLine(lines[i]);
        var obj = {};
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j].trim()] = (values[j] || '').trim();
        }
        result.push(obj);
    }
    return result;
}

function parseCSVLine(line) {
    var result = [];
    var current = '';
    var inQuotes = false;
    for (var i = 0; i < line.length; i++) {
        var ch = line[i];
        if (inQuotes) {
            if (ch === '"' && line[i + 1] === '"') {
                current += '"';
                i++;
            } else if (ch === '"') {
                inQuotes = false;
            } else {
                current += ch;
            }
        } else {
            if (ch === '"') {
                inQuotes = true;
            } else if (ch === ',') {
                result.push(current);
                current = '';
            } else {
                current += ch;
            }
        }
    }
    result.push(current);
    return result;
}

function loadMenuFromSheet() {
    return fetch(MENU_SHEET_CSV, { redirect: 'follow' })
        .then(function(r) {
            if (!r.ok) throw new Error('HTTP ' + r.status);
            return r.text();
        })
        .then(function(csv) {
            // Check if we got HTML instead of CSV (redirect/error page)
            if (csv.trim().startsWith('<')) throw new Error('Got HTML instead of CSV');
            var rows = parseCSV(csv);
            if (rows.length === 0) throw new Error('Empty sheet');

            var newMenu = [];
            var newFillings = [];
            var newToppings = [];

            rows.forEach(function(row) {
                var bt = (row.builderType || '').trim().toLowerCase();

                if (bt === 'filling') {
                    newFillings.push({
                        id: row.id || '',
                        nameRU: row.nameRU || '',
                        nameEN: row.nameEN || '',
                        nameKR: row.nameKR || '',
                        image: row.image || ''
                    });
                } else if (bt === 'topping') {
                    newToppings.push({
                        id: row.id || '',
                        nameRU: row.nameRU || '',
                        nameEN: row.nameEN || '',
                        nameKR: row.nameKR || '',
                        image: row.image || ''
                    });
                } else {
                    var item = {
                        id: parseInt(row.id) || 0,
                        nameRU: row.nameRU || '',
                        nameEN: row.nameEN || '',
                        nameKR: row.nameKR || '',
                        descriptionRU: row.descriptionRU || '',
                        descriptionEN: row.descriptionEN || '',
                        descriptionKR: row.descriptionKR || '',
                        price: parseInt(row.price) || 0,
                        category: row.category || '',
                        portionRU: row.portionRU || row.portionRu || '',
                        portionEN: row.portionEN || '',
                        portionKR: row.portionKR || '',
                        image: row.image || ''
                    };
                    if (row.isBakedBuilder === 'TRUE' || row.isBakedBuilder === 'true') {
                        item.isBakedBuilder = true;
                    }
                    newMenu.push(item);
                }
            });

            menuData = newMenu;
            if (newFillings.length > 0) bakedFillings = newFillings;
            if (newToppings.length > 0) bakedToppings = newToppings;
            applyImagePositions();
            console.log('Menu loaded from Google Sheets:', menuData.length, 'items,', bakedFillings.length, 'fillings,', bakedToppings.length, 'toppings');
        })
        .catch(function(err) {
            console.warn('Failed to load menu from sheet, using fallback:', err);
        });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadMenuFromSheet().then(function() {
        renderMenu();
        updateCartDisplay();
        updateLanguage();
        loadCustomerInfo();
    });
});

// Menu rendering
const categoryNames = {
    sushi:   { ru: 'СУШИ',               en: 'SUSHI',          kr: '초밥' },
    classic: { ru: 'КЛАССИЧЕСКИЕ РОЛЛЫ',  en: 'CLASSIC ROLLS',  kr: '클래식 롤' },
    baked:   { ru: 'ЗАПЕЧЁННЫЕ',          en: 'BAKED ROLLS',    kr: '구운 롤' },
    rolls:   { ru: 'РОЛЛЫ',              en: 'SPECIALTY ROLLS', kr: '롤' },
    sets:    { ru: 'СЕТЫ',               en: 'SETS',            kr: '세트' }
};

const categoryOrder = ['sushi', 'classic', 'baked', 'rolls', 'sets'];

// Per-image crop adjustments for photos where center crop cuts off the food
var imagePositionMap = {
};

function applyImagePositions() {
    menuData.forEach(function(item) {
        if (imagePositionMap[item.image]) {
            item.imagePosition = imagePositionMap[item.image];
        }
    });
}

function renderMenuItemHTML(item) {
    const name = itemField(item, 'name');
    const desc = itemField(item, 'description');
    const portion = itemField(item, 'portion');
    const clickAction = item.isBakedBuilder ? `openBakedBuilder()` : `openItemDetail(${item.id})`;
    const addAction = item.isBakedBuilder ? `event.stopPropagation(); openBakedBuilder()` : `event.stopPropagation(); addToCart(${item.id})`;
    const addLabel = item.isBakedBuilder
        ? t('🔧 СОБРАТЬ', '🔧 BUILD', '🔧 만들기')
        : t('+ В КОРЗИНУ', '+ ADD TO CART', '+ 담기');
    return `
        <div class="menu-item" data-category="${item.category}" onclick="${clickAction}">
            <div class="menu-item-image-wrap">
                <img src="${item.image}" alt="${item.nameRU}"${item.imagePosition ? ` style="object-position: ${item.imagePosition}"` : ''} onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 250%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22300%22 height=%22250%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22%23999%22 font-size=%2220%22%3E${encodeURIComponent(item.nameRU)}%3C/text%3E%3C/svg%3E'">
                <div class="menu-item-badge">${portion}</div>
            </div>
            <div class="menu-item-content">
                <h3>${name}</h3>
                <p class="menu-item-description">${desc}</p>
                <div class="menu-item-footer">
                    <span class="price">₩${item.price.toLocaleString()}</span>
                    <button class="add-to-cart" onclick="${addAction}">
                        ${addLabel}
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    const container = document.getElementById('menuContainer');
    container.innerHTML = '';

    if (currentCategory !== 'all') {
        // Single category — show header + grid
        const items = menuData.filter(item => item.category === currentCategory);
        const catName = categoryNames[currentCategory];
        const label = catName[currentLanguage] || catName.ru;

        var sectionHTML = '<div class="menu-section">';
        sectionHTML += '<div class="menu-section-header">';
        sectionHTML += '<h2>' + label + '</h2>';
        sectionHTML += '</div>';
        sectionHTML += '<div class="menu-grid">';
        items.forEach(function(item) { sectionHTML += renderMenuItemHTML(item); });
        sectionHTML += '</div></div>';
        container.innerHTML = sectionHTML;
    } else {
        // All categories — group with headers
        var allHTML = '';
        categoryOrder.forEach(function(cat) {
            var items = menuData.filter(function(item) { return item.category === cat; });
            if (items.length === 0) return;
            var catName = categoryNames[cat];
            var label = catName[currentLanguage] || catName.ru;

            allHTML += '<div class="menu-section" id="section-' + cat + '">';
            allHTML += '<div class="menu-section-header">';
            allHTML += '<h2>' + label + '</h2>';
            allHTML += '</div>';
            allHTML += '<div class="menu-grid">';
            items.forEach(function(item) { allHTML += renderMenuItemHTML(item); });
            allHTML += '</div></div>';
        });
        container.innerHTML = allHTML;
    }
}

// Item detail popup
function openItemDetail(itemId) {
    const item = menuData.find(i => i.id === itemId);
    if (!item) return;

    const overlay = document.getElementById('itemDetailOverlay');
    const detail = document.getElementById('itemDetail');
    const name = itemField(item, 'name');
    const desc = itemField(item, 'description');
    const portion = itemField(item, 'portion');
    const ingredientsLabel = t('СОСТАВ', 'INGREDIENTS', '재료');
    const nutrientsLabel = t('ПИЩЕВАЯ ЦЕННОСТЬ', 'NUTRITION INFO', '영양 정보');
    const nutrientsPlaceholder = t(
        'Информация о пищевой ценности скоро будет добавлена.',
        'Nutrition information will be added soon.',
        '영양 정보는 곧 추가될 예정입니다.');
    const addText = t('+ В КОРЗИНУ', '+ ADD TO CART', '+ 담기');

    detail.innerHTML = `
        <div class="item-detail-image-wrap">
            <img class="item-detail-image" src="${item.image}" alt="${name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 480 260%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22480%22 height=%22260%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22%23999%22 font-size=%2222%22%3E${encodeURIComponent(name)}%3C/text%3E%3C/svg%3E'">
            <button class="item-detail-close" onclick="closeItemDetail()">×</button>
        </div>
        <div class="item-detail-body">
            <h2>${name}</h2>
            <div class="item-detail-portion">${portion}</div>
            <div class="item-detail-section">
                <h4>${ingredientsLabel}</h4>
                <p>${desc}</p>
            </div>
            <div class="item-detail-section">
                <h4>${nutrientsLabel}</h4>
                <div class="item-detail-nutrients">${nutrientsPlaceholder}</div>
            </div>
            <div class="item-detail-footer">
                <span class="item-detail-price">₩${item.price.toLocaleString()}</span>
                <button class="item-detail-add" onclick="addToCart(${item.id}); closeItemDetail();">${addText}</button>
            </div>
        </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeItemDetail() {
    const overlay = document.getElementById('itemDetailOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Baked Roll Builder
let selectedFilling = null;
let selectedTopping = null;

function openBakedBuilder() {
    selectedFilling = null;
    selectedTopping = null;

    var builderItem = menuData.find(function(i) { return i.isBakedBuilder; });
    var price = builderItem ? builderItem.price : 10000;

    var overlay = document.getElementById('builderOverlay');
    var body = document.getElementById('builderBody');
    var title = document.getElementById('builderTitle');
    var addText = document.getElementById('builderAddText');
    var addBtn = document.getElementById('bakedAddBtn');

    title.textContent = t('Собери свой запечённый ролл', 'Build Your Baked Roll', '나만의 구운 롤 만들기');
    addText.textContent = t('+ В КОРЗИНУ', '+ ADD TO CART', '+ 담기') + ' — ₩' + price.toLocaleString();
    addBtn.disabled = true;

    var fillingLabel = t('Выберите начинку', 'Choose a filling', '속 재료 선택');
    var toppingLabel = t('Выберите топпинг', 'Choose a topping', '토핑 선택');

    var fillingsHTML = bakedFillings.map(function(f) {
        var n = itemField(f, 'name');
        return '<div class="builder-option" data-id="' + f.id + '" onclick="selectFilling(\'' + f.id + '\', this)">' +
            '<span class="builder-check">✓</span>' +
            '<img src="' + f.image + '" alt="' + n + '">' +
            '<span>' + n + '</span></div>';
    }).join('');

    var toppingsHTML = bakedToppings.map(function(tp) {
        var n = itemField(tp, 'name');
        return '<div class="builder-option" data-id="' + tp.id + '" onclick="selectTopping(\'' + tp.id + '\', this)">' +
            '<span class="builder-check">✓</span>' +
            '<img src="' + tp.image + '" alt="' + n + '">' +
            '<span>' + n + '</span></div>';
    }).join('');

    body.innerHTML =
        '<div class="builder-step">' +
            '<div class="builder-step-label"><span class="builder-step-num">1</span><h4>' + fillingLabel + '</h4></div>' +
            '<div class="builder-options">' + fillingsHTML + '</div>' +
        '</div>' +
        '<div class="builder-step">' +
            '<div class="builder-step-label"><span class="builder-step-num">2</span><h4>' + toppingLabel + '</h4></div>' +
            '<div class="builder-options toppings-grid">' + toppingsHTML + '</div>' +
        '</div>';

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBuilder() {
    document.getElementById('builderOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function selectFilling(id, el) {
    if (selectedFilling === id) {
        selectedFilling = null;
        el.classList.remove('selected');
    } else {
        selectedFilling = id;
        el.parentElement.querySelectorAll('.builder-option').forEach(function(o) { o.classList.remove('selected'); });
        el.classList.add('selected');
    }
    checkBakedReady();
}

function selectTopping(id, el) {
    if (selectedTopping === id) {
        selectedTopping = null;
        el.classList.remove('selected');
    } else {
        selectedTopping = id;
        el.parentElement.querySelectorAll('.builder-option').forEach(function(o) { o.classList.remove('selected'); });
        el.classList.add('selected');
    }
    checkBakedReady();
}

function checkBakedReady() {
    var btn = document.getElementById('bakedAddBtn');
    if (selectedFilling && selectedTopping) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function addBakedToCart() {
    if (!selectedFilling || !selectedTopping) return;
    var filling = bakedFillings.find(function(f) { return f.id === selectedFilling; });
    var topping = bakedToppings.find(function(t) { return t.id === selectedTopping; });
    if (!filling || !topping) return;

    var builderItem = menuData.find(function(i) { return i.isBakedBuilder; });
    var price = builderItem ? builderItem.price : 10000;

    // Create a unique composite id for this combination
    var compositeId = 'baked_' + selectedFilling + '_' + selectedTopping;
    var existingItem = cart.find(function(i) { return i.compositeId === compositeId; });

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: Date.now(),
            compositeId: compositeId,
            nameRU: 'Запечённый: ' + filling.nameRU + ' + ' + topping.nameRU,
            nameEN: 'Baked: ' + (filling.nameEN || filling.nameRU) + ' + ' + (topping.nameEN || topping.nameRU),
            nameKR: '구운 롤: ' + filling.nameKR + ' + ' + topping.nameKR,
            price: price,
            portionRU: '8шт',
            portionEN: '8pcs',
            portionKR: '8개',
            image: topping.image,
            quantity: 1
        });
    }

    updateCartDisplay();
    closeBuilder();

    var cartButton = document.querySelector('.cart-button');
    cartButton.style.transform = 'scale(1.1)';
    setTimeout(function() { cartButton.style.transform = 'scale(1)'; }, 200);
}

// Category showcase — select from big cards
function selectCategory(cat) {
    // Scroll to menu section first
    var menuSection = document.getElementById('menu');
    if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Small delay so scroll starts, then filter
    setTimeout(function() {
        // Update sticky bar active button
        document.querySelectorAll('.category-button').forEach(function(btn) {
            btn.classList.remove('active');
            var btnRU = (btn.getAttribute('data-ru') || '').toUpperCase();
            var catLabels = {
                sushi: 'СУШИ', classic: 'КЛАССИЧЕСКИЕ', baked: 'ЗАПЕЧЁННЫЕ', rolls: 'РОЛЛЫ', sets: 'СЕТЫ'
            };
            if (catLabels[cat] && btnRU === catLabels[cat]) {
                btn.classList.add('active');
            }
        });
        currentCategory = cat;
        renderMenu();
    }, 300);
}

// Category filtering
function filterCategory(category, event) {
    // Update active button
    document.querySelectorAll('.category-button').forEach(btn => {
        btn.classList.remove('active');
    });

    if (event && event.target) {
        event.target.classList.add('active');
    }

    // If already on "all" and clicking a specific category — scroll to its section
    if (currentCategory === 'all' && category !== 'all') {
        var section = document.getElementById('section-' + category);
        if (section) {
            var stickyBar = document.getElementById('menuCategoriesWrap');
            var offset = stickyBar ? stickyBar.offsetHeight + 10 : 60;
            var top = section.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: top, behavior: 'smooth' });
            return;
        }
    }

    currentCategory = category;
    renderMenu();

    // Scroll to top of menu container
    var container = document.getElementById('menuContainer');
    if (container) {
        var stickyBar = document.getElementById('menuCategoriesWrap');
        var offset = stickyBar ? stickyBar.offsetHeight + 10 : 60;
        var top = container.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
    }
}

// Cart functions
function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    
    // Show brief animation or feedback
    const cartButton = document.querySelector('.cart-button');
    cartButton.style.transform = 'scale(1.1)';
    setTimeout(() => {
        cartButton.style.transform = 'scale(1)';
    }, 200);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCartDisplay();
        }
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartTotal.textContent = `₩${totalPrice.toLocaleString()}`;

    // Sync sticky nav cart count
    var stickyCount = document.getElementById('stickyCartCount');
    if (stickyCount) stickyCount.textContent = totalItems;

    // Sync floating cart button count
    var floatingCount = document.getElementById('floatingCartCount');
    if (floatingCount) floatingCount.textContent = totalItems;

    // Update delivery cost info in cart
    var deliveryInfo = document.getElementById('cartDeliveryInfo');
    if (deliveryInfo && cart.length > 0) {
        if (totalPrice >= 30000) {
            deliveryInfo.innerHTML = t(
                '🚗 Доставка по Дунпо: <strong style="color:#2a7d2a;">БЕСПЛАТНО</strong>',
                '🚗 Dunpo delivery: <strong style="color:#2a7d2a;">FREE</strong>',
                '🚗 둔포면 배달: <strong style="color:#2a7d2a;">무료</strong>');
        } else {
            var remaining = (30000 - totalPrice).toLocaleString();
            deliveryInfo.innerHTML = t(
                '🚗 Доставка: ₩5,000 — ещё ₩' + remaining + ' до бесплатной',
                '🚗 Delivery: ₩5,000 — ₩' + remaining + ' more for free delivery',
                '🚗 배달비: ₩5,000 — 무료까지 ₩' + remaining + ' 남음');
        }
    } else if (deliveryInfo) {
        deliveryInfo.innerHTML = '';
    }
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>${t('Корзина пуста', 'Your cart is empty', '장바구니가 비어 있습니다')}</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.nameRU}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 80 80%22%3E%3Crect fill=%22%23f0f0f0%22 width=%2280%22 height=%2280%22/%3E%3C/svg%3E'">
                <div class="cart-item-details">
                    <div class="cart-item-name">${itemField(item, 'name')}</div>
                    <div class="cart-item-price">₩${item.price.toLocaleString()}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="quantity-btn" onclick="removeFromCart(${item.id})" style="margin-left: auto; color: red;">🗑️</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('open');
}

// Checkout functions
function openCheckout() {
    if (cart.length === 0) {
        alert(t('Корзина пуста!', 'Your cart is empty!', '장바구니가 비어 있습니다!'));
        return;
    }

    const checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    toggleCart(); // Close cart sidebar
    loadCustomerInfo(); // Pre-fill saved customer details
    renderOrderSummary(); // Populate order summary

    // Init the correct map based on selected order type
    const deliveryType = document.querySelector('input[name="orderType"]:checked');
    if (deliveryType && deliveryType.value === 'delivery') {
        if (deliveryMap) setTimeout(function() { deliveryMap.relayout(); }, 300);
    } else {
        setTimeout(function() { initPickupMap(); }, 300);
    }
}

function getDeliveryCost() {
    var orderType = document.querySelector('input[name="orderType"]:checked');
    if (!orderType || orderType.value === 'pickup') return 0;
    var subtotal = cart.reduce(function(sum, item) { return sum + (item.price * item.quantity); }, 0);
    return subtotal >= 30000 ? 0 : 5000;
}

function renderOrderSummary() {
    var summaryDiv = document.getElementById('orderSummary');
    var subtotal = cart.reduce(function(sum, item) { return sum + (item.price * item.quantity); }, 0);
    var deliveryCost = getDeliveryCost();
    var grandTotal = subtotal + deliveryCost;
    var headerText = t('ВАШ ЗАКАЗ', 'YOUR ORDER', '주문 내역');
    var deliveryLabel = t('Доставка', 'Delivery', '배달비');
    var totalLabel = t('ИТОГО', 'TOTAL', '합계');
    var freeText = t('бесплатно', 'free', '무료');

    var itemsHTML = cart.map(function(item) {
        var name = itemField(item, 'name');
        var lineTotal = item.price * item.quantity;
        return '<div class="order-summary-item">' +
            '<span class="order-summary-item-name">' + name + '</span>' +
            '<span class="order-summary-item-qty">×' + item.quantity + '</span>' +
            '<span class="order-summary-item-price">₩' + lineTotal.toLocaleString() + '</span>' +
            '</div>';
    }).join('');

    var orderType = document.querySelector('input[name="orderType"]:checked');
    var isDelivery = orderType && orderType.value === 'delivery';
    var deliveryRowHTML = isDelivery
        ? '<div class="order-summary-row delivery-row"><span>' + deliveryLabel + '</span><span>' +
          (deliveryCost === 0 ? freeText : '₩' + deliveryCost.toLocaleString()) + '</span></div>'
        : '';

    summaryDiv.innerHTML =
        '<div class="order-summary-header">' + headerText + '</div>' +
        '<div class="order-summary-items">' + itemsHTML + '</div>' +
        deliveryRowHTML +
        '<div class="order-summary-row total-row"><span>' + totalLabel + '</span><span class="summary-price">₩' + grandTotal.toLocaleString() + '</span></div>';
}

function closeCheckout() {
    const checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
}

let deliveryMap = null;
let deliveryMarker = null;
let kakaoGeocoder = null;

function getKakaoGeocoder() {
    if (!kakaoGeocoder) kakaoGeocoder = new kakao.maps.services.Geocoder();
    return kakaoGeocoder;
}

function toggleDeliveryFields() {
    const deliveryType = document.querySelector('input[name="orderType"]:checked').value;
    const addressGroup = document.getElementById('deliveryAddressGroup');
    const pickupGroup = document.getElementById('pickupInfoGroup');
    const addressInput = document.getElementById('deliveryAddress');
    const mapDiv = document.getElementById('deliveryMap');

    if (deliveryType === 'delivery') {
        addressGroup.classList.remove('hidden');
        pickupGroup.classList.add('hidden');
        addressInput.required = true;
        mapDiv.classList.add('active');
        initDeliveryMap();
    } else {
        addressGroup.classList.add('hidden');
        pickupGroup.classList.remove('hidden');
        addressInput.required = false;
        mapDiv.classList.remove('active');
        initPickupMap();
    }
    // Update order summary with delivery cost change
    renderOrderSummary();
}

var pickupMap = null;
function initPickupMap() {
    if (pickupMap) {
        pickupMap.relayout();
        return;
    }

    var mapDiv = document.getElementById('pickupMap');
    if (!mapDiv) return;

    var shopLocation = new kakao.maps.LatLng(36.8185, 127.0020);
    pickupMap = new kakao.maps.Map(mapDiv, {
        center: shopLocation,
        level: 3
    });

    // Add zoom control
    var zoomControl = new kakao.maps.ZoomControl();
    pickupMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    var marker = new kakao.maps.Marker({
        map: pickupMap,
        position: shopLocation
    });

    var infowindow = new kakao.maps.InfoWindow({
        content: '<div style="padding:8px 12px;font-size:13px;font-weight:600;white-space:nowrap;">🍣 김밥 & SUSHI HUB</div>'
    });
    infowindow.open(pickupMap, marker);
}

function initDeliveryMap() {
    if (deliveryMap) {
        deliveryMap.relayout();
        return;
    }

    var mapDiv = document.getElementById('deliveryMap');
    if (!mapDiv) return;

    // Center on Dunpo-myeon, Asan, South Korea
    var dunpoCenter = new kakao.maps.LatLng(36.8185, 127.0020);
    deliveryMap = new kakao.maps.Map(mapDiv, {
        center: dunpoCenter,
        level: 5
    });

    // Add zoom control
    var zoomControl2 = new kakao.maps.ZoomControl();
    deliveryMap.addControl(zoomControl2, kakao.maps.ControlPosition.RIGHT);

    // Add shop marker
    var shopMarker = new kakao.maps.Marker({
        map: deliveryMap,
        position: dunpoCenter
    });
    var shopInfo = new kakao.maps.InfoWindow({
        content: '<div style="padding:5px 10px;font-size:12px;white-space:nowrap;">🍣 김밥 & SUSHI HUB</div>'
    });
    shopInfo.open(deliveryMap, shopMarker);

    // Click on map to pick address
    kakao.maps.event.addListener(deliveryMap, 'click', function(mouseEvent) {
        var latlng = mouseEvent.latLng;
        setMapMarker(latlng.getLat(), latlng.getLng());
        reverseGeocode(latlng.getLat(), latlng.getLng());
    });

    // If address already saved, try to show it
    var savedAddr = document.getElementById('deliveryAddress').value;
    if (savedAddr) {
        forwardGeocode(savedAddr);
    }

    // Fix rendering after modal animation
    setTimeout(function() {
        deliveryMap.relayout();
    }, 300);
}

function setMapMarker(lat, lng) {
    var position = new kakao.maps.LatLng(lat, lng);
    if (deliveryMarker) {
        deliveryMarker.setPosition(position);
    } else {
        deliveryMarker = new kakao.maps.Marker({
            map: deliveryMap,
            position: position,
            draggable: true
        });
        kakao.maps.event.addListener(deliveryMarker, 'dragend', function() {
            var pos = deliveryMarker.getPosition();
            reverseGeocode(pos.getLat(), pos.getLng());
        });
    }
    deliveryMap.setCenter(position);
    deliveryMap.setLevel(3);
}

var deliveryZoneValid = false;

function isInDeliveryZone(address) {
    if (!address) return false;
    // Allow Dunpo-myeon (둔포) and Anjung (안중)
    return address.indexOf('둔포') !== -1 || address.indexOf('안중') !== -1;
}

function showDeliveryZoneWarning(show) {
    var warning = document.getElementById('deliveryZoneWarning');
    if (!warning) return;
    warning.style.display = show ? 'block' : 'none';
}

function reverseGeocode(lat, lng) {
    var geocoder = getKakaoGeocoder();
    geocoder.coord2Address(lng, lat, function(result, status) {
        if (status === kakao.maps.services.Status.OK && result[0]) {
            var addr = '';
            // Prefer road address if available
            if (result[0].road_address) {
                addr = result[0].road_address.address_name;
            } else if (result[0].address) {
                addr = result[0].address.address_name;
            }
            if (addr) {
                document.getElementById('deliveryAddress').value = addr;
                saveCustomerInfo();

                // Check delivery zone
                deliveryZoneValid = isInDeliveryZone(addr);
                showDeliveryZoneWarning(!deliveryZoneValid);
            }
        }
    });
}

function forwardGeocode(query) {
    var geocoder = getKakaoGeocoder();
    geocoder.addressSearch(query, function(result, status) {
        if (status === kakao.maps.services.Status.OK && result[0]) {
            setMapMarker(parseFloat(result[0].y), parseFloat(result[0].x));
        }
    });
}

function getMyLocation() {
    if (!navigator.geolocation) {
        alert(t(
            'Геолокация не поддерживается вашим браузером',
            'Geolocation is not supported by your browser',
            '브라우저에서 위치 서비스를 지원하지 않습니다'));
        return;
    }

    const btn = document.querySelector('.my-address-btn');
    btn.textContent = t('⏳ Поиск...', '⏳ Searching...', '⏳ 검색 중...');

    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            // Make sure map is visible and initialized
            const mapDiv = document.getElementById('deliveryMap');
            mapDiv.classList.add('active');
            initDeliveryMap();

            setTimeout(function() {
                setMapMarker(lat, lng);
                reverseGeocode(lat, lng);
                btn.textContent = t('📍 Мой адрес', '📍 My address', '📍 내 위치');
            }, 200);
        },
        function(error) {
            btn.textContent = t('📍 Мой адрес', '📍 My address', '📍 내 위치');
            var msg = '';
            if (error.code === 1) {
                msg = t(
                    'Доступ к геолокации запрещён. Разрешите в настройках браузера.',
                    'Location access denied. Please allow it in your browser settings.',
                    '위치 권한이 거부되었습니다. 브라우저 설정에서 허용해주세요.');
            } else {
                msg = t(
                    'Не удалось определить местоположение',
                    'Unable to determine your location',
                    '위치를 확인할 수 없습니다');
            }
            alert(msg);
        },
        { enableHighAccuracy: true, timeout: 10000 }
    );
}

function toggleBankDetails() {
    const paymentType = document.querySelector('input[name="payment"]:checked').value;
    const bankDetails = document.getElementById('bankDetails');
    
    if (paymentType === 'transfer') {
        bankDetails.classList.remove('hidden');
    } else {
        bankDetails.classList.add('hidden');
    }
}

let paymentTimerInterval = null;
let paymentTimerSeconds = 0;
let pendingOrderData = null;
const PAYMENT_TIMEOUT = 20 * 60; // 20 minutes in seconds

function submitOrder(event) {
    event.preventDefault();

    // Check delivery zone
    var orderType = document.querySelector('input[name="orderType"]:checked').value;
    if (orderType === 'delivery') {
        var addr = document.getElementById('deliveryAddress').value;
        if (!isInDeliveryZone(addr)) {
            alert(t(
                'Доставка доступна только в Дунпо и Анджонри. Пожалуйста, выберите адрес в зоне доставки.',
                'Delivery is available only in Dunpo and Anjungri. Please choose an address within the delivery zone.',
                '배달은 둔포면과 안중리 지역만 가능합니다. 배달 가능 지역의 주소를 선택해주세요.'));
            return;
        }
    }

    var subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    var deliveryCost = getDeliveryCost();

    const orderData = {
        orderNumber: 'SH' + Date.now().toString().slice(-6),
        customerName: document.getElementById('customerName').value,
        customerPhone: document.getElementById('customerPhone').value,
        orderType: document.querySelector('input[name="orderType"]:checked').value,
        deliveryAddress: document.getElementById('deliveryAddress').value,
        deliveryFlat: document.getElementById('deliveryFlat').value,
        deliveryEntranceCode: document.getElementById('deliveryEntranceCode').value,
        payment: document.querySelector('input[name="payment"]:checked').value,
        notes: document.getElementById('orderNotes').value,
        items: cart,
        subtotal: subtotal,
        deliveryCost: deliveryCost,
        total: subtotal + deliveryCost,
        timestamp: new Date().toISOString()
    };

    // Save customer info to localStorage for next visit
    saveCustomerInfo();

    // Close checkout modal
    closeCheckout();

    if (orderData.payment === 'transfer') {
        // Show payment timer screen
        pendingOrderData = orderData;
        openPaymentTimer(orderData);
    } else {
        // Cash payment — confirm immediately
        finalizeOrder(orderData);
    }
}

function openPaymentTimer(orderData) {
    var modal = document.getElementById('paymentTimerModal');
    document.getElementById('paymentAmount').textContent = '₩' + orderData.total.toLocaleString();
    document.getElementById('paymentOrderNumber').innerHTML =
        t('Заказ №', 'Order #', '주문번호 ') + '<strong>' + orderData.orderNumber + '</strong>';
    document.getElementById('paymentCountdown').textContent = '20:00';
    document.getElementById('paymentCountdown').classList.remove('urgent');
    document.getElementById('paymentTimerBarFill').style.width = '100%';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    paymentTimerSeconds = PAYMENT_TIMEOUT;

    // Start countdown
    if (paymentTimerInterval) clearInterval(paymentTimerInterval);
    paymentTimerInterval = setInterval(function() {
        paymentTimerSeconds--;
        if (paymentTimerSeconds <= 0) {
            clearInterval(paymentTimerInterval);
            paymentTimerInterval = null;
            declineOrder();
            return;
        }
        var mins = Math.floor(paymentTimerSeconds / 60);
        var secs = paymentTimerSeconds % 60;
        document.getElementById('paymentCountdown').textContent =
            String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');

        // Progress bar
        var pct = (paymentTimerSeconds / PAYMENT_TIMEOUT) * 100;
        document.getElementById('paymentTimerBarFill').style.width = pct + '%';

        // Urgent when under 5 minutes
        if (paymentTimerSeconds <= 300) {
            document.getElementById('paymentCountdown').classList.add('urgent');
        }
    }, 1000);
}

function confirmPayment() {
    if (paymentTimerInterval) clearInterval(paymentTimerInterval);
    paymentTimerInterval = null;
    document.getElementById('paymentTimerModal').classList.remove('active');
    document.body.style.overflow = '';

    if (pendingOrderData) {
        pendingOrderData.paymentConfirmed = true;
        finalizeOrder(pendingOrderData);
        pendingOrderData = null;
    }
}

function cancelPaymentTimer() {
    if (paymentTimerInterval) clearInterval(paymentTimerInterval);
    paymentTimerInterval = null;
    document.getElementById('paymentTimerModal').classList.remove('active');
    document.body.style.overflow = '';
    pendingOrderData = null;

    // Re-open checkout so user can change payment or re-order
    alert(t('Заказ отменён.', 'Order cancelled.', '주문이 취소되었습니다.'));
}

function declineOrder() {
    document.getElementById('paymentTimerModal').classList.remove('active');
    document.body.style.overflow = '';
    pendingOrderData = null;
    alert(t(
        'Время оплаты истекло. Заказ отменён.',
        'Payment time expired. Order cancelled.',
        '결제 시간이 초과되었습니다. 주문이 취소되었습니다.'));
}

function sendTelegramNotification(orderData) {
    if (TELEGRAM_BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE' || TELEGRAM_CHAT_ID === 'YOUR_CHAT_ID_HERE') {
        console.warn('Telegram not configured — skipping notification');
        return;
    }

    var paymentLabel = orderData.payment === 'cash' ? '💵 Наличные' : '💳 Перевод';
    if (orderData.paymentConfirmed) paymentLabel += ' ✅ Оплачено';

    var itemsText = orderData.items.map(function(item) {
        var name = item.nameRU || item.name || 'Item';
        return '  • ' + name + ' × ' + item.quantity + ' — ₩' + (item.price * item.quantity).toLocaleString();
    }).join('\n');

    var msg = '🍣 *НОВЫЙ ЗАКАЗ* 🍣\n\n';
    msg += '📋 *Заказ №* `' + orderData.orderNumber + '`\n';
    msg += '📅 ' + new Date(orderData.timestamp).toLocaleString('ru-RU', { timeZone: 'Asia/Seoul' }) + '\n\n';
    msg += '👤 *Клиент:* ' + orderData.customerName + '\n';
    msg += '📞 *Тел:* ' + orderData.customerPhone + '\n\n';

    if (orderData.orderType === 'delivery') {
        msg += '🚗 *Доставка*\n';
        msg += '📍 ' + orderData.deliveryAddress;
        if (orderData.deliveryFlat) msg += ', кв.' + orderData.deliveryFlat;
        if (orderData.deliveryEntranceCode) msg += ', код: ' + orderData.deliveryEntranceCode;
        msg += '\n\n';
    } else {
        msg += '🏪 *Самовывоз*\n\n';
    }

    msg += '🛒 *Заказ:*\n' + itemsText + '\n\n';

    if (orderData.deliveryCost > 0) {
        msg += '🚚 Доставка: ₩' + orderData.deliveryCost.toLocaleString() + '\n';
    }
    msg += '💰 *ИТОГО: ₩' + orderData.total.toLocaleString() + '*\n';
    msg += '💳 *Оплата:* ' + paymentLabel + '\n';

    if (orderData.notes) {
        msg += '\n📝 *Комментарий:* ' + orderData.notes;
    }

    var url = 'https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage';

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: msg,
            parse_mode: 'Markdown'
        })
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
        if (!data.ok) console.error('Telegram error:', data.description);
    })
    .catch(function(err) {
        console.error('Telegram send failed:', err);
    });
}

function finalizeOrder(orderData) {
    console.log('Order submitted:', orderData);
    localStorage.setItem('lastOrder', JSON.stringify(orderData));
    sendTelegramNotification(orderData);
    showSuccess(orderData);
    cart = [];
    updateCartDisplay();
}

function showSuccess(orderData) {
    const successModal = document.getElementById('successModal');
    document.getElementById('orderNumber').textContent = orderData.orderNumber;

    var fullAddr = orderData.deliveryAddress;
    if (orderData.deliveryFlat) fullAddr += ', ' + t('кв.', 'apt.', '호') + orderData.deliveryFlat;

    const orderTypeText = orderData.orderType === 'pickup'
        ? t('🏪 Самовывоз', '🏪 Pickup', '🏪 픽업')
        : t('🚗 Доставка: ' + fullAddr, '🚗 Delivery: ' + fullAddr, '🚗 배달: ' + fullAddr);

    document.getElementById('orderTypeDisplay').innerHTML = '<p>' + orderTypeText + '</p>';
    document.getElementById('orderTotalDisplay').innerHTML = '<p>' + t('Итого:', 'Total:', '합계:') + ' <strong>₩' + orderData.total.toLocaleString() + '</strong></p>';

    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSuccess() {
    const successModal = document.getElementById('successModal');
    successModal.classList.remove('active');
    document.body.style.overflow = '';
    document.getElementById('orderForm').reset();
}

// Language toggle
function toggleLanguage() {
    // Cycle: RU → EN → KR → RU
    if (currentLanguage === 'ru') {
        currentLanguage = 'en';
    } else if (currentLanguage === 'en') {
        currentLanguage = 'kr';
    } else {
        currentLanguage = 'ru';
    }

    // Update the button text
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = currentLanguage.toUpperCase();
    }
    // Sync sticky bar lang button
    const stickyLang = document.getElementById('stickyLangText');
    if (stickyLang) {
        stickyLang.textContent = currentLanguage.toUpperCase();
    }

    // Update all page text
    updateLanguage();

    // Re-render menu with new language
    renderMenu();
}

function updateLanguage() {
    var langMap = { ru: 'ru', en: 'en', kr: 'ko' };
    document.documentElement.lang = langMap[currentLanguage] || 'ru';

    document.querySelectorAll('[data-ru]').forEach(function(element) {
        var text;
        if (currentLanguage === 'en') {
            text = element.getAttribute('data-en') || element.getAttribute('data-ru');
        } else if (currentLanguage === 'kr') {
            text = element.getAttribute('data-kr');
        } else {
            text = element.getAttribute('data-ru');
        }
        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else if (element.tagName === 'BUTTON') {
                element.innerHTML = text;
            } else {
                element.textContent = text;
            }
        }
    });

    // Update cart display to reflect language change
    updateCartDisplay();
}

// Utility functions
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// Close modals on outside click
window.onclick = function(event) {
    const successModal = document.getElementById('successModal');
    const itemDetailOverlay = document.getElementById('itemDetailOverlay');

    if (event.target === successModal) {
        closeSuccess();
    }
    if (event.target === itemDetailOverlay) {
        closeItemDetail();
    }
    // Checkout & payment timer — don't close on outside click
}

// Close modals on ESC key (only item detail — checkout stays open)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const itemDetailOverlay = document.getElementById('itemDetailOverlay');
        if (itemDetailOverlay.classList.contains('active')) {
            closeItemDetail();
            return;
        }
    }
});

// Sticky category bar & Back to top button — scroll logic
(function() {
    var catWrap = document.getElementById('menuCategoriesWrap');
    var backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        // Add .stuck class when the category bar is stuck at top
        if (catWrap) {
            var rect = catWrap.getBoundingClientRect();
            if (rect.top <= 0) {
                catWrap.classList.add('stuck');
            } else {
                catWrap.classList.remove('stuck');
            }
        }

        // Show back-to-top after scrolling 500px
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
})();
