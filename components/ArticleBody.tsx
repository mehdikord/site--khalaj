import type { Block } from '@/content/insights';

export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose">
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'h2':
            return <h2 key={i}>{b.c}</h2>;
          case 'h3':
            return <h3 key={i}>{b.c}</h3>;
          case 'p':
            return <p key={i}>{b.c}</p>;
          case 'ul':
            return (
              <ul key={i}>
                {b.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case 'quote':
            return (
              <div key={i} className="box box--accent">
                <p className="quote" style={{ maxWidth: '38ch', margin: 0 }}>
                  {b.c}
                </p>
              </div>
            );
          case 'lesson':
            return (
              <div key={i} className="box">
                <span className="eyebrow">Lesson</span>
                <h3>{b.title ?? 'چیزی که این برند به ما یاد می‌دهد'}</h3>
                <ul>
                  {b.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          case 'apply':
            return (
              <div key={i} className="box">
                <span className="eyebrow">Application</span>
                <h3>{b.title ?? 'این ایده در کسب‌وکار شما چه کاربردی دارد؟'}</h3>
                <ol className="steps">
                  {b.items.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
                <p className="small muted" style={{ marginTop: '1.35rem' }}>
                  گاهی یک سؤال درست بیشتر از ده‌ها تاکتیک می‌تواند مسیر یک برند را تغییر دهد.
                </p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
