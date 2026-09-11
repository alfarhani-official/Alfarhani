// Marks any .ph-frame as "no-image" if its <img> fails to load (i.e. the
// real photo hasn't been added yet). Once you drop a real file in with the
// matching filename, this class is never added and the photo shows normally.
const watchImages = (scope = document) => scope.querySelectorAll('.ph-frame img').forEach((img) => {
  img.addEventListener('error', () => {
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
  whatsappNumber: '9647000000000', // TODO: replace with the real WhatsApp number (country code, no +, no spaces)
  email: 'info@example.com'        // TODO: replace with the real email
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
  'جَسُور': 'Jasoor', 'فَرَح': 'Farah', 'فاتِن': 'Fatin', 'غَدير': 'Ghadir', 'نَسيم': 'Naseem', 'كَيان': 'Kayan',
  'غَسَق': 'Ghasaq', 'هَمْس': 'Hams', 'نُور': 'Noor', 'وَقار': 'Waqar', 'شَمْس': 'Shams', 'دُجى': 'Dujay',
  'ناضِر': 'Nadhir', 'لَيْل': 'Layl', 'جُوري': 'Jouri', 'أَرْز': 'Arz', 'الوحيد': 'Al Waheed', 'بَيان': 'Bayan',
  'سَمَر': 'Samar', 'لُبان': 'Luban', 'شَغَف': 'Shaghaf', 'كَنْز': 'Kanz', 'عَتِيق': 'Atiq', 'صَفاء': 'Safa',
  'رَوْق': 'Rawq', 'سُلْطان': 'Sultan', 'لَهَب': 'Lahab', 'الشغف': 'Al Shaghaf', 'فِضَّة': 'Fidda', 'سَماء': 'Samaa',
  'مَلِكَة': 'Malika', 'رايَة': 'Raya', 'إِكْسِير': 'Ikseer', 'رَنا': 'Rana', 'رَيّان': 'Rayyan', 'رِيم': 'Reem',
  'وَرْد': 'Ward', 'سُهاد': 'Suhaad', 'مُلْهِم': 'Mulhim', 'فَجْر': 'Fajr', 'نَغَم': 'Nagham', 'نَعْناع': 'Naanaa',
  'جَذْوَة': 'Jathwa', 'زاهِيَة': 'Zahiya',
  'عهدي': 'Ahdi', 'جوهرة': 'Jawhara', 'بلّور': 'Billour', 'الفاتح': 'Al Fateh', 'ذهبية': 'Thahabiya', 'الظافر': 'Al Dhafer',
  'الكنز': 'Al Kanz', 'بدوي': 'Badawi', 'بهجة': 'Bahja', 'سيدتي': 'Sayidati', 'إشراقة': 'Ishraqa', 'سباق': 'Sibaq',
  'الخيزران': 'Al Khizran', 'غسق': 'Ghasaq', 'رحيق': 'Rahiq', 'نسرين': 'Nasreen', 'ملوكي': 'Malouki', 'سمراء': 'Samra',
  'حرة': 'Hurra', 'نبض': 'Nabd', 'غموض': 'Ghomoud', 'مسك ورد': 'Musk Ward', 'سندس': 'Sundus', 'بيضاء': 'Bayda',
  'ليلية': 'Layliya', 'المتاهة': 'Al Mataha', 'جسور': 'Jasoor', 'غنيمة': 'Ghanima', 'أصيل': 'Aseel', 'مسك روح': 'Musk Rouh',
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

const getDetailUrl = (product, index) => {
  const description = PRODUCT_DESCRIPTIONS[index] || product.description;
  const params = new URLSearchParams({
    type: 'product', image: `images/product-${index + 1}.jpg`, alt: getProductName(product.name),
    title: getProductName(product.name), description, price: PRICE,
    gender: translateGender(product.gender), season: translateSeason(product.season), top: translateNotes(product.top),
    middle: translateNotes(product.middle), base: translateNotes(product.base)
  });
  return `details.html?${params}`;
};

const productGrid = document.querySelector('[data-product-grid]');
if (productGrid && Array.isArray(PRODUCTS)) {
  productGrid.innerHTML = PRODUCTS.map((product, index) => `<div class="card" data-detail-url="${getDetailUrl(product, index)}" tabindex="0" role="link" aria-label="View details for ${getProductName(product.name)}">
    <div class="ph-frame"><img src="images/product-${index + 1}.jpg" alt="${getProductName(product.name)}">${fallbackMarkup(index)}</div>
    <div class="card-body"><h3 class="card-title">${getProductName(product.name)}</h3><p class="card-sub">${PRODUCT_DESCRIPTIONS[index] || product.description}</p><p class="card-price">${PRICE}</p><button type="button" class="card-link basket-add" data-add-basket="${getProductName(product.name)}">Add to basket</button><a href="${getDetailUrl(product, index)}" class="card-link" data-whatsapp-link="Hello, I would like to ask about ${getProductName(product.name)}">Ask on WhatsApp</a></div>
  </div>`).join('');
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
    { title: 'Collection One', description: 'A curated selection of luxury perfumes' },
    { title: 'Collection Two', description: 'Elegant scents for every special moment' },
    { title: 'Collection Three', description: 'Distinctive perfumes with an unforgettable presence' },
    { title: 'Collection Four', description: 'A refined signature for memorable evenings' }
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
  const image = detailPage.querySelector('.detail-image img');
  const type = params.get('type') === 'product' ? 'Product details' : 'Collection details';
  detailPage.querySelector('.detail-kicker').textContent = type;
  detailPage.querySelector('.detail-title').textContent = params.get('title') || 'Details';
  detailPage.querySelector('[data-detail-description]').textContent = params.get('description') || '';
  image.src = params.get('image') || '';
  image.alt = params.get('alt') || params.get('title') || '';
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
