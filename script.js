// ==================== БАЗА ДАННЫХ РЕЦЕПТОВ ====================
const recipes = {
  "ЗАВТРАКИ": [
    { id: "1.1", name: "Классическая яичница-глазунья", time: "10 минут", servings: 2, calories: 220,
      ingredients: { "Яйца куриные": "4 шт.", "Масло сливочное": "20 г", "Соль": "по вкусу" },
      steps: ["Разогрейте сковороду.", "Разбейте яйца.", "Готовьте 3–4 минуты."] },
    { id: "1.2", name: "Овсяная каша на молоке с ягодами", time: "20 минут", servings: 2, calories: 320,
      ingredients: { "Овсяные хлопья": "100 г", "Молоко": "400 мл", "Ягоды": "100 г" },
      steps: ["Влейте молоко в кастрюлю.", "Добавьте хлопья.", "Варите 5–7 минут."] },
    { id: "1.3", name: "Сырники из творога", time: "30 минут", servings: 3, calories: 280,
      ingredients: { "Творог": "400 г", "Яйцо": "1 шт.", "Мука": "3 ст. ложки" },
      steps: ["Протрите творог.", "Добавьте яйцо и муку.", "Обжарьте с двух сторон."] },
    { id: "1.4", name: "Омлет с овощами и сыром", time: "15 минут", servings: 2, calories: 260,
      ingredients: { "Яйца": "5 шт.", "Молоко": "50 мл", "Сыр": "70 г" },
      steps: ["Нарежьте овощи.", "Обжарьте овощи.", "Залейте яйцами и готовьте."] },
    { id: "1.5", name: "Панкейки с бананом и шоколадом", time: "25 минут", servings: 3, calories: 340,
      ingredients: { "Мука": "200 г", "Молоко": "200 мл", "Банан": "1 шт." },
      steps: ["Разомните банан.", "Смешайте ингредиенты.", "Жарьте по 2 минуты."] },
    { id: "1.6", name: "Тост с авокадо и яйцом пашот", time: "15 минут", servings: 2, calories: 310,
      ingredients: { "Хлеб": "4 ломтика", "Авокадо": "1 шт.", "Яйца": "2 шт." },
      steps: ["Вскипятите воду с уксусом.", "Сварите яйца пашот.", "Соберите тост."] }
  ],
  "ОБЕД (Первые блюда)": [
    { id: "2.1.1", name: "Борщ классический", time: "1 час 40 минут", servings: 6, calories: 210,
      ingredients: { "Мясо": "500 г", "Свёкла": "2 шт.", "Капуста": "300 г" },
      steps: ["Отварите мясо.", "Добавьте овощи.", "Варите до готовности."] },
    { id: "2.1.2", name: "Щи из свежей капусты", time: "1 час 20 минут", servings: 5, calories: 180,
      ingredients: { "Говядина": "500 г", "Капуста": "400 г", "Картофель": "3 шт." },
      steps: ["Сварите бульон.", "Добавьте капусту.", "Варите 15 минут."] },
    { id: "2.1.3", name: "Куриный суп с вермишелью", time: "50 минут", servings: 4, calories: 160,
      ingredients: { "Курица": "500 г", "Вермишель": "100 г", "Картофель": "2 шт." },
      steps: ["Отварите курицу.", "Добавьте картофель.", "Всыпьте вермишель."] },
    { id: "2.1.4", name: "Солянка мясная сборная", time: "1 час 30 минут", servings: 6, calories: 250,
      ingredients: { "Говядина": "300 г", "Колбаса": "200 г", "Огурцы": "4 шт." },
      steps: ["Сварите бульон.", "Обжарьте лук.", "Добавьте всё в бульон."] },
    { id: "2.1.5", name: "Грибной крем-суп", time: "45 минут", servings: 4, calories: 200,
      ingredients: { "Шампиньоны": "500 г", "Сливки": "200 мл", "Лук": "1 шт." },
      steps: ["Обжарьте грибы.", "Влейте бульон.", "Пробейте блендером."] },
    { id: "2.1.6", name: "Уха по-домашнему", time: "1 час", servings: 5, calories: 170,
      ingredients: { "Рыба": "800 г", "Картофель": "4 шт.", "Пшено": "3 ст. ложки" },
      steps: ["Сварите рыбу.", "Добавьте овощи.", "Варите 20 минут."] }
  ],
  "ОБЕД (Вторые блюда)": [
    { id: "2.2.1", name: "Картофельное пюре с котлетами", time: "50 минут", servings: 4, calories: 420,
      ingredients: { "Картофель": "1 кг", "Фарш": "600 г", "Лук": "1 шт." },
      steps: ["Отварите картофель.", "Сделайте пюре.", "Обжарьте котлеты."] },
    { id: "2.2.2", name: "Плов с курицей", time: "1 час", servings: 5, calories: 450,
      ingredients: { "Рис": "500 г", "Курица": "700 г", "Морковь": "3 шт." },
      steps: ["Обжарьте лук и мясо.", "Добавьте морковь.", "Всыпьте рис."] },
    { id: "2.2.3", name: "Макароны по-флотски", time: "30 минут", servings: 4, calories: 430,
      ingredients: { "Макароны": "400 г", "Фарш": "500 г", "Лук": "1 шт." },
      steps: ["Отварите макароны.", "Обжарьте фарш.", "Смешайте."] },
    { id: "2.2.4", name: "Гречка с грибами и луком", time: "40 минут", servings: 4, calories: 280,
      ingredients: { "Гречка": "300 г", "Шампиньоны": "300 г", "Лук": "2 шт." },
      steps: ["Сварите гречку.", "Обжарьте грибы.", "Смешайте."] },
    { id: "2.2.5", name: "Куриное филе в сливочном соусе", time: "35 минут", servings: 4, calories: 380,
      ingredients: { "Филе куриное": "600 г", "Сливки": "200 мл", "Лук": "1 шт." },
      steps: ["Обжарьте филе.", "Добавьте лук.", "Влейте сливки."] },
    { id: "2.2.6", name: "Запечённая свинина с овощами", time: "1 час 30 минут", servings: 5, calories: 470,
      ingredients: { "Свинина": "1 кг", "Картофель": "700 г", "Морковь": "2 шт." },
      steps: ["Натрите мясо специями.", "Нарежьте овощи.", "Запекайте 1 час."] }
  ],
  "ОБЕД (Десерты)": [
    { id: "2.3.1", name: "Шарлотка с яблоками", time: "50 минут", servings: 8, calories: 240,
      ingredients: { "Яйца": "4 шт.", "Сахар": "200 г", "Мука": "200 г" },
      steps: ["Взбейте яйца.", "Просейте муку.", "Выпекайте 40 минут."] },
    { id: "2.3.2", name: "Тирамису классический", time: "40 минут + 4 часа", servings: 6, calories: 390,
      ingredients: { "Печенье": "200 г", "Маскарпоне": "500 г", "Кофе": "300 мл" },
      steps: ["Сварите кофе.", "Взбейте крем.", "Уложите слоями."] },
    { id: "2.3.3", name: "Панкейки с мёдом", time: "25 минут", servings: 4, calories: 290,
      ingredients: { "Мука": "200 г", "Молоко": "250 мл", "Мёд": "для подачи" },
      steps: ["Смешайте ингредиенты.", "Жарьте панкейки.", "Подавайте с мёдом."] },
    { id: "2.3.4", name: "Чизкейк без выпечки", time: "30 минут + 4 часа", servings: 8, calories: 350,
      ingredients: { "Печенье": "300 г", "Творожный сыр": "500 г", "Сливки": "200 мл" },
      steps: ["Измельчите печенье.", "Взбейте сыр.", "Уберите в холодильник."] },
    { id: "2.3.5", name: "Медовик классический", time: "1 час 30 минут", servings: 10, calories: 420,
      ingredients: { "Мука": "400 г", "Мёд": "3 ст. ложки", "Сметана": "800 г" },
      steps: ["Замесите тесто.", "Испеките коржи.", "Промажьте кремом."] },
    { id: "2.3.6", name: "Наполеон с заварным кремом", time: "2 часа", servings: 10, calories: 450,
      ingredients: { "Мука": "500 г", "Масло": "400 г", "Молоко": "1 л" },
      steps: ["Раскатайте коржи.", "Сварите крем.", "Промажьте коржи."] }
  ],
  "ПОЛДНИК": [
    { id: "3.1", name: "Творожная запеканка", time: "50 минут", servings: 6, calories: 280,
      ingredients: { "Творог": "500 г", "Яйца": "2 шт.", "Изюм": "100 г" },
      steps: ["Смешайте ингредиенты.", "Выложите в форму.", "Выпекайте 35 минут."] },
    { id: "3.2", name: "Банановый смузи", time: "5 минут", servings: 2, calories: 180,
      ingredients: { "Банан": "2 шт.", "Молоко": "300 мл", "Мёд": "1 ст. ложка" },
      steps: ["Нарежьте бананы.", "Взбейте в блендере."] },
    { id: "3.3", name: "Бутерброды с лососем", time: "10 минут", servings: 2, calories: 330,
      ingredients: { "Хлеб": "4 ломтика", "Авокадо": "1 шт.", "Лосось": "150 г" },
      steps: ["Обжарьте хлеб.", "Разомните авокадо.", "Выложите лосось."] },
    { id: "3.4", name: "Овсяное печенье", time: "30 минут", servings: 12, calories: 150,
      ingredients: { "Овсяные хлопья": "200 г", "Масло": "100 г", "Сахар": "100 г" },
      steps: ["Смешайте всё.", "Сформируйте печенье.", "Выпекайте 15 минут."] },
    { id: "3.5", name: "Фруктовый салат", time: "10 минут", servings: 3, calories: 160,
      ingredients: { "Яблоко": "1 шт.", "Банан": "1 шт.", "Йогурт": "200 мл" },
      steps: ["Нарежьте фрукты.", "Заправьте йогуртом."] },
    { id: "3.6", name: "Горячий шоколад", time: "10 минут", servings: 2, calories: 290,
      ingredients: { "Молоко": "400 мл", "Шоколад": "100 г", "Сахар": "1 ст. ложка" },
      steps: ["Нагрейте молоко.", "Растворите шоколад."] }
  ],
  "УЖИН": [
    { id: "4.1", name: "Запечённая рыба с овощами", time: "45 минут", servings: 2, calories: 310,
      ingredients: { "Рыба": "2 шт.", "Кабачок": "1 шт.", "Лимон": "½ шт." },
      steps: ["Нарежьте овощи.", "Подготовьте рыбу.", "Запекайте 30 минут."] },
    { id: "4.2", name: "Куриные бёдра с картофелем", time: "1 час", servings: 4, calories: 460,
      ingredients: { "Бёдра куриные": "800 г", "Картофель": "800 г", "Паприка": "1 ст. ложка" },
      steps: ["Замаринуйте курицу.", "Нарежьте картофель.", "Запекайте 45 минут."] },
    { id: "4.3", name: "Овощное рагу с фасолью", time: "40 минут", servings: 4, calories: 230,
      ingredients: { "Фасоль": "400 г", "Кабачок": "1 шт.", "Помидор": "3 шт." },
      steps: ["Нарежьте овощи.", "Обжарьте лук.", "Тушите 20 минут."] },
    { id: "4.4", name: "Лёгкий салат с тунцом", time: "15 минут", servings: 2, calories: 260,
      ingredients: { "Тунец": "1 банка", "Салат": "100 г", "Помидор": "2 шт." },
      steps: ["Нарежьте овощи.", "Смешайте с тунцом."] },
    { id: "4.5", name: "Куриное филе на гриле", time: "30 минут", servings: 2, calories: 340,
      ingredients: { "Филе куриное": "400 г", "Кабачок": "1 шт.", "Перец": "1 шт." },
      steps: ["Замаринуйте филе.", "Обжарьте филе.", "Обжарьте овощи."] },
    { id: "4.6", name: "Творожная запеканка с зеленью", time: "40 минут", servings: 3, calories: 270,
      ingredients: { "Творог": "400 г", "Яйца": "2 шт.", "Зелень": "30 г" },
      steps: ["Смешайте творог и яйца.", "Добавьте зелень.", "Выпекайте 30 минут."] }
  ]
};

// ==================== МОИ РЕЦЕПТЫ (localStorage) ====================
function loadUserRecipes() {
  try { return JSON.parse(localStorage.getItem("myRecipes")) || []; }
  catch { return []; }
}
function saveUserRecipes(list) { localStorage.setItem("myRecipes", JSON.stringify(list)); }

// ==================== РЕНДЕР КАТЕГОРИЙ ====================
let currentCategory = "ЗАВТРАКИ";

function renderCategories() {
  const box = document.getElementById("categories");
  box.innerHTML = "";
  const names = Object.keys(recipes).concat(["МОИ РЕЦЕПТЫ", "🎲 СЛУЧАЙНЫЙ РЕЦЕПТ"]);
  names.forEach(name => {
    const btn = document.createElement("button");
    btn.className = "cat-btn" + (name === currentCategory ? " active" : "");
    btn.textContent = name;
    btn.onclick = () => { currentCategory = name; renderCategories(); renderContent(); };
    box.appendChild(btn);
  });
}

// ==================== РЕНДЕР СОДЕРЖИМОГО ====================
function recipeCard(r, category) {
  return `<div class="card" onclick="showRecipe('${category}', ${recipes[category] ? recipes[category].indexOf(r) : -1})">
    <h3>${r.name}</h3>
    <div class="meta"><span>⏱️ ${r.time}</span><span>🔥 ~${r.calories} ккал</span><span>👥 ${r.servings}</span></div>
  </div>`;
}

function renderContent() {
  const box = document.getElementById("content");

  if (currentCategory === "🎲 СЛУЧАЙНЫЙ РЕЦЕПТ") {
    box.innerHTML = "";
    const catNames = Object.keys(recipes).concat(loadUserRecipes().length ? ["МОИ РЕЦЕПТЫ"] : []);
    const cat = catNames[Math.floor(Math.random() * catNames.length)];
    const list = cat === "МОИ РЕЦЕПТЫ" ? loadUserRecipes() : recipes[cat];
    const r = list[Math.floor(Math.random() * list.length)];
    box.innerHTML = `<h2 class="section-title">🎲 Случайный выбор</h2>` + recipeCard(r, cat);
    return;
  }

  const list = currentCategory === "МОИ РЕЦЕПТЫ" ? loadUserRecipes() : recipes[currentCategory];

  if (!list || !list.length) {
    box.innerHTML = `<p class="empty">В этой категории пока нет рецептов. Нажмите «+», чтобы добавить свой 🍳</p>`;
    return;
  }

  box.innerHTML = `<h2 class="section-title">${currentCategory} (${list.length})</h2>
    <div class="cards">${list.map(r => recipeCard(r, currentCategory)).join("")}</div>`;
}

// ==================== ПОИСК ====================
document.getElementById("searchInput").addEventListener("input", e => {
  const q = e.target.value.trim().toLowerCase();
  const box = document.getElementById("content");
  if (!q) { renderContent(); return; }

  const results = [];
  Object.keys(recipes).forEach(cat => {
    recipes[cat].forEach(r => {
      if (r.name.toLowerCase().includes(q) ||
          Object.keys(r.ingredients).some(i => i.toLowerCase().includes(q)))
        results.push({ cat, r });
    });
  });
  loadUserRecipes().forEach(r => {
    if (r.name.toLowerCase().includes(q) ||
        r.ingredients.some(i => i.toLowerCase().includes(q)))
      results.push({ cat: "МОИ РЕЦЕПТЫ", r });
  });

  if (!results.length) {
    box.innerHTML = `<p class="empty">Ничего не найдено 🔍</p>`;
    return;
  }
  box.innerHTML = `<h2 class="section-title">Найдено: ${results.length}</h2>
    <div class="cards">${results.map(x => searchCard(x.r, x.cat)).join("")}</div>`;
});

// Для результатов поиска передаём объект напрямую через индекс результата
let searchResults = [];
function searchCard(r, cat) { return recipeCard(r, cat); }

// ==================== ПРОСМОТР РЕЦЕПТА ====================
function showRecipe(category, index) {
  let r;
  if (category === "МОИ РЕЦЕПТЫ") r = loadUserRecipes()[index];
  else r = recipes[category][index];
  if (!r) return;
  renderRecipe(r);
}

function renderRecipe(r) {
  const ings = r.ingredients instanceof Object && !Array.isArray(r.ingredients)
    ? Object.entries(r.ingredients).map(([k, v]) => `<li>${k}: ${v}</li>`).join("")
    : r.ingredients.map(i => `<li>${i}: по вкусу</li>`).join("");

  document.getElementById("recipeBody").innerHTML = `
    <div class="recipe-header">
      <h2>🍽️ ${r.name}</h2>
      <div class="badges">
        <span class="badge">⏱️ ${r.time}</span>
        <span class="badge">👥 Порции: ${r.servings}</span>
        <span class="badge">🔥 ~${r.calories} ккал/порция</span>
      </div>
    </div>
    <div class="recipe-body">
      <h3>📝 Ингредиенты</h3>
      <ul>${ings}</ul>
      <h3>👨‍🍳 Приготовление</h3>
      <ol>${r.steps.map(s => `<li>${s}</li>`).join("")}</ol>
    </div>
    <button class="btn-download" onclick="downloadRecipe(this)">⬇️ Скачать рецепт</button>`;

  // запоминаем текущий рецепт для скачивания
  document.getElementById("recipeBody").dataset.recipe = JSON.stringify(r);
  document.getElementById("recipeModal").classList.remove("hidden");
}

function downloadRecipe(btn) {
  const r = JSON.parse(btn.closest("#recipeBody").dataset.recipe);
  const lines = [
    `РЕЦЕПТ: ${r.name}`,
    `Время: ${r.time}`,
    `Порции: ${r.servings}`,
    `Калории: ${r.calories} ккал`,
    "ИНГРЕДИЕНТЫ:",
    ...(Array.isArray(r.ingredients)
      ? r.ingredients.map(i => `- ${i}: по вкусу`)
      : Object.entries(r.ingredients).map(([k, v]) => `- ${k}: ${v}`)),
    "",
    "ПРИГОТОВЛЕНИЕ:",
    ...r.steps.map((s, i) => `${i + 1}. ${s}`)
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${r.name}.txt`;
  a.click();
  URL.revokeObjectURL(a.href);
}

function closeRecipe() { document.getElementById("recipeModal").classList.add("hidden"); }

// ==================== ДОБАВЛЕНИЕ РЕЦЕПТА ====================
function openAdd() { document.getElementById("addModal").classList.remove("hidden"); }
function closeAdd() { document.getElementById("addModal").classList.add("hidden"); }

document.getElementById("addForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("rName").value.trim();
  const time = document.getElementById("rTime").value.trim();
  const ings = document.getElementById("rIng").value.split(",").map(s => s.trim()).filter(Boolean);
  const steps = document.getElementById("rSteps").value.split(".").map(s => s.trim()).filter(Boolean);

  const list = loadUserRecipes();
  list.push({ id: `user.${list.length + 1}`, name, time, servings: 1, calories: 0, ingredients: ings, steps });
  saveUserRecipes(list);

  closeAdd();
  e.target.reset();
  currentCategory = "МОИ РЕЦЕПТЫ";
  renderCategories();
  renderContent();
});

// Закрытие модалок по клику на фон
document.querySelectorAll(".modal").forEach(m =>
  m.addEventListener("click", e => { if (e.target === m) m.classList.add("hidden"); }));

// ==================== СТАРТ ====================
renderCategories();
renderContent();
