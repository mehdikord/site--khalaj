import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { contact } from '@/content/site';

export const metadata: Metadata = {
  title: 'شرایط استفاده',
  description: 'شرایط استفاده از محتوا و خدمات وب‌سایت پویا خلج.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Terms & Conditions" title="شرایط استفاده" titleMax="20ch" />

      <section className="sec sec--flush">
        <div className="wrap">
          <Reveal>
            <div className="prose">
              <h2>استفاده از محتوا</h2>
              <p>
                تمام متون، تحلیل‌ها و مطالب منتشرشده در این وب‌سایت متعلق به پویا خلج است. استفاده شخصی و غیرتجاری با ذکر
                منبع مجاز است؛ بازنشر تجاری بدون اجازه کتبی مجاز نیست.
              </p>

              <h2>ماهیت محتوا</h2>
              <p>
                مطالب این سایت برای آگاهی و آموزش عمومی در حوزه برند و کسب‌وکار منتشر می‌شود. این محتوا جایگزین مشاوره
                تخصصی متناسب با شرایط هر کسب‌وکار نیست و نتیجه‌ای تضمین‌شده محسوب نمی‌شود.
              </p>

              <h2>درخواست مشاوره</h2>
              <p>
                ارسال فرم درخواست مشاوره به معنی ایجاد تعهد همکاری برای هیچ‌یک از طرفین نیست. اطلاعات ارسال‌شده بررسی
                می‌شود و در صورت تناسب موضوع، برای ادامه فرایند تماس گرفته می‌شود. شرایط همکاری در گفت‌وگو و پیشنهاد
                اختصاصی مشخص می‌شود.
              </p>

              <h2>دوره‌ها و برنامه‌های آموزشی</h2>
              <p>
                شرایط ثبت‌نام، دسترسی و بازپرداخت هر دوره، در صفحه همان دوره و پیش از پرداخت اعلام می‌شود.
              </p>

              <h2>تماس</h2>
              <p>
                پرسش‌ها و درخواست‌های مربوط به این شرایط:{' '}
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>

              <p className="small muted">
                این متن به‌عنوان نسخه پایه تهیه شده است و در صورت نیاز، پیش از انتشار نهایی می‌تواند توسط کارشناس حقوقی
                بازبینی شود.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
