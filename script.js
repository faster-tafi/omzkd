// متغيرات عامة
let selectedProduct = "";
let currentCategory = "";
let currentSlideIndex = 0;
const totalSlides = 1;

// تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

// تهيئة الصفحة
function initializePage() {
    // إضافة أحداث النقر للروابط
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            scrollToSection(target);
        });
    });

    // إضافة تأثيرات التمرير
    addScrollEffects();
}

// التمرير إلى قسم معين
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// عرض فئة معينة
function showCategory(category) {
    currentCategory = category;

    // إخفاء الأقسام الأخرى
    const categoriesEl = document.getElementById('categories');
    const mainProductsEl = document.getElementById('main-products');
    const categoryContentEl = document.getElementById('category-content');

    if (categoriesEl) categoriesEl.style.display = 'none';
    if (mainProductsEl) mainProductsEl.style.display = 'none';
    if (categoryContentEl) categoryContentEl.classList.remove('hidden');

    // إنشاء محتوى الفئة
    const categoryContent = createCategoryContent(category);
    if (categoryContentEl) categoryContentEl.innerHTML = categoryContent;

    // تحديث التاريخ
    history.pushState({page: 'category', category: category}, '', `#category-${category}`);

    // التمرير إلى أعلى الصفحة
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// إنشاء محتوى الفئة
function createCategoryContent(category) {
    const categoryData = getCategoryData(category);

    return `
        <div class="section-vCoNpXzrYrwSkWqV">
            <div class="container">
                <div style="text-align: center; margin-bottom: 20px;">
                    <button class="button" onclick="goBack()" style="background: #6c757d;">
                        العودة للرئيسية
                    </button>
                </div>

                <h2 class="heading-primary">${categoryData.title}</h2>
                <p class="heading-description">${categoryData.description}</p>

                <div class="products-style-1">
                    ${categoryData.products.map(product => createProductHTML(product)).join('')}
                </div>
            </div>
        </div>
    `;
}

// الحصول على بيانات الفئة
function getCategoryData(category) {
    const categories = {
        'inwi': {
            title: 'عروض انوي',
            description: 'أفضل عروض شبكة انوي بأسعار مميزة',
            products: [
                {
                    id: 'inwi_1',
                    name: ' اشتراك شهر واحد +يوم مجاني لتجربة',
                    image: 'https://i.postimg.cc/W3FFvyts/NBKt-AP7j-400x400.png',
                    oldPrice: '30',
                    price: '15',
                    description: 'شهر كامل بدون انقطاع وسرعة خيالية انوي نجمة ستة مع دعم متواصل طيلة الشهر '
                },
                {
                    id: 'inwi_2',
                    name: ' اشتراك شهرين +يوم مجاني لتجربة',
                    image: 'https://i.postimg.cc/W3FFvyts/NBKt-AP7j-400x400.png',
                    oldPrice: '60',
                    price: '30',
                    description: 'شهرين  بدون انقطاع وسرعة خيالية  انوي نجمة ستة مع دعم متواصل طيلة 60 يوم'
                },
				{
                    id: 'inwi_3',
                    name: 'اشتراك ثلاثة اشهر مع يوم مجاني لتجربة ',
                    image: 'https://i.postimg.cc/W3FFvyts/NBKt-AP7j-400x400.png',
                    oldPrice: '90',
                    price: '45',
                    description: 'اشتراك ثلاثة اشهر بدون انقطاع وسرعة خيالية انوي نجمة ستة مع دعم متواصل طيلة 90يوم'
                }
            ]
        },
        'iam': {
            title: 'عروض اتصالات المغرب',
            description: 'عروض حصرية من اتصالات المغرب',
            products: [
                {
                    id: 'iam_1',
                    name: ' اشتراك شهر واحد +يوم مجاني لتجربة',
                    image: 'https://i.postimg.cc/Zqr3B24j/image.png',
                    oldPrice: '30',
                    price: '15',
                    description: ' شهر كامل سرعة خيالية ودعم متواصل طيلة الشهر'
                },
                {
                    id: 'iam_2',
                    name: 'اشتراك شهرين مع يوم مجاني لتجربة ',
                    image: 'https://i.postimg.cc/Zqr3B24j/image.png',
                    oldPrice: '60',
                    price: '30',
                    description: 'شهرين متتاليين بسرعة خيالية ودعم متواصل طيلة 60 يوم'
                }
            ]
        },
        'win': {
            title: 'عروض وين باي انوي',
            description: 'خدمات وين باي الرقمية بأفضل الأسعار',
            products: [
                {
                    id: 'win_1',
                    name: 'اشتراك شهر واحد مع يوم مجاني لتجربة ',
                    image: 'https://i.postimg.cc/bY53cGNh/unnamed.webp',
                    oldPrice: '50',
                    price: '15',
                    description: 'اشتراك شهر كامل وسرعة تفوق 40ميغا مع دعم متواصل طيلة الشهر '
                },
                {
                    id: 'win_2',
                    name: 'اشتراك شهرين مع يوم مجاني لتجربة',
                    image: 'https://i.postimg.cc/bY53cGNh/unnamed.webp',
                    oldPrice: '100',
                    price: '30',
                    description: 'اشتراك شهرين كامل وسرعة تفوق 40 ميغا مع دعم متواصل طيلة 60يوم'
                }
            ]
        }
    };

    return categories[category] || categories['inwi'];
}

// إنشاء HTML للمنتج
function createProductHTML(product) {
    const defaultImage = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#50e3c2"/>
            <text x="50%" y="50%" font-family="Arial" font-size="18" fill="#fff" text-anchor="middle" dy=".3em">${product.name}</text>
        </svg>
    `)}`;

    return `
        <div class="product-item">
            <div class="product-thumbnail">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='${defaultImage}'">
            </div>
            <div class="product-details">
                <div class="product-info">
                    <h3 class="product-title"><a href="#">${product.name}</a></h3>
                    <p style="color: #666; font-size: 14px; margin: 10px 0;">${product.description}</p>
                    <div class="product-price">
                        <span class="currency-value before">${product.oldPrice} درهم</span>
                        <span class="currency-value after">${product.price} درهم</span>
                    </div>
                </div>
                <div class="product-actions">
                    <button class="button secondary-button small-button" onclick="buy('${product.name}', '${product.price} درهم', '${product.image}')">
                        شراء الآن
                    </button>
                </div>
            </div>
        </div>
    `;
}

// العودة للصفحة الرئيسية
function goBack() {
    const categoriesEl = document.getElementById('categories');
    const mainProductsEl = document.getElementById('main-products');
    const categoryContentEl = document.getElementById('category-content');
    const checkoutEl = document.getElementById('checkout');

    if (categoriesEl) categoriesEl.style.display = 'block';
    if (mainProductsEl) mainProductsEl.style.display = 'block';
    if (categoryContentEl) categoryContentEl.classList.add('hidden');
    if (checkoutEl) checkoutEl.classList.add('hidden');

    // تحديث التاريخ
    history.pushState({page: 'home'}, '', '#home');

    // التمرير إلى أعلى الصفحة
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// التعامل مع تاريخ المتصفح
window.addEventListener('popstate', function(event) {
    if (event.state) {
        if (event.state.page === 'category') {
            showCategory(event.state.category);
        } else {
            goBack();
        }
    } else {
        goBack();
    }
});

// تم حذف وظائف قائمة التلغرام

// وظيفة الشراء
function buy(productName, price, productImage = '') {
    selectedProduct = `${productName} - ${price}`;

    // إخفاء جميع الأقسام الأخرى
    const categoriesEl = document.getElementById('categories');
    const mainProductsEl = document.getElementById('main-products');
    const categoryContentEl = document.getElementById('category-content');
    const checkoutEl = document.getElementById('checkout');

    if (categoriesEl) categoriesEl.style.display = 'none';
    if (mainProductsEl) mainProductsEl.style.display = 'none';
    if (categoryContentEl) categoryContentEl.classList.add('hidden');
    if (checkoutEl) checkoutEl.classList.remove('hidden');

    // تحديث معلومات المنتج المحدد
    const selectedOfferElement = document.querySelector('#selected-offer .product-name');
    if (selectedOfferElement) {
        selectedOfferElement.textContent = selectedProduct;
    }

    // تحديث صورة المنتج
    const productImageElement = document.getElementById('selected-product-image');
    if (productImageElement && productImage) {
        productImageElement.src = productImage;
        productImageElement.style.display = 'block';
    } else if (productImageElement) {
        productImageElement.style.display = 'none';
    }

    // تحديث التاريخ
    history.pushState({page: 'checkout'}, '', '#checkout');

    // التمرير إلى أعلى الصفحة
    window.scrollTo({top: 0, behavior: 'smooth'});

    // التركيز على حقل الاسم
    setTimeout(() => {
        const buyerNameEl = document.getElementById('buyer-name');
        if (buyerNameEl) buyerNameEl.focus();
    }, 500);
}

// إرسال الطلب
function submitOrder() {
    const name = document.getElementById('buyer-name').value.trim();
    const phone = document.getElementById('buyer-phone').value.trim();
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;

    // التحقق من صحة البيانات
    if (!name) {
        showAlert("المرجو إدخال اسمك الكامل", "error");
        document.getElementById('buyer-name').focus();
        return;
    }

    if (name.length < 2) {
        showAlert("الاسم يجب أن يكون أكثر من حرفين", "error");
        document.getElementById('buyer-name').focus();
        return;
    }

    // تحديد نص طريقة الدفع
    const paymentMethodText = paymentMethod === 'cash-account' 
        ? 'الدفع من حساب Cash Plus' 
        : 'الدفع من وكالة Cash Plus';

    // إنشاء رسالة الواتساب
    let message = `مرحبا، أريد شراء: ${selectedProduct}\n`;
    message += `الاسم: ${name}`;
    if (phone) {
        message += `\nرقم الهاتف: ${phone}`;
    }
    message += `\nطريقة الدفع: ${paymentMethodText}`;
    message += `\n\nشكراً لكم`;

    // تشفير الرسالة وإرسالها
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/212785207415?text=${encodedMessage}`;

    // فتح الواتساب
    window.open(whatsappUrl, '_blank');

    // عرض رسالة تأكيد
    showAlert("سيتم توجيهك إلى واتساب لإتمام الطلب", "success");
}

// عرض التنبيهات
function showAlert(message, type = 'info') {
    // إنشاء عنصر التنبيه
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#ff4757' : type === 'success' ? '#2ed573' : '#5352ed'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        font-weight: bold;
        max-width: 300px;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    alert.textContent = message;

    // إضافة التنبيه للصفحة
    document.body.appendChild(alert);

    // إظهار التنبيه
    setTimeout(() => {
        alert.style.opacity = '1';
        alert.style.transform = 'translateX(0)';
    }, 100);

    // إخفاء التنبيه بعد 3 ثوان
    setTimeout(() => {
        alert.style.opacity = '0';
        alert.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(alert);
        }, 300);
    }, 3000);
}

// إضافة تأثيرات التمرير
function addScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    // مراقبة العناصر
    const elementsToObserve = document.querySelectorAll('.product-item, .category-item');
    elementsToObserve.forEach(el => observer.observe(el));
}

// إضافة أنيميشن fadeInUp
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// وظائف السلايدر - تم تبسيطها لصورة واحدة
// لا حاجة لوظائف السلايدر مع صورة واحدة فقط

// التحقق من حالة الشبكة
window.addEventListener('online', () => {
    showAlert('تم استعادة الاتصال بالإنترنت', 'success');
});

window.addEventListener('offline', () => {
    showAlert('تم فقدان الاتصال بالإنترنت', 'error');
});