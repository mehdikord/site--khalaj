# پویا خلج — Pouya Khalaj

سایت رسمی **پویا خلج / مهندسی برند (Brand Engineering)**

Next.js 15 (App Router) + TypeScript + CSS خالص — بدون پایگاه داده، بدون CMS، بدون سرویس اجباری.

> **نکته مهم:** پروژه در حالت سروری (`next start`) اجرا می‌شود و `output: 'export'` **ندارد**.
> روی سرور لینوکسی به‌صورت سرویس (systemd / pm2) بالا می‌آید.

---

## ۱) اجرای سریع

```bash
npm install
npm run dev        # توسعه: http://localhost:3000
npm run build      # ساخت نسخه production
npm start          # اجرای سرویس روی پورت ۳۰۰۰
PORT=8080 npm start # اجرا روی پورت دیگر
```

نسخه Node پیشنهادی: **۲۰ یا بالاتر**.

---

## ۲) انتشار روی سرور لینوکسی (سرویس)

```bash
# 1. انتقال پروژه
scp -r khalaj user@server:/var/www/khalaj     # یا git clone

# 2. نصب و ساخت
cd /var/www/khalaj
npm ci --omit=dev || npm install --omit=dev
npm run build

# 3. سرویس systemd
sudo cp deploy/khalaj.service /etc/systemd/system/khalaj.service
sudo nano /etc/systemd/system/khalaj.service   # WorkingDirectory و User را اصلاح کنید
sudo systemctl daemon-reload
sudo systemctl enable --now khalaj
sudo systemctl status khalaj
journalctl -u khalaj -f                        # مشاهده لاگ

# 4. پروکسی معکوس Nginx + SSL
sudo cp deploy/nginx.conf /etc/nginx/sites-available/khalaj
sudo ln -s /etc/nginx/sites-available/khalaj /etc/nginx/sites-enabled/khalaj
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d pouyakhalaj.ir -d www.pouyakhalaj.ir
```

انتشار نسخه جدید پس از هر تغییر:

```bash
./deploy/deploy.sh        # install + build + restart سرویس
```

**جایگزین سریع (بدون systemd):**

```bash
pm2 start npm --name khalaj -- start
pm2 save && pm2 startup
```

پورت پیش‌فرض ۳۰۰۰ است؛ برای تغییر: `PORT=8080 npm start` یا در فایل `deploy/khalaj.service`.

---

## ۳) فرم‌ها و مسیر دریافت درخواست‌ها

سه API Route وجود دارد:

| مسیر | کاربرد | فیلدهای اجباری |
| --- | --- | --- |
| `POST /api/consult` | فرم درخواست مشاوره (صفحه مشاوره) | نام، تلفن، نام کسب‌وکار، مسئله اصلی |
| `POST /api/contact` | فرم تماس | نام، تلفن، پیام |
| `POST /api/subscribe` | عضویت خبرنامه (ایمیل یا موبایل) | ایمیل/موبایل معتبر |

هر درخواست **همیشه** در پوشه `data/` ذخیره می‌شود (فایل‌های `consult.jsonl`, `contact.jsonl`, `subscribe.jsonl`)
تا هیچ سرنخی گم نشود — حتی بدون هیچ تنظیم دیگری. یک محدودیت نرخ ساده (۶ درخواست در ۱۰ دقیقه برای هر IP) هم فعال است.

برای اطلاع‌رسانی، یکی از این روش‌ها را در `.env.local` تنظیم کنید (همه اختیاری‌اند):

```bash
# ایمیل (SMTP)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=...
SMTP_PASS=...
SMTP_FROM="Pouya Khalaj Website <no-reply@pouyakhalaj.ir>"
LEAD_TO_EMAIL=hello@pouyakhalaj.ir

# یا وبهوک (Slack / Make / n8n / هر endpoint JSON)
LEAD_WEBHOOK_URL=https://hooks.example.com/xxx

# یا تلگرام
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...

NEXT_PUBLIC_SITE_URL=https://pouyakhalaj.ir
```

الگوی کامل در `.env.example` موجود است. (نمونه: `cp .env.example .env.local`)

---

## ۴) صفحه‌های سایت

| مسیر | صفحه |
| --- | --- |
| `/` | خانه |
| `/brand-engineering` | مهندسی برند (تعریف، چارچوب ۵ مرحله‌ای، نتیجه) |
| `/consulting` | مشاوره + فرایند + فرم درخواست مشاوره |
| `/academy` | آکادمی (رویکرد، مسیرها، دوره‌ها، اعلان دوره جدید) |
| `/academy/[slug]` | صفحه دوره (قالب کامل: مخاطب، سرفصل، FAQ، مدرس) |
| `/insights` | بینش‌ها + فیلتر دسته‌بندی + جست‌وجو |
| `/insights/[slug]` | قالب مقاله (مقدمه، Lesson، Application، خبرنامه) |
| `/about` | درباره پویا |
| `/contact` | تماس + اطلاعات تماس |
| `/thank-you` | تشکر پس از ارسال فرم |
| `/*` | ۴۰۴ اختصاصی («این صفحه جایی در استراتژی ما نداشت») |
| `/privacy` , `/terms` | حریم خصوصی و شرایط استفاده |
| `/sitemap.xml` , `/robots.txt` | SEO |

---

## ۵) ویرایش محتوا (بدون پایگاه داده)

| فایل | چه چیزی را عوض می‌کند |
| --- | --- |
| `content/site.ts` | نام، ایمیل، اینستاگرام، لینکدین، آدرس دفتر، منو |
| `content/insights.ts` | مقالات + دسته‌بندی‌ها (افزودن مقاله = اضافه کردن یک آبجکت) |
| `content/courses.ts` | دوره‌ها، سرفصل‌ها، FAQ، وضعیت ثبت‌نام |

نمونه افزودن مقاله جدید به `content/insights.ts`:

```ts
{
  slug: 'my-new-post',            // آدرس: /insights/my-new-post
  title: 'عنوان مقاله',
  dek: 'خلاصه دو خطی',
  category: 'strategy',           // story | strategy | psychology | growth | personal | experience
  minutes: 6,
  date: '2026-10-01',
  featured: true,                 // نمایش در صفحه خانه
  blocks: [
    { t: 'p', c: 'متن پاراگراف…' },
    { t: 'h2', c: 'یک تیتر' },
    { t: 'ul', items: ['مورد اول', 'مورد دوم'] },
    { t: 'quote', c: 'نقل‌قول کلیدی' },
    { t: 'lesson', items: ['درس اول', 'درس دوم'] },
    { t: 'apply', items: ['سؤال اول', 'سؤال دوم', 'سؤال سوم'] },
  ],
}
```

دوره جدید: وضعیت `open` (بج «در حال ثبت‌نام») یا `soon` (بج «به‌زودی») را در `content/courses.ts` تعیین کنید.
اگر هیچ دوره‌ای برای فروش نیست، صفحه آکادمی به‌صورت خودکار بخش «آموزش بعدی در راه است» را نشان می‌دهد.

---

## ۶) چه چیزهایی باید قبل از انتشار نهایی جایگزین شود

1. **ایمیل رسمی و لینک‌های شبکه‌های اجتماعی** — `content/site.ts` (`contact`).
2. **آدرس دفتر** — در همان فایل؛ اگر آدرس رسمی وجود ندارد، مقدار را حذف/خالی کنید.
3. **دومین واقعی** — `NEXT_PUBLIC_SITE_URL` (برای sitemap، robots و تگ‌های canonical و OpenGraph).
4. **بیوگرافی و سوابق پویا** — بخش «سابقه حرفه‌ای» در `app/about/page.tsx` با اطلاعات تأییدشده پر شود
   (هیچ عدد یا ادعایی بدون قابلیت اثبات منتشر نشود).
5. **جزئیات دوره‌ها** — تاریخ، مدت، ظرفیت، قیمت، شرایط پشتیبانی و پاسخ‌های FAQ در `content/courses.ts`
   (موارد دارای `TODO` مشخص شده‌اند).
6. **پورت پویا (تصویر)** — یک پرتره نسبت ۴:۵ در `public/images/pouya.jpg` قرار دهید و در `app/page.tsx`
   (سکشن About) جای کارت راهنما را با `<img>` عوض کنید.
7. **تصویر اشتراک‌گذاری در شبکه‌های اجتماعی** — `public/og.png` (۱۲۰۰×۶۳۰) موجود است؛ در صورت تغییر پیام اصلی
   می‌توانید جایگزین کنید. `public/icon.svg` هم favicon سایت است.
8. **متن حقوقی** — `app/privacy/page.tsx` و `app/terms/page.tsx` نسخه پایه هستند.

---

## ۷) ساختار پروژه

```
khalaj/
├─ app/
│  ├─ layout.tsx            # RTL، فونت‌ها، متادیتا، JSON-LD، هدر/فوتر
│  ├─ globals.css           # کل سیستم طراحی (توکن‌ها، کامپوننت‌ها، ریسپانسیو)
│  ├─ page.tsx              # صفحه خانه
│  ├─ brand-engineering/ consulting/ academy/ insights/ about/ contact/
│  ├─ thank-you/ not-found.tsx privacy/ terms/
│  ├─ api/consult|contact|subscribe/route.ts
│  ├─ sitemap.ts robots.ts icon.svg
├─ components/              # Header, Footer, Reveal, Sections, فرم‌ها, ...
├─ content/                 # متن‌ها: site.ts, insights.ts, courses.ts
├─ lib/leads.ts             # ذخیره‌سازی + اطلاع‌رسانی + محدودیت نرخ
├─ deploy/                  # khalaj.service, nginx.conf, deploy.sh
├─ public/                  # og.png, icon.svg, fonts/ (وزیرمتن + Instrument Serif)
└─ data/                    # خروجی فرم‌ها (jsonl) — در گیت نیست
```

---

## ۸) جزئیات فنی

- **RTL کامل** (`<html lang="fa" dir="rtl">`) با تایپوگرافی فارسی؛ اعداد و تیترهای لاتین با فونت سریف
  (Instrument Serif) به‌عنوان لهجه بصری.
- **فونت‌ها self-hosted** هستند (`public/fonts`) — بدون درخواست خارجی، بدون CDN، بدون افت سرعت در ایران.
- **بدون وابستگی UI**: تمام استایل‌ها CSS خالص است؛ فقط `next`, `react`, `react-dom`, `nodemailer`.
- **انیمیشن‌ها** با IntersectionObserver و احترام به `prefers-reduced-motion`.
- **دسترس‌پذیری**: ناوبری کیبورد، `aria-label` ها، skip-link، کنتراست مناسب.
- **SEO**: متادیتای اختصاصی هر صفحه، canonical، OpenGraph/Twitter، sitemap، robots،
  و Schema.org (Person + WebSite + Article برای مقالات).
- **تصاویر**: تنها تصویر موجود `og.png` است؛ پرتره پویا توسط مشتری اضافه می‌شود.

---

© Pouya Khalaj — All Rights Reserved.
