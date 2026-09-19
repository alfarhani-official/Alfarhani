// Marks any .ph-frame as "no-image" if its <img> fails to load (i.e. the
// real photo hasn't been added yet). Once you drop a real file in with the
// matching filename, this class is never added and the photo shows normally.
const watchImages = (scope = document) => scope.querySelectorAll('.ph-frame img').forEach((img) => {
  img.addEventListener('error', () => {
    if (img.classList.contains('image-hover')) return;
    img.classList.add('img-missing');
    img.closest('.ph-frame').classList.add('no-image');
  });
});
watchImages();

// Highlights the current page's icon in the header + footer nav.
const currentPage = document.body.getAttribute('data-page');
if (currentPage) {
  document.querySelectorAll(`[data-page="${currentPage}"]`).forEach((link) => {
    link.classList.add('active');
  });
}

// Footer year + WhatsApp helper: builds a wa.me link from the number set
// in CONTACT below, so you only edit the number in one place.
const CONTACT = {
  whatsappNumber: '9647515825235', // Country code followed by the WhatsApp number, without + or spaces.
  email: 'alirnew6@gmail.com'
};

document.querySelectorAll('[data-whatsapp-link]').forEach((el) => {
  const message = el.getAttribute('data-whatsapp-link') || 'Hello, I would like to ask about your products';
  el.href = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
});

document.querySelectorAll('[data-email-link]').forEach((el) => {
  el.href = `mailto:${CONTACT.email}`;
  if (el.hasAttribute('data-email-text')) el.textContent = CONTACT.email;
});

const PRODUCT_DESCRIPTIONS = [
  'Warm spicy vanilla with a promise theme', 'Timeless classic floral aldehyde', 'Crystalline saffron and amber', 'Bold, powerful and victorious',
  'Luminous floral gold', 'Fresh and triumphant', 'Opulent and precious like gold', 'Fresh, free and desert-inspired',
  'Direct and radiant floral', 'Elegant, youthful chypre', 'Radiant vanilla and jasmine', 'Energetic aquatic citrus',
  'Graceful soft woody floral', 'Dark, sensual and rich', 'Musky, powdery and warm', 'A lighter wild-rose floral',
  'Smoky oud and sandalwood with a regal character', 'Tropical coconut vanilla', 'Lavender and orange blossom with a free spirit', 'Modern green freshness',
  'Unconventional tea and woods', 'Delicate clean floral musk', 'Luxurious woody richness', 'Amber, spice and tobacco',
  'A white jasmine and tuberose bouquet', 'Dark floral gourmand', 'A complex oriental composition', 'Sweet marshmallow and orange blossom',
  'Warm rose and sweetness', 'Clear and authentic oud', 'A deep musky signature', 'Warm ambered oud',
  'A richer, more intense oud edition', 'Fruity floral with black currant', 'A sister scent to Ahdi', 'Confident sandalwood and iris',
  'Vanilla coconut gourmand', 'Rose, lychee and romance', 'Modern rose and patchouli', 'Intense vanilla and tonka',
  'Iris, praline and sweetness', 'Classic apple, cinnamon and woods', 'Fruity feminine floral', 'A rose-centered floral',
  'Mysterious oriental floral', 'Inspiring gourmand floral', 'A grand oud and rose opening', 'Dramatic and theatrical',
  'Elegant and architectural', 'A radiant legend'
];

const NOTE_TRANSLATIONS = {
  'Cardamom': 'هيل', 'Pink Pepper': 'فلفل وردي', 'Violet Leaf': 'أوراق البنفسج', 'Mint': 'نعناع', 'Sage': 'ميرمية', 'Melon': 'شمام', 'Pineapple': 'أناناس', 'Cinnamon': 'قرفة', 'Lavender': 'لافندر', 'Vanilla': 'فانيلا', 'Chestnut': 'كستناء', 'Amberwood': 'خشب عنبري', 'Cedar': 'أرز', 'Guaiac Wood': 'خشب الغاياك',
  'Aldehydes': 'ألدهيدات', 'Ylang-Ylang': 'يلانغ يلانغ', 'Neroli': 'نيرولي', 'Bergamot': 'برغموت', 'Peach': 'خوخ', 'Iris': 'سوسن', 'Jasmine': 'ياسمين', 'Rose': 'ورد', 'Lily-of-the-Valley': 'زنبق الوادي', 'Lily': 'زنبق', 'Sandalwood': 'خشب الصندل', 'Oakmoss': 'طحلب السنديان', 'Vetiver': 'فيتيفر', 'Patchouli': 'باتشولي',
  'Saffron': 'زعفران', 'Ambergris': 'عنبر رمادي', 'Fir Resin': 'راتنج التنوب', 'Pineapple': 'أناناس', 'Black Currant': 'كشمش أسود', 'Apple': 'تفاح', 'Birch': 'بتولا', 'Moroccan Jasmine': 'ياسمين مغربي', 'Musk': 'مسك', 'White Musk': 'مسك أبيض', 'Sea Notes': 'نفحات بحرية', 'Grapefruit': 'جريب فروت', 'Mandarin Orange': 'يوسفي', 'Bay Leaf': 'ورق الغار', 'Blood Mandarin': 'يوسفي أحمر', 'Spicy Notes': 'نفحات حارة', 'Amber': 'عنبر', 'Leather': 'جلد', 'Woody Notes': 'نفحات خشبية', 'Calabrian Bergamot': 'برغموت كالابريا', 'Pepper': 'فلفل', 'Sichuan Pepper': 'فلفل سيشوان', 'Geranium': 'إبرة الراعي', 'Elemi': 'إليمي', 'Ambroxan': 'أمبروكسان', 'Labdanum': 'لابدانوم', 'Cassis': 'كشمش أسود', 'Orange': 'برتقال', 'Orange Blossom': 'زهر البرتقال', 'Turkish Rose': 'ورد تركي', 'Mimosa': 'ميموزا', 'Whipped Cream': 'كريمة مخفوقة', 'Marshmallow': 'مارشميلو', 'Ambrette': 'أمبريت', 'Casablanca Lily': 'زنبق الدار البيضاء', 'Tahitian Vanilla': 'فانيلا تاهيتية', 'Truffle': 'كمأة', 'Gardenia': 'غاردينيا', 'Orchid': 'أوركيد', 'Spices': 'توابل', 'Fruity Notes': 'نفحات فاكهية', 'Mexican Chocolate': 'شوكولاتة مكسيكية', 'Incense': 'بخور', 'African Orange Flower': 'زهر البرتقال الأفريقي', 'Osmanthus': 'أوسمانثوس', 'Citrus': 'حمضيات', 'Yellow Mandarin': 'يوسفي أصفر', 'Damask Rose': 'ورد دمشقي', 'Rosewood': 'خشب الورد', 'Oud (Agarwood)': 'عود', 'Tonka Bean': 'حبوب التونكا', 'Coconut': 'جوز هند', 'Solar Notes': 'نفحات شمسية', 'Chamomile': 'بابونج', 'Warm Amber': 'عنبر دافئ', 'Aloe Vera': 'ألوفيرا', 'Petitgrain': 'بيتيغرين', 'Clary Sage': 'مريمية كلارية', 'Narcissus': 'نرجس', 'Rose Water': 'ماء الورد', 'English Rose': 'ورد إنجليزي', 'Ginger': 'زنجبيل', 'Coriander': 'كزبرة', 'Basil': 'ريحان', 'Green Apple': 'تفاح أخضر', 'Lemon': 'ليمون', 'Night Blooming Jasmine': 'ياسمين ليلي', 'Pomegranate': 'رمان', 'Olibanum': 'لبان', 'Carrot Seeds': 'بذور الجزر', 'Black Pepper': 'فلفل أسود', 'Orris': 'سوسن', 'Cypriol': 'سيبرول', 'Frankincense': 'لبان', 'Sugar': 'سكر', 'Caramel': 'كراميل', 'Civet': 'زباد', 'Raspberry': 'توت العليق', 'Peony': 'فاوانيا', 'Virginia Cedar': 'أرز فرجينيا', 'Nutmeg': 'جوزة الطيب', 'Pimento': 'فلفل إفرنجي', 'Resins': 'راتنجات', 'Pear': 'كمثرى', 'Pink Pepper': 'فلفل وردي', 'Heliotrope': 'هليوتروب', 'Pineapple': 'أناناس', 'Rosemary': 'إكليل الجبل', 'Galbanum': 'جلبانوم', 'Coconut Milk': 'حليب جوز الهند', 'Honeysuckle': 'زهر العسل', 'Pear Blossom': 'زهر الكمثرى', 'Italian Lemon': 'ليمون إيطالي', 'Tuberose': 'مسك الروم', 'Jasmine Sambac': 'ياسمين سامباك', 'Bourbon Vanilla': 'فانيلا بوربون', 'Lychee': 'ليتشي', 'Honey': 'عسل', 'Mahogany': 'ماهوجني', 'Carnation': 'قرنفل', 'Olive Tree': 'شجرة الزيتون', 'Freesia': 'فريزيا', 'Tobacco': 'تبغ', 'Herbal Notes': 'نفحات عشبية', 'Green Notes': 'نفحات خضراء', 'White Flowers': 'أزهار بيضاء', 'Fig Leaves': 'أوراق التين', 'Magnolia': 'ماغنوليا', 'Plum': 'برقوق', 'Cashmere Wood': 'خشب الكشمير', 'Passionfruit': 'باشن فروت', 'Verbena': 'لويزة', 'Rum': 'روم', 'Benzoin': 'بنزوين', 'Blackberry': 'توت أسود', 'Apricot': 'مشمش', 'Cedarwood': 'خشب الأرز', 'Lemon Tree Wood': 'خشب شجرة الليمون', 'Sclarene': 'سكلارين'
};

const translateNotes = (value) => value;
const translateGender = (value) => value;
const translateSeason = (value) => value;
const PRICE = '19,000 Iraqi dinars';
const fallbackMarkup = (index) => `<span class="ph-fallback"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="3.5"/><path d="M8 6l1.5-2h5L16 6"/></svg><span>Image unavailable</span></span>`;
const PRODUCT_NAMES = {
  'سَنَد': 'Sanad', 'أزَل': 'Azal', 'ياقوت': 'Yaqoot', 'باسِل': 'Basel', 'غالِب': 'Ghalib', 'ذَهَب': 'Dhahab',
  'جَسُور': 'Jasur', 'فَرَح': 'Farah', 'فاتِن': 'Fatin', 'غَدير': 'Ghadeer', 'نَسيم': 'Nasim', 'كَيان': 'Kayan',
  'غَسَق': 'Ghasaq', 'هَمْس': 'Hams', 'شَمْس': 'Shams', 'دُجى': 'Dujay',
  'ناضِر': 'Nadhir', 'لَيْل': 'Layl', 'جُوري': 'Jouri', 'أَرْز': 'Arz', 'الوحيد': 'Alwahid', 'بَيان': 'Bayan',
  'سَمَر': 'Samar', 'لُبان': 'Luban', 'شَغَف': 'Shaghaf', 'كَنْز': 'Kanz', 'عَتِيق': 'Ateeq', 'صَفاء': 'Safaa',
  'رَوْق': 'Rawq', 'سُلْطان': 'Sultan', 'لَهَب': 'Lahab', 'فِضَّة': 'Fiddah',
  'مَلِكَة': 'Malika', 'رايَة': 'Raya', 'إِكْسِير': 'Ikseer', 'رَنا': 'Rana', 'رَيّان': 'Rayyan', 'رِيم': 'Reem',
  'وَرْد': 'Ward', 'سُهاد': 'Suhaad', 'مُلْهِم': 'Mulhim', 'فَجْر': 'Fajr', 'نَغَم': 'Nagham', 'نَعْناع': 'Naanaa',
  'جَذْوَة': 'Jathwa', 'زاهِيَة': 'Zahiya', 'Faris': 'Faris',
  'عهدي': 'Ahdi', 'جوهرة': 'Jawhara', 'بلّور': 'Billour', 'الفاتح': 'Al Fateh', 'ذهبية': 'Thahabiya', 'الظافر': 'Al Dhafer',
  'الكنز': 'Al Kanz', 'بدوي': 'Badawi', 'بهجة': 'Bahja', 'سيدتي': 'Sayidati', 'إشراقة': 'Ishraqa', 'سباق': 'Sibaq',
  'الخيزران': 'Al Khizran', 'غسق': 'Ghasaq', 'رحيق': 'Rahiq', 'نسرين': 'Nasreen', 'ملوكي': 'Malouki', 'سمراء': 'Samra',
  'حرة': 'Hurra', 'نبض': 'Nabd', 'غموض': 'Ghomoud', 'مسك ورد': 'Musk Ward', 'سندس': 'Sundus', 'بيضاء': 'Bayda',
  'ليلية': 'Layliya', 'المتاهة': 'Al Mataha', 'جسور': 'Jasur', 'غنيمة': 'Ghanima', 'أصيل': 'Aseel', 'مسك روح': 'Musk Rouh',
  'طيف': 'Tayf', 'رحيق العود': 'Rahiq Al Oud', 'عزيمة': 'Azima', 'الأنا': 'Al Ana', 'فردوس': 'Firdaws', 'الحبيبة': 'Al Habiba',
  'الأيقونة': 'Al Icona', 'الفارس': 'Al Fares', 'بهيجة': 'Bahija', 'القائد': 'Al Qaed', 'أميرة': 'Amira', 'وردتي': 'Wardati',
  'ساحرة': 'Sahira', 'الملهمة': 'Al Molhima', 'بداية': 'Bidaya', 'أنشودة': 'Anshuda', 'صرح': 'Sarh', 'الأسطورة': 'Al Ostoura'
};
const getProductName = (name) => PRODUCT_NAMES[name] || name;
const BASKET_STORAGE_KEY = 'alfarhani-basket';
let basket = JSON.parse(localStorage.getItem(BASKET_STORAGE_KEY) || '[]');
basket = basket.map(getProductName);

const updateBasketBadge = () => document.querySelectorAll('[data-basket-badge]').forEach((badge) => {
  badge.textContent = basket.length;
  badge.hidden = basket.length === 0;
});

const saveBasket = () => {
  localStorage.setItem(BASKET_STORAGE_KEY, JSON.stringify(basket));
  updateBasketBadge();
};

const getCustomerDetails = () => {
  const nameInput = document.querySelector('[data-basket-customer-name]');
  const addressInput = document.querySelector('[data-basket-customer-address]');
  const phoneInput = document.querySelector('[data-basket-customer-phone]');

  return {
    name: nameInput ? nameInput.value.trim() : '',
    address: addressInput ? addressInput.value.trim() : '',
    phone: phoneInput ? phoneInput.value.trim() : ''
  };
};

const updateBasketSubmitState = () => {
  const submit = document.querySelector('[data-basket-submit]');
  if (!submit) return;

  const { name, address, phone } = getCustomerDetails();
  const hasItems = basket.length > 0;
  const hasCustomerInfo = name && address && phone;
  submit.disabled = !(hasItems && hasCustomerInfo);
};

const renderBasket = () => {
  const list = document.querySelector('[data-basket-list]');
  const empty = document.querySelector('[data-basket-empty]');
  const count = document.querySelector('[data-basket-count]');
  const clear = document.querySelector('[data-basket-clear]');
  const submit = document.querySelector('[data-basket-submit]');
  if (!list || !empty || !count || !clear || !submit) return;
  count.textContent = basket.length;
  empty.hidden = basket.length > 0;
  clear.hidden = basket.length === 0;
  updateBasketSubmitState();
  list.innerHTML = basket.map((name) => `<li><span>${name}</span><button type="button" data-remove-basket="${name}" aria-label="Remove ${name}">×</button></li>`).join('');
  list.querySelectorAll('[data-remove-basket]').forEach((button) => {
    button.addEventListener('click', () => {
      basket = basket.filter((name) => name !== button.dataset.removeBasket);
      saveBasket();
      renderBasket();
      updateBasketButtons();
    });
  });
};

const updateBasketButtons = () => document.querySelectorAll('[data-add-basket]').forEach((button) => {
  const added = basket.includes(button.dataset.addBasket);
  button.textContent = added ? 'Added to basket' : 'Add to basket';
  button.classList.toggle('is-added', added);
  button.disabled = added;
});

const addToBasket = (name) => {
  if (basket.includes(name)) return;
  basket.push(name);
  saveBasket();
  renderBasket();
  updateBasketButtons();
};

const basketPage = document.querySelector('[data-basket-page]');
if (basketPage) {
  renderBasket();
  basketPage.querySelector('[data-basket-clear]').addEventListener('click', () => {
    basket = [];
    saveBasket();
    renderBasket();
    updateBasketButtons();
  });

  basketPage.querySelectorAll('[data-basket-customer-name], [data-basket-customer-address], [data-basket-customer-phone]').forEach((input) => {
    input.addEventListener('input', updateBasketSubmitState);
  });

  basketPage.querySelector('[data-basket-submit]').addEventListener('click', () => {
    const { name, address, phone } = getCustomerDetails();
    const hasCustomerInfo = name && address && phone;

    if (!basket.length || !hasCustomerInfo) {
      alert('Please add perfumes and fill in your name, address, and phone number before sending the order.');
      return;
    }

    const message = `Hello, I would like to order the following perfumes:\n${basket.map((item) => `- ${item}`).join('\n')}\n\nCustomer Name: ${name}\nAddress: ${address}\nPhone Number: ${phone}`;
    window.location.href = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
  });
}

updateBasketBadge();

const getNewProductImage = (index, suffix = 'a') => {
  const productNumber = index + 1;
  return productNumber >= 34 && productNumber <= 51 ? `images/product-${productNumber}${suffix}.jpg` : '';
};

const SHOP_CATEGORIES = [
  { id: 'white-floral', title: 'أزهار بيضاء وبودرة ومسك', hint: 'ياسمين، ماغنوليا، زهر البرتقال، ورد، مسك أبيض ولمسة بودرية', products: ['Zahiya', 'Fatin', 'Kayan', 'Raya', 'Jouri', 'Bayan', 'Hams', 'Safaa', 'Azal'] },
  { id: 'fruity-floral', title: 'فاكهي زهري', hint: 'كرز، توت، كمثرى، خوخ، فواكه استوائية وزهور', products: ['Shams', 'Samar', 'Kanz', 'Reem', 'Mulhim', 'Lahab', 'Farah'] },
  { id: 'sweet-gourmand', title: 'حلو جورماند', hint: 'فانيلا، براليني، كراميل، مارشميلو وزهر البرتقال', products: ['Shaghaf', 'Hurr', 'Ghadeer', 'Rana', 'Hala'] },
  { id: 'dark-oriental', title: 'شرقي زهري داكن', hint: 'ورد، زعفران، بخور، باتشولي، فانيلا وعنبر', products: ['Ghasaq', 'Nagham', 'Malika', 'Ward', 'Fajr', 'Dujay'] },
  { id: 'oud-amber', title: 'عود وعنبر وراتنجات', hint: 'عود، عنبر، لبان، زعفران، صندل وفانيلا', products: ['Ateeq', 'Luban', 'Sultan', 'Yaqoot', 'Atheer'] },
  { id: 'woody-leather', title: 'خشبي وجلدي ودخاني', hint: 'صندل، أرز، جلد، فيتيفر، دخان وبهارات', products: ['Arz', 'Layl', 'Suhaad', 'Faris', 'Basel'] },
  { id: 'sweet-spicy', title: 'حلو وتابلي', hint: 'هيل، قرفة، فانيلا، تونكا، عنبر، تبغ وكراميل', products: ['Sanad', 'Ikseer', 'Jathwa', 'Alwahid', 'Dhahab'] },
  { id: 'fresh-aromatic', title: 'رجالي منعش وأروماتيك', hint: 'حمضيات، لافندر، نعناع، فلفل، أخشاب نظيفة وأمبروكسان', products: ['Fiddah', 'Nadhir', 'Naanaa', 'Ghalib', 'Jasur', 'Rayyan', 'Nasim'] }
];

const getShopCategory = (productName) => SHOP_CATEGORIES.find((category) => category.products.includes(productName));

const getDetailUrl = (product, index) => {
  const description = PRODUCT_DESCRIPTIONS[index] || product.description;
  const image = getNewProductImage(index) || (index === 0 ? 'images/product-1a.jpg' : index === 1 ? 'images/product-2a.jpg' : index === 2 ? 'images/product-3a.jpg' : index === 3 ? 'images/product-4a.jpg' : index === 4 ? 'images/product-5a.jpg' : index === 5 ? 'images/product-6a.jpg' : index === 6 ? 'images/product-7a.jpg' : index === 7 ? 'images/product-8a.jpg' : index === 8 ? 'images/product-9a.jpg' : index === 9 ? 'images/product-10a.jpg' : index === 10 ? 'images/product-11a.jpg' : index === 11 ? 'images/product-12a.jpg' : index === 12 ? 'images/product-13a.jpg' : index === 13 ? 'images/product-14a.jpg' : index === 14 ? 'images/product-15a.jpg' : index === 15 ? 'images/product-16a.jpg' : index === 16 ? 'images/product-17a.jpg' : index === 17 ? 'images/product-18a.jpg' : index === 18 ? 'images/product-19a.jpg' : index === 19 ? 'images/product-20a.jpg' : index === 20 ? 'images/product-21a.jpg' : index === 21 ? 'images/product-22a.jpg' : index === 22 ? 'images/product-23a.jpg' : index === 23 ? 'images/product-24a.jpg' : index === 24 ? 'images/product-25a.jpg' : index === 25 ? 'images/product-26a.jpg' : index === 26 ? 'images/product-27a.jpg' : index === 27 ? 'images/product-28a.jpg' : index === 28 ? 'images/product-29a.jpg' : index === 29 ? 'images/product-30a.jpg' : index === 30 ? 'images/product-31a.jpg' : index === 31 ? 'images/product-32a.jpg' : index === 32 ? 'images/product-33a.jpg' : `images/product-${index + 1}.jpg`);
  const params = new URLSearchParams({
    type: 'product', image, alt: getProductName(product.name),
    title: getProductName(product.name), description, price: PRICE,
    gender: translateGender(product.gender), season: translateSeason(product.season), top: translateNotes(product.top),
    middle: translateNotes(product.middle), base: translateNotes(product.base)
  });
  if (index === 0) params.set('hoverImage', 'images/product-1b.png');
  if (index === 1) params.set('hoverImage', 'images/product-2b.png');
  if (index === 2) params.set('hoverImage', 'images/product-3b.jpg');
  if (index === 3) params.set('hoverImage', 'images/product-4b.png');
  if (index === 4) params.set('hoverImage', 'images/product-5b.png');
  if (index === 5) params.set('hoverImage', 'images/product-6b.jpg');
  if (index === 6) params.set('hoverImage', 'images/product-7b.jpg');
  if (index === 7) params.set('hoverImage', 'images/product-8b.jpg');
  if (index === 8) params.set('hoverImage', 'images/product-9b.jpg');
  if (index === 9) params.set('hoverImage', 'images/product-10b.jpg');
  if (index === 10) params.set('hoverImage', 'images/product-11b.jpg');
  if (index === 11) params.set('hoverImage', 'images/product-12b.jpg');
  if (index === 12) params.set('hoverImage', 'images/product-13b.jpg');
  if (index === 13) params.set('hoverImage', 'images/product-14b.jpg');
  if (index === 14) params.set('hoverImage', 'images/product-15b.jpg');
  if (index === 15) params.set('hoverImage', 'images/product-16b.jpg');
  if (index === 16) params.set('hoverImage', 'images/product-17b.jpg');
  if (index === 17) params.set('hoverImage', 'images/product-18b.jpg');
  if (index === 18) params.set('hoverImage', 'images/product-19b.jpg');
  if (index === 19) params.set('hoverImage', 'images/product-20b.jpg');
  if (index === 20) params.set('hoverImage', 'images/product-21b.jpg');
  if (index === 21) params.set('hoverImage', 'images/product-22b.jpg');
  if (index === 22) params.set('hoverImage', 'images/product-23b.jpg');
  if (index === 23) params.set('hoverImage', 'images/product-24b.jpg');
  if (index === 24) params.set('hoverImage', 'images/product-25b.jpg');
  if (index === 25) params.set('hoverImage', 'images/product-26b.jpg');
  if (index === 26) params.set('hoverImage', 'images/product-27b.jpg');
  if (index === 27) params.set('hoverImage', 'images/product-28b.jpg');
  if (index === 28) params.set('hoverImage', 'images/product-29b.jpg');
  if (index === 29) params.set('hoverImage', 'images/product-30b.jpg');
  if (index === 30) params.set('hoverImage', 'images/product-31b.jpg');
  if (index === 31) params.set('hoverImage', 'images/product-32b.jpg');
  if (index === 32) params.set('hoverImage', 'images/product-33b.jpg');
  if (getNewProductImage(index)) params.set('hoverImage', getNewProductImage(index, 'b'));
  return `details.html?${params}`;
};

const productGrid = document.querySelector('[data-product-grid]');
if (productGrid && Array.isArray(PRODUCTS)) {
  const categoryControls = document.querySelector('[data-shop-categories]');
  if (categoryControls) {
    categoryControls.innerHTML = `<button type="button" class="category-filter is-active" data-category-filter="all">كل العطور <span>${PRODUCTS.length}</span></button>${SHOP_CATEGORIES.map((category) => `<button type="button" class="category-filter" data-category-filter="${category.id}"><strong>${category.title}</strong><small>${category.hint}</small><span>${category.products.length}</span></button>`).join('')}`;
  }
  productGrid.innerHTML = PRODUCTS.map((product, index) => `<div class="card" data-detail-url="${getDetailUrl(product, index)}" tabindex="0" role="link" aria-label="View details for ${getProductName(product.name)}">
    <div class="ph-frame"><img src="${index === 0 ? 'images/product-1a.jpg' : index === 1 ? 'images/product-2a.jpg' : index === 2 ? 'images/product-3a.jpg' : index === 3 ? 'images/product-4a.jpg' : index === 4 ? 'images/product-5a.jpg' : index === 5 ? 'images/product-6a.jpg' : index === 6 ? 'images/product-7a.jpg' : index === 7 ? 'images/product-8a.jpg' : index === 8 ? 'images/product-9a.jpg' : index === 9 ? 'images/product-10a.jpg' : index === 10 ? 'images/product-11a.jpg' : index === 11 ? 'images/product-12a.jpg' : index === 12 ? 'images/product-13a.jpg' : index === 13 ? 'images/product-14a.jpg' : index === 14 ? 'images/product-15a.jpg' : index === 15 ? 'images/product-16a.jpg' : index === 16 ? 'images/product-17a.jpg' : index === 17 ? 'images/product-18a.jpg' : index === 18 ? 'images/product-19a.jpg' : index === 19 ? 'images/product-20a.jpg' : index === 20 ? 'images/product-21a.jpg' : index === 21 ? 'images/product-22a.jpg' : index === 22 ? 'images/product-23a.jpg' : index === 23 ? 'images/product-24a.jpg' : index === 24 ? 'images/product-25a.jpg' : index === 25 ? 'images/product-26a.jpg' : index === 26 ? 'images/product-27a.jpg' : index === 27 ? 'images/product-28a.jpg' : index === 28 ? 'images/product-29a.jpg' : index === 29 ? 'images/product-30a.jpg' : index === 30 ? 'images/product-31a.jpg' : index === 31 ? 'images/product-32a.jpg' : index === 32 ? 'images/product-33a.jpg' : `images/product-${index + 1}.jpg`}" alt="${getProductName(product.name)}">${index === 0 ? '<img class="image-hover" src="images/product-1b.png" alt="">' : index === 1 ? '<img class="image-hover" src="images/product-2b.png" alt="">' : index === 2 ? '<img class="image-hover" src="images/product-3b.jpg" alt="">' : index === 3 ? '<img class="image-hover" src="images/product-4b.png" alt="">' : index === 4 ? '<img class="image-hover" src="images/product-5b.png" alt="">' : index === 5 ? '<img class="image-hover" src="images/product-6b.jpg" alt="">' : index === 6 ? '<img class="image-hover" src="images/product-7b.jpg" alt="">' : index === 7 ? '<img class="image-hover" src="images/product-8b.jpg" alt="">' : index === 8 ? '<img class="image-hover" src="images/product-9b.jpg" alt="">' : index === 9 ? '<img class="image-hover" src="images/product-10b.jpg" alt="">' : index === 10 ? '<img class="image-hover" src="images/product-11b.jpg" alt="">' : index === 11 ? '<img class="image-hover" src="images/product-12b.jpg" alt="">' : index === 12 ? '<img class="image-hover" src="images/product-13b.jpg" alt="">' : index === 13 ? '<img class="image-hover" src="images/product-14b.jpg" alt="">' : index === 14 ? '<img class="image-hover" src="images/product-15b.jpg" alt="">' : index === 15 ? '<img class="image-hover" src="images/product-16b.jpg" alt="">' : index === 16 ? '<img class="image-hover" src="images/product-17b.jpg" alt="">' : index === 17 ? '<img class="image-hover" src="images/product-18b.jpg" alt="">' : index === 18 ? '<img class="image-hover" src="images/product-19b.jpg" alt="">' : index === 19 ? '<img class="image-hover" src="images/product-20b.jpg" alt="">' : index === 20 ? '<img class="image-hover" src="images/product-21b.jpg" alt="">' : index === 21 ? '<img class="image-hover" src="images/product-22b.jpg" alt="">' : index === 22 ? '<img class="image-hover" src="images/product-23b.jpg" alt="">' : index === 23 ? '<img class="image-hover" src="images/product-24b.jpg" alt="">' : index === 24 ? '<img class="image-hover" src="images/product-25b.jpg" alt="">' : index === 25 ? '<img class="image-hover" src="images/product-26b.jpg" alt="">' : index === 26 ? '<img class="image-hover" src="images/product-27b.jpg" alt="">' : index === 27 ? '<img class="image-hover" src="images/product-28b.jpg" alt="">' : index === 28 ? '<img class="image-hover" src="images/product-29b.jpg" alt="">' : index === 29 ? '<img class="image-hover" src="images/product-30b.jpg" alt="">' : index === 30 ? '<img class="image-hover" src="images/product-31b.jpg" alt="">' : index === 31 ? '<img class="image-hover" src="images/product-32b.jpg" alt="">' : index === 32 ? '<img class="image-hover" src="images/product-33b.jpg" alt="">' : ''}${fallbackMarkup(index)}</div>
    <div class="card-body"><h3 class="card-title">${getProductName(product.name)}</h3><p class="card-sub">${PRODUCT_DESCRIPTIONS[index] || product.description}</p><p class="card-price">${PRICE}</p><button type="button" class="card-link basket-add" data-add-basket="${getProductName(product.name)}">Add to basket</button><a href="${getDetailUrl(product, index)}" class="card-link" data-whatsapp-link="Hello, I would like to ask about ${getProductName(product.name)}">Ask on WhatsApp</a></div>
  </div>`).join('');
  productGrid.querySelectorAll('.card').forEach((card, index) => {
    const category = getShopCategory(getProductName(PRODUCTS[index].name));
    card.dataset.category = category ? category.id : 'uncategorized';
  });
  categoryControls?.querySelectorAll('[data-category-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      const selectedCategory = button.dataset.categoryFilter;
      categoryControls.querySelectorAll('[data-category-filter]').forEach((item) => item.classList.toggle('is-active', item === button));
      productGrid.querySelectorAll('.card').forEach((card) => {
        card.hidden = selectedCategory !== 'all' && card.dataset.category !== selectedCategory;
      });
    });
  });
  productGrid.querySelectorAll('.card').forEach((card, index) => {
    const primaryImage = getNewProductImage(index);
    if (!primaryImage) return;
    const frame = card.querySelector('.ph-frame');
    const image = frame.querySelector('img');
    image.src = primaryImage;
    const hoverImage = document.createElement('img');
    hoverImage.className = 'image-hover';
    hoverImage.src = getNewProductImage(index, 'b');
    hoverImage.alt = '';
    frame.insertBefore(hoverImage, frame.querySelector('.ph-fallback'));
  });
  productGrid.querySelectorAll('.card').forEach((card) => {
    const detailUrl = card.dataset.detailUrl;
    card.addEventListener('click', (event) => { if (!event.target.closest('a, button')) window.location.href = detailUrl; });
    card.addEventListener('keydown', (event) => { if (!event.target.closest('a, button') && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); window.location.href = detailUrl; } });
  });
  productGrid.querySelectorAll('[data-add-basket]').forEach((button) => button.addEventListener('click', () => addToBasket(button.dataset.addBasket)));
  updateBasketButtons();
  watchImages(productGrid);
  productGrid.querySelectorAll('[data-whatsapp-link]').forEach((el) => {
    el.href = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(el.dataset.whatsappLink)}`;
  });
}

const collectionGrid = document.querySelector('[data-collection-grid]');
if (collectionGrid) {
  const collections = [
    { title: 'Dalal', description: 'الأنوثة والحلاوة' },
    { title: 'Haiba', description: 'الخشب والفخامة' },
    { title: 'Nabd', description: 'المنعش والرياضي' },
    { title: 'Sihr', description: 'التميز والروائح الجذابة' }
  ];
  collectionGrid.querySelectorAll('.card').forEach((card, index) => {
    const collection = collections[index];
    if (!collection) return;
    const image = card.querySelector('.ph-frame img');
    const detailUrl = `details.html?type=collection&image=${encodeURIComponent(image?.getAttribute('src') || '')}&alt=${encodeURIComponent(collection.title)}&title=${encodeURIComponent(collection.title)}&description=${encodeURIComponent(collection.description)}&collection=${index + 1}`;
    card.dataset.detailUrl = detailUrl;
    card.tabIndex = 0;
    card.setAttribute('role', 'link');
    card.setAttribute('aria-label', `View details for ${collection.title}`);
    const link = card.querySelector('.card-link');
    if (link) link.href = detailUrl;
    card.addEventListener('click', (event) => { if (!event.target.closest('a, button')) window.location.href = detailUrl; });
    card.addEventListener('keydown', (event) => { if (!event.target.closest('a, button') && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); window.location.href = detailUrl; } });
  });

  collectionGrid.querySelectorAll('[data-add-basket]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      addToBasket(button.dataset.addBasket);
    });
  });
  updateBasketButtons();
}

const SUBSCRIBE_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxSorm3gc6_kCRpvAokitMkeDDDq7DsTTnQZFUQafwnkMyVLjjS3Rk5I_WoVGuSHm0HFQ/exec';

const submitSubscription = async (entry) => {
  if (!SUBSCRIBE_ENDPOINT || SUBSCRIBE_ENDPOINT.includes('PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE')) {
    throw new Error('Set SUBSCRIBE_ENDPOINT to your Google Apps Script web app URL before publishing the site.');
  }

  const response = await fetch(SUBSCRIBE_ENDPOINT, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entry)
  });

  const rawText = await response.text();
  let result = {};
  try {
    result = JSON.parse(rawText);
  } catch {
    result = { success: response.ok, message: rawText || 'Unknown response' };
  }

  if (!response.ok || result.success === false) {
    throw new Error(result.message || 'There was a problem saving the subscription.');
  }

  return result;
};

const subscribeForm = document.querySelector('.subscribe-form');
if (subscribeForm) {
  subscribeForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const phone = subscribeForm.querySelector('#subscribe-phone')?.value.trim();
    const email = subscribeForm.querySelector('#subscribe-email')?.value.trim();
    const gender = subscribeForm.querySelector('input[name="gender"]:checked')?.value;

    if (!phone || !email) {
      alert('Please enter your phone number and email.');
      return;
    }

    if (!gender) {
      alert('Please select your gender.');
      return;
    }

    const entry = {
      phone,
      email,
      gender,
      source: 'Home page',
      submittedAt: new Date().toISOString()
    };

    try {
      await submitSubscription(entry);
      alert(`Thank you! We will send discount updates to ${email}.`);
      subscribeForm.reset();
    } catch (error) {
      alert(error.message || 'Something went wrong while saving the subscription.');
    }
  });
}

const detailPage = document.querySelector('[data-detail-page]');
if (detailPage) {
  const params = new URLSearchParams(window.location.search);
  const dalalCollection = detailPage.querySelector('[data-dalal-collection]');
  const haibaCollection = detailPage.querySelector('[data-haiba-collection]');
  const nabdCollection = detailPage.querySelector('[data-nabd-collection]');
  const sihrCollection = detailPage.querySelector('[data-sihr-collection]');
  if (params.get('type') === 'collection' && params.get('collection') === '1' && dalalCollection) {
    detailPage.querySelector('.detail-layout').hidden = true;
    dalalCollection.hidden = false;
    const basketButton = dalalCollection.querySelector('[data-add-basket]');
    if (basketButton) {
      basketButton.addEventListener('click', () => addToBasket(basketButton.dataset.addBasket));
      updateBasketButtons();
    }
  }
  if (params.get('type') === 'collection' && params.get('collection') === '2' && haibaCollection) {
    detailPage.querySelector('.detail-layout').hidden = true;
    haibaCollection.hidden = false;
    const basketButton = haibaCollection.querySelector('[data-add-basket]');
    if (basketButton) {
      basketButton.addEventListener('click', () => addToBasket(basketButton.dataset.addBasket));
      updateBasketButtons();
    }
  }
  [['3', nabdCollection, 'Nabd'], ['4', sihrCollection, 'Sihr']].forEach(([collectionNumber, section, basketName]) => {
    if (params.get('type') !== 'collection' || params.get('collection') !== collectionNumber || !section) return;
    detailPage.querySelector('.detail-layout').hidden = true;
    section.hidden = false;
    const basketButton = section.querySelector('[data-add-basket]');
    if (basketButton) {
      basketButton.addEventListener('click', () => addToBasket(basketName));
      updateBasketButtons();
    }
  });
  const image = detailPage.querySelector('.detail-image img');
  const hoverImage = detailPage.querySelector('.detail-image .image-hover');
  const type = params.get('type') === 'product' ? 'Product details' : 'Collection details';
  detailPage.querySelector('.detail-kicker').textContent = type;
  detailPage.querySelector('.detail-title').textContent = params.get('title') || 'Details';
  detailPage.querySelector('[data-detail-description]').textContent = params.get('description') || '';
  const sourceImage = params.get('image') || '';
  image.src = sourceImage.replace('images/product-1.jpg', 'images/product-1a.jpg').replace('images/product-2.jpg', 'images/product-2a.jpg').replace('images/product-3.jpg', 'images/product-3a.jpg').replace('images/product-4.jpg', 'images/product-4a.jpg').replace('images/product-5.jpg', 'images/product-5a.jpg').replace('images/product-6.jpg', 'images/product-6a.jpg').replace('images/product-7.jpg', 'images/product-7a.jpg').replace('images/product-8.jpg', 'images/product-8a.jpg').replace('images/product-9.jpg', 'images/product-9a.jpg').replace('images/product-10.jpg', 'images/product-10a.jpg').replace('images/product-11.jpg', 'images/product-11a.jpg').replace('images/product-12.jpg', 'images/product-12a.jpg').replace('images/product-13.jpg', 'images/product-13a.jpg').replace('images/product-14.jpg', 'images/product-14a.jpg').replace('images/product-15.jpg', 'images/product-15a.jpg').replace('images/product-16.jpg', 'images/product-16a.jpg').replace('images/product-17.jpg', 'images/product-17a.jpg').replace('images/product-18.jpg', 'images/product-18a.jpg').replace('images/product-19.jpg', 'images/product-19a.jpg').replace('images/product-20.jpg', 'images/product-20a.jpg').replace('images/product-21.jpg', 'images/product-21a.jpg').replace('images/product-22.jpg', 'images/product-22a.jpg').replace('images/product-23.jpg', 'images/product-23a.jpg').replace('images/product-24.jpg', 'images/product-24a.jpg').replace('images/product-25.jpg', 'images/product-25a.jpg').replace('images/product-26.jpg', 'images/product-26a.jpg').replace('images/product-27.jpg', 'images/product-27a.jpg').replace('images/product-28.jpg', 'images/product-28a.jpg').replace('images/product-29.jpg', 'images/product-29a.jpg').replace('images/product-30.jpg', 'images/product-30a.jpg').replace('images/product-31.jpg', 'images/product-31a.jpg').replace('images/product-32.jpg', 'images/product-32a.jpg').replace('images/product-33.jpg', 'images/product-33a.jpg');
  image.alt = params.get('alt') || params.get('title') || '';
  const hoverSource = (params.get('hoverImage') || (sourceImage.includes('images/product-1') ? 'images/product-1b.png' : sourceImage.includes('images/product-2') ? 'images/product-2b.png' : sourceImage.includes('images/product-3') ? 'images/product-3b.jpg' : sourceImage.includes('images/product-4') ? 'images/product-4b.png' : sourceImage.includes('images/product-5') ? 'images/product-5b.png' : sourceImage.includes('images/product-6') ? 'images/product-6b.jpg' : sourceImage.includes('images/product-7') ? 'images/product-7b.jpg' : sourceImage.includes('images/product-8') ? 'images/product-8b.jpg' : sourceImage.includes('images/product-9') ? 'images/product-9b.jpg' : sourceImage.includes('images/product-10') ? 'images/product-10b.jpg' : sourceImage.includes('images/product-11') ? 'images/product-11b.jpg' : sourceImage.includes('images/product-12') ? 'images/product-12b.jpg' : sourceImage.includes('images/product-13') ? 'images/product-13b.jpg' : sourceImage.includes('images/product-14') ? 'images/product-14b.jpg' : sourceImage.includes('images/product-15') ? 'images/product-15b.jpg' : sourceImage.includes('images/product-16') ? 'images/product-16b.jpg' : sourceImage.includes('images/product-17') ? 'images/product-17b.jpg' : sourceImage.includes('images/product-18') ? 'images/product-18b.jpg' : sourceImage.includes('images/product-19') ? 'images/product-19b.jpg' : sourceImage.includes('images/product-20') ? 'images/product-20b.jpg' : sourceImage.includes('images/product-21') ? 'images/product-21b.jpg' : sourceImage.includes('images/product-22') ? 'images/product-22b.jpg' : sourceImage.includes('images/product-23') ? 'images/product-23b.jpg' : sourceImage.includes('images/product-24') ? 'images/product-24b.jpg' : sourceImage.includes('images/product-25') ? 'images/product-25b.jpg' : sourceImage.includes('images/product-26') ? 'images/product-26b.jpg' : sourceImage.includes('images/product-27') ? 'images/product-27b.jpg' : sourceImage.includes('images/product-28') ? 'images/product-28b.jpg' : sourceImage.includes('images/product-29') ? 'images/product-29b.jpg' : sourceImage.includes('images/product-30') ? 'images/product-30b.jpg' : sourceImage.includes('images/product-31') ? 'images/product-31b.jpg' : sourceImage.includes('images/product-32') ? 'images/product-32b.jpg' : sourceImage.includes('images/product-33') ? 'images/product-33b.jpg' : '')).replace('product-1b.jpg', 'product-1b.png').replace('product-2b.jpg', 'product-2b.png');
  if (hoverSource) {
    hoverImage.src = hoverSource;
    hoverImage.hidden = false;
  }
  const price = params.get('price') || '';
  detailPage.querySelector('.detail-price').textContent = price;
  if (price) detailPage.querySelector('.detail-price').hidden = false;
  const metadata = detailPage.querySelector('[data-detail-meta]');
  if (params.get('gender')) {
    metadata.hidden = false;
    metadata.querySelector('[data-detail-gender]').textContent = params.get('gender');
    metadata.querySelector('[data-detail-season]').textContent = params.get('season');
    metadata.querySelector('[data-detail-top]').textContent = params.get('top');
    metadata.querySelector('[data-detail-middle]').textContent = params.get('middle');
    metadata.querySelector('[data-detail-base]').textContent = params.get('base');
  }
  detailPage.querySelector('[data-detail-shop]').hidden = params.get('type') !== 'collection';
  detailPage.querySelector('[data-detail-back]').href = params.get('type') === 'product' ? 'shop.html' : 'index.html';
  document.title = `${params.get('title') || 'Details'} | ALFARHANI`;
}
