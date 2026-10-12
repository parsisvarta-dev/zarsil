// ZARSIL V12 - Asset switching + interactions

const ASSETS = {
  silver: {
    name: 'نقره',
    unit: 'قیمت لحظه‌ای هر گرم (تومان)',
    emoji: '🥈',
    price: '۲,۸۵۰,۰۰۰',
    change: '▲ +۲.۴٪  +۶۷,۰۰۰ امروز',
    changeClass: '',
    yesterday: '۲,۷۸۳,۰۰۰',
    high: '۲,۸۶۵,۰۰۰',
    low: '۲,۷۷۰,۰۰۰',
    monthly: '+۱۲.۶٪',
    globalTitle: 'بازار جهانی نقره',
    globalPrice: '۳۱.۲۴',
    globalChange: '▲ +۱.۸٪',
    cities: {
      ny: { p: '۳۱.۲۲', c: '+۱.۷٪' },
      lon: { p: '۳۱.۲۵', c: '+۱.۹٪' },
      tok: { p: '۳۱.۱۸', c: '+۱.۶٪' },
      dxb: { p: '۳۱.۲۷', c: '+۲.۱٪' }
    },
    chartTitle: 'نمودار قیمت نقره',
    trendTitle: 'روند بازار نقره'
  },
  gold: {
    name: 'طلا',
    unit: 'قیمت لحظه‌ای هر گرم ۱۸ عیار (تومان)',
    emoji: '🥇',
    price: '۴,۱۸۵,۰۰۰',
    change: '▲ +۱.۹٪  +۷۸,۰۰۰ امروز',
    changeClass: '',
    yesterday: '۴,۱۰۷,۰۰۰',
    high: '۴,۲۱۰,۰۰۰',
    low: '۴,۰۹۵,۰۰۰',
    monthly: '+۸.۴٪',
    globalTitle: 'بازار جهانی طلا',
    globalPrice: '۲,۶۴۸.۵۰',
    globalChange: '▲ +۰.۹٪',
    cities: {
      ny: { p: '۲,۶۴۷.۲۰', c: '+۰.۸٪' },
      lon: { p: '۲,۶۴۹.۱۰', c: '+۱.۰٪' },
      tok: { p: '۲,۶۴۵.۸۰', c: '+۰.۷٪' },
      dxb: { p: '۲,۶۵۰.۳۰', c: '+۱.۱٪' }
    },
    chartTitle: 'نمودار قیمت طلا',
    trendTitle: 'روند بازار طلا'
  },
  dollar: {
    name: 'دلار',
    unit: 'نرخ لحظه‌ای دلار آزاد (تومان)',
    emoji: '💲',
    price: '۶۸,۴۵۰',
    change: '▼ -۰.۳٪  -۲۱۰ امروز',
    changeClass: 'down',
    yesterday: '۶۸,۶۶۰',
    high: '۶۸,۹۰۰',
    low: '۶۸,۲۰۰',
    monthly: '+۲.۱٪',
    globalTitle: 'نرخ جهانی دلار',
    globalPrice: '۱.۰۰۰',
    globalChange: '— ۰.۰٪',
    cities: {
      ny: { p: '۱.۰۰۰', c: '—' },
      lon: { p: '۱.۰۰۰', c: '—' },
      tok: { p: '۱.۰۰۰', c: '—' },
      dxb: { p: '۱.۰۰۰', c: '—' }
    },
    chartTitle: 'نمودار نرخ دلار',
    trendTitle: 'روند بازار دلار'
  }
};

function updateAsset(key) {
  const data = ASSETS[key];
  if (!data) return;

  // Price card
  document.getElementById('asset-name').textContent = data.name;
  document.getElementById('asset-unit').textContent = data.unit;
  document.getElementById('price-value').textContent = data.price;
  
  const changeEl = document.getElementById('price-change');
  changeEl.textContent = data.change;
  changeEl.className = 'price-change' + (data.changeClass ? ' ' + data.changeClass : '');

  document.getElementById('meta-yesterday').textContent = data.yesterday;
  document.getElementById('meta-high').textContent = data.high;
  document.getElementById('meta-low').textContent = data.low;
  document.getElementById('meta-monthly').textContent = data.monthly;

  document.getElementById('asset-emoji').textContent = data.emoji;

  // Global
  document.getElementById('global-title').textContent = data.globalTitle;
  document.getElementById('global-price').textContent = data.globalPrice;
  document.getElementById('global-change').textContent = data.globalChange;

  document.getElementById('city-ny').textContent = data.cities.ny.p;
  document.getElementById('city-ny-c').textContent = data.cities.ny.c;
  document.getElementById('city-lon').textContent = data.cities.lon.p;
  document.getElementById('city-lon-c').textContent = data.cities.lon.c;
  document.getElementById('city-tok').textContent = data.cities.tok.p;
  document.getElementById('city-tok-c').textContent = data.cities.tok.c;
  document.getElementById('city-dxb').textContent = data.cities.dxb.p;
  document.getElementById('city-dxb-c').textContent = data.cities.dxb.c;

  // Titles
  document.getElementById('chart-title').textContent = data.chartTitle;
  document.getElementById('trend-title').textContent = data.trendTitle;
}

document.addEventListener('DOMContentLoaded', () => {
  // Sidebar switching
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      sidebarItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const asset = item.dataset.asset;
      updateAsset(asset);
    });
  });

  // Timeframe buttons
  const timeframes = document.querySelectorAll('.timeframe');
  timeframes.forEach(btn => {
    btn.addEventListener('click', () => {
      timeframes.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  console.log('ZARSIL V12 ready – asset switching active');
});
