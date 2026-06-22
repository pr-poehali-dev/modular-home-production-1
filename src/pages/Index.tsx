import { useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const IMG_HERO = 'https://cdn.poehali.dev/projects/639b8dc2-e2e5-4337-b9ad-76ae5455b90f/files/97a95526-7007-4604-8b8d-00cf175a6a37.jpg';
const IMG_2 = 'https://cdn.poehali.dev/projects/639b8dc2-e2e5-4337-b9ad-76ae5455b90f/files/85aa4353-6490-41ed-b8c0-82c209cfd765.jpg';
const IMG_3 = 'https://cdn.poehali.dev/projects/639b8dc2-e2e5-4337-b9ad-76ae5455b90f/bucket/ee3f1c64-177b-40e1-ac94-6027bb0000d8.jpg';

const NAV = [
  { label: 'О компании', href: '#about' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Конфигуратор', href: '#config' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Услуги', href: '#services' },
  { label: 'Статьи', href: '#blog' },
  { label: 'Контакты', href: '#contacts' },
];

const AREAS = [
  { label: '18 м²', value: 18, price: 1850000 },
  { label: '24 м²', value: 24, price: 2950000 },
  { label: '30 м²', value: 30, price: 4200000 },
  { label: '36 м²', value: 36, price: 6100000 },
];
const FLOORS = [
  { label: '1 этаж', value: 1, k: 1 },
  { label: '2 этажа', value: 2, k: 1.65 },
];
const FINISH = [
  { label: 'Стандарт', icon: 'Square', k: 1, desc: 'Чистовая база' },
  { label: 'Комфорт', icon: 'Layers', k: 1.22, desc: 'Натуральное дерево' },
  { label: 'Премиум', icon: 'Gem', k: 1.5, desc: 'Панорама + smart' },
];
const EXTRAS = [
  { label: 'Терраса', icon: 'TreePine', price: 380000 },
  { label: 'Мангальная зона', icon: 'Flame', price: 220000 },
  { label: 'Камин', icon: 'Sparkles', price: 310000 },
  { label: 'Сауна', icon: 'Droplets', price: 540000 },
  { label: 'Чан', icon: 'CircleDot', price: 280000 },
];

const CATALOG = [
  { name: 'Ургун S', img: IMG_HERO, area: '18 м²', price: 'от 1.85 млн', tag: 'Хит' },
  { name: 'Forest M', img: IMG_2, area: '70 м²', price: 'от 4.2 млн', tag: 'Новинка' },
  { name: 'Cliff L', img: IMG_3, area: '110 м²', price: 'от 6.1 млн', tag: 'Premium' },
];

const PROJECTS = [
  { name: 'Дом у озера', loc: 'Карелия', img: IMG_2 },
  { name: 'Лесная резиденция', loc: 'Подмосковье', img: IMG_HERO },
  { name: 'Студия на склоне', loc: 'Сочи', img: IMG_3 },
];

const SERVICES = [
  { icon: 'PencilRuler', title: 'Проектирование', text: 'Индивидуальный проект и 3D-визуализация под ваш участок.' },
  { icon: 'Factory', title: 'Производство', text: 'Сборка модулей на заводе — контроль качества на каждом этапе.' },
  { icon: 'Truck', title: 'Доставка и монтаж', text: 'Привозим готовый дом и устанавливаем за 1–2 дня.' },
  { icon: 'ShieldCheck', title: 'Гарантия 25 лет', text: 'Отвечаем за конструкцию и инженерные системы.' },
];

const BLOG = [
  { tag: 'Технологии', title: 'Почему модульный дом строится в 5 раз быстрее', read: '6 мин' },
  { tag: 'Гайд', title: 'Как выбрать участок под модульный дом', read: '4 мин' },
  { tag: 'Кейс', title: 'Дом за полярным кругом: как это устроено', read: '8 мин' },
];

const fmt = (n: number) => new Intl.NumberFormat('ru-RU').format(Math.round(n));

const Index = () => {
  const [area, setArea] = useState(AREAS[1]);
  const [floor, setFloor] = useState(FLOORS[0]);
  const [finish, setFinish] = useState(FINISH[1]);
  const [extras, setExtras] = useState<string[]>(['Терраса']);

  const total = useMemo(() => {
    const base = area.price * floor.k * finish.k;
    const ex = EXTRAS.filter((e) => extras.includes(e.label)).reduce((s, e) => s + e.price, 0);
    return base + ex;
  }, [area, floor, finish, extras]);

  const toggleExtra = (label: string) =>
    setExtras((p) => (p.includes(label) ? p.filter((x) => x !== label) : [...p, label]));

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="font-display text-2xl font-700 tracking-tight flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A84C] text-black font-display font-semibold text-4xl mx-0 my-0" style={{letterSpacing:'0.04em'}}>
              SG
            </span>
            <span className="text-[#C9A84C] tracking-widest uppercase" style={{fontFamily:'Oswald,sans-serif', letterSpacing:'0.18em'}}>
              SVR <span style={{color:'#e8c96a'}}>group</span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-7 text-sm font-500">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-accent transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 font-600">
            Получить расчёт
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-16 min-h-[100svh] flex items-end">
        <div className="absolute inset-0">
          <img src={IMG_HERO} alt="Модульный дом в лесу" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161310] via-[#161310]/40 to-[#161310]/30" />
          <div className="absolute inset-0 grain pointer-events-none" />
        </div>
        <div className="container relative z-10 pb-16 md:pb-24 text-white">
          <div className="max-w-3xl">

            <div className="flex justify-end">
              <span className="animate-fade-up inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-600 bg-accent text-accent-foreground px-4 py-2 rounded-full">
                <Icon name="Leaf" size={14} /> Производство модульных домов
              </span>
            </div>
            <h1 className="animate-fade-up font-display leading-[0.9] md:text-8xl font-700 uppercase text-amber-50 text-7xl my-3" style={{ animationDelay: '0.1s' }}>ЖИЗНЬ<br />ВДАЛИ ОТ <span className="text-accent">ШУМА</span></h1>
            <p className="animate-fade-up mt-6 text-lg md:text-xl text-white/80 max-w-xl text-balance" style={{ animationDelay: '0.2s' }}>
              Тёплый дом для круглогодичной жизни на природе. Собираем на заводе, привозим готовым и устанавливаем за пару дней.
            </p>
            <div className="animate-fade-up flex flex-wrap gap-4 mt-9" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="rounded-full h-14 px-8 text-base bg-accent text-accent-foreground hover:bg-accent/90 font-600">
                Собрать свой дом <Icon name="ArrowRight" className="ml-1" size={18} />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-white/10 text-white border-white/30 hover:bg-white/20">
                Смотреть каталог
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-foreground text-background py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee font-display text-xl uppercase tracking-wider">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex">
              {['Энергоэффективность', 'Натуральные материалы', 'Под ключ', 'Smart-инженерия', 'Сейсмоустойчивость', 'Свой проект'].map((w) => (
                <span key={w} className="mx-6 flex items-center gap-6">
                  {w} <Icon name="Asterisk" className="text-accent" size={18} />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="container py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-accent font-600 uppercase tracking-[0.2em] text-sm">О компании</span>
            <h2 className="font-display text-5xl md:text-6xl font-700 uppercase mt-4 leading-[0.95]">
              Делаем дома, в которых хочется жить
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-balance">
              SVR group — собственное производство модульных домов полного цикла. От эскиза до заселения мы контролируем каждый этап: проектирование, заводская сборка, доставка и монтаж.
            </p>
            <div className="grid grid-cols-2 gap-5 mt-9">
              {[
                ['Factory', 'Своё производство'],
                ['Thermometer', 'Тепло до −50 °C'],
                ['Recycle', 'Эко-материалы'],
                ['Timer', 'Сдача за 60 дней'],
              ].map(([icon, t]) => (
                <div key={t} className="flex items-center gap-3 bg-secondary rounded-2xl p-4">
                  <span className="w-10 h-10 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                    <Icon name={icon} size={20} />
                  </span>
                  <span className="font-600">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={IMG_3} alt="Интерьер дома" className="rounded-3xl w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-2xl p-6 shadow-xl animate-float-slow">
              <div className="font-display text-4xl font-700">98%</div>
              <div className="text-sm font-600">клиентов рекомендуют</div>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="container pb-24 md:pb-32">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-accent font-600 uppercase tracking-[0.2em] text-sm">Каталог</span>
            <h2 className="font-display text-5xl md:text-6xl font-700 uppercase mt-3">Готовые модели</h2>
          </div>
          <Button variant="outline" className="rounded-full">Все модели <Icon name="ArrowRight" className="ml-1" size={16} /></Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {CATALOG.map((c) => (
            <article key={c.name} className="group rounded-3xl overflow-hidden bg-card border border-border">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover hover-scale" />
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-700 uppercase px-3 py-1 rounded-full">{c.tag}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-600">{c.name}</h3>
                  <span className="text-sm text-muted-foreground flex items-center gap-1"><Icon name="Maximize" size={14} />{c.area}</span>
                </div>
                <div className="flex items-center justify-between mt-5">
                  <span className="font-display text-2xl font-700">{c.price}</span>
                  <Button size="icon" className="rounded-full bg-foreground text-background group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon name="ArrowUpRight" size={18} />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONFIGURATOR */}
      <section id="config" className="bg-foreground text-background py-24 md:py-32 relative">
        <div className="absolute inset-0 grain opacity-50 pointer-events-none" />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-600 uppercase tracking-[0.2em] text-sm">Интерактивный конфигуратор</span>
            <h2 className="font-display text-5xl md:text-6xl font-700 uppercase mt-3">Соберите свой дом</h2>
            <p className="mt-4 text-background/70">Выбирайте параметры — стоимость пересчитывается мгновенно.</p>
          </div>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
            <div className="space-y-8 bg-background/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur">
              <ConfigGroup title="Площадь" step="01">
                {AREAS.map((a) => (
                  <Chip key={a.value} active={area.value === a.value} onClick={() => setArea(a)}>{a.label}</Chip>
                ))}
              </ConfigGroup>
              <ConfigGroup title="Этажность" step="02">
                {FLOORS.map((f) => (
                  <Chip key={f.value} active={floor.value === f.value} onClick={() => setFloor(f)}>{f.label}</Chip>
                ))}
              </ConfigGroup>
              <ConfigGroup title="Отделка" step="03">
                {FINISH.map((f) => (
                  <button
                    key={f.label}
                    onClick={() => setFinish(f)}
                    className={`flex-1 min-w-[140px] text-left rounded-2xl border p-4 transition-all ${
                      finish.label === f.label ? 'border-accent bg-accent text-accent-foreground' : 'border-white/15 hover:border-white/40'
                    }`}
                  >
                    <Icon name={f.icon} size={22} className="mb-2" />
                    <div className="font-display text-lg font-600">{f.label}</div>
                    <div className={`text-xs ${finish.label === f.label ? 'text-accent-foreground/70' : 'text-background/50'}`}>{f.desc}</div>
                  </button>
                ))}
              </ConfigGroup>
              <ConfigGroup title="Дополнения" step="04">
                {EXTRAS.map((e) => (
                  <button
                    key={e.label}
                    onClick={() => toggleExtra(e.label)}
                    className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-600 transition-all ${
                      extras.includes(e.label) ? 'border-accent bg-accent text-accent-foreground' : 'border-white/15 hover:border-white/40'
                    }`}
                  >
                    <Icon name={e.icon} size={16} /> {e.label}
                  </button>
                ))}
              </ConfigGroup>
            </div>

            <div className="lg:sticky lg:top-24 rounded-3xl bg-accent text-accent-foreground p-8">
              <div className="text-sm font-600 uppercase tracking-wider opacity-70">Ваш дом</div>
              <div className="mt-4 space-y-2 text-sm font-500">
                <Row k="Площадь" v={area.label} />
                <Row k="Этажность" v={floor.label} />
                <Row k="Отделка" v={finish.label} />
                <Row k="Дополнения" v={extras.length ? extras.join(', ') : '—'} />
              </div>
              <div className="my-6 h-px bg-accent-foreground/20" />
              <div className="text-sm font-600 uppercase tracking-wider opacity-70">Стоимость под ключ</div>
              <div className="font-display text-5xl font-700 mt-2 tabular-nums">{fmt(total)} ₽</div>
              <Button className="w-full mt-6 h-14 rounded-full bg-foreground text-background hover:bg-foreground/90 text-base font-600">
                Заказать этот дом <Icon name="ArrowRight" className="ml-1" size={18} />
              </Button>
              <p className="text-xs text-center mt-3 opacity-70">Финальную смету уточнит инженер</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="container py-24 md:py-32">
        <div className="mb-12">
          <span className="text-accent font-600 uppercase tracking-[0.2em] text-sm">Портфолио</span>
          <h2 className="font-display text-5xl md:text-6xl font-700 uppercase mt-3">Реализованные проекты</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <article key={p.name} className={`group relative rounded-3xl overflow-hidden ${i === 1 ? 'md:mt-12' : ''}`}>
              <img src={p.img} alt={p.name} className="w-full aspect-[3/4] object-cover hover-scale" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161310] to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                <div className="text-accent text-sm font-600 flex items-center gap-1"><Icon name="MapPin" size={14} />{p.loc}</div>
                <h3 className="font-display text-2xl font-600 mt-1">{p.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-secondary py-24 md:py-32">
        <div className="container">
          <div className="mb-12">
            <span className="text-accent font-600 uppercase tracking-[0.2em] text-sm">Услуги</span>
            <h2 className="font-display text-5xl md:text-6xl font-700 uppercase mt-3">Проектирование и строительство</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-card rounded-3xl p-7 border border-border hover:border-accent transition-colors">
                <span className="w-12 h-12 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center">
                  <Icon name={s.icon} size={24} />
                </span>
                <h3 className="font-display text-xl font-600 mt-5">{s.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="container py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-accent font-600 uppercase tracking-[0.2em] text-sm">Журнал</span>
            <h2 className="font-display text-5xl md:text-6xl font-700 uppercase mt-3">О модульном строительстве</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {BLOG.map((b) => (
            <article key={b.title} className="group rounded-3xl border border-border p-7 hover:bg-foreground hover:text-background transition-colors cursor-pointer">
              <span className="text-xs font-700 uppercase tracking-wider text-accent">{b.tag}</span>
              <h3 className="font-display text-2xl font-600 mt-4 leading-tight">{b.title}</h3>
              <div className="flex items-center justify-between mt-8 text-sm opacity-70">
                <span className="flex items-center gap-1"><Icon name="Clock" size={14} />{b.read}</span>
                <Icon name="ArrowUpRight" size={18} className="group-hover:text-accent" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA / CONTACTS */}
      <section id="contacts" className="container pb-24">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-foreground text-background p-10 md:p-16">
          <div className="absolute inset-0 grain opacity-40" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-6xl font-700 uppercase leading-[0.95]">
                Готовы начать<br /><span className="text-accent">свой проект?</span>
              </h2>
              <p className="mt-5 text-background/70 max-w-md">Оставьте контакты — инженер рассчитает стоимость и пришлёт варианты под ваш участок.</p>
              <div className="flex flex-wrap gap-6 mt-8 text-sm">
                <a href="tel:+74950000000" className="flex items-center gap-2 hover:text-accent"><Icon name="Phone" size={18} />8 800 234 37 74</a>
                <a href="mailto:hello@modhouse.ru" className="flex items-center gap-2 hover:text-accent"><Icon name="Mail" size={18} />hello@modhouse.ru</a>
              </div>
            </div>
            <div className="bg-background/5 border border-white/10 rounded-3xl p-6 backdrop-blur space-y-3">
              <input placeholder="Ваше имя" className="w-full h-12 rounded-xl bg-background/10 border border-white/10 px-4 placeholder:text-background/40 outline-none focus:border-accent" />
              <input placeholder="Телефон" className="w-full h-12 rounded-xl bg-background/10 border border-white/10 px-4 placeholder:text-background/40 outline-none focus:border-accent" />
              <Button className="w-full h-12 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 font-600">Отправить заявку</Button>
              <p className="text-xs text-center text-background/50">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A84C] text-black font-display font-700 text-3xl" style={{letterSpacing:'0.04em'}}>
              SG
            </span>
            <span className="bg-black text-[#C9A84C] px-4 py-1.5 rounded-md tracking-widest uppercase font-display text-xl font-700" style={{letterSpacing:'0.18em'}}>
              SVR <span style={{color:'#e8c96a'}}>group</span>
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a href="tel:+74950000000" className="flex items-center gap-2 hover:text-accent transition-colors font-500">
              <Icon name="Phone" size={16} /> 8 800 234 37 74
            </a>
            <span className="hidden md:block opacity-30">|</span>
            <p>© 2026 SVR group — производство модульных домов</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors"><Icon name="Send" size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Icon name="Youtube" size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Icon name="ExternalLink" size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ConfigGroup = ({ title, step, children }: { title: string; step: string; children: React.ReactNode }) => (
  <div>
    <div className="flex items-center gap-3 mb-4">
      <span className="font-display text-accent text-sm font-600">{step}</span>
      <h3 className="font-display text-xl font-600 uppercase">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-3">{children}</div>
  </div>
);

const Chip = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className={`rounded-full border px-6 py-3 font-600 transition-all ${
      active ? 'border-accent bg-accent text-accent-foreground' : 'border-white/15 hover:border-white/40'
    }`}
  >
    {children}
  </button>
);

const Row = ({ k, v }: { k: string; v: string }) => (
  <div className="flex justify-between gap-4">
    <span className="opacity-70">{k}</span>
    <span className="font-600 text-right">{v}</span>
  </div>
);

export default Index;