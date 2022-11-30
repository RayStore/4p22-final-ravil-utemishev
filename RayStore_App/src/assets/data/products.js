const products = [
	{
		name: "Accumulator Dynamic D59",
		imgUrl: "https://www.palumbochandlery.com/Files/134021/Img/22/Picture30-zoom.jpg",
		cost: "6 850₽",
		categories: "Electro eqipment",
		description:
			"VARTA Blue Dynamic - аккумуляторы с улучшенными энергетическими показателями - разработаны для автомобилей с моторами средней мощности и средним уровнем энергопотребления и обеспечивают дополнительные резервы надежности при повышенных требованиях к электрооборудованию автомобиля",
		id: "1"
	},
	{
		name: "Brake pads PN2466",
		imgUrl:
			"https://ravta.ru/upload/resizer2/2__upload_iblock_873_873908c72e9d10600d1c3b61faeb186d.jpg",
		cost: "2 124₽",
		categories: "Brake parts",
		description:
			"Состав фрикционных смесей NiBK, индивидуально подобран для каждого класса транспортных средств. Неабразивная основа, позволит вам использовать один ротор на протяжении всего срока службы вашего автомобиля.",
		id: "2"
	},
	{
		name: "SKAD Melburn 7х17",
		imgUrl: "https://static.baza.drom.ru/v/1632395978648_block",
		cost: "9 002₽",
		categories: "Wheels",
		description:
			"Колесный диск Скад Мельбурн представлен широким размерным рядом, позволяющим установить его практически на любой автомобиль. Эффектный дизайн выгодно выделяет данную модель Скад на фоне конкурентов. Внешний вид выполняет не только эстетическую функцию, но и повышает устойчивость к ударному воздействию. ",
		id: "3"
	},
	{
		name: "Engine oil 5W-30",
		imgUrl: "https://mmasla.ru/upload/iblock/870/870b8a0d1f6e9e4e167d5a02226641e6.jpg",
		cost: "3 253₽",
		categories: "Lubricant",
		description:
			"LUKOIL GENESIS ARMORTECH HK 5W-30 рекомендовано к всесезонному применению в бензиновых и дизельных двигателях (без фильтров сажевых частиц) автомобилей Kia, Hyundai и других автопроизводителей, требующих применения масел уровня API SL, ACEA A3/B3, A3/B4 и вязкости 5W-30. Может также использоваться в двигателях, требующих применения масел с допусками VW 502 00/505 00, MB 229.5 или Renault 0700/0710.",
		id: "4"
	},
	{
		name: "Night Breaker Laser",
		imgUrl: "https://content.rozetka.com.ua/goods/images/big/67020808.jpg",
		cost: "5 560₽",
		categories: "Lamps",
		description:
			"Встречайте новое поколение NIGHT BREAKER LASER – самой яркой галогенной автолампы OSRAM! Благодаря инновационным лазерным технологиям новинка обеспечивает до 150% больше яркости, если сравнивать с минимальными установленными требованиями, а тщательно продуманная структура нити накала позволила добиться дополнительной светоотдачи. Световой луч от этой лампы до 150 м длиннее, а излучаемый свет до 20% белее, по сравнению с требованиями, предусмотренными стандартом.",
		id: "5"
	},
	{
		name: "Oil_filter Ford 1883037",
		imgUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMA8HFl_SeM5MuJcK75yksr4HAhG3QGuXIKQ&usqp=CAU",
		cost: "639₽",
		categories: "Filters",
		description:
			"Фильтр масляный для двигателя марки автомобиля Форд / Ford арт.1883037, полнопоточный масляный фильтр для легкового автомобиля, обеспечит оптимальную очистку моторного масла от разнообразных примесей (сажи, остатки сгорания топлива, масло, частички металла), тем самым защитит двигатель от износа. Высококачественные материалы фильтра останавливают любую грязь и не боятся высоких температур и давления. ",
		id: "6"
	},
	{
		name: "Remain R162 ET-54",
		imgUrl: "https://cdn3.static1-sima-land.com/items/4007921/0/400.jpg?v=1571762893",
		cost: "7 785₽",
		categories: "Wheels",
		description:
			"Колесный диск Remain Volkswagen Jetta R162 R17 7J 5*112 ET54 d57,1 Алмаз-черный 16206AR",
		id: "7"
	},
	{
		name: "Frizione FR1017",
		imgUrl: "https://api.parts-soft.ru/1.1/tecdoc/images/845520623995326_0.jpg",
		cost: "5 427₽",
		categories: "Clutch",
		description:
			"Комплект сцепления без муфты для автомобилей Ford Focus II (05-) 2.0i/ Volvo C30 (06-)/S40 (04-) 1.8i/2.0i",
		id: "8"
	},
	{
		name: "X-trike X-120 ET-35",
		imgUrl: "https://cdn3.static1-sima-land.com/items/3058335/0/400.jpg?v=1527325593",
		cost: "8 275₽",
		categories: "Wheels",
		description:
			"X'trike 29079 Модель диска X-120 Диаметр диска: 17. Сверловка: 5x100. Вылет (ET): 38. Цвет диска: BK/FP. Ширина: 7,0. Модель диска X-120",
		id: "9"
	},
	{
		name: "Gearbox_oil 75W-90",
		imgUrl:
			"https://autostop-kzn.ru/wa-data/public/shop/products/71/37/13771/images/1948/1948.970.jpg",
		cost: "2 034₽",
		categories: "Lubricant",
		description:
			"ЛУКОЙЛ ТМ-5 75W-90 - высококачественное масло для механических трансмиссий с любыми типами зубчатых передач, включая гипоидные, легковых и грузовых автомобилей и другой мобильной техники. Масло производится с использованием высокоочищенных минеральных и современных синтетических базовых масел в комбинации с высокоэффективным пакетом присадок",
		id: "10"
	},
	{
		name: "КАМА ALGA НК-531",
		imgUrl: "https://koleso.ru/themes/tireshop2/images/catalog/cache/170_170/64681_78201.jpg",
		cost: "2 880₽",
		categories: "Tyres",
		description:
			"Кама Alga (HK-531) — зимняя шипованная автошина, созданная для легковых авто с посадочным диаметром 13-16 дюймов. Производится модель с 2020 года. Отличается выносливостью и безопасностью в суровых климатических условиях. Эксплуатационные характеристики Направленная автошина НК-531 относится к линейке Alga.",
		id: "11"
	},
	{
		name: "Rolling Jack LAVITA LA FJ-01",
		imgUrl: "https://cdn3.static1-sima-land.com/items/4663101/0/400.jpg?v=1604990389",
		cost: "2 744₽",
		categories: "Equipment",
		description:
			"Гидравлический подкатной домкрат 1,8Т 320 мм с резиновой проставкой порога Goodyear GY-PD-01 GY000901",
		id: "12"
	},
	{
		name: "FM-transmitter",
		imgUrl: "https://cdn3.static1-sima-land.com/items/2678626/0/400.jpg?v=1515825078",
		cost: "688₽",
		categories: "Interior",
		description:
			"FM-трансмиттер Ritmix FMT-A720. Бюджетный FM-трансмиттер с цифровым высококонтрастным дисплеем. Такой дисплей очень удобен для контроля основных параметров устройства и позволяет не отвлекаться от дороги в условиях любой освещенности, поскольку символы на нём четкие и большого размера.",
		id: "13"
	},
	{
		name: "Wax LAVR Ln1448",
		imgUrl: "https://cdn3.static1-sima-land.com/items/2040279/2/400.jpg?v=1668681106",
		cost: "402₽",
		categories: "Interior",
		description:
			"Быстрый воск LAVR – специально средство для финишной обработки лакокрасочных поверхностей автомобилей и мотоциклов. Моментально освежает цвет и придает ему сочность и блеск. Специальный состав придает водоотталкивающие свойства поверхности и надолго защищает от воздействия внешних загрязнений. Образует стойкую водоотталкивающую пленку. Защищает кузов авто от разводов после дождя, дорожной пыли и реагентов. Надолго придает лакокрасочному покрытию глянцевый блеск. Значительно ускоряет сушку автомобиля после мойки. Не требует располировывания.",
		id: "14"
	},
	{
		name: "Liquid key Grand Caratt",
		imgUrl: "https://cdn3.static1-sima-land.com/items/2487228/0/400.jpg?v=1665115719",
		cost: "145₽",
		categories: "Interior",
		description:
			"Жидкий ключ Grand Caratt для отвинчивания приржавевших деталей, 210 мл. Жидкий ключ Caratt применяется для ухода за автомобилем и другими транспортными средствами, а также в быту. ПреимуществаОбладает высокой проникающей способностью и позволяет быстро разъединить заржавевшие детали. Подходит для смазывания и защиты от коррозии большинства видов подвижных соединений. Специальный состав вытесняет влагу и смазывает обрабатываемые элементы. Образует защитную пленку на поверхности металла и защищает его от коррозии. ",
		id: "15"
	},
	{
		name: "Accumulator 60Ah",
		imgUrl: "https://cdn1.ozone.ru/s3/multimedia-b/wc250/6354086219.jpg",
		cost: "5 258₽",
		categories: "Electro eqipment",
		description:
			"Аккумулятор TITAN STANDART 6СТ-55.1 L пусковой ток 470А размеры 242x175x190 (прямая полярность) ГАРАНТИЯ 2 года аккумулятор титан один из высококачественных продуктов представленных на российском рынке автомобильных аккумуляторов, выпускается на заводе TUBOR в Нижнем Новгороде. Испанское оборудование и производственные линии обеспечивают высочайшее качество аккумулятора ТИТАN. Аккумуляторы TITAN обладают повышенными стартерными характеристиками и более долгим сроком службы, низким процентом брака, данные аккумуляторы поставляются на экспорт.",
		id: "16"
	},
	{
		name: "Oil 0W-20",
		imgUrl:
			"https://cdn.vseinstrumenti.ru/images/goods/oborudovanie-dlya-avtoservisa-i-garazha/avtomobilnye-masla-i-smazki/2042312/1200x800/64646352.jpg",
		cost: "2 869₽",
		categories: "Lubricant",
		description:
			"Масло G-Energy Synthetic Far East 0W-20 4л 253142536 – энергосберегающее синтетическое моторное масло на основе базовых компонентов G-Base, предназначенное для бензиновых двигателей японских и корейских автомобилей. Обеспечивает экономию топлива, максимальную защиту и эффективную работу двигателя во всём диапазоне оборотов в различных скоростных режимах. Рекомендуется для применения в гибридных автомобилях.",
		id: "17"
	},
	{
		name: "Bottle Jack",
		imgUrl: "https://cdn3.static1-sima-land.com/items/1499990/0/400.jpg?v=0",
		cost: "899₽",
		categories: "Equipment",
		description:
			"Поднятие грузов при помощи бутылочного домкрата T20212 производится с помощью специального рычага. Высота подъема регулируется винтом плунжера. Для фиксирования груза рекомендуется использовать специальные подставки.",
		id: "18"
	},
	{
		name: "КАМА Irbis",
		imgUrl: "https://koleso.ru/themes/tireshop2/images/catalog/cache/170_170/9787_78193.jpg",
		cost: "2 870₽",
		categories: "Tyres",
		description:
			"Кама 505 185/60 R14 82T — зимняя шипованная модель для легковых автомобилей. Показывает хорошую управляемость на зимней дороге. Рассчитана на спокойную езду без резкого маневрирования. Наилучшие показатели разгона, торможения и маневрирования достигаются на очищенной или обработанной реагентами дороге.",
		id: "19"
	},
	{
		name: "Compressor",
		imgUrl:
			"https://pubimg.nodacdn.net/images/preview/10905ff29a50a2acc94b9a78ec118ddd66b4b90002.jpeg",
		cost: "600₽",
		categories: "Equipment",
		description:
			"Автомобильный компрессор предназначен для получения сжатого воздуха в дорожных условиях. Компрессор модели SMART O обладает САМЫМИ КОМПАКТНЫМИ размерами, среди всех компрессоров на рынке. Его можно хранить даже в бардачке. Несмотря на компактный размер, изделие обладает производительностью до 12 л/мин и максимальным давлением в 7 Атм (кг/см2). В данном компрессоре используется конструкция с плавающим шатуном, что увеличивает ресурс работы в 2-3 раза, по сравнению с более мощными металлическими компрессорами",
		id: "20"
	},
	{
		name: "Compressor",
		imgUrl:
			"https://pubimg.nodacdn.net/images/preview/11919dd1436b5b879c9b8ed57e1f6996f2c9410002.jpeg",
		cost: "1 450₽",
		categories: "Equipment",
		description:
			"Компрессор для шин Azard Торнадо-AC 580 имеет повышенную систему безопасности. Плавкий предохранитель защищает компрессор от перегрева. Благодаря амортизационной опоре, Azard Торнадо-AC 580 будет надежно стоять на любой поверхности. Корпус сделан из нержавеющего металла с прорезиненными и пластиковыми элементами. Беспрерывно Azard Торнадо-AC 580 может работать не более 20 минут. Компрессор этой модели может похвастаться наличием термодатчика, позволяющего контролировать температуру.",
		id: "21"
	},
	{
		name: "Extinguisher",
		imgUrl: "https://airline.su/upload/iblock/369/5463d6d0e473df41c52c31e1b0f6e1f2.jpg",
		cost: "750₽",
		categories: "Equipment",
		description:
			"Порошковый огнетушитель Airline ОП4 AO-OP4 – это удобное устройство для устранения возгораний жидкостей и газов. Для контроля давления внутри ана головке огнетушителя предусмотрен манометр. Модель имеет возможность перезарядки. Срок службы составляет 10 лет.",
		id: "22"
	},
	{
		name: "Cam Airline",
		imgUrl:
			"https://img.exist.ru/img.jpg?Key=bf99a3df-0a43-411b-a5ae-b14991484dab_304&Size=250x200&MethodType=36",
		cost: "997₽",
		categories: "Equipment",
		description:
			"Камера заднего вида Airline ACAC005, врезная, прямая. Очень облегчает парковку задним ходом. Подойдет для начинающих и неуверенных водителей совершать маневры на парковке и в узких проездах. Камера заднего вида подойдет к любому автомобилю и не будет заметна на корпусе. Аксессуар легко монтируется на любой автомобиль.",
		id: "23"
	},
	{
		name: "Sparking plug",
		imgUrl: "https://www.autocompas.ru/images/_big/81/16557728.webp",
		cost: "70₽",
		categories: "Electro eqipment",
		description:
			"Свеча зажигания Beru Артикул: Z347 E.A.: 0,7 мм Длина резьбы: 19 мм Момент затяжки: 25 Nm Размер резьбы: M14x1,25 Техника присоединения: SAE Ширина зева гаечного ключа: 16 mm Номер технической информации: 14 F-5 DPURS2 Провод зажигания: 1 электрод массы.",
		id: "24"
	}
];

export default products;
