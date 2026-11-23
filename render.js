(() => {
  "use strict";
  const c = window.SITE_CONTENT;
  if (!c) return;
  const el = (tag, value, className) => {
    const n = document.createElement(tag);
    if (value != null) n.textContent = value;
    if (className) n.className = className;
    return n;
  };
  const link = (label, url) => {
    const a = el('a', label);
    // Only allow web and mail links in configuration.
    if (/^(https?:|mailto:)/i.test(url)) a.href = url;
    return a;
  };
  const p = c.profile;
  document.title = p.name + ' | 3D Computer Vision';
  document.querySelector('h1').textContent = p.name;
  for (const [selector, value] of [['.chinese',p.chineseName],['.role',p.role],['.school',p.school],['.location',p.location]]) {
    document.querySelector(selector).textContent = value;
  }
  const identity = document.querySelector('.identity');
  if (p.photo && !/^[a-z]+:/i.test(p.photo) && !p.photo.startsWith('//')) {
    const img = el('img', null, 'identity'); img.src = p.photo; img.alt = p.name; img.style.objectFit = 'cover';
    img.onerror = () => { identity.textContent = p.initials; img.replaceWith(identity); };
    identity.replaceWith(img);
  } else identity.textContent = p.initials;
  document.querySelector('.contact').replaceChildren(link('Email','mailto:'+p.email),link('GitHub',p.github));
  const section = id => {
    const s = document.getElementById(id);
    s.replaceChildren(el('h2', c.headings[id]));
    return s;
  };
  const about = section('about');
  c.about.forEach(t => about.append(el('p',t)));
  const contact = el('p',null,'invitation'); contact.append(link(c.contactText,'mailto:'+p.email)); about.append(contact);
  const entry = item => {
    const a = el('article',null,'entry'); const body = el('div');
    if(item.title) body.append(el('h3',item.title));
    if(item.affiliation) body.append(el('p',item.affiliation,'affiliation'));
    body.append(el('p',item.body)); a.append(el('div',item.date,'meta'),body); return a;
  };
  const news=section('news'); c.news.forEach(item=>news.append(entry(item))); news.hidden=!c.news.length;
  document.querySelector('nav a[href="#news"]').hidden=!c.news.length;
  const interests=el('dl',null,'interests');
  c.interests.forEach(item=>{const d=el('div');d.append(el('dt',item.title),el('dd',item.body));interests.append(d);});
  section('research').append(interests);
  const experience=section('experience');c.experience.forEach(item=>experience.append(entry(item)));
  const honors=el('ul',null,'honors');c.honors.forEach(item=>{const li=el('li');li.append(el('strong',item.title),el('span',item.body));honors.append(li);});section('honors').append(honors);
  document.querySelector('footer').replaceChildren(el('span',p.name+' · '+p.chineseName),link('GitHub',p.github));
})();
